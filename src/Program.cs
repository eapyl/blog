﻿using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using blg.Application;
using blg.Infrastructure;
using DryIoc;
using FluentValidation;
using Markdig;
using MediatR;
using MediatR.Pipeline;

namespace blg
{
    class Program
    {
        static async Task Main(string[] args) =>
            await SetUpMediator().Send(
                new CreateBlogCommand(args.Length > 0 ? args[0] :
                    Directory.GetCurrentDirectory()));

        private static IMediator SetUpMediator()
        {
            var container = new Container(rules => rules.WithoutThrowOnRegisteringDisposableTransient());

            container.RegisterDelegate(r => new MarkdownPipelineBuilder().UseAdvancedExtensions().Build());
            container.Register<IFileSystem, FileSystem>();

            container.RegisterMany(new []{ typeof(Mediator).Assembly }, t => t.IsInterface);
            container.RegisterDelegate<ServiceFactory>(r => r.Resolve);

            container.RegisterMany(new []{ typeof(Program).Assembly }, t => t.IsInterface);

            container.Register(typeof(IPipelineBehavior<GetTemplateCommand, string>), typeof(CacheBehaviour),
                reuse: Reuse.Singleton, ifAlreadyRegistered: IfAlreadyRegistered.Replace);

            return container.Resolve<IMediator>();
        }
    }
}
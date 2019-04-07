/*!
 * Fuse.js v3.3.0 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Fuse",[],t):"object"==typeof exports?exports.Fuse=t():n.Fuse=t()}(this,function(){return function(n){function t(r){if(i[r])return i[r].exports;var u=i[r]={i:r,l:!1,exports:{}};return n[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var i={};return t.m=n,t.c=i,t.i=function(n){return n},t.d=function(n,i,r){t.o(n,i)||Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(i,"a",i),i},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=8)}([function(n){"use strict";n.exports=function(n){return Array.isArray?Array.isArray(n):"[object Array]"===Object.prototype.toString.call(n)}},function(n,t,i){"use strict";function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function");}var u=function(){function n(n,t){for(var i,r=0;r<t.length;r++)i=t[r],i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}return function(t,i,r){return i&&n(t.prototype,i),r&&n(t,r),t}}(),f=i(5),e=i(7),o=i(4),s=function(){function n(t,i){var u=i.location,y=void 0===u?0:u,f=i.distance,p=void 0===f?100:f,e=i.threshold,w=void 0===e?.6:e,s=i.maxPatternLength,h=void 0===s?32:s,c=i.isCaseSensitive,b=void 0!==c&&c,l=i.tokenSeparator,k=void 0===l?/ +/g:l,a=i.findAllMatches,d=void 0!==a&&a,v=i.minMatchCharLength,g=void 0===v?1:v;r(this,n);this.options={location:y,distance:p,threshold:w,maxPatternLength:h,isCaseSensitive:b,tokenSeparator:k,findAllMatches:d,minMatchCharLength:g};this.pattern=this.options.isCaseSensitive?t:t.toLowerCase();this.pattern.length<=h&&(this.patternAlphabet=o(this.pattern))}return u(n,[{key:"search",value:function(n){if(this.options.isCaseSensitive||(n=n.toLowerCase()),this.pattern===n)return{isMatch:!0,score:0,matchedIndices:[[0,n.length-1]]};var i=this.options,r=i.maxPatternLength,u=i.tokenSeparator;if(this.pattern.length>r)return f(n,this.pattern,u);var t=this.options,o=t.location,s=t.distance,h=t.threshold,c=t.findAllMatches,l=t.minMatchCharLength;return e(n,this.pattern,this.patternAlphabet,{location:o,distance:s,threshold:h,findAllMatches:c,minMatchCharLength:l})}}]),n}();n.exports=s},function(n,t,i){"use strict";var r=i(0),u=function n(t,i,u){var f,o,c;if(i){var s=i.indexOf("."),h=i,e=null;if(-1!==s&&(h=i.slice(0,s),e=i.slice(s+1)),f=t[h],null!==f&&void 0!==f)if(e||"string"!=typeof f&&"number"!=typeof f)if(r(f))for(o=0,c=f.length;o<c;o+=1)n(f[o],e,u);else e&&n(f,e,u);else u.push(f.toString())}else u.push(t);return u};n.exports=function(n,t){return u(n,t,[])}},function(n){"use strict";n.exports=function(){for(var f,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=[],n=-1,u=-1,t=0,o=i.length;t<o;t+=1)f=i[t],f&&-1===n?n=t:f||-1===n||(u=t-1,u-n+1>=e&&r.push([n,u]),n=-1);return i[t-1]&&t-n>=e&&r.push([n,t-1]),r}},function(n){"use strict";n.exports=function(n){for(var t,i={},r=n.length,u=0;u<r;u+=1)i[n.charAt(u)]=0;for(t=0;t<r;t+=1)i[n.charAt(t)]|=1<<r-t-1;return i}},function(n){"use strict";n.exports=function(n,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,h=new RegExp(t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&").replace(s,"|")),r=n.match(h),u=!!r,e=[],i,o,f;if(u)for(i=0,o=r.length;i<o;i+=1)f=r[i],e.push([n.indexOf(f),f.length-1]);return{score:u?.5:1,isMatch:u,matchedIndices:e}}},function(n){"use strict";n.exports=function(n,t){var i=t.errors,h=void 0===i?0:i,r=t.currentLocation,c=void 0===r?0:r,u=t.expectedLocation,l=void 0===u?0:u,f=t.distance,e=void 0===f?100:f,o=h/n.length,s=Math.abs(l-c);return e?o+s/e:s?1:o}},function(n,t,i){"use strict";var r=i(6),u=i(3);n.exports=function(n,t,i,f){for(var ht,ct,p,s,o,w,rt,ut=f.location,at=void 0===ut?0:ut,ft=f.distance,v=void 0===ft?100:ft,et=f.threshold,vt=void 0===et?.6:et,ot=f.findAllMatches,yt=void 0!==ot&&ot,st=f.minMatchCharLength,pt=void 0===st?1:st,e=at,b=n.length,h=vt,c=n.indexOf(t,e),y=t.length,nt=[],tt=0;tt<b;tt+=1)nt[tt]=0;-1!==c&&(ht=r(t,{errors:0,currentLocation:c,expectedLocation:e,distance:v}),(h=Math.min(ht,h),-1!==(c=n.lastIndexOf(t,e+y)))&&(ct=r(t,{errors:0,currentLocation:c,expectedLocation:e,distance:v}),h=Math.min(ct,h)));c=-1;for(var k=[],d=1,g=y+b,wt=1<<y-1,l=0;l<y;l+=1){for(p=0,s=g;p<s;)r(t,{errors:l,currentLocation:e+s,expectedLocation:e,distance:v})<=h?p=s:g=s,s=Math.floor((g-p)/2+p);g=s;var lt=Math.max(1,e-s+1),it=yt?b:Math.min(e+s,b)+y,a=Array(it+2);for(a[it+1]=(1<<l)-1,o=it;o>=lt;o-=1)if(w=o-1,rt=i[n.charAt(w)],rt&&(nt[w]=1),a[o]=(a[o+1]<<1|1)&rt,0!==l&&(a[o]|=(k[o+1]|k[o])<<1|1|k[o+1]),a[o]&wt&&(d=r(t,{errors:l,currentLocation:w,expectedLocation:e,distance:v}))<=h){if(h=d,(c=w)<=e)break;lt=Math.max(1,2*e-c)}if(r(t,{errors:l+1,currentLocation:e,expectedLocation:e,distance:v})>h)break;k=a}return{isMatch:c>=0,score:0===d?.001:d,matchedIndices:u(nt,pt)}}},function(n,t,i){"use strict";function u(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function");}var f=function(){function n(n,t){for(var i,r=0;r<t.length;r++)i=t[r],i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}return function(t,i,r){return i&&n(t.prototype,i),r&&n(t,r),t}}(),r=i(1),e=i(2),o=i(0),s=function(){function n(t,i){var r=i.location,it=void 0===r?0:r,f=i.distance,rt=void 0===f?100:f,o=i.threshold,ut=void 0===o?.6:o,s=i.maxPatternLength,ft=void 0===s?32:s,h=i.caseSensitive,et=void 0!==h&&h,c=i.tokenSeparator,ot=void 0===c?/ +/g:c,l=i.findAllMatches,st=void 0!==l&&l,a=i.minMatchCharLength,ht=void 0===a?1:a,v=i.id,ct=void 0===v?null:v,y=i.keys,lt=void 0===y?[]:y,p=i.shouldSort,at=void 0===p||p,w=i.getFn,vt=void 0===w?e:w,b=i.sortFn,yt=void 0===b?function(n,t){return n.score-t.score}:b,k=i.tokenize,pt=void 0!==k&&k,d=i.matchAllTokens,wt=void 0!==d&&d,g=i.includeMatches,bt=void 0!==g&&g,nt=i.includeScore,kt=void 0!==nt&&nt,tt=i.verbose,dt=void 0!==tt&&tt;u(this,n);this.options={location:it,distance:rt,threshold:ut,maxPatternLength:ft,isCaseSensitive:et,tokenSeparator:ot,findAllMatches:st,minMatchCharLength:ht,id:ct,keys:lt,includeMatches:bt,includeScore:kt,shouldSort:at,getFn:vt,sortFn:yt,verbose:dt,tokenize:pt,matchAllTokens:wt};this.setCollection(t)}return f(n,[{key:"setCollection",value:function(n){return this.list=n,n}},{key:"search",value:function(n){this._log('---------\nSearch pattern: "'+n+'"');var i=this._prepareSearchers(n),u=i.tokenSearchers,f=i.fullSearcher,r=this._search(u,f),e=r.weights,t=r.results;return this._computeScore(e,t),this.options.shouldSort&&this._sort(t),this._format(t)}},{key:"_prepareSearchers",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=[];if(this.options.tokenize)for(var u=t.split(this.options.tokenSeparator),n=0,f=u.length;n<f;n+=1)i.push(new r(u[n],this.options));return{tokenSearchers:i,fullSearcher:new r(t,this.options)}}},{key:"_search",value:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=arguments[1],i=this.list,h={},r=[],t,c,n;if("string"==typeof i[0]){for(t=0,c=i.length;t<c;t+=1)this._analyze({key:"",value:i[t],record:t,index:t},{resultMap:h,results:r,tokenSearchers:o,fullSearcher:s});return{weights:null,results:r}}for(var f={},u=0,a=i.length;u<a;u+=1)for(var l=i[u],e=0,v=this.options.keys.length;e<v;e+=1){if(n=this.options.keys[e],"string"!=typeof n){if(f[n.name]={weight:1-n.weight||1},n.weight<=0||n.weight>1)throw new Error("Key weight has to be > 0 and <= 1");n=n.name}else f[n]={weight:1};this._analyze({key:n,value:this.options.getFn(l,n),record:l,index:u},{resultMap:h,results:r,tokenSearchers:o,fullSearcher:s})}return{weights:f,results:r}}},{key:"_analyze",value:function(n,t){var e=n.key,rt=n.arrayIndex,ut=void 0===rt?-1:rt,i=n.value,ft=n.record,l=n.index,et=t.tokenSearchers,a=void 0===et?[]:et,ot=t.fullSearcher,st=void 0===ot?[]:ot,ht=t.resultMap,v=void 0===ht?{}:ht,ct=t.results,lt=void 0===ct?[]:ct,u,b,k,y,nt,p,f,tt,it,c,pt;if(void 0!==i&&null!==i){var at=!1,r=-1,vt=0;if("string"==typeof i){if(this._log("\nKey: "+(""===e?"-":e)),u=st.search(i),this._log('Full text: "'+i+'", score: '+u.score),this.options.tokenize){for(var yt=i.split(this.options.tokenSeparator),s=[],w=0;w<a.length;w+=1){for(b=a[w],this._log('\nPattern: "'+b.pattern+'"'),k=!1,y=0;y<yt.length;y+=1){var h=yt[y],d=b.search(h),g={};d.isMatch?(g[h]=d.score,at=!0,k=!0,s.push(d.score)):(g[h]=1,this.options.matchAllTokens||s.push(1));this._log('Token: "'+h+'", score: '+g[h])}k&&(vt+=1)}for(r=s[0],nt=s.length,p=1;p<nt;p+=1)r+=s[p];r/=nt;this._log("Token score average:",r)}f=u.score;r>-1&&(f=(f+r)/2);this._log("Score average:",f);tt=!this.options.tokenize||!this.options.matchAllTokens||vt>=a.length;(this._log("\nCheck Matches: "+tt),(at||u.isMatch)&&tt)&&(it=v[l],it?it.output.push({key:e,arrayIndex:ut,value:i,score:f,matchedIndices:u.matchedIndices}):(v[l]={item:ft,output:[{key:e,arrayIndex:ut,value:i,score:f,matchedIndices:u.matchedIndices}]},lt.push(v[l])))}else if(o(i))for(c=0,pt=i.length;c<pt;c+=1)this._analyze({key:e,arrayIndex:c,value:i[c],record:ft,index:l},{resultMap:v,results:lt,tokenSearchers:a,fullSearcher:st})}}},{key:"_computeScore",value:function(n,t){var i,s;for(this._log("\n\nComputing score:\n"),i=0,s=t.length;i<s;i+=1){for(var u=t[i].output,c=u.length,h=1,f=1,r=0;r<c;r+=1){var e=n?n[u[r].key].weight:1,l=1===e?u[r].score:u[r].score||.001,o=l*e;1!==e?f=Math.min(f,o):(u[r].nScore=o,h*=o)}t[i].score=1===f?h:f;this._log(t[i])}}},{key:"_sort",value:function(n){this._log("\n\nSorting....");n.sort(this.options.sortFn)}},{key:"_format",value:function(n){var u=[],t,r,e,i;for(this.options.verbose&&this._log("\n\nOutput:\n\n",JSON.stringify(n)),t=[],this.options.includeMatches&&t.push(function(n,t){var f=n.output,r,e,i,u;for(t.matches=[],r=0,e=f.length;r<e;r+=1)i=f[r],0!==i.matchedIndices.length&&(u={indices:i.matchedIndices,value:i.value},i.key&&(u.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(u.arrayIndex=i.arrayIndex),t.matches.push(u))}),this.options.includeScore&&t.push(function(n,t){t.score=n.score}),r=0,e=n.length;r<e;r+=1)if(i=n[r],this.options.id&&(i.item=this.options.getFn(i.item,this.options.id)[0]),t.length){for(var o={item:i.item},f=0,s=t.length;f<s;f+=1)t[f](i,o);u.push(o)}else u.push(i.item);return u}},{key:"_log",value:function(){if(this.options.verbose){var n;(n=console).log.apply(n,arguments)}}}]),n}();n.exports=s}])});var articles=[{Title:"English minute",Description:"",Tags:["english"]},{Title:"Proverbs",Description:"",Tags:["english"]},],options={keys:["Title","Tags","Description"],id:"Title"},fuse=new Fuse(articles,options);document.getElementById("search").addEventListener("click",()=>{var u=document.getElementById("search-value").value,f=fuse.search(u),t=document.querySelectorAll(".card-content > p.title"),n,i,r;for(console.log(t.length),n=0;n<t.length;n++)i=t[n],r=f.filter(n=>n==i.innerText).length==1?!1:!0,i.parentElement.parentElement.parentElement.style.display=r?"none":""})
"use strict";function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}function pexels(){var a=5,b=30,c=function(){return"https://api.pexels.com/v1/search?query=HD+wallpaper&per_page="+b+"&page="+getRandomInt(a,1)},d=function(a){return{url:a.src.large2x,title:null,author:a.photographer+" provided by Pexels",link:a.url}};return{fetch:createFetch(c,function(c){return a=Math.floor(c.total_results/b)-1,c.photos.map(d)},{Authorization:"563492ad6f9170000100000160e6632c359c40ac95d0baa76ec59de9"})}}function BgService(a){function b(){return new Promise(function(b,d){0===c.length?a.fetch().then(function(a){c.push.apply(c,_toConsumableArray(a)),b(c.pop())},d):b(c.pop())})}var c=[];return{next:b}}function next(){bgService.next().then(function(a){var b=new Image;b.src=a.url,b.onload=function(b){return refresh(a,m)}})}function createFetch(a,b,c){return function(){return new Promise(function(d,e){fetch(a(),{headers:c}).then(function(a){return a.json()},e).then(function(a){return d(b(a))},e)})}}function getRandomInt(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(Math.random()*(a-b+1))+b}function createInnerTextByIdMap(a){return{el:document.getElementById(a),set:function(a,b){return a.innerText=b}}}function refresh(a,b){for(var c in b)b[c].set&&"function"==typeof b[c].set&&b[c].el&&a[c]&&b[c].set(b[c].el,a[c])}var d={url:"/img/bg.jpg",title:"",link:"https://images.pexels.com/photos/292442/pexels-photo-292442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",author:"Snapwire provided by Pexels"},m={url:{el:document.body,set:function(a,b){return a.style.backgroundImage="url("+b+")"}},title:createInnerTextByIdMap("title"),link:{el:document.getElementById("link"),set:function(a,b){return a.href=b}},author:createInnerTextByIdMap("author")},bgService=new BgService(new pexels);refresh(d,m);
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Py4G:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/photo-browser/images",function(){return i("yRIN")}])},ghv3:function(e,t,i){"use strict";var n=i("ln6h"),a=i.n(n),r=i("O40h"),s=i("q1tI"),u=i.n(s),c=i("/MKj"),o=i("j547"),m=(i("Ixk2"),i("NwQ6")),l=u.a.createElement;t.a=Object(c.b)(function(e){return{imageList:e.imageList.imageList,page:e.imageList.page,limit:e.imageList.limit}},function(e){return{fetchImages:function(t,i){return e(o.a(t,i))},setPage:function(t){return e(o.c(t))}}})(function(e){Object(s.useEffect)(function(){!function(){var t=Object(r.a)(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.fetchImages(e.page,e.limit));case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()},[e.page,e.limit]);var t=e.imageList.map(function(e){return l(m.a,{key:"image_".concat(e.id),imageData:e,thumbnailClassName:"thumbnail",href:"/photo-browser/images/[imageid]",as:"/photo-browser/images/".concat(e.id),size:50,imageClassName:"img-thumbnail"})});return l("div",{className:"ImageList"},l("div",null,"Sivu ".concat(e.page)),l("div",null,l("div",{className:"page-button",style:{visibility:e.page>1?"visible":"hidden"},onClick:function(){return e.setPage(e.page-1,e.limit)}},"<<"),l("div",{className:"page-button",style:{visibility:e.imageList.length>0?"visible":"hidden"},onClick:function(){return e.setPage(e.page+1,e.limit)}},">>")),l("div",{className:"thumbnails-container"},t))})},yRIN:function(e,t,i){"use strict";i.r(t);var n=i("q1tI"),a=i.n(n),r=i("ghv3"),s=i("/MKj"),u=a.a.createElement;t.default=Object(s.b)(function(e){return e})(function(){return u(r.a,null)})}},[["Py4G",0,1]]]);
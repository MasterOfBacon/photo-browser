(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"6nz9":function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/images",function(){return i("OKE0")}])},OKE0:function(e,t,i){"use strict";i.r(t);var n=i("q1tI"),a=i.n(n),s=i("ghv3"),u=i("/MKj"),r=a.a.createElement;t.default=Object(u.b)(function(e){return e})(function(){return r(s.a,null)})},ghv3:function(e,t,i){"use strict";var n=i("ln6h"),a=i.n(n),s=i("O40h"),u=i("q1tI"),r=i.n(u),c=i("/MKj"),m=i("j547"),o=(i("Ixk2"),i("NwQ6")),l=r.a.createElement;t.a=Object(c.b)(function(e){return{imageList:e.imageList.imageList,page:e.imageList.page,limit:e.imageList.limit}},function(e){return{fetchImages:function(t,i){return e(m.a(t,i))},setPage:function(t){return e(m.c(t))}}})(function(e){Object(u.useEffect)(function(){!function(){var t=Object(s.a)(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.fetchImages(e.page,e.limit));case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()},[e.page,e.limit]);var t=e.imageList.map(function(e){return l(o.a,{key:"image_".concat(e.id),imageData:e,thumbnailClassName:"thumbnail",href:"/images/[imageid]",as:"/photo-browser/images/".concat(e.id),size:50,imageClassName:"img-thumbnail"})});return l("div",{className:"ImageList"},l("div",null,"Sivu ".concat(e.page)),l("div",null,l("div",{className:"page-button",style:{visibility:e.page>1?"visible":"hidden"},onClick:function(){return e.setPage(e.page-1,e.limit)}},"<<"),l("div",{className:"page-button",style:{visibility:e.imageList.length>0?"visible":"hidden"},onClick:function(){return e.setPage(e.page+1,e.limit)}},">>")),l("div",{className:"thumbnails-container"},t))})}},[["6nz9",0,1]]]);
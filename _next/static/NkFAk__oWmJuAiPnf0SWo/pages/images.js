(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"6nz9":function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/images",function(){return i("OKE0")}])},OKE0:function(t,e,i){"use strict";i.r(e);var n=i("q1tI"),a=i.n(n),c=i("ghv3"),r=i("/MKj"),s=a.a.createElement;e.default=Object(r.b)(function(t){return t})(function(){return s(c.a,null)})},ghv3:function(t,e,i){"use strict";var n=i("ln6h"),a=i.n(n),c=i("O40h"),r=i("q1tI"),s=i.n(r),u=i("/MKj"),o=i("j547"),m=(i("Ixk2"),i("NwQ6")),l=s.a.createElement;e.a=Object(u.b)(function(t){return{imageList:t.imageList.imageList,page:t.imageList.page,limit:t.imageList.limit}},function(t){return{fetchImages:function(e,i){return t(o.a(e,i))},setPage:function(e){return t(o.c(e))}}})(function(t){Object(r.useEffect)(function(){!function(){var e=Object(c.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.fetchImages(t.page,t.limit));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[t.page,t.limit]);var e=t.imageList.map(function(t){return l(m.a,{key:"image_".concat(t.id),imageData:t,thumbnailClassName:"thumbnail",href:"".concat("/photo-browser","/images/[id]"),as:"".concat("/photo-browser","/images/").concat(t.id),size:50,imageClassName:"img-thumbnail"})});return l("div",{className:"ImageList"},l("div",null,"Sivu ".concat(t.page)),l("div",null,l("div",{className:"page-button",style:{visibility:t.page>1?"visible":"hidden"},onClick:function(){return t.setPage(t.page-1,t.limit)}},"<<"),l("div",{className:"page-button",style:{visibility:t.imageList.length>0?"visible":"hidden"},onClick:function(){return t.setPage(t.page+1,t.limit)}},">>")),l("div",{className:"thumbnails-container"},e))})}},[["6nz9",0,1]]]);
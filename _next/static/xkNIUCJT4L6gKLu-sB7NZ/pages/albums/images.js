(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{maVX:function(n,e,a){"use strict";a.r(e);var t=a("q1tI"),u=a.n(t),r=a("sb1W"),c=a("/MKj"),s=u.a.createElement;e.default=Object(c.b)(function(n){return n})(function(){return s(r.a,null)})},qrs6:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/albums/images",function(){return a("maVX")}])},sb1W:function(n,e,a){"use strict";var t=a("ln6h"),u=a.n(t),r=a("O40h"),c=a("q1tI"),s=a.n(c),i=a("/MKj"),l=a("W+dU"),m=a("PvlD");function o(n){return{type:l.c,albumImages:n}}function b(n){return{type:l.a,albumId:n}}a("Ixk2");var f=a("NwQ6"),p=s.a.createElement;e.a=Object(i.b)(function(n){return{albums:n.albumList.albums,albumImages:n.albumList.albumImages,albumId:n.albumList.albumId}},function(n){return{fetchAlbums:function(){return n((e=null,a=null,function(){var n=Object(r.a)(u.a.mark(function n(t){var r;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m.a(e,a);case 3:r=n.sent,t((u=r,{type:l.b,albums:u})),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Error fetching images");case 10:case"end":return n.stop()}var u},n,null,[[0,7]])}));return function(e){return n.apply(this,arguments)}}()));var e,a},fetchAlbumImages:function(e){return n(function(n){return function(){var e=Object(r.a)(u.a.mark(function e(a){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(b(n)),e.next=4,m.b(null,null,n);case 4:t=e.sent,a(o(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error fetching single image");case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(n){return e.apply(this,arguments)}}()}(e))}}})(function(n){Object(c.useEffect)(function(){!function(){var e=Object(r.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.fetchAlbums(null,null));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]);var e=n.albums&&n.albums.map(function(e){var a=n.albumId===e.id?"selected":"";return p("div",{className:"album ".concat(a),key:"album_".concat(e.id),onClick:function(){return n.fetchAlbumImages(e.id)}},e.title)});return p("div",{className:"ImageList"},p("div",{className:"albums-container"},p("div",{className:"albums-header"},"Albumit"),e),function(){var e=n.albumImages&&n.albumImages.map(function(n){return p(f.a,{key:"album_image_".concat(n.id),imageData:n,thumbnailClassName:"album-thumbnail",href:"/albums/images/[imageid]",as:"/photo-browser/albums/images/".concat(n.id),size:20,imageClassName:"album-image-thumbnail"})});return p("div",{className:"album-open-container",style:{visibility:0===n.albumImages.length?"hidden":"visible"}},e)}())})}},[["qrs6",0,1]]]);
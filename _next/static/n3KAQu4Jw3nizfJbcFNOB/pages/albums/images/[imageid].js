(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+8US":function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),a=n("9Ofe"),i=n("sb1W"),s=n("/MKj"),l=r.a.createElement;t.default=Object(s.b)(function(e){return e})(function(){return l(r.a.Fragment,null,l(i.a,null),l(a.a,null))})},"9Ofe":function(e,t,n){"use strict";var o=n("ln6h"),r=n.n(o),a=n("O40h"),i=n("q1tI"),s=n.n(i);function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(e,t,n,o,r){var a=r.offsetX,i=r.offsetY,s=o?8:0,l=n.split(" "),c=e.top+e.height/2,u=e.left+e.width/2,p=t.height,f=t.width,m=c-p/2,d=u-f/2,g="",b="0%",h="0%";switch(l[0]){case"top":m-=p/2+e.height/2+s,g="rotate(45deg)",b="100%",h="50%";break;case"bottom":m+=p/2+e.height/2+s,g="rotate(225deg)",h="50%";break;case"left":d-=f/2+e.width/2+s,g=" rotate(-45deg)",h="100%",b="50%";break;case"right":d+=f/2+e.width/2+s,g="rotate(135deg)",b="50%"}switch(l[1]){case"top":m=e.top,b="".concat(e.height/2,"px");break;case"bottom":m=e.top-p+e.height,b="".concat(p-e.height/2,"px");break;case"left":d=e.left,h="".concat(e.width/2,"px");break;case"right":d=e.left-f+e.width,h="".concat(f-e.width/2,"px")}return{top:m="top"===l[0]?m-i:m+i,left:d="left"===l[0]?d-a:d+a,transform:g,arrowLeft:h,arrowTop:b}}var b={popupContent:{tooltip:{position:"absolute",zIndex:"2",width:"200px",background:"rgb(255, 255, 255)",border:"1px solid rgb(187, 187, 187)",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 3px",padding:"5px"},modal:{position:"relative",background:"rgb(255, 255, 255)",width:"50%",margin:"auto",border:"1px solid rgb(187, 187, 187)",padding:"5px"}},popupArrow:{height:"10px",width:"10px",position:"absolute",background:"rgb(255, 255, 255)",transform:"rotate(45deg)",margin:"-5px",zIndex:"-1",boxShadow:"rgba(0, 0, 0, 0.2) 1px 1px 1px"},overlay:{tooltip:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0"},modal:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",background:"rgba(0, 0, 0,0.5)",display:"flex",zIndex:"999"}}},h=["top left","top center","top right","right top","right center","right bottom","bottom left","bottom center","bottom right","left top","left center","left bottom","center center"],v=function(e){function t(e){var n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=p(t).call(this,e),n=!r||"object"!==typeof r&&"function"!==typeof r?m(o):r,c(m(n),"repositionOnResize",function(){n.setPosition()}),c(m(n),"onEscape",function(e){"Escape"===e.key&&n.closePopup()}),c(m(n),"lockScroll",function(){var e=n.props.lockScroll;n.state.modal&&e&&(document.getElementsByTagName("body")[0].style.overflow="hidden")}),c(m(n),"resetScroll",function(){var e=n.props.lockScroll;n.state.modal&&e&&(document.getElementsByTagName("body")[0].style.overflow="auto")}),c(m(n),"togglePopup",function(e){e.persist(),n.state.isOpen?n.closePopup(e):n.openPopup(e)}),c(m(n),"openPopup",function(e){var t=n.props,o=t.disabled,r=t.onOpen;n.state.isOpen||o||(r(e),n.setState({isOpen:!0},function(){n.setPosition(),n.lockScroll()}))}),c(m(n),"closePopup",function(e){var t=n.props.onClose;n.state.isOpen&&(t(e),n.setState({isOpen:!1},function(){n.resetScroll()}))}),c(m(n),"onMouseEnter",function(){clearTimeout(n.timeOut);var e=n.props.mouseEnterDelay;n.timeOut=setTimeout(function(){return n.openPopup()},e)}),c(m(n),"onMouseLeave",function(){clearTimeout(n.timeOut);var e=n.props.mouseLeaveDelay;n.timeOut=setTimeout(function(){return n.closePopup()},e)}),c(m(n),"getTooltipBoundary",function(){var e=n.props.keepTooltipInside,t={top:0,left:0,width:window.innerWidth,height:window.innerHeight};"string"===typeof e&&(t=document.querySelector(e).getBoundingClientRect());return t}),c(m(n),"setPosition",function(){var e=n.state,t=e.modal,o=e.isOpen;if(!t&&o){var r=n.props,a=r.arrow,i=r.position,s=r.offsetX,l=r.offsetY,c=r.keepTooltipInside,u=r.arrowStyle,p=r.className,f=n.HelperEl.getBoundingClientRect(),m=n.TriggerEl.getBoundingClientRect(),b=n.ContentEl.getBoundingClientRect(),v=n.getTooltipBoundary(),y=Array.isArray(i)?i:[i];(c||Array.isArray(i))&&(y=[].concat(d(y),h));var w=function(e,t,n,o,r,a){for(var i,s=r.offsetX,l=r.offsetY,c=0;c<n.length;){var u={top:(i=g(e,t,n[c],o,{offsetX:s,offsetY:l})).top,left:i.left,width:t.width,height:t.height};if(!(u.top<=a.top||u.left<=a.left||u.top+u.height>=a.top+a.height||u.left+u.width>=a.left+a.width))break;c++}return i}(m,b,y,a,{offsetX:s,offsetY:l},v);n.ContentEl.style.top="".concat(w.top-f.top,"px"),n.ContentEl.style.left="".concat(w.left-f.left,"px"),a&&(n.ArrowEl.style.transform=w.transform,n.ArrowEl.style["-ms-transform"]=w.transform,n.ArrowEl.style["-webkit-transform"]=w.transform,n.ArrowEl.style.top=u.top||w.arrowTop,n.ArrowEl.style.left=u.left||w.arrowLeft,n.ArrowEl.classList.add("popup-arrow"),""!==p&&n.ArrowEl.classList.add("".concat(p,"-arrow"))),"static"!==window.getComputedStyle(n.TriggerEl,null).getPropertyValue("position")&&""!==window.getComputedStyle(n.TriggerEl,null).getPropertyValue("position")||(n.TriggerEl.style.position="relative")}}),c(m(n),"addWarperAction",function(){var e=n.props,t=e.contentStyle,o=e.className,r=e.on,a=n.state.modal,i=a?b.popupContent.modal:b.popupContent.tooltip,s={className:"popup-content ".concat(""!==o?"".concat(o,"-content"):""),style:Object.assign({},i,t),ref:n.setContentRef,onClick:function(e){e.stopPropagation()}};return!a&&r.indexOf("hover")>=0&&(s.onMouseEnter=n.onMouseEnter,s.onMouseLeave=n.onMouseLeave),s}),c(m(n),"renderTrigger",function(){for(var e={key:"T",ref:n.setTriggerRef},t=n.props,o=t.on,r=t.trigger,a=n.state.isOpen,i=Array.isArray(o)?o:[o],l=0,c=i.length;l<c;l++)switch(i[l]){case"click":e.onClick=n.togglePopup;break;case"hover":e.onMouseEnter=n.onMouseEnter,e.onMouseLeave=n.onMouseLeave;break;case"focus":e.onFocus=n.onMouseEnter}return"function"===typeof r?!!r&&s.a.cloneElement(r(a),e):!!r&&s.a.cloneElement(r,e)}),c(m(n),"renderContent",function(){var e=n.props,t=e.arrow,o=e.arrowStyle,r=e.children,a=n.state,i=a.modal,l=a.isOpen;return s.a.createElement("div",u({},n.addWarperAction(),{key:"C"}),t&&!i&&s.a.createElement("div",{ref:n.setArrowRef,style:Object.assign({},b.popupArrow,o)}),"function"===typeof r?r(n.closePopup,l):r)}),n.setTriggerRef=function(e){return n.TriggerEl=e},n.setContentRef=function(e){return n.ContentEl=e},n.setArrowRef=function(e){return n.ArrowEl=e},n.setHelperRef=function(e){return n.HelperEl=e},n.timeOut=0;var a=e.open,i=e.modal,l=e.defaultOpen,f=e.trigger;return n.state={isOpen:a||l,modal:!!i||!f},n}var n,o,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,s.a.PureComponent),n=t,(o=[{key:"componentDidMount",value:function(){var e=this.props,t=e.closeOnEscape,n=e.defaultOpen,o=e.repositionOnResize;n&&this.setPosition(),t&&window.addEventListener("keyup",this.onEscape),o&&window.addEventListener("resize",this.repositionOnResize)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.open,o=t.disabled,r=this.state.isOpen;e.open!==n&&(n?this.openPopup():this.closePopup(void 0,!0)),e.disabled!==o&&o&&r&&this.closePopup()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeOut);var e=this.props,t=e.closeOnEscape,n=e.repositionOnResize;t&&window.removeEventListener("keyup",this.onEscape),n&&window.removeEventListener("resize",this.repositionOnResize),this.resetScroll()}},{key:"render",value:function(){var e=this.props,t=e.overlayStyle,n=e.closeOnDocumentClick,o=e.className,r=e.on,a=(e.trigger,this.state),i=a.modal,l=a.isOpen,c=l&&!(r.indexOf("hover")>=0),u=i?b.overlay.modal:b.overlay.tooltip;return[this.renderTrigger(),l&&s.a.createElement("div",{key:"H",style:{position:"absolute",top:"0px",left:"0px"},ref:this.setHelperRef}),c&&s.a.createElement("div",{key:"O",className:"popup-overlay ".concat(""!==o?"".concat(o,"-overlay"):""),style:Object.assign({},u,t),onClick:n?this.closePopup:void 0},i&&this.renderContent()),l&&!i&&this.renderContent()]}}])&&l(n.prototype,o),r&&l(n,r),t}();c(v,"defaultProps",{trigger:null,onOpen:function(){},onClose:function(){},defaultOpen:!1,open:!1,disabled:!1,closeOnDocumentClick:!0,repositionOnResize:!0,closeOnEscape:!0,on:["click"],contentStyle:{},arrowStyle:{},overlayStyle:{},className:"",position:"bottom center",modal:!1,lockScroll:!1,arrow:!0,offsetX:0,offsetY:0,mouseEnterDelay:100,mouseLeaveDelay:100,keepTooltipInside:!1});var y=v,w=n("nOHt"),O=n("/MKj"),E=n("j547"),k=n("jkUL"),x=n.n(k),P=n("YFqc"),C=n.n(P),j=s.a.createElement;t.a=Object(O.b)(function(e){return{imageList:e.imageList.imageList,image:e.imageList.image}},function(e){return{fetchSingleImage:function(t){return e(E.b(t))}}})(function(e){var t=Object(w.useRouter)(),n=t.query&&t.query.imageid&&t.query.imageid.toString(),o=Object(i.useState)(!0),s=o[0],l=o[1];Object(i.useEffect)(function(){n&&(l(!0),function(){var t=Object(a.a)(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchSingleImage(n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()())},[n]);var c=e.image&&e.image.url,u=j("div",{className:"loader-front"},j(x.a,{type:"Oval",color:"#00BFFF",height:100,width:100}));if(n){var p=t.asPath.replace("/".concat(n),"");return j(C.a,{href:"".concat(p),as:"".concat(p)},j("div",{className:"image-popup-container"},j(y,{key:"image_popup_".concat(n),open:!0,contentStyle:{backgroundColor:"unset",position:"unset",width:"unset",border:"unset"},position:"right center",modal:!0,closeOnDocumentClick:!0},j("div",null,!s&&e.image&&e.image.title,s&&u,j("img",{onLoad:function(){return l(!1)},src:"".concat(c),className:"img-fullimage ".concat(s&&"hide")})))))}return null})},b1oV:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/albums/images/[imageid]",function(){return n("+8US")}])},sb1W:function(e,t,n){"use strict";var o=n("ln6h"),r=n.n(o),a=n("O40h"),i=n("q1tI"),s=n.n(i),l=n("/MKj"),c=n("W+dU"),u=n("PvlD");function p(e){return{type:c.c,albumImages:e}}function f(e){return{type:c.a,albumId:e}}n("Ixk2");var m=n("NwQ6"),d=s.a.createElement;t.a=Object(l.b)(function(e){return{albums:e.albumList.albums,albumImages:e.albumList.albumImages,albumId:e.albumList.albumId}},function(e){return{fetchAlbums:function(){return e((t=null,n=null,function(){var e=Object(a.a)(r.a.mark(function e(o){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a(t,n);case 3:a=e.sent,o((r=a,{type:c.b,albums:r})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error fetching images");case 10:case"end":return e.stop()}var r},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()));var t,n},fetchAlbumImages:function(t){return e(function(e){return function(){var t=Object(a.a)(r.a.mark(function t(n){var o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(f(e)),t.next=4,u.b(null,null,e);case 4:o=t.sent,n(p(o)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("Error fetching single image");case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(function(e){Object(i.useEffect)(function(){!function(){var t=Object(a.a)(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.fetchAlbums(null,null));case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()},[]);var t=e.albums&&e.albums.map(function(t){var n=e.albumId===t.id?"selected":"";return d("div",{className:"album ".concat(n),key:"album_".concat(t.id),onClick:function(){return e.fetchAlbumImages(t.id)}},t.title)});return d("div",{className:"ImageList"},d("div",{className:"albums-container"},d("div",{className:"albums-header"},"Albumit"),t),function(){var t=e.albumImages&&e.albumImages.map(function(e){return d(m.a,{key:"album_image_".concat(e.id),imageData:e,thumbnailClassName:"album-thumbnail",href:"/albums/images/[imageid]",as:"/albums/images/".concat(e.id),size:20,imageClassName:"album-image-thumbnail"})});return d("div",{className:"album-open-container",style:{visibility:0===e.albumImages.length?"hidden":"visible"}},t)}())})}},[["b1oV",0,1]]]);
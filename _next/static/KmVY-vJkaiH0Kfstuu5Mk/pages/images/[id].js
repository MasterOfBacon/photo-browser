(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"9Ofe":function(e,t,o){"use strict";var n=o("ln6h"),r=o.n(n),i=o("O40h"),a=o("q1tI"),s=o.n(a);function c(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e,t,o,n,r){var i=r.offsetX,a=r.offsetY,s=n?8:0,c=o.split(" "),l=e.top+e.height/2,p=e.left+e.width/2,u=t.height,f=t.width,g=l-u/2,d=p-f/2,m="",h="0%",b="0%";switch(c[0]){case"top":g-=u/2+e.height/2+s,m="rotate(45deg)",h="100%",b="50%";break;case"bottom":g+=u/2+e.height/2+s,m="rotate(225deg)",b="50%";break;case"left":d-=f/2+e.width/2+s,m=" rotate(-45deg)",b="100%",h="50%";break;case"right":d+=f/2+e.width/2+s,m="rotate(135deg)",h="50%"}switch(c[1]){case"top":g=e.top,h="".concat(e.height/2,"px");break;case"bottom":g=e.top-u+e.height,h="".concat(u-e.height/2,"px");break;case"left":d=e.left,b="".concat(e.width/2,"px");break;case"right":d=e.left-f+e.width,b="".concat(f-e.width/2,"px")}return{top:g="top"===c[0]?g-a:g+a,left:d="left"===c[0]?d-i:d+i,transform:m,arrowLeft:b,arrowTop:h}}var h={popupContent:{tooltip:{position:"absolute",zIndex:"2",width:"200px",background:"rgb(255, 255, 255)",border:"1px solid rgb(187, 187, 187)",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 3px",padding:"5px"},modal:{position:"relative",background:"rgb(255, 255, 255)",width:"50%",margin:"auto",border:"1px solid rgb(187, 187, 187)",padding:"5px"}},popupArrow:{height:"10px",width:"10px",position:"absolute",background:"rgb(255, 255, 255)",transform:"rotate(45deg)",margin:"-5px",zIndex:"-1",boxShadow:"rgba(0, 0, 0, 0.2) 1px 1px 1px"},overlay:{tooltip:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0"},modal:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",background:"rgba(0, 0, 0,0.5)",display:"flex",zIndex:"999"}}},b=["top left","top center","top right","right top","right center","right bottom","bottom left","bottom center","bottom right","left top","left center","left bottom","center center"],y=function(e){function t(e){var o,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=u(t).call(this,e),o=!r||"object"!==typeof r&&"function"!==typeof r?g(n):r,l(g(o),"repositionOnResize",function(){o.setPosition()}),l(g(o),"onEscape",function(e){"Escape"===e.key&&o.closePopup()}),l(g(o),"lockScroll",function(){var e=o.props.lockScroll;o.state.modal&&e&&(document.getElementsByTagName("body")[0].style.overflow="hidden")}),l(g(o),"resetScroll",function(){var e=o.props.lockScroll;o.state.modal&&e&&(document.getElementsByTagName("body")[0].style.overflow="auto")}),l(g(o),"togglePopup",function(e){e.persist(),o.state.isOpen?o.closePopup(e):o.openPopup(e)}),l(g(o),"openPopup",function(e){var t=o.props,n=t.disabled,r=t.onOpen;o.state.isOpen||n||(r(e),o.setState({isOpen:!0},function(){o.setPosition(),o.lockScroll()}))}),l(g(o),"closePopup",function(e){var t=o.props.onClose;o.state.isOpen&&(t(e),o.setState({isOpen:!1},function(){o.resetScroll()}))}),l(g(o),"onMouseEnter",function(){clearTimeout(o.timeOut);var e=o.props.mouseEnterDelay;o.timeOut=setTimeout(function(){return o.openPopup()},e)}),l(g(o),"onMouseLeave",function(){clearTimeout(o.timeOut);var e=o.props.mouseLeaveDelay;o.timeOut=setTimeout(function(){return o.closePopup()},e)}),l(g(o),"getTooltipBoundary",function(){var e=o.props.keepTooltipInside,t={top:0,left:0,width:window.innerWidth,height:window.innerHeight};"string"===typeof e&&(t=document.querySelector(e).getBoundingClientRect());return t}),l(g(o),"setPosition",function(){var e=o.state,t=e.modal,n=e.isOpen;if(!t&&n){var r=o.props,i=r.arrow,a=r.position,s=r.offsetX,c=r.offsetY,l=r.keepTooltipInside,p=r.arrowStyle,u=r.className,f=o.HelperEl.getBoundingClientRect(),g=o.TriggerEl.getBoundingClientRect(),h=o.ContentEl.getBoundingClientRect(),y=o.getTooltipBoundary(),v=Array.isArray(a)?a:[a];(l||Array.isArray(a))&&(v=[].concat(d(v),b));var w=function(e,t,o,n,r,i){for(var a,s=r.offsetX,c=r.offsetY,l=0;l<o.length;){var p={top:(a=m(e,t,o[l],n,{offsetX:s,offsetY:c})).top,left:a.left,width:t.width,height:t.height};if(!(p.top<=i.top||p.left<=i.left||p.top+p.height>=i.top+i.height||p.left+p.width>=i.left+i.width))break;l++}return a}(g,h,v,i,{offsetX:s,offsetY:c},y);o.ContentEl.style.top="".concat(w.top-f.top,"px"),o.ContentEl.style.left="".concat(w.left-f.left,"px"),i&&(o.ArrowEl.style.transform=w.transform,o.ArrowEl.style["-ms-transform"]=w.transform,o.ArrowEl.style["-webkit-transform"]=w.transform,o.ArrowEl.style.top=p.top||w.arrowTop,o.ArrowEl.style.left=p.left||w.arrowLeft,o.ArrowEl.classList.add("popup-arrow"),""!==u&&o.ArrowEl.classList.add("".concat(u,"-arrow"))),"static"!==window.getComputedStyle(o.TriggerEl,null).getPropertyValue("position")&&""!==window.getComputedStyle(o.TriggerEl,null).getPropertyValue("position")||(o.TriggerEl.style.position="relative")}}),l(g(o),"addWarperAction",function(){var e=o.props,t=e.contentStyle,n=e.className,r=e.on,i=o.state.modal,a=i?h.popupContent.modal:h.popupContent.tooltip,s={className:"popup-content ".concat(""!==n?"".concat(n,"-content"):""),style:Object.assign({},a,t),ref:o.setContentRef,onClick:function(e){e.stopPropagation()}};return!i&&r.indexOf("hover")>=0&&(s.onMouseEnter=o.onMouseEnter,s.onMouseLeave=o.onMouseLeave),s}),l(g(o),"renderTrigger",function(){for(var e={key:"T",ref:o.setTriggerRef},t=o.props,n=t.on,r=t.trigger,i=o.state.isOpen,a=Array.isArray(n)?n:[n],c=0,l=a.length;c<l;c++)switch(a[c]){case"click":e.onClick=o.togglePopup;break;case"hover":e.onMouseEnter=o.onMouseEnter,e.onMouseLeave=o.onMouseLeave;break;case"focus":e.onFocus=o.onMouseEnter}return"function"===typeof r?!!r&&s.a.cloneElement(r(i),e):!!r&&s.a.cloneElement(r,e)}),l(g(o),"renderContent",function(){var e=o.props,t=e.arrow,n=e.arrowStyle,r=e.children,i=o.state,a=i.modal,c=i.isOpen;return s.a.createElement("div",p({},o.addWarperAction(),{key:"C"}),t&&!a&&s.a.createElement("div",{ref:o.setArrowRef,style:Object.assign({},h.popupArrow,n)}),"function"===typeof r?r(o.closePopup,c):r)}),o.setTriggerRef=function(e){return o.TriggerEl=e},o.setContentRef=function(e){return o.ContentEl=e},o.setArrowRef=function(e){return o.ArrowEl=e},o.setHelperRef=function(e){return o.HelperEl=e},o.timeOut=0;var i=e.open,a=e.modal,c=e.defaultOpen,f=e.trigger;return o.state={isOpen:i||c,modal:!!a||!f},o}var o,n,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,s.a.PureComponent),o=t,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.closeOnEscape,o=e.defaultOpen,n=e.repositionOnResize;o&&this.setPosition(),t&&window.addEventListener("keyup",this.onEscape),n&&window.addEventListener("resize",this.repositionOnResize)}},{key:"componentDidUpdate",value:function(e){var t=this.props,o=t.open,n=t.disabled,r=this.state.isOpen;e.open!==o&&(o?this.openPopup():this.closePopup(void 0,!0)),e.disabled!==n&&n&&r&&this.closePopup()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeOut);var e=this.props,t=e.closeOnEscape,o=e.repositionOnResize;t&&window.removeEventListener("keyup",this.onEscape),o&&window.removeEventListener("resize",this.repositionOnResize),this.resetScroll()}},{key:"render",value:function(){var e=this.props,t=e.overlayStyle,o=e.closeOnDocumentClick,n=e.className,r=e.on,i=(e.trigger,this.state),a=i.modal,c=i.isOpen,l=c&&!(r.indexOf("hover")>=0),p=a?h.overlay.modal:h.overlay.tooltip;return[this.renderTrigger(),c&&s.a.createElement("div",{key:"H",style:{position:"absolute",top:"0px",left:"0px"},ref:this.setHelperRef}),l&&s.a.createElement("div",{key:"O",className:"popup-overlay ".concat(""!==n?"".concat(n,"-overlay"):""),style:Object.assign({},p,t),onClick:o?this.closePopup:void 0},a&&this.renderContent()),c&&!a&&this.renderContent()]}}])&&c(o.prototype,n),r&&c(o,r),t}();l(y,"defaultProps",{trigger:null,onOpen:function(){},onClose:function(){},defaultOpen:!1,open:!1,disabled:!1,closeOnDocumentClick:!0,repositionOnResize:!0,closeOnEscape:!0,on:["click"],contentStyle:{},arrowStyle:{},overlayStyle:{},className:"",position:"bottom center",modal:!1,lockScroll:!1,arrow:!0,offsetX:0,offsetY:0,mouseEnterDelay:100,mouseLeaveDelay:100,keepTooltipInside:!1});var v=y,w=o("nOHt"),O=o("/MKj"),E=o("j547"),k=o("jkUL"),x=o.n(k),P=o("YFqc"),C=o.n(P),j=s.a.createElement;t.a=Object(O.b)(function(e){return{imageList:e.imageList.imageList,image:e.imageList.image}},function(e){return{fetchSingleImage:function(t){return e(E.b(t))}}})(function(e){var t=Object(w.useRouter)(),o=t.query&&t.query.id&&t.query.id.toString(),n=Object(a.useState)(!0),s=n[0],c=n[1];Object(a.useEffect)(function(){o&&(c(!0),function(){var t=Object(i.a)(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchSingleImage(o);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()())},[o]);var l=e.image&&e.image.url,p=j("div",{className:"loader-front"},j(x.a,{type:"Oval",color:"#00BFFF",height:100,width:100}));if(o){var u=t.asPath.replace("/".concat(o),"");return j(C.a,{href:"".concat(u),as:"".concat(u)},j("div",{className:"image-popup-container"},j(v,{key:"image_popup_".concat(o),open:!0,contentStyle:{backgroundColor:"unset",position:"unset",width:"unset",border:"unset"},position:"right center",modal:!0,closeOnDocumentClick:!0},j("div",null,!s&&e.image&&e.image.title,s&&p,j("img",{onLoad:function(){return c(!1)},src:"".concat(l),className:"img-fullimage ".concat(s&&"hide")})))))}return null})},QftD:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/images/[id]",function(){return o("zHZe")}])},ghv3:function(e,t,o){"use strict";var n=o("ln6h"),r=o.n(n),i=o("O40h"),a=o("q1tI"),s=o.n(a),c=o("/MKj"),l=o("j547"),p=(o("Ixk2"),o("NwQ6")),u=s.a.createElement;t.a=Object(c.b)(function(e){return{imageList:e.imageList.imageList,page:e.imageList.page,limit:e.imageList.limit}},function(e){return{fetchImages:function(t,o){return e(l.a(t,o))},setPage:function(t){return e(l.c(t))}}})(function(e){Object(a.useEffect)(function(){!function(){var t=Object(i.a)(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.fetchImages(e.page,e.limit));case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()},[e.page,e.limit]);var t=e.imageList.map(function(e){return u(p.a,{key:"image_".concat(e.id),imageData:e,thumbnailClassName:"thumbnail",href:"/photo-browser/images/[id]",as:"/photo-browser/images/".concat(e.id),size:50,imageClassName:"img-thumbnail"})});return u("div",{className:"ImageList"},u("div",null,"Sivu ".concat(e.page)),u("div",null,u("div",{className:"page-button",style:{visibility:e.page>1?"visible":"hidden"},onClick:function(){return e.setPage(e.page-1,e.limit)}},"<<"),u("div",{className:"page-button",style:{visibility:e.imageList.length>0?"visible":"hidden"},onClick:function(){return e.setPage(e.page+1,e.limit)}},">>")),u("div",{className:"thumbnails-container"},t))})},zHZe:function(e,t,o){"use strict";o.r(t);var n=o("q1tI"),r=o.n(n),i=o("9Ofe"),a=o("/MKj"),s=o("ghv3"),c=r.a.createElement;t.default=Object(a.b)(function(e){return e})(function(e){return console.log("props: ",e),c(r.a.Fragment,null,c(s.a,null),c(i.a,null))})}},[["QftD",0,1]]]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4356],{57797:function(e,t,n){n.d(t,{i:function(){return c}});var r=n(64090),l=n(14255),o=n(16319),u=n(3827);function i(e){let t=[],n=[];return Array.from(e.querySelectorAll('input,select,textarea,a[href],button,[tabindex],audio[controls],video[controls],[contenteditable]:not([contenteditable="false"])')).forEach((e,r)=>{let l=function(e){let t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:t}(e);-1===l||e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type||!e.name)return!1;let t=t=>e.ownerDocument.querySelector('input[type="radio"]'.concat(t)),n=t('[name="'.concat(e.name,'"]:checked'));return n||(n=t('[name="'.concat(e.name,'"]'))),n!==e}(e)||(0===l?t.push(e):n.push({documentOrder:r,tabIndex:l,node:e}))}),n.sort((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex).map(e=>e.node).concat(t)}function a(){return!0}function c(e){let{children:t,disableAutoFocus:n=!1,disableEnforceFocus:c=!1,disableRestoreFocus:s=!1,getTabbable:d=i,isEnabled:f=a,open:m}=e,h=r.useRef(!1),p=r.useRef(null),v=r.useRef(null),g=r.useRef(null),E=r.useRef(null),y=r.useRef(!1),b=r.useRef(null),R=(0,l.Z)(t.ref,b),x=r.useRef(null);r.useEffect(()=>{m&&b.current&&(y.current=!n)},[n,m]),r.useEffect(()=>{if(!m||!b.current)return;let e=(0,o.Z)(b.current);return!b.current.contains(e.activeElement)&&(b.current.hasAttribute("tabIndex")||b.current.setAttribute("tabIndex","-1"),y.current&&b.current.focus()),()=>{s||(g.current&&g.current.focus&&(h.current=!0,g.current.focus()),g.current=null)}},[m]),r.useEffect(()=>{if(!m||!b.current)return;let e=(0,o.Z)(b.current),t=t=>{x.current=t,!c&&f()&&"Tab"===t.key&&e.activeElement===b.current&&t.shiftKey&&(h.current=!0,v.current&&v.current.focus())},n=()=>{let t=b.current;if(null===t)return;if(!e.hasFocus()||!f()||h.current){h.current=!1;return}if(t.contains(e.activeElement)||c&&e.activeElement!==p.current&&e.activeElement!==v.current)return;if(e.activeElement!==E.current)E.current=null;else if(null!==E.current)return;if(!y.current)return;let n=[];if((e.activeElement===p.current||e.activeElement===v.current)&&(n=d(b.current)),n.length>0){var r,l;let e=!!((null==(r=x.current)?void 0:r.shiftKey)&&(null==(l=x.current)?void 0:l.key)==="Tab"),t=n[0],o=n[n.length-1];"string"!=typeof t&&"string"!=typeof o&&(e?o.focus():t.focus())}else t.focus()};e.addEventListener("focusin",n),e.addEventListener("keydown",t,!0);let r=setInterval(()=>{e.activeElement&&"BODY"===e.activeElement.tagName&&n()},50);return()=>{clearInterval(r),e.removeEventListener("focusin",n),e.removeEventListener("keydown",t,!0)}},[n,c,s,f,m,d]);let T=e=>{null===g.current&&(g.current=e.relatedTarget),y.current=!0};return(0,u.jsxs)(r.Fragment,{children:[(0,u.jsx)("div",{tabIndex:m?0:-1,onFocus:T,ref:p,"data-testid":"sentinelStart"}),r.cloneElement(t,{ref:R,onFocus:e=>{null===g.current&&(g.current=e.relatedTarget),y.current=!0,E.current=e.target;let n=t.props.onFocus;n&&n(e)}}),(0,u.jsx)("div",{tabIndex:m?0:-1,onFocus:T,ref:v,"data-testid":"sentinelEnd"})]})}},14712:function(e,t,n){n.d(t,{G:function(){return u},g:function(){return s}});var r=n(16319),l=n(6682),o=n(54249);function u(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function i(e){return parseInt((0,l.Z)(e).getComputedStyle(e).paddingRight,10)||0}function a(e,t,n,r,l){let o=[t,n,...r];[].forEach.call(e.children,e=>{let t=-1===o.indexOf(e),n=!function(e){let t=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),n="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return t||n}(e);t&&n&&u(e,l)})}function c(e,t){let n=-1;return e.some((e,r)=>!!t(e)&&(n=r,!0)),n}class s{add(e,t){let n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&u(e.modalRef,!1);let r=function(e){let t=[];return[].forEach.call(e.children,e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)}),t}(t);a(t,e.mount,e.modalRef,r,!0);let l=c(this.containers,e=>e.container===t);return -1!==l?this.containers[l].modals.push(e):this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:r}),n}mount(e,t){let n=c(this.containers,t=>-1!==t.modals.indexOf(e)),u=this.containers[n];u.restore||(u.restore=function(e,t){let n=[],u=e.container;if(!t.disableScrollLock){let e;if(function(e){let t=(0,r.Z)(e);return t.body===e?(0,l.Z)(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(u)){let e=(0,o.Z)((0,r.Z)(u));n.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight="".concat(i(u)+e,"px");let t=(0,r.Z)(u).querySelectorAll(".mui-fixed");[].forEach.call(t,t=>{n.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight="".concat(i(t)+e,"px")})}if(u.parentNode instanceof DocumentFragment)e=(0,r.Z)(u).body;else{let t=u.parentElement,n=(0,l.Z)(u);e=(null==t?void 0:t.nodeName)==="HTML"&&"scroll"===n.getComputedStyle(t).overflowY?t:u}n.push({value:e.style.overflow,property:"overflow",el:e},{value:e.style.overflowX,property:"overflow-x",el:e},{value:e.style.overflowY,property:"overflow-y",el:e}),e.style.overflow="hidden"}return()=>{n.forEach(e=>{let{value:t,el:n,property:r}=e;t?n.style.setProperty(r,t):n.style.removeProperty(r)})}}(u,t))}remove(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=this.modals.indexOf(e);if(-1===n)return n;let r=c(this.containers,t=>-1!==t.modals.indexOf(e)),l=this.containers[r];if(l.modals.splice(l.modals.indexOf(e),1),this.modals.splice(n,1),0===l.modals.length)l.restore&&l.restore(),e.modalRef&&u(e.modalRef,t),a(l.container,e.mount,e.modalRef,l.hiddenSiblings,!1),this.containers.splice(r,1);else{let e=l.modals[l.modals.length-1];e.modalRef&&u(e.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}}},57594:function(e,t,n){n.d(t,{d:function(){return f}});var r=n(14749),l=n(64090),o=n(14255),u=n(16319),i=n(87606),a=n(64093),c=n(68508),s=n(14712);let d=new s.g;function f(e){let{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:f=!1,manager:m=d,closeAfterTransition:h=!1,onTransitionEnter:p,onTransitionExited:v,children:g,onClose:E,open:y,rootRef:b}=e,R=l.useRef({}),x=l.useRef(null),T=l.useRef(null),I=(0,o.Z)(T,b),[N,O]=l.useState(!y),Z=!!g&&g.props.hasOwnProperty("in"),w=!0;("false"===e["aria-hidden"]||!1===e["aria-hidden"])&&(w=!1);let A=()=>(0,u.Z)(x.current),k=()=>(R.current.modalRef=T.current,R.current.mount=x.current,R.current),P=()=>{m.mount(k(),{disableScrollLock:f}),T.current&&(T.current.scrollTop=0)},C=(0,i.Z)(()=>{let e=("function"==typeof t?t():t)||A().body;m.add(k(),e),T.current&&P()}),S=l.useCallback(()=>m.isTopModal(k()),[m]),L=(0,i.Z)(e=>{x.current=e,e&&(y&&S()?P():T.current&&(0,s.G)(T.current,w))}),D=l.useCallback(()=>{m.remove(k(),w)},[w,m]);l.useEffect(()=>()=>{D()},[D]),l.useEffect(()=>{y?C():Z&&h||D()},[y,D,Z,h,C]);let F=e=>t=>{var r;null==(r=e.onKeyDown)||r.call(e,t),"Escape"===t.key&&229!==t.which&&S()&&!n&&(t.stopPropagation(),E&&E(t,"escapeKeyDown"))},K=e=>t=>{var n;null==(n=e.onClick)||n.call(e,t),t.target===t.currentTarget&&E&&E(t,"backdropClick")};return{getRootProps:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,c._)(e);delete n.onTransitionEnter,delete n.onTransitionExited;let l=(0,r.Z)({},n,t);return(0,r.Z)({role:"presentation"},l,{onKeyDown:F(l),ref:I})},getBackdropProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.Z)({"aria-hidden":!0},e,{onClick:K(e),open:y})},getTransitionProps:()=>({onEnter:(0,a.Z)(()=>{O(!1),p&&p()},null==g?void 0:g.props.onEnter),onExited:(0,a.Z)(()=>{O(!0),v&&v(),h&&D()},null==g?void 0:g.props.onExited)}),rootRef:I,portalRef:L,isTopModal:S,exited:N,hasTransition:Z}}}}]);
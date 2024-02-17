(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1050,9657,2515,3053,8885,1803,8324,8057],{43814:function(n,e,r){Promise.resolve().then(r.bind(r,5234)),Promise.resolve().then(r.bind(r,88529)),Promise.resolve().then(r.bind(r,75808)),Promise.resolve().then(r.bind(r,68197)),Promise.resolve().then(r.t.bind(r,81749,23)),Promise.resolve().then(r.bind(r,37919)),Promise.resolve().then(r.bind(r,55855)),Promise.resolve().then(r.bind(r,51887)),Promise.resolve().then(r.bind(r,40452))},88529:function(n,e,r){"use strict";r.r(e),r.d(e,{Box:function(){return t.Z}});var t=r(93172)},5234:function(n,e,r){"use strict";r.r(e),r.d(e,{Box:function(){return t.Z},Typography:function(){return o.ZP}});var t=r(93172),o=r(28948)},75808:function(n,e,r){"use strict";r.r(e),r.d(e,{Card:function(){return t.Z},CardContent:function(){return o.Z},CardOverflow:function(){return i.Z},Divider:function(){return c.Z}});var t=r(32351),o=r(90941),i=r(95502),c=r(72984)},68197:function(n,e,r){"use strict";r.r(e),r.d(e,{Divider:function(){return t.Z},Table:function(){return o.Z}});var t=r(72984),o=r(67588)},6377:function(n,e,r){"use strict";r.d(e,{P:function(){return l}});var t=r(3827),o=r(78713),i=r(18876),c=r(64090);function l(n){let[e,r]=c.useState(!1);return(0,t.jsx)(o.ZP,{...n,disabled:e||n.disabled,onClick:async function(){for(var e,t,o,i=arguments.length,c=Array(i),l=0;l<i;l++)c[l]=arguments[l];r(!0),null===(e=n.onChangeIsLoading)||void 0===e||e.call(n,!0);try{await (null===(t=n.onClick)||void 0===t?void 0:t.call(n,...c))}finally{r(!1),null===(o=n.onChangeIsLoading)||void 0===o||o.call(n,!1)}},children:e?(0,t.jsx)(i.Z,{}):n.children})}},37919:function(n,e,r){"use strict";r.r(e),r.d(e,{CopyButton:function(){return l}});var t=r(3827),o=r(54049),i=r(6377),c=r(96006);function l(n){let e=(0,c.useSnackbar)();return(0,t.jsx)(i.P,{...n,onClick:async function(){for(var r,t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];await (null===(r=n.onClick)||void 0===r?void 0:r.call(n,...o));try{await navigator.clipboard.writeText(n.content),e.showSuccess("Copied to clipboard!")}catch(n){e.showError("Failed to copy to clipboard!")}},children:(0,t.jsx)(o.J,{icon:"content_copy"})})}},55855:function(n,e,r){"use strict";r.r(e),r.d(e,{Enumeration:function(){return d},EnumerationItem:function(){return f}});var t=r(3827),o=r(64090),i=r(28948),c=r(21043),l=r(98515),a=r(93172);let s=o.createContext(null),u=["numbered"];function d(n){let{type:e,...r}=n,o=u.includes(e)?"ol":"ul";return(0,t.jsx)(s.Provider,{value:{type:e},children:(0,t.jsx)(o,{...r,style:{margin:0,...r.style}})})}function f(n){let e=(0,o.use)(s),{type:r,checked:u,children:d,...f}=n;return null!=r||(r=null==e?void 0:e.type),(0,t.jsx)(i.ZP,{display:"list-item",component:"li",...f,sx:{listStyleType:r?({bulleted:"disc",numbered:"decimal",checklist:"none"})[r]:void 0},children:"checklist"!==r?d:(0,t.jsxs)(c.Z,{direction:"row",marginY:"4px",children:[(0,t.jsx)(c.Z,{height:"1lh",width:"56px",marginLeft:"-56px",justifyContent:"center",alignItems:"center",children:(0,t.jsx)(l.Z,{readOnly:!0,checked:!!u,sx:{paddingInlineStart:"16px",pointerEvents:"none"}})}),(0,t.jsx)(a.Z,{children:d})]})})}},51887:function(n,e,r){"use strict";r.r(e),r.d(e,{InlineCode:function(){return c}});var t=r(3827),o=r(96006),i=r(28948);function c(n){let{onClick:e,style:r,...c}=n,l=(0,o.useSnackbar)();return(0,t.jsx)(i.ZP,{component:"code",display:"inline","data-n2-clickable":!0,...c,style:{cursor:"pointer",...r},onClick:r=>{null==e||e(r),!function n(e){let r=e.parentElement;return!!r&&(!!r.dataset.n2Clickable||!!e.parentElement&&n(e.parentElement))}(r.currentTarget)&&(r.stopPropagation(),r.preventDefault(),(async()=>{try{await navigator.clipboard.writeText(function n(e){if(["number","string"].includes(typeof e))return"".concat(e);if(!e)return"";if(Array.isArray(e))return e.map(n).join("");if("object"==typeof e&&"props"in e)return n(e.props.children);throw Error("Unknown node type: ".concat(typeof e))}(n.children)),l.showSuccess("Copied to clipboard!")}catch(n){l.showError("Failed to copy to clipboard!")}})())}})}},40452:function(n,e,r){"use strict";r.r(e),r.d(e,{SmartLink:function(){return a}});var t=r(3827),o=r(40221),i=r(93172),c=r(54049),l=r(64090);function a(n){var e,r;let[a,s]=(0,l.useState)(!!(null===(e=n.href)||void 0===e?void 0:e.match(/^[a-z]+:/))),{hideExternalIndicator:u,...d}=n;return(0,l.useEffect)(()=>{var e;s(new URL(null!==(e=n.href)&&void 0!==e?e:"",window.location.href).origin!==window.location.origin)},[n.href]),(0,t.jsx)(o.Z,{target:a?"_blank":void 0,rel:a?"noopener noreferrer":void 0,endDecorator:!u&&a?(0,t.jsx)(c.J,{icon:"open_in_new",size:"0.8em"}):void 0,display:"inline",...d,sx:{"&:hover":{textDecoration:"none","& > .n2-smart-link-child":{textDecoration:"underline"}},...null!==(r=d.sx)&&void 0!==r?r:{}},children:(0,t.jsx)(i.Z,{component:"span",display:"inline",className:"n2-smart-link-child",children:n.children})})}},96006:function(n,e,r){"use strict";r.r(e),r.d(e,{SnackbarProvider:function(){return a},useSnackbar:function(){return s}});var t=r(3827),o=r(64090),i=r(54049),c=r(42521);let l=(0,o.createContext)(null);function a(n){let[e,r]=(0,o.useState)([]),i=(0,o.useMemo)(()=>({show:n=>{r(e=>[...e,{options:n,key:crypto.randomUUID(),open:!0}])}}),[]),a=(0,o.useCallback)(n=>{r(e=>e.map(e=>e.key===n?{...e,open:!1}:e)),setTimeout(()=>{r(e=>e.filter(e=>e.key!==n))},1e3)},[]);return(0,t.jsxs)(l.Provider,{value:i,children:[n.children,e.map(n=>(0,o.createElement)(c.Z,{autoHideDuration:5e3,...n.options,open:n.open,onClose:()=>a(n.key),key:n.key}))]})}function s(){let n=(0,o.use)(l);if(!n)throw Error("useSnackbar must be used within a SnackbarProvider");return(0,o.useMemo)(()=>({show:n.show,showSuccess:(e,r)=>n.show({color:"success",variant:"soft",startDecorator:(0,t.jsx)(i.J,{fill:!0,weight:700,icon:"check_circle"}),children:e,autoHideDuration:5e3,...r}),showError:(e,r)=>n.show({color:"danger",variant:"soft",startDecorator:(0,t.jsx)(i.J,{fill:!0,weight:700,icon:"error"}),children:e,autoHideDuration:5e3,...r})}),[n])}}},function(n){n.O(0,[4354,7066,7484,4462,1749,7450,8515,2521,752,4049,2971,8069,1744],function(){return n(n.s=43814)}),_N_E=n.O()}]);
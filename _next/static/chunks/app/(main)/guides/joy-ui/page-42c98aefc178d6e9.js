(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3182],{82238:function(e,n,r){Promise.resolve().then(r.bind(r,5234)),Promise.resolve().then(r.bind(r,88529)),Promise.resolve().then(r.bind(r,68197)),Promise.resolve().then(r.t.bind(r,89883,23)),Promise.resolve().then(r.t.bind(r,84812,23)),Promise.resolve().then(r.t.bind(r,45253,23)),Promise.resolve().then(r.t.bind(r,34848,23)),Promise.resolve().then(r.t.bind(r,81749,23)),Promise.resolve().then(r.bind(r,37919)),Promise.resolve().then(r.bind(r,55855)),Promise.resolve().then(r.bind(r,51887)),Promise.resolve().then(r.bind(r,40452))},88529:function(e,n,r){"use strict";r.r(n),r.d(n,{Box:function(){return t.Z}});var t=r(93172)},5234:function(e,n,r){"use strict";r.r(n),r.d(n,{Box:function(){return t.Z},Typography:function(){return o.ZP}});var t=r(93172),o=r(28948)},68197:function(e,n,r){"use strict";r.r(n),r.d(n,{Divider:function(){return t.Z},Table:function(){return o.Z}});var t=r(72984),o=r(67588)},6377:function(e,n,r){"use strict";r.d(n,{P:function(){return l}});var t=r(3827),o=r(78713),i=r(18876),c=r(64090);function l(e){let[n,r]=c.useState(!1);return(0,t.jsx)(o.ZP,{...e,disabled:n||e.disabled,onClick:async function(){for(var n,t,o,i=arguments.length,c=Array(i),l=0;l<i;l++)c[l]=arguments[l];r(!0),null===(n=e.onChangeIsLoading)||void 0===n||n.call(e,!0);try{await (null===(t=e.onClick)||void 0===t?void 0:t.call(e,...c))}finally{r(!1),null===(o=e.onChangeIsLoading)||void 0===o||o.call(e,!1)}},children:n?(0,t.jsx)(i.Z,{}):e.children})}},37919:function(e,n,r){"use strict";r.r(n),r.d(n,{CopyButton:function(){return l}});var t=r(3827),o=r(54049),i=r(6377),c=r(96006);function l(e){let n=(0,c.useSnackbar)();return(0,t.jsx)(i.P,{...e,onClick:async function(){for(var r,t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];await (null===(r=e.onClick)||void 0===r?void 0:r.call(e,...o));try{await navigator.clipboard.writeText(e.content),n.showSuccess("Copied to clipboard!")}catch(e){n.showError("Failed to copy to clipboard!")}},children:(0,t.jsx)(o.J,{icon:"content_copy"})})}},55855:function(e,n,r){"use strict";r.r(n),r.d(n,{Enumeration:function(){return d},EnumerationItem:function(){return h}});var t=r(3827),o=r(64090),i=r(28948),c=r(21043),l=r(98515),s=r(93172);let a=o.createContext(null),u=["numbered"];function d(e){let{type:n,...r}=e,o=u.includes(n)?"ol":"ul";return(0,t.jsx)(a.Provider,{value:{type:n},children:(0,t.jsx)(o,{...r,style:{margin:0,...r.style}})})}function h(e){let n=(0,o.use)(a),{type:r,checked:u,children:d,...h}=e;return null!=r||(r=null==n?void 0:n.type),(0,t.jsx)(i.ZP,{display:"list-item",component:"li",...h,sx:{listStyleType:r?({bulleted:"disc",numbered:"decimal",checklist:"none"})[r]:void 0},children:"checklist"!==r?d:(0,t.jsxs)(c.Z,{direction:"row",marginY:"4px",children:[(0,t.jsx)(c.Z,{height:"1lh",width:"56px",marginLeft:"-56px",justifyContent:"center",alignItems:"center",children:(0,t.jsx)(l.Z,{readOnly:!0,checked:!!u,sx:{paddingInlineStart:"16px",pointerEvents:"none"}})}),(0,t.jsx)(s.Z,{children:d})]})})}},51887:function(e,n,r){"use strict";r.r(n),r.d(n,{InlineCode:function(){return c}});var t=r(3827),o=r(96006),i=r(28948);function c(e){let{onClick:n,style:r,...c}=e,l=(0,o.useSnackbar)();return(0,t.jsx)(i.ZP,{component:"code",display:"inline","data-n2-clickable":!0,...c,style:{cursor:"pointer",...r},onClick:r=>{null==n||n(r),!function e(n){let r=n.parentElement;return!!r&&(!!r.dataset.n2Clickable||!!n.parentElement&&e(n.parentElement))}(r.currentTarget)&&(r.stopPropagation(),r.preventDefault(),(async()=>{try{await navigator.clipboard.writeText(function e(n){if(["number","string"].includes(typeof n))return"".concat(n);if(!n)return"";if(Array.isArray(n))return n.map(e).join("");if("object"==typeof n&&"props"in n)return e(n.props.children);throw Error("Unknown node type: ".concat(typeof n))}(e.children)),l.showSuccess("Copied to clipboard!")}catch(e){l.showError("Failed to copy to clipboard!")}})())}})}},40452:function(e,n,r){"use strict";r.r(n),r.d(n,{SmartLink:function(){return s}});var t=r(3827),o=r(40221),i=r(93172),c=r(54049),l=r(64090);function s(e){var n,r;let[s,a]=(0,l.useState)(!!(null===(n=e.href)||void 0===n?void 0:n.match(/^[a-z]+:/))),{hideExternalIndicator:u,...d}=e;return(0,l.useEffect)(()=>{var n;a(new URL(null!==(n=e.href)&&void 0!==n?n:"",window.location.href).origin!==window.location.origin)},[e.href]),(0,t.jsx)(o.Z,{target:s?"_blank":void 0,rel:s?"noopener noreferrer":void 0,endDecorator:!u&&s?(0,t.jsx)(c.J,{icon:"open_in_new",size:"0.8em"}):void 0,display:"inline",...d,sx:{"&:hover":{textDecoration:"none","& > .n2-smart-link-child":{textDecoration:"underline"}},...null!==(r=d.sx)&&void 0!==r?r:{}},children:(0,t.jsx)(i.Z,{component:"span",display:"inline",className:"n2-smart-link-child",children:e.children})})}},96006:function(e,n,r){"use strict";r.r(n),r.d(n,{SnackbarProvider:function(){return s},useSnackbar:function(){return a}});var t=r(3827),o=r(64090),i=r(54049),c=r(42521);let l=(0,o.createContext)(null);function s(e){let[n,r]=(0,o.useState)([]),i=(0,o.useMemo)(()=>({show:e=>{r(n=>[...n,{options:e,key:crypto.randomUUID(),open:!0}])}}),[]),s=(0,o.useCallback)(e=>{r(n=>n.map(n=>n.key===e?{...n,open:!1}:n)),setTimeout(()=>{r(n=>n.filter(n=>n.key!==e))},1e3)},[]);return(0,t.jsxs)(l.Provider,{value:i,children:[e.children,n.map(e=>(0,o.createElement)(c.Z,{autoHideDuration:5e3,...e.options,open:e.open,onClose:()=>s(e.key),key:e.key}))]})}function a(){let e=(0,o.use)(l);if(!e)throw Error("useSnackbar must be used within a SnackbarProvider");return(0,o.useMemo)(()=>({show:e.show,showSuccess:(n,r)=>e.show({color:"success",variant:"soft",startDecorator:(0,t.jsx)(i.J,{fill:!0,weight:700,icon:"check_circle"}),children:n,autoHideDuration:5e3,...r}),showError:(n,r)=>e.show({color:"danger",variant:"soft",startDecorator:(0,t.jsx)(i.J,{fill:!0,weight:700,icon:"error"}),children:n,autoHideDuration:5e3,...r})}),[e])}}},function(e){e.O(0,[4354,7066,7484,4462,1749,7450,8515,2521,5288,1661,3251,4356,7623,4089,4049,2971,8069,1744],function(){return e(e.s=82238)}),_N_E=e.O()}]);
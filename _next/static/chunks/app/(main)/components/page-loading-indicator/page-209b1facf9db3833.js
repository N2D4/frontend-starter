(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3812],{55656:function(r,e,n){Promise.resolve().then(n.bind(n,5234)),Promise.resolve().then(n.bind(n,88529)),Promise.resolve().then(n.bind(n,75808)),Promise.resolve().then(n.bind(n,68197)),Promise.resolve().then(n.t.bind(n,81749,23)),Promise.resolve().then(n.bind(n,77998)),Promise.resolve().then(n.bind(n,37919)),Promise.resolve().then(n.bind(n,55855)),Promise.resolve().then(n.bind(n,51887)),Promise.resolve().then(n.bind(n,40452))},38508:function(r,e,n){"use strict";n.d(e,{Z:function(){return j}});var o=n(56093),i=n(70444),t=n(14749),s=n(64090),a=n(75504),c=n(62423),l=n(76860),u=n(34686),d=n(57857),g=n(44411),v=n(18105);function p(r){return(0,v.d6)("MuiLinearProgress",r)}(0,v.sI)("MuiLinearProgress",["root","determinate","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","sizeSm","sizeMd","sizeLg","variantPlain","variantOutlined","variantSoft","variantSolid"]);var h=n(16905),f=n(31389),P=n(3827);function m(){let r=(0,o._)(["\n  0% {\n    left: var(--_LinearProgress-progressInset);\n    width: var(--LinearProgress-progressMinWidth);\n  }\n\n  25% {\n    width: var(--LinearProgress-progressMaxWidth);\n  }\n\n  50% {\n    left: var(--_LinearProgress-progressLeft);\n    width: var(--LinearProgress-progressMinWidth);\n  }\n\n  75% {\n    width: var(--LinearProgress-progressMaxWidth);\n  }\n\n  100% {\n    left: var(--_LinearProgress-progressInset);\n    width: var(--LinearProgress-progressMinWidth);\n  }\n"]);return m=function(){return r},r}function x(){let r=(0,o._)(["\n          &::before {\n            animation: ","\n              var(--LinearProgress-circulation, 2.5s ease-in-out 0s infinite normal none running);\n          }\n        "]);return x=function(){return r},r}let k=["children","className","component","color","size","variant","thickness","determinate","value","style","slots","slotProps"],b=r=>r,L,y,w=(0,u.F4)(L||(L=b(m()))),Z=r=>{let{determinate:e,color:n,variant:o,size:i}=r,t={root:["root",e&&"determinate",n&&"color".concat((0,c.Z)(n)),o&&"variant".concat((0,c.Z)(o)),i&&"size".concat((0,c.Z)(i))]};return(0,l.Z)(t,p,{})},C=(0,d.Z)("div",{name:"JoyLinearProgress",slot:"Root",overridesResolver:(r,e)=>e.root})(r=>{var e,n,o,i;let{ownerState:s,theme:a}=r;return(0,t.Z)({"--LinearProgress-radius":"var(--LinearProgress-thickness)","--LinearProgress-progressThickness":"var(--LinearProgress-thickness)","--LinearProgress-progressRadius":"max(var(--LinearProgress-radius) - var(--_LinearProgress-padding), min(var(--_LinearProgress-padding) / 2, var(--LinearProgress-radius) / 2))"},"sm"===s.size&&{"--LinearProgress-thickness":"4px"},"md"===s.size&&{"--LinearProgress-thickness":"6px"},"lg"===s.size&&{"--LinearProgress-thickness":"8px"},s.thickness&&{"--LinearProgress-thickness":"".concat(s.thickness,"px")},!s.determinate&&{"--LinearProgress-progressMinWidth":"calc(var(--LinearProgress-percent) * 1% / 2)","--LinearProgress-progressMaxWidth":"calc(var(--LinearProgress-percent) * 1%)","--_LinearProgress-progressLeft":"calc(100% - var(--LinearProgress-progressMinWidth) - var(--_LinearProgress-progressInset))","--_LinearProgress-progressInset":"calc(var(--LinearProgress-thickness) / 2 - var(--LinearProgress-progressThickness) / 2)"},{minBlockSize:"var(--LinearProgress-thickness)",boxSizing:"border-box",borderRadius:"var(--LinearProgress-radius)",display:"flex",justifyContent:"center",alignItems:"center",flex:1,padding:"var(--_LinearProgress-padding)",position:"relative"},null==(e=a.variants[s.variant])?void 0:e[s.color],{"--_LinearProgress-padding":"max((var(--LinearProgress-thickness) - 2 * var(--variant-borderWidth, 0px) - var(--LinearProgress-progressThickness)) / 2, 0px)","&::before":{content:'""',display:"block",boxSizing:"inherit",blockSize:"var(--LinearProgress-progressThickness)",borderRadius:"var(--LinearProgress-progressRadius)",backgroundColor:"currentColor",color:"inherit",position:"absolute"}},"soft"===s.variant&&{backgroundColor:a.variants.soft.neutral.backgroundColor,color:null==(n=a.variants.solid)?void 0:n[s.color].backgroundColor},"solid"===s.variant&&{backgroundColor:null==(o=a.variants.softHover)?void 0:o[s.color].backgroundColor,color:null==(i=a.variants.solid)?void 0:i[s.color].backgroundColor})},r=>{let{ownerState:e}=r;return e.determinate?{"&::before":{left:"var(--_LinearProgress-padding)",inlineSize:"calc(var(--LinearProgress-percent) * 1% - 2 * var(--_LinearProgress-padding))"}}:(0,u.iv)(y||(y=b(x(),0)),w)},r=>{let{ownerState:e,theme:n}=r,{borderRadius:o,height:i}=(0,f.V)({theme:n,ownerState:e},["borderRadius","height"]);return(0,t.Z)({},void 0!==o&&{"--LinearProgress-radius":o},void 0!==i&&{"--LinearProgress-thickness":i})});var j=s.forwardRef(function(r,e){let n=(0,g.Z)({props:r,name:"JoyLinearProgress"}),{children:o,className:s,component:c,color:l="primary",size:u="md",variant:d="soft",thickness:v,determinate:p=!1,value:f=p?0:25,style:m,slots:x={},slotProps:b={}}=n,L=(0,i.Z)(n,k),y=(0,t.Z)({},n,{component:c,color:l,size:u,variant:d,thickness:v,value:f,determinate:p,instanceSize:r.size}),w=Z(y),j=(0,t.Z)({},L,{component:c,slots:x,slotProps:b}),[S,_]=(0,h.Z)("root",{ref:e,className:(0,a.Z)(w.root,s),elementType:C,externalForwardedProps:j,ownerState:y,additionalProps:(0,t.Z)({as:c,role:"progressbar",style:(0,t.Z)({},{"--LinearProgress-percent":f},m)},"number"==typeof f&&p&&{"aria-valuenow":Math.round(f)})});return(0,P.jsx)(S,(0,t.Z)({},_,{children:o}))})},88529:function(r,e,n){"use strict";n.r(e),n.d(e,{Box:function(){return o.Z}});var o=n(93172)},5234:function(r,e,n){"use strict";n.r(e),n.d(e,{Box:function(){return o.Z},Typography:function(){return i.ZP}});var o=n(93172),i=n(28948)},75808:function(r,e,n){"use strict";n.r(e),n.d(e,{Card:function(){return o.Z},CardContent:function(){return i.Z},CardOverflow:function(){return t.Z},Divider:function(){return s.Z}});var o=n(32351),i=n(90941),t=n(95502),s=n(72984)},68197:function(r,e,n){"use strict";n.r(e),n.d(e,{Divider:function(){return o.Z},Table:function(){return i.Z}});var o=n(72984),i=n(67588)},77998:function(r,e,n){"use strict";n.r(e),n.d(e,{PageLoadingCheckbox:function(){return l}});var o=n(3827),i=n(93172),t=n(38508);function s(){return(0,o.jsx)(i.Z,{position:"fixed",top:0,left:0,right:0,zIndex:9999999,sx:{pointerEvents:"none"},children:(0,o.jsx)(t.Z,{variant:"solid",sx:{width:"100%","--LinearProgress-thickness":"5px","--LinearProgress-radius":"0px","--LinearProgress-progressRadius":"5px"}})})}var a=n(98515),c=n(64090);function l(){let[r,e]=(0,c.useState)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Z,{label:"Show loading indicator",checked:r,onChange:r=>e(r.target.checked)}),r&&(0,o.jsx)(s,{})]})}},6377:function(r,e,n){"use strict";n.d(e,{P:function(){return a}});var o=n(3827),i=n(78713),t=n(18876),s=n(64090);function a(r){let[e,n]=s.useState(!1);return(0,o.jsx)(i.ZP,{...r,disabled:e||r.disabled,onClick:async function(){for(var e,o,i,t=arguments.length,s=Array(t),a=0;a<t;a++)s[a]=arguments[a];n(!0),null===(e=r.onChangeIsLoading)||void 0===e||e.call(r,!0);try{await (null===(o=r.onClick)||void 0===o?void 0:o.call(r,...s))}finally{n(!1),null===(i=r.onChangeIsLoading)||void 0===i||i.call(r,!1)}},children:e?(0,o.jsx)(t.Z,{}):r.children})}},37919:function(r,e,n){"use strict";n.r(e),n.d(e,{CopyButton:function(){return a}});var o=n(3827),i=n(54049),t=n(6377),s=n(96006);function a(r){let e=(0,s.useSnackbar)();return(0,o.jsx)(t.P,{...r,onClick:async function(){for(var n,o=arguments.length,i=Array(o),t=0;t<o;t++)i[t]=arguments[t];await (null===(n=r.onClick)||void 0===n?void 0:n.call(r,...i));try{await navigator.clipboard.writeText(r.content),e.showSuccess("Copied to clipboard!")}catch(r){e.showError("Failed to copy to clipboard!")}},children:(0,o.jsx)(i.J,{icon:"content_copy"})})}},55855:function(r,e,n){"use strict";n.r(e),n.d(e,{Enumeration:function(){return d},EnumerationItem:function(){return g}});var o=n(3827),i=n(64090),t=n(28948),s=n(21043),a=n(98515),c=n(93172);let l=i.createContext(null),u=["numbered"];function d(r){let{type:e,...n}=r,i=u.includes(e)?"ol":"ul";return(0,o.jsx)(l.Provider,{value:{type:e},children:(0,o.jsx)(i,{...n,style:{margin:0,...n.style}})})}function g(r){let e=(0,i.use)(l),{type:n,checked:u,children:d,...g}=r;return null!=n||(n=null==e?void 0:e.type),(0,o.jsx)(t.ZP,{display:"list-item",component:"li",...g,sx:{listStyleType:n?({bulleted:"disc",numbered:"decimal",checklist:"none"})[n]:void 0},children:"checklist"!==n?d:(0,o.jsxs)(s.Z,{direction:"row",marginY:"4px",children:[(0,o.jsx)(s.Z,{height:"1lh",width:"56px",marginLeft:"-56px",justifyContent:"center",alignItems:"center",children:(0,o.jsx)(a.Z,{readOnly:!0,checked:!!u,sx:{paddingInlineStart:"16px",pointerEvents:"none"}})}),(0,o.jsx)(c.Z,{children:d})]})})}},51887:function(r,e,n){"use strict";n.r(e),n.d(e,{InlineCode:function(){return s}});var o=n(3827),i=n(96006),t=n(28948);function s(r){let{onClick:e,style:n,...s}=r,a=(0,i.useSnackbar)();return(0,o.jsx)(t.ZP,{component:"code",display:"inline","data-n2-clickable":!0,...s,style:{cursor:"pointer",...n},onClick:n=>{null==e||e(n),!function r(e){let n=e.parentElement;return!!n&&(!!n.dataset.n2Clickable||!!e.parentElement&&r(e.parentElement))}(n.currentTarget)&&(n.stopPropagation(),n.preventDefault(),(async()=>{try{await navigator.clipboard.writeText(function r(e){if(["number","string"].includes(typeof e))return"".concat(e);if(!e)return"";if(Array.isArray(e))return e.map(r).join("");if("object"==typeof e&&"props"in e)return r(e.props.children);throw Error("Unknown node type: ".concat(typeof e))}(r.children)),a.showSuccess("Copied to clipboard!")}catch(r){a.showError("Failed to copy to clipboard!")}})())}})}},40452:function(r,e,n){"use strict";n.r(e),n.d(e,{SmartLink:function(){return c}});var o=n(3827),i=n(40221),t=n(93172),s=n(54049),a=n(64090);function c(r){var e,n;let[c,l]=(0,a.useState)(!!(null===(e=r.href)||void 0===e?void 0:e.match(/^[a-z]+:/))),{hideExternalIndicator:u,...d}=r;return(0,a.useEffect)(()=>{var e;l(new URL(null!==(e=r.href)&&void 0!==e?e:"",window.location.href).origin!==window.location.origin)},[r.href]),(0,o.jsx)(i.Z,{target:c?"_blank":void 0,rel:c?"noopener noreferrer":void 0,endDecorator:!u&&c?(0,o.jsx)(s.J,{icon:"open_in_new",size:"0.8em"}):void 0,display:"inline",...d,sx:{"&:hover":{textDecoration:"none","& > .n2-smart-link-child":{textDecoration:"underline"}},...null!==(n=d.sx)&&void 0!==n?n:{}},children:(0,o.jsx)(t.Z,{component:"span",display:"inline",className:"n2-smart-link-child",children:r.children})})}},96006:function(r,e,n){"use strict";n.r(e),n.d(e,{SnackbarProvider:function(){return c},useSnackbar:function(){return l}});var o=n(3827),i=n(64090),t=n(54049),s=n(42521);let a=(0,i.createContext)(null);function c(r){let[e,n]=(0,i.useState)([]),t=(0,i.useMemo)(()=>({show:r=>{n(e=>[...e,{options:r,key:crypto.randomUUID(),open:!0}])}}),[]),c=(0,i.useCallback)(r=>{n(e=>e.map(e=>e.key===r?{...e,open:!1}:e)),setTimeout(()=>{n(e=>e.filter(e=>e.key!==r))},1e3)},[]);return(0,o.jsxs)(a.Provider,{value:t,children:[r.children,e.map(r=>(0,i.createElement)(s.Z,{autoHideDuration:5e3,...r.options,open:r.open,onClose:()=>c(r.key),key:r.key}))]})}function l(){let r=(0,i.use)(a);if(!r)throw Error("useSnackbar must be used within a SnackbarProvider");return(0,i.useMemo)(()=>({show:r.show,showSuccess:(e,n)=>r.show({color:"success",variant:"soft",startDecorator:(0,o.jsx)(t.J,{fill:!0,weight:700,icon:"check_circle"}),children:e,autoHideDuration:5e3,...n}),showError:(e,n)=>r.show({color:"danger",variant:"soft",startDecorator:(0,o.jsx)(t.J,{fill:!0,weight:700,icon:"error"}),children:e,autoHideDuration:5e3,...n})}),[r])}}},function(r){r.O(0,[4354,7066,7484,4462,1749,7450,8515,2521,752,4049,2971,8069,1744],function(){return r(r.s=55656)}),_N_E=r.O()}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2521],{44086:function(r,n,e){e.d(n,{d:function(){return s}});var t=e(64090),a=e(14255),o=e(87606),i=e(16319),c=e(3827);function l(r){return r.substring(2).toLowerCase()}function s(r){let{children:n,disableReactTree:e=!1,mouseEvent:s="onClick",onClickAway:u,touchEvent:d="onTouchEnd"}=r,v=t.useRef(!1),m=t.useRef(null),f=t.useRef(!1),h=t.useRef(!1);t.useEffect(()=>(setTimeout(()=>{f.current=!0},0),()=>{f.current=!1}),[]);let k=(0,a.Z)(n.ref,m),b=(0,o.Z)(r=>{let n=h.current;h.current=!1;let t=(0,i.Z)(m.current);if(f.current&&m.current&&(!("clientX"in r)||!(t.documentElement.clientWidth<r.clientX)&&!(t.documentElement.clientHeight<r.clientY))){if(v.current){v.current=!1;return}(r.composedPath?r.composedPath().indexOf(m.current)>-1:!t.documentElement.contains(r.target)||m.current.contains(r.target))||!e&&n||u(r)}}),p=r=>e=>{h.current=!0;let t=n.props[r];t&&t(e)},g={ref:k};return!1!==d&&(g[d]=p(d)),t.useEffect(()=>{if(!1!==d){let r=l(d),n=(0,i.Z)(m.current),e=()=>{v.current=!0};return n.addEventListener(r,b),n.addEventListener("touchmove",e),()=>{n.removeEventListener(r,b),n.removeEventListener("touchmove",e)}}},[b,d]),!1!==s&&(g[s]=p(s)),t.useEffect(()=>{if(!1!==s){let r=l(s),n=(0,i.Z)(m.current);return n.addEventListener(r,b),()=>{n.removeEventListener(r,b)}}},[b,s]),(0,c.jsx)(t.Fragment,{children:t.cloneElement(n,g)})}},17885:function(r,n,e){e.d(n,{D:function(){return l}});var t=e(14749),a=e(64090),o=e(39303),i=e(87606),c=e(68508);function l(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{autoHideDuration:n=null,disableWindowBlurListener:e=!1,onClose:l,open:s,resumeHideDuration:u}=r,d=(0,o.Z)();a.useEffect(()=>{if(s)return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)};function r(r){r.defaultPrevented||"Escape"!==r.key&&"Esc"!==r.key||null==l||l(r,"escapeKeyDown")}},[s,l]);let v=(0,i.Z)((r,n)=>{null==l||l(r,n)}),m=(0,i.Z)(r=>{l&&null!=r&&d.start(r,()=>{v(null,"timeout")})});a.useEffect(()=>(s&&m(n),d.clear),[s,n,m,d]);let f=d.clear,h=a.useCallback(()=>{null!=n&&m(null!=u?u:.5*n)},[n,u,m]),k=r=>n=>{let e=r.onBlur;null==e||e(n),h()},b=r=>n=>{let e=r.onFocus;null==e||e(n),f()},p=r=>n=>{let e=r.onMouseEnter;null==e||e(n),f()},g=r=>n=>{let e=r.onMouseLeave;null==e||e(n),h()};return a.useEffect(()=>{if(!e&&s)return window.addEventListener("focus",h),window.addEventListener("blur",f),()=>{window.removeEventListener("focus",h),window.removeEventListener("blur",f)}},[e,s,h,f]),{getRootProps:function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(0,t.Z)({},(0,c._)(r),(0,c._)(n));return(0,t.Z)({role:"presentation"},n,e,{onBlur:k(e),onFocus:b(e),onMouseEnter:p(e),onMouseLeave:g(e)})},onClickAway:r=>{null==l||l(r,"clickaway")}}}},42521:function(r,n,e){let t,a;e.d(n,{Z:function(){return X}});var o=e(56093),i=e(70444),c=e(14749),l=e(64090),s=e(75504),u=e(76860),d=e(44086),v=e(17885),m=e(62423),f=e(34686),h=e(16905),k=e(57857),b=e(44411),p=e(31389),g=e(62056),S=e(18105);function E(r){return(0,S.d6)("MuiSnackbar",r)}(0,S.sI)("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","colorPrimary","colorDanger","colorNeutral","colorSuccess","colorWarning","endDecorator","sizeSm","sizeMd","sizeLg","startDecorator","variantPlain","variantOutlined","variantSoft","variantSolid"]);var Z=e(3827);function y(){let r=(0,o._)(["\n  0% {\n    transform: translateX(var(--Snackbar-translateX, 0px)) translateY(calc(var(--_Snackbar-anchorBottom, 1) * 100%));\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(var(--Snackbar-translateX, 0px)) translateY(0);\n  }\n"]);return y=function(){return r},r}function w(){let r=(0,o._)(["\n  0% {\n    transform: translateX(var(--Snackbar-translateX, 0px)) translateY(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(var(--Snackbar-translateX, 0px)) translateY(calc(var(--_Snackbar-anchorBottom, 1) * 100%));\n    opacity: 0;\n  }\n"]);return w=function(){return r},r}let x=["anchorOrigin","animationDuration","autoHideDuration","color","children","className","component","disableWindowBlurListener","endDecorator","invertedColors","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","onUnmount","open","resumeHideDuration","size","slots","slotProps","startDecorator","variant"],D=r=>{let{variant:n,color:e,size:t,anchorOrigin:a}=r,o={root:["root",t&&"size".concat((0,m.Z)(t)),e&&"color".concat((0,m.Z)(e)),n&&"variant".concat((0,m.Z)(n)),"anchorOrigin".concat((0,m.Z)(a.vertical)).concat((0,m.Z)(a.horizontal))],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return(0,u.Z)(o,E,{})},z=(0,f.F4)(t||(t=y())),C=(0,f.F4)(a||(a=w())),L=(0,k.Z)("div",{name:"JoySnackbar",slot:"Root",overridesResolver:(r,n)=>n.root})(r=>{var n,e,t,a,o,i,l;let{theme:s,ownerState:u}=r,{p:d,padding:v,borderRadius:m}=(0,p.V)({theme:s,ownerState:u},["p","padding","borderRadius"]);return[(0,c.Z)({"--Snackbar-radius":s.vars.radius.sm,"--Snackbar-decoratorChildRadius":"max((var(--Snackbar-radius) - var(--variant-borderWidth, 0px)) - var(--Snackbar-padding), min(var(--Snackbar-padding) + var(--variant-borderWidth, 0px), var(--Snackbar-radius) / 2))","--Button-minHeight":"var(--Snackbar-decoratorChildHeight)","--IconButton-size":"var(--Snackbar-decoratorChildHeight)","--Button-radius":"var(--Snackbar-decoratorChildRadius)","--IconButton-radius":"var(--Snackbar-decoratorChildRadius)","--Icon-color":"currentColor"},"sm"===u.size&&{"--Snackbar-padding":"0.75rem","--Snackbar-inset":"0.5rem","--Snackbar-decoratorChildHeight":"1.5rem","--Icon-fontSize":s.vars.fontSize.xl,gap:"0.5rem"},"md"===u.size&&{"--Snackbar-padding":"1rem","--Snackbar-inset":"0.75rem","--Snackbar-decoratorChildHeight":"2rem","--Icon-fontSize":s.vars.fontSize.xl,gap:"0.625rem"},"lg"===u.size&&{"--Snackbar-padding":"1.25rem","--Snackbar-inset":"1rem","--Snackbar-decoratorChildHeight":"2.375rem","--Icon-fontSize":s.vars.fontSize.xl2,gap:"0.875rem"},{zIndex:s.vars.zIndex.snackbar,position:"fixed",display:"flex",alignItems:"center",minWidth:300,top:(null==(n=u.anchorOrigin)?void 0:n.vertical)==="top"?"var(--Snackbar-inset)":void 0,left:(null==(e=u.anchorOrigin)?void 0:e.horizontal)==="left"?"var(--Snackbar-inset)":void 0,bottom:(null==(t=u.anchorOrigin)?void 0:t.vertical)==="bottom"?"var(--Snackbar-inset)":void 0,right:(null==(a=u.anchorOrigin)?void 0:a.horizontal)==="right"?"var(--Snackbar-inset)":void 0},(null==(o=u.anchorOrigin)?void 0:o.horizontal)==="center"&&{"--Snackbar-translateX":"-50%",left:"50%",transform:"translateX(var(--Snackbar-translateX))"},(null==(i=u.anchorOrigin)?void 0:i.vertical)==="top"&&{"--_Snackbar-anchorBottom":"-1"},{animation:"".concat(z," ").concat(u.animationDuration,"ms forwards")},!u.open&&{animationName:C},{boxShadow:s.vars.shadow.lg,backgroundColor:s.vars.palette.background.surface,padding:"var(--Snackbar-padding)",borderRadius:"var(--Snackbar-radius)"},s.typography["body-".concat({sm:"xs",md:"sm",lg:"md"}[u.size])],"solid"===u.variant&&u.color&&u.invertedColors&&(0,g.Qr)(u.color)(s),"soft"===u.variant&&u.color&&u.invertedColors&&(0,g.Ev)(u.color)(s),null==(l=s.variants[u.variant])?void 0:l[u.color]),void 0!==d&&{"--Snackbar-padding":d},void 0!==v&&{"--Snackbar-padding":v},void 0!==m&&{"--Snackbar-radius":m}]}),R=(0,k.Z)("span",{name:"JoySnackbar",slot:"StartDecorator",overridesResolver:(r,n)=>n.startDecorator})({display:"inherit",flex:"none"}),O=(0,k.Z)("span",{name:"JoySnackbar",slot:"EndDecorator",overridesResolver:(r,n)=>n.endDecorator})({display:"inherit",flex:"none",marginLeft:"auto"}),B={vertical:"bottom",horizontal:"right"};var X=l.forwardRef(function(r,n){let e=(0,b.Z)({props:r,name:"JoySnackbar"}),{anchorOrigin:t=B,animationDuration:a=300,autoHideDuration:o=null,color:u="neutral",children:m,className:f,component:k,disableWindowBlurListener:p=!1,endDecorator:g,invertedColors:S=!1,onUnmount:E,open:y,size:w="md",slots:z={},slotProps:C,startDecorator:X,variant:_="outlined"}=e,I=(0,i.Z)(e,x),[T,H]=l.useState(!0),[M,N]=l.useState(!1),P=l.useRef(E);P.current=E,l.useEffect(()=>{if(y)N(!1),H(!1);else{N(!0);let r=setTimeout(()=>{var r;H(!0),N(!1),null==(r=P.current)||r.call(P)},a);return()=>{clearTimeout(r)}}},[y,a]);let A=(0,c.Z)({},e,{anchorOrigin:t,autoHideDuration:o,color:u,animationDuration:a,disableWindowBlurListener:p,invertedColors:S,size:w,variant:_});delete A.onUnmount;let F=D(A),{getRootProps:W,onClickAway:j}=(0,v.D)(A),Y=(0,c.Z)({},I,{component:k,slots:z,slotProps:C}),[J,U]=(0,h.Z)("root",{ref:n,className:(0,s.Z)(F.root,f),elementType:L,externalForwardedProps:Y,getSlotProps:W,ownerState:A}),[K,Q]=(0,h.Z)("startDecorator",{className:F.startDecorator,elementType:R,externalForwardedProps:Y,ownerState:A}),[V,q]=(0,h.Z)("endDecorator",{className:F.endDecorator,elementType:O,externalForwardedProps:Y,ownerState:A}),G=z.clickAway||d.d;return!y&&T?null:(0,Z.jsx)(G,(0,c.Z)({onClickAway:r=>{M||j(r)}},"function"==typeof(null==C?void 0:C.clickAway)?C.clickAway(A):null==C?void 0:C.clickAway,{children:(0,Z.jsxs)(J,(0,c.Z)({},U,{children:[X&&(0,Z.jsx)(K,(0,c.Z)({},Q,{children:X})),m,g&&(0,Z.jsx)(V,(0,c.Z)({},q,{children:g}))]}))}))})}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[60722],{35814:function(e,t,r){"use strict";r.d(t,{a:function(){return a}});var n=r(57437);r(2265),r(22548);let a=()=>(0,n.jsxs)("svg",{className:"super-loader__spinner",viewBox:"0 0 24 24",children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{x1:"28.1542969%",y1:"63.7402344%",x2:"74.6289062%",y2:"17.7832031%",id:"linearGradient-1",children:[(0,n.jsx)("stop",{stopColor:"rgba(164, 164, 164, 1)",offset:"0%"}),(0,n.jsx)("stop",{stopColor:"rgba(164, 164, 164, 0)",stopOpacity:"0",offset:"100%"})]})}),(0,n.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",children:(0,n.jsx)("g",{transform:"translate(-236.000000, -286.000000)",children:(0,n.jsxs)("g",{transform:"translate(238.000000, 286.000000)",children:[(0,n.jsx)("circle",{id:"Oval-2",stroke:"url(#linearGradient-1)",strokeWidth:"4",cx:"10",cy:"12",r:"10"}),(0,n.jsx)("path",{d:"M10,2 C4.4771525,2 0,6.4771525 0,12",id:"Oval-2",stroke:"rgba(164, 164, 164, 1)",strokeWidth:"4"}),(0,n.jsx)("rect",{id:"Rectangle-1",fill:"rgba(164, 164, 164, 1)",x:"8",y:"0",width:"4",height:"4",rx:"8"})]})})})]})},14938:function(e,t,r){"use strict";r.d(t,{X:function(){return a}});var n=r(57437);r(2265),r(38879);let a=e=>"checked"===e.type?(0,n.jsx)("div",{className:"notion-checkbox checked",children:(0,n.jsx)("svg",{viewBox:"0 0 14 14",children:(0,n.jsx)("polygon",{points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})})}):"partial"===e.type?(0,n.jsx)("div",{className:"notion-checkbox checked",children:(0,n.jsx)("svg",{viewBox:"0 0 14 14",children:(0,n.jsx)("rect",{x:"1.75",y:"6.125",width:"10.5",height:"1.75"})})}):(0,n.jsx)("div",{className:"notion-checkbox",children:(0,n.jsx)("svg",{viewBox:"0 0 16 16",children:(0,n.jsx)("path",{d:"M1.5,1.5 L1.5,14.5 L14.5,14.5 L14.5,1.5 L1.5,1.5 Z M0,0 L16,0 L16,16 L0,16 L0,0 Z"})})})},43102:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(57437);r(2265);var a=r(23043),l=r(4762),o=r(10265),i=r(29151),s=r(58953),c=r(14938),d=r(37769),u=r(78916);let p=e=>{let t=e.percent||0,r=17*Math.PI;return(0,n.jsxs)("svg",{viewBox:"0 0 ".concat(20," ").concat(20),color:"transparent",className:"notion-property__number__progress-ring",children:[(0,n.jsx)("circle",{r:8.5,cx:10,cy:10,strokeWidth:3,stroke:"var(--color-bg-gray)",strokeLinecap:"round",fill:"transparent"}),(0,n.jsx)("circle",{r:8.5,cx:10,cy:10,strokeWidth:3,stroke:"var(--color-text-".concat(e.color||"gray",")"),strokeLinecap:"round",strokeDasharray:r,strokeDashoffset:r-Math.min(t/100,1)*r,fill:"transparent"})]})};r(80440);let h=e=>{if(e&&e.length){let t=[];for(let r=0,n=e.length;r<n;r++){let n=Number(e.charCodeAt(r)).toString(16);t.push(n)}return t.join("")}return e},b=e=>{var t,r,v;let{id:g,type:x,value:m,icon:j,iconSize:y,pageProperty:f,statusShowAs:_}=e,w="title"===x?null:h(g);if((!x||!m)&&!1!==m)return null;switch(x){case"title":return(0,n.jsx)(u.m,{isPage:!0,noWrap:!1===e.wrap,el:(0,n.jsx)("div",{className:(0,l.cn)("notion-property notion-property__title",e.className)}),pre:"page"===j?(0,n.jsx)("div",{className:"notion-property__title__icon-wrapper",children:(0,n.jsx)(s.J,{type:"page",width:y||18,height:y||18,size:"".concat(y||18,"px"),objectFit:"contain"})}):j?(0,n.jsx)("div",{className:"notion-property__title__icon-wrapper",children:(0,n.jsx)(s.J,{src:j,width:y||18,height:y||18,size:"".concat(y||18,"px"),objectFit:"contain"})}):null,children:m});case"checkbox":{let t="true"===m?"checked":"false"===m?"unchecked":m,r=e.name||e.title;return(0,n.jsxs)("div",{className:(0,l.cn)("notion-property","notion-property__checkbox","property-".concat(w),e.className),children:[(0,n.jsx)(c.X,{type:t}),r&&"collection-card"===e.componentType?(0,n.jsx)(u.m,{children:r}):null]})}case"select":case"multi_select":return(0,n.jsx)("div",{className:(0,l.cn)("notion-property","notion-property__select","property-".concat(w),e.className,e.wrap?"wrap":"no-wrap"),children:null==m?void 0:m.map((e,t)=>(0,n.jsx)(i.D,{content:e.value,color:e.color,first:0===t},e.value))});case"status":if("checkbox"===_){let{value:r}=(null===(t=e.value)||void 0===t?void 0:t[0])||{},a={id:e.id,value:"Done"===r||"Complete"===r?"true":"In progress"===r?"partial":"false",type:"checkbox",title:[[e.name]],componentType:e.componentType,className:e.className};return(0,n.jsx)(b,{...a})}return(0,n.jsx)(b,{...e,type:"select"});case"date":case"created_time":case"last_edited_time":return(0,n.jsx)(u.m,{isProperty:!0,noWrap:!e.wrap,el:(0,n.jsx)("div",{className:(0,l.cn)("notion-property","notion-property__date",e.className,"property-".concat(w))}),children:"date"===x?m:[[m]]});case"relation":if(!m||!m.length)return null;return(0,n.jsx)(u.m,{isProperty:!0,noWrap:!e.wrap,el:(0,n.jsx)("div",{className:(0,l.cn)("notion-property","notion-property__relation",e.className,"property-".concat(w))}),children:m});case"url":return 1===m.length&&1===m[0].length&&m[0].push([["a",m[0][0]]]),(0,n.jsx)(u.m,{shortenLink:!f,noWrap:!e.wrap,el:(0,n.jsx)("div",{className:(0,l.cn)("notion-property","notion-property__url",e.className,"property-".concat(w))}),children:m});case"file":return m&&m.length?(0,n.jsx)("div",{className:(0,l.cn)("notion-property","notion-property__file",e.className,"property-".concat(w)),children:m.map((t,r)=>{let{type:l,imgSrc:o,fileName:s,file:c}=t;return"img"===l?(0,n.jsx)(d.r,{uri:o,children:(0,n.jsx)("div",{style:{position:"relative",width:30,height:24,marginInlineEnd:e.wrap?6:0},children:(0,n.jsx)(a.t,{src:o,fill:!0,objectFit:"contain",sizes:"(max-width: 546px) 30vw, 15vw"})})},s+r):(0,n.jsx)(i.D,{content:(0,n.jsx)(u.m,{children:[c]},s+r)},s+r)})}):null;case"rollup":return(0,n.jsx)("div",{className:(0,l.cn)("notion-property","notion-property__rollup",e.className,"property-".concat(w)),children:m.type?(0,n.jsx)(b,{...m,wrap:e.wrap}):m&&m.map?m.map(e=>e?(0,n.jsxs)("div",{children:[(0,n.jsx)(b,{...e}),e.addon?",":""]}):null):null});case"person":case"created_by":case"last_edited_by":return(0,n.jsx)(u.m,{isProperty:!0,noWrap:!0,el:(0,n.jsx)("div",{className:(0,l.cn)("notion-property","notion-property__person",e.className,"property-".concat(w))}),children:m});case"text":return(0,n.jsx)(u.m,{noWrap:!e.wrap,el:(0,n.jsx)("p",{className:(0,l.cn)("notion-property","notion-property__text",e.className,"property-".concat(w))}),children:m});case"number":if(e.show_as){let t=Number(null===(v=(0,o.S$)(m))||void 0===v?void 0:null===(r=v.replace(",",""))||void 0===r?void 0:r.replace("%",""));return e.show_as.maxValue&&(t=t/e.show_as.maxValue*100),(0,n.jsxs)("div",{className:(0,l.cn)("notion-property","notion-property__number",e.className,"property-".concat(w),"ring"===e.show_as.type?"notion-property__number__progress-ring-wrapper":"notion-property__number__progress-bar-wrapper"),children:[e.show_as.showValue?(0,n.jsx)("p",{className:"notion-property__number__progress-value",children:m[0]}):null,"ring"===e.show_as.type?(0,n.jsx)(p,{percent:t,color:e.show_as.color}):(0,n.jsx)("div",{className:(0,l.cn)("notion-property__number__progress-bar",e.show_as.showValue?"show-value":""),children:(0,n.jsx)("div",{style:{width:"".concat(t,"%"),background:"var(--color-text-".concat(e.show_as.color,")")}})})]})}return(0,n.jsx)(u.m,{noWrap:!e.wrap,el:(0,n.jsx)("div",{className:(0,l.cn)("notion-property","notion-property__number",e.className,"property-".concat(w))}),children:m});case"email":return(0,n.jsx)(u.m,{isEmail:!0,noWrap:!e.wrap,el:(0,n.jsx)("div",{className:(0,l.cn)("notion-property","notion-property__email",e.className,"property-".concat(w))}),children:m});case"phone_number":return(0,n.jsx)(u.m,{isPhone:!0,noWrap:!e.wrap,el:(0,n.jsx)("div",{className:(0,l.cn)("notion-property","notion-property__phone",e.className,"property-".concat(w))}),children:m});case"verification":return(0,n.jsxs)("div",{className:(0,l.cn)("notion-property","notion-property__verification",e.className),children:[(0,n.jsx)("img",{src:"/images/icons/verified.svg"}),(0,n.jsx)("p",{children:"Verified"})]});default:return(0,n.jsx)(u.m,{el:(0,n.jsx)("div",{className:(0,l.cn)("notion-property","notion-property__default",e.className,"property-".concat(w))}),children:m})}}},1308:function(e,t,r){"use strict";r.d(t,{i:function(){return l}});var n=r(57437);r(2265);var a=r(10265);r(83076);let l=e=>(0,n.jsx)("div",{id:(0,a.wj)(e.id),className:"notion-divider"})},58953:function(e,t,r){"use strict";r.d(t,{J:function(){return G}});var n=r(57437);r(2265);var a=r(57818),l=r(10265),o=r(23043);let i=e=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",width:24,height:24,style:e.style,stroke:e.color,children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),s=e=>(0,n.jsx)("svg",{className:"notion-icon notion-icon__search",viewBox:"0 0 24 24",style:e.style,children:(0,n.jsx)("path",{fill:e.color,className:"notion-icon__search-path",d:"M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"})}),c=e=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",width:24,height:24,style:e.style,stroke:e.color,children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})});r(53615);let d=(0,a.default)(()=>r.e(27542).then(r.bind(r,27542)).then(e=>e.Ai),{loadableGenerated:{webpack:()=>[27542]}}),u=(0,a.default)(()=>r.e(95189).then(r.bind(r,95189)).then(e=>e.ChevronLeft),{loadableGenerated:{webpack:()=>[95189]}}),p=(0,a.default)(()=>r.e(26222).then(r.bind(r,26222)).then(e=>e.ChevronRight),{loadableGenerated:{webpack:()=>[26222]}}),h=(0,a.default)(()=>r.e(12320).then(r.bind(r,12320)).then(e=>e.ChevronDown),{loadableGenerated:{webpack:()=>[12320]}}),b=(0,a.default)(()=>r.e(52120).then(r.bind(r,52120)).then(e=>e.EnterKey),{loadableGenerated:{webpack:()=>[52120]}}),v=(0,a.default)(()=>r.e(35279).then(r.bind(r,35279)).then(e=>e.UpDownKeys),{loadableGenerated:{webpack:()=>[35279]}}),g=(0,a.default)(()=>r.e(56898).then(r.bind(r,56898)).then(e=>e.ControlKey),{loadableGenerated:{webpack:()=>[56898]}}),x=(0,a.default)(()=>r.e(58288).then(r.bind(r,58288)).then(e=>e.BoardCollection),{loadableGenerated:{webpack:()=>[58288]}}),m=(0,a.default)(()=>r.e(80852).then(r.bind(r,80852)).then(e=>e.CalendarCollection),{loadableGenerated:{webpack:()=>[80852]}}),j=(0,a.default)(()=>r.e(19458).then(r.bind(r,19458)).then(e=>e.GalleryCollection),{loadableGenerated:{webpack:()=>[19458]}}),y=(0,a.default)(()=>r.e(18901).then(r.bind(r,18901)).then(e=>e.ListCollection),{loadableGenerated:{webpack:()=>[18901]}}),f=(0,a.default)(()=>r.e(96512).then(r.bind(r,96512)).then(e=>e.TableCollection),{loadableGenerated:{webpack:()=>[96512]}}),_=(0,a.default)(()=>r.e(98368).then(r.bind(r,98368)).then(e=>e.TimelineCollection),{loadableGenerated:{webpack:()=>[98368]}}),w=(0,a.default)(()=>r.e(72669).then(r.bind(r,72669)).then(e=>e.DotsHorizontal),{loadableGenerated:{webpack:()=>[72669]}}),N=(0,a.default)(()=>r.e(11520).then(r.bind(r,11520)).then(e=>e.Content),{loadableGenerated:{webpack:()=>[11520]}}),k=(0,a.default)(()=>r.e(96154).then(r.bind(r,96154)).then(e=>e.Heading),{loadableGenerated:{webpack:()=>[96154]}}),C=(0,a.default)(()=>r.e(76640).then(r.bind(r,76640)).then(e=>e.Page),{loadableGenerated:{webpack:()=>[76640]}}),B=(0,a.default)(()=>r.e(6065).then(r.bind(r,6065)).then(e=>e.Copy),{loadableGenerated:{webpack:()=>[6065]}}),P=(0,a.default)(()=>r.e(45171).then(r.bind(r,45171)).then(e=>e.Close),{loadableGenerated:{webpack:()=>[45171]}}),G=e=>{var t;let r=!/^(\/api|\/image|http)/.test(e.src),a=null===(t=e.src)||void 0===t?void 0:t.startsWith("/icons/"),G={width:e.size||"1em",height:e.size||"1em",fontSize:e.size||"1em",fill:e.color||"var(--color-text-default-light)",...e.style};if(e.type)switch(e.type){case"ai":return(0,n.jsx)(d,{style:G});case"chevronLeft":return(0,n.jsx)(u,{style:G});case"chevronRight":return(0,n.jsx)(p,{style:G});case"chevronDown":return(0,n.jsx)(h,{});case"boardCollection":return(0,n.jsx)(x,{});case"calendarCollection":return(0,n.jsx)(m,{});case"galleryCollection":return(0,n.jsx)(j,{});case"listCollection":return(0,n.jsx)(y,{});case"tableCollection":return(0,n.jsx)(f,{});case"timelineCollection":return(0,n.jsx)(_,{});case"dotsHorizontal":return(0,n.jsx)(w,{color:e.color});case"closeMenu":return(0,n.jsx)(c,{style:G,color:e.color});case"menu":return(0,n.jsx)(i,{style:G,color:e.color});case"heading":return(0,n.jsx)(k,{style:G,color:e.color});case"content":return(0,n.jsx)(N,{style:G,color:e.color});case"page":return(0,n.jsx)(C,{style:G});case"copy":return(0,n.jsx)(B,{style:G});case"search":return(0,n.jsx)(s,{style:G,color:e.color});case"close":return(0,n.jsx)(P,{style:G});case"enterKey":return(0,n.jsx)(b,{style:G});case"upDownKeys":return(0,n.jsx)(v,{style:G});case"controlKey":return(0,n.jsx)(g,{style:G})}return!r||(0,l.Fk)(e.src)||a?(0,n.jsx)(o.t,{src:a?"https://notion.so".concat(e.src):e.src,alt:e.alt,width:e.width,height:e.height,className:"notion-icon",objectFit:e.objectFit||"contain",objectPosition:e.objectPosition||"center"}):(0,n.jsx)("span",{className:"notion-icon text",style:e.noTextSize?void 0:G,children:e.src})}},29011:function(e,t,r){"use strict";r.d(t,{T:function(){return g},H:function(){return b}});var n=r(57437);r(2265);var a=r(69531),l=r(79288),o=r(4762),i=r(10265),s=r(58953),c=r(78916),d=r(1308),u=r(43102);let p=e=>{var t;if(e.pageProperties){let t=e.propertySort?e.propertySort.map(t=>{var r;return null===(r=e.pageProperties)||void 0===r?void 0:r.find(e=>e.id===t)}).filter(e=>!!e):e.pageProperties;return(null==t?void 0:t.length)?(0,n.jsxs)("div",{className:"notion-page__properties",children:[t.map(e=>(0,n.jsxs)("div",{className:"notion-page__property",style:{display:"grid",gridTemplateColumns:"160px 1fr",gap:8,minHeight:36},children:[(0,n.jsx)("div",{className:"notion-page__property-name",children:(0,n.jsx)("span",{children:null==e?void 0:e.name})}),(0,n.jsx)(u.Z,{...e,pageProperty:!0,wrap:!0})]},null==e?void 0:e.id)),(0,n.jsx)(d.i,{id:"root-divider"})]}):null}return(null===(t=e.propertySort)||void 0===t?void 0:t.length)?(0,n.jsxs)("div",{className:"notion-page__properties",children:[e.propertySort.map(t=>{var r;let a={...t,value:null==e?void 0:null===(r=e.propertyValues)||void 0===r?void 0:r[t.property]};return"hide_if_empty"!==a.visibility||a.value?(0,n.jsxs)("div",{className:"notion-page__property",style:{display:"grid",gridTemplateColumns:"160px 1fr",gap:8,minHeight:36},children:[(0,n.jsx)("div",{className:"notion-page__property-name",children:(0,n.jsx)("span",{children:a.name})}),(0,n.jsx)(u.Z,{...a,pageProperty:!0,wrap:!0})]},a.id):null}),(0,n.jsx)(d.i,{id:"root-divider"})]}):null};var h=r(37769);r(28282);let b=e=>{var t;let r=(null==e?void 0:null===(t=e.title)||void 0===t?void 0:t.filter(e=>/\S/g.test(e[0])))||[["Untitled"]],a=e.small?16:20,d=!!e.icon&&!/^(\/api\/image|http)/.test(e.icon),u=e.iconSize||"".concat(a,"px");return(0,n.jsxs)(h.r,{id:e.id,uri:e.uri,className:(0,o.cn)("notion-page",e.className,d?"emoji":"",e.small?"small":"",e.leftContent||e.rightContent?"has-details":"",(0,l.Of)(e.color)),children:[(0,n.jsx)("span",{className:(0,o.cn)("notion-page__icon",e.small?"small":""),children:e.icon?(0,n.jsx)(s.J,{src:e.icon,size:u,width:a,height:a,objectFit:"cover",objectPosition:"center",alt:(0,i.S$)(r)}):(0,n.jsx)(s.J,{type:"page",size:u,width:a,height:a,alt:(0,i.S$)(r)})}),e.leftContent||null,(0,n.jsx)(c.m,{isPage:!0,noColor:!!e.color,el:(0,n.jsx)("span",{className:"notion-page__title"}),children:r}),e.rightContent||null]},e.id)},v=e=>{let{settings:t}=e.ctx,r=null==e.fullWidth||e.fullWidth,l=(null==t?void 0:t.footer)&&t.footer.type!==a.ZX.None;return(0,n.jsxs)("article",{id:(0,i.wj)(e.id),className:(0,o.cn)("notion-root",r?"full-width":"max-width",l?"has-footer":""),children:[t.pageProperties?(0,n.jsx)(p,{...e}):null,e.children]},e.id)},g=e=>e.isRoot?(0,n.jsx)(v,{...e}):(0,n.jsx)(b,{...e})},29151:function(e,t,r){"use strict";r.d(t,{D:function(){return c}});var n,a,l=r(57437);r(2265);var o=r(79288),i=r(4762);r(99218),(n=a||(a={})).Default="ColorDefault",n.Gray="ColorGray",n.Brown="ColorBrown",n.Orange="ColorOrange",n.Yellow="ColorYellow",n.Green="ColorGreen",n.Blue="ColorBlue",n.Purple="ColorPurple",n.Pink="ColorPink",n.Red="ColorRed";let s={ColorDefault:"pill-default",ColorGray:"pill-gray",ColorBrown:"pill-brown",ColorOrange:"pill-orange",ColorYellow:"pill-yellow",ColorGreen:"pill-green",ColorBlue:"pill-blue",ColorPurple:"pill-purple",ColorPink:"pill-pink",ColorRed:"pill-red"},c=e=>{let t=(0,o.iI)(e.color);return(0,l.jsx)("span",{className:(0,i.cn)("notion-pill",t?s[t]:void 0,"large"===e.size?"large":void 0,e.first?"first":void 0),children:e.content})}},50819:function(e,t,r){"use strict";r.d(t,{InlineExternalObjectInstanceWrapper:function(){return p}});var n=r(57437),a=r(2265),l=r(7875),o=r(23043),i=r(58953),s=r(29011);function c(e){let[t,r]=(0,a.useState)(!1),[l,c]=(0,a.useState)(!1),[d,u]=(0,a.useState)(!1);(0,a.useEffect)(()=>{t||l?d||u(!0):d&&u(!1)},[t,l]);let p=e.title||"Untitled";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:(0,n.jsx)(s.H,{id:e.id,title:[[p]],uri:e.uri,icon:e.icon||e.integration.icon,leftContent:e.leftContent,rightContent:e.rightContent,iconSize:"1em"})}),d?(0,n.jsx)("div",{className:"notion-tooltip__wrapper",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:(0,n.jsxs)("div",{className:"notion-tooltip",children:[(0,n.jsxs)("div",{className:"notion-tooltip__integration",children:[(0,n.jsx)(i.J,{src:e.integration.icon,size:"16px",width:16,height:16}),(0,n.jsx)("p",{className:"notion-tooltip__integration-name",children:e.integration.name})]}),e.hideTooltipTitle?null:(0,n.jsx)("p",{className:"notion-tooltip__title",children:p}),e.subtitle?(0,n.jsx)("p",{className:"notion-tooltip__subtitle",children:e.subtitle}):null,e.attributes.map(e=>{let{label:t,value:r,noValue:a}=e;return(r||a)&&t?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"notion-tooltip__labeled-value",children:[(0,n.jsx)("p",{className:"notion-tooltip__label",children:t}),"string"==typeof r?(0,n.jsx)("p",{className:"notion-tooltip__value",children:r}):r?(0,n.jsx)("div",{className:"notion-tooltip__value",children:r}):null]},t)}):null}),e.thumbnail?(0,n.jsx)(o.t,{src:e.thumbnail}):null,e.message?(0,n.jsx)("p",{style:{fontSize:"14px"},children:e.message}):null]})}):null]})}r(90600);var d=r(29151);function u(e){return(0,n.jsxs)("div",{className:"notion-tooltip__user",children:[(0,n.jsx)(i.J,{src:e.avatarUrl,size:"20px",width:20,height:20}),(0,n.jsx)("p",{className:"notion-tooltip__user-name",children:e.assignee})]})}let p=e=>{if(!e.blockId)return null;let{records:t}=(0,l.l)(),r=t.block[e.blockId.replace(/-/g,"")];if(!r)return null;let a=function(e){var t,r,a,l,o,s,c,p,h,b,v,g,x,m,j,y,f,_,w,N,k,C,B,P,G,z,I,M,U,D,S,Y,L,W,O,T,F,A,E,H,J,R,V,K,Z,X;let $={title:e.attributes.title,id:e.id,attributes:[],integration:{name:e.attributes.integrationName,icon:"/images/embeds/".concat(e.type,".png")},thumbnail:null===(t=e.attributes)||void 0===t?void 0:t.thumbnailUrl};switch(e.type){case"asana":$.attributes=[{label:null===(r=e.attributes)||void 0===r?void 0:r.projectName,noValue:!0},{label:"Assigned",value:(0,n.jsx)(u,{assignee:e.attributes.assignee,avatarUrl:e.attributes.avatarUrl})},{label:"Section",value:null===(a=e.attributes)||void 0===a?void 0:a.status},{label:"Due",value:null===(l=e.attributes)||void 0===l?void 0:l.dueAt},{label:"Updated",value:null===(o=e.attributes)||void 0===o?void 0:o.updatedAt}],((null===(s=e.attributes)||void 0===s?void 0:s.status)||(null===(c=e.attributes)||void 0===c?void 0:c.avatarUrl))&&($.rightContent=(0,n.jsxs)("div",{className:"notion-external-object__mention-details",children:[(null===(p=e.attributes)||void 0===p?void 0:p.status)?(0,n.jsx)(d.D,{content:e.attributes.status}):null,(null===(h=e.attributes)||void 0===h?void 0:h.avatarUrl)?(0,n.jsx)(i.J,{src:e.attributes.avatarUrl,width:20,height:20}):null]}));break;case"dropbox":(null===(b=e.attributes)||void 0===b?void 0:b.fileSize)&&($.attributes=[{label:e.attributes.fileSize,noValue:!0}],$.rightContent=(0,n.jsx)("p",{className:"notion-page__subtitle",children:e.attributes.fileSize}));break;case"figma":$.attributes=[{label:"Modified by",value:(0,n.jsx)(u,{assignee:null===(v=e.attributes)||void 0===v?void 0:v.userName,avatarUrl:null===(g=e.attributes)||void 0===g?void 0:g.avatarUrl})},{label:"Modified at",value:null===(x=e.attributes)||void 0===x?void 0:x.updatedAt}];break;case"github":$.attributes=[{label:"Owner",value:(0,n.jsx)(u,{assignee:null===(m=e.attributes)||void 0===m?void 0:m.login,avatarUrl:null===(j=e.attributes)||void 0===j?void 0:j.avatarUrl})},{label:"Updated",value:null===(y=e.attributes)||void 0===y?void 0:y.updatedAt}],(null===(f=e.attributes)||void 0===f?void 0:f.avatarUrl)&&($.rightContent=(0,n.jsx)(i.J,{src:e.attributes.avatarUrl,width:20,height:20}));break;case"gitlab":$.leftContent=(0,n.jsx)("p",{className:"notion-page__subtitle",children:null===(_=e.attributes)||void 0===_?void 0:_.userName}),$.rightContent=(0,n.jsx)(n.Fragment,{children:(null===(w=e.attributes)||void 0===w?void 0:w.avatarUrl)?(0,n.jsx)(i.J,{src:e.attributes.avatarUrl,width:20,height:20}):null}),$.attributes=[{label:"User Name",value:null===(N=e.attributes)||void 0===N?void 0:N.userName},{label:"Updated At",value:null===(k=e.attributes)||void 0===k?void 0:k.updatedAt}];break;case"googledrive":$.attributes=[{label:"Filesize",value:null===(C=e.attributes)||void 0===C?void 0:C.fileSize},{label:"Extension",value:null===(B=e.attributes)||void 0===B?void 0:B.extension},{label:"Host",value:null===(P=e.attributes)||void 0===P?void 0:P.host}];break;case"grid":(null===(G=e.attributes)||void 0===G?void 0:G.user)&&($.title="".concat(e.attributes.user,"'s document")),(null===(z=e.attributes)||void 0===z?void 0:z.authorsUserTagname)&&($.leftContent=(0,n.jsx)("p",{className:"notion-page__subtitle",children:e.attributes.authorsUserTagname})),((null===(I=e.attributes)||void 0===I?void 0:I.authorsName)||(null===(M=e.attributes)||void 0===M?void 0:M.avatarUrl))&&($.rightContent=(0,n.jsxs)(n.Fragment,{children:[(null===(U=e.attributes)||void 0===U?void 0:U.authorsName)?(0,n.jsx)("p",{className:"notion-page__subtitle",children:e.attributes.authorsName}):null,(null===(D=e.attributes)||void 0===D?void 0:D.avatarUrl)?(0,n.jsx)(i.J,{src:e.attributes.avatarUrl,width:20,height:20}):null]}));break;case"jira":$.attributes=[{label:"Type",value:"Task"},{label:"Project",value:null===(S=e.attributes)||void 0===S?void 0:S.key},{label:"Status",value:null===(Y=e.attributes)||void 0===Y?void 0:Y.status},{label:"Updated",value:null===(L=e.attributes)||void 0===L?void 0:L.updatedAt}],(null===(W=e.attributes)||void 0===W?void 0:W.key)&&($.leftContent=(0,n.jsx)("p",{className:"notion-page__subtitle",children:e.attributes.key})),(null===(O=e.attributes)||void 0===O?void 0:O.status)&&($.rightContent=(0,n.jsx)("div",{className:"notion-tooltip__value",children:(0,n.jsx)(d.D,{content:e.attributes.status})}));break;case"linear":(null===(T=e.attributes)||void 0===T?void 0:T.entity)&&($.leftContent=(0,n.jsx)("p",{className:"notion-page__subtitle",children:e.attributes.entity})),(null===(F=e.attributes)||void 0===F?void 0:F.status)&&($.rightContent=(0,n.jsx)("div",{className:"notion-tooltip__value",children:(0,n.jsx)(d.D,{content:e.attributes.status})}));break;case"onedrive":(null===(A=e.attributes)||void 0===A?void 0:A.fileSize)&&($.attributes=[{label:e.attributes.fileSize,noValue:!0}],$.rightContent=(0,n.jsx)("p",{className:"notion-page__subtitle",children:e.attributes.fileSize}));break;case"slack":$.title=e.attributes.text,$.subtitle=e.attributes.subtitle,$.hideTooltipTitle=!0,(null===(E=e.attributes)||void 0===E?void 0:E.authorsName)&&($.attributes=[{label:"Author",value:(0,n.jsx)(u,{assignee:e.attributes.authorsName,avatarUrl:e.attributes.avatarUrl})}],$.leftContent=(0,n.jsx)("p",{className:"notion-page__subtitle",children:e.attributes.authorsName})),$.rightContent=(0,n.jsx)(i.J,{src:$.integration.icon,width:20,height:20}),$.icon=e.attributes.avatarUrl,$.message=e.attributes.text;break;case"trello":$.attributes=[{label:null===(H=e.attributes)||void 0===H?void 0:H.boardName,noValue:!0},{label:"List",value:(null===(J=e.attributes)||void 0===J?void 0:J.status)?(0,n.jsx)("div",{className:"notion-tooltip__value",children:(0,n.jsx)(d.D,{content:e.attributes.status})}):null},{label:"Updated",value:null===(R=e.attributes)||void 0===R?void 0:R.updatedAt}],(null===(V=e.attributes)||void 0===V?void 0:V.status)&&($.rightContent=(0,n.jsx)(d.D,{content:e.attributes.status}));break;case"whimsical":$.attributes=[{label:"Secondary",value:null===(K=e.attributes)||void 0===K?void 0:K.subtitle}];break;case"zoom":(null===(Z=e.attributes)||void 0===Z?void 0:Z.meetingId)&&($.attributes=[{label:"Meeting ID",value:null===(X=e.attributes)||void 0===X?void 0:X.meetingId}],$.rightContent=(0,n.jsx)("p",{className:"notion-page__subtitle",children:e.attributes.meetingId}))}return $}(r);return(0,n.jsx)(c,{...a})}},50853:function(e,t,r){"use strict";r.d(t,{InlineIndividual:function(){return o}});var n=r(57437);r(2265);var a=r(7875),l=r(58953);function o(e){var t;let{records:r}=(0,a.l)(),o=e.name?e:null===(t=r.entity)||void 0===t?void 0:t[e.id];return o?(0,n.jsxs)("span",{className:e.isProperty&&o.image?"individual-with-image":"individual",children:[e.isProperty&&o.image?(0,n.jsx)(l.J,{style:{borderRadius:"50%"},src:o.image,size:"18px",width:18,height:18,objectFit:"cover"}):null,(0,n.jsxs)("span",{children:[e.isProperty?null:(0,n.jsx)("span",{className:"notion-at",children:"@"}),o.name]})]}):null}},78916:function(e,t,r){"use strict";r.d(t,{m:function(){return L}});var n=r(57437),a=r(2265),l=r(57818),o=r(37769),i=r(4762),s=r(29004),c=r.n(s),d=r(54704),u=r.n(d),p=r(23960),h=r.n(p),b=r(71803),v=r.n(b),g=r(94590),x=r.n(g),m=r(55245),j=r.n(m),y=r(20954),f=r.n(y),_=r(48127),w=r.n(_);c().extend(u()),c().extend(h()),c().extend(f()),c().extend(v()),c().extend(x()),c().extend(j()),c().extend(w());let N=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],k=(e,t)=>e.substring(0,e.length-4)+ +t.split("-")[0],C=e=>c()(e).startOf("day").diff(c()().startOf("day"),"day")>0?"".concat(e.week()>c()().week()?"Next ":"").concat(N[e.day()]):"".concat(e.week()<c()().week()?"Last ":"").concat(N[e.day()]),B=e=>{switch(c()(e).startOf("day").diff(c()().startOf("day"),"days")){case -1:return"Yesterday";case 0:return"Today";case 1:return"Tomorrow";default:return C(e)}},P=e=>{let t,r,{date:n,time:a,timezone:l,isRelative:o,dateFormat:i="MMMM D, YYYY",timeFormat:s="h:mm A"}=e;"ll"===i&&(i="MMMM D, YYYY"),t=a?c()("".concat(n," ").concat(a),"YYYY-MM-DD HH:mm"):c()(n,"YYYY-MM-DD");let d=c()(t).startOf("day").diff(c()().startOf("day"),"day");if(r=o&&d<=7&&d>=-7?B(t):t.format(i),a){r+=c()("".concat(n," ").concat(a),"YYYY-MM-DD HH:mm").format(" ".concat(s));try{r+=c()().tz(l).format(l?" (z)":"")}catch(e){console.error(e)}}return n.startsWith("00")&&(r=k(r,n)),r};function G(e){let t;let r="relative"===e.data.date_format;r||(t=e.data.date_format);let a="LT"===e.data.time_format?"h:mm A":e.data.time_format,l=P({date:e.data.start_date,time:e.data.start_time,timezone:e.data.time_zone,isRelative:r,dateFormat:t,timeFormat:a}),o=e.data.end_date?P({date:e.data.end_date,time:e.data.end_time,timezone:e.data.time_zone,isRelative:r,dateFormat:t,timeFormat:a}):null;try{return(0,n.jsxs)("span",{className:"date",children:[e.isProperty?null:(0,n.jsx)("span",{className:"notion-at",children:"@"}),e.data.end_date?"".concat(l," → ").concat(o):l]})}catch(e){return console.log("InlineDate Error:",e),(0,n.jsx)(n.Fragment,{children:""})}}var z=r(29011);function I(e){return e.noInteractive?(0,n.jsx)(L,{noInteractive:!0,noBorder:!0,el:(0,n.jsx)("span",{className:"resource"}),pre:e.isProperty?null:(0,n.jsx)("span",{className:"notion-at",children:"@"}),children:e.data.title}):(0,n.jsx)(z.H,{...e.data,id:"",className:"resource",small:e.isProperty})}var M=r(50853),U=r(79288);let D=e=>(0,n.jsx)("span",{className:(0,i.cn)("highlighted-".concat(e.type),(0,U.Of)(e.color)),children:e.children});var S=r(50819);r(83976);let Y=(0,l.default)(()=>Promise.all([r.e(76341),r.e(90121),r.e(18287),r.e(26869)]).then(r.bind(r,26869)).then(e=>e.Equation),{loadableGenerated:{webpack:()=>[26869]}}),L=e=>e.el?a.createElement(e.el.type,{...e.el.props,className:(0,i.cn)(e.className,e.el.props.className||"","notion-semantic-string",e.noBorder?"no-border":"",e.noWrap?"no-wrap":"")},(0,n.jsx)(W,{...e})):(0,n.jsx)("span",{className:(0,i.cn)(e.className,"notion-semantic-string",e.noBorder?"no-border":""),children:(0,n.jsx)(W,{...e})}),W=e=>(0,n.jsxs)(n.Fragment,{children:[e.pre,e.children&&e.children.length&&Array.isArray(e.children)?e.children.filter(e=>!!e).map((t,r)=>{let l,{0:i,1:s}=t,c="".concat(r,"-").concat(i);if(e.shortenLink&&(0===i.indexOf("http://")||0===i.indexOf("https://")))try{let e=new URL(i).hostname;l=(0,n.jsx)(a.Fragment,{children:e},c)}catch(e){l=(0,n.jsx)(a.Fragment,{},c)}else l=(0,n.jsx)(a.Fragment,{children:i},c);if(s&&s.length){if(e.isPage)l=[...s].reduce((t,r,a)=>{let{0:l,1:o}=r,i="".concat(a,"-").concat(l);switch(l){case"h":if(e.noColor)return t;return(0,n.jsx)(D,{type:o.startsWith("Bg")?"background":"color",color:o,children:t},i);case"d":return(0,n.jsx)(G,{data:o,isProperty:e.isProperty},i);case"u":return(0,n.jsx)(M.InlineIndividual,{isProperty:e.isProperty,id:o},i);case"p":return(0,n.jsx)(I,{data:o,noInteractive:e.noInteractive,isProperty:e.isProperty},i);default:return t}},l);else if(e.noStyling)l=[...s].reduce((t,r,a)=>{let{0:l,1:o}=r,i="".concat(a,"-").concat(l);switch(l){case"d":return(0,n.jsx)(G,{data:o,isProperty:e.isProperty},i);case"u":return(0,n.jsx)(M.InlineIndividual,{isProperty:e.isProperty,id:o},i);case"p":return(0,n.jsx)(I,{data:o,noInteractive:e.noInteractive,isProperty:e.isProperty},i);default:return t}},l);else{let t=r=>[...r].reduce((r,a,l)=>{let{0:i,1:s}=a,c="".concat(l,"-").concat(i);switch(i){case"b":return(0,n.jsx)("strong",{children:r},c);case"i":return(0,n.jsx)("em",{children:r},c);case"s":return(0,n.jsx)("del",{children:r},c);case"_":return(0,n.jsx)("u",{children:r},c);case"c":return(0,n.jsx)("code",{className:"code",children:r},c);case"e":return(0,n.jsx)(Y,{latex:s.trim(),inline:!0},c);case"u":return"string"==typeof s?(0,n.jsx)(M.InlineIndividual,{isProperty:e.isProperty,id:s},c):(0,n.jsx)(M.InlineIndividual,{isProperty:e.isProperty,...s},c);case"p":return(0,n.jsx)(I,{data:s,noInteractive:e.noInteractive,isProperty:e.isProperty},c);case"d":return(0,n.jsx)(G,{data:s,isProperty:e.isProperty},c);case"a":if(e.noInteractive)return r;return(0,n.jsx)(o.r,{className:"link",uri:e.isEmail?"mailto:".concat(s):e.isPhone?"tel:".concat(s):s,children:r},s);case"h":if(e.noColor)return r;return(0,n.jsx)(D,{type:s.startsWith("Bg")?"background":"color",color:s,children:r},c);case"eoi":return(0,n.jsx)(S.InlineExternalObjectInstanceWrapper,{blockId:s},c);case"‣":return t(s);default:return console.log("Unsupported formatting: ".concat(i)),r}},l);l=t(s)}}else l=","===i?(0,n.jsx)(a.Fragment,{},c):(0,n.jsx)(a.Fragment,{children:i},c);return l}):e.children,e.post]})},79288:function(e,t,r){"use strict";r.d(t,{Of:function(){return o},iI:function(){return l}});let n={gray:"gray",brown:"brown",orange:"orange",yellow:"yellow",green:"green",teal:"teal",blue:"blue",purple:"purple",pink:"pink",red:"red",grayBg:"gray_background",brownBg:"brown_background",orangeBg:"orange_background",yellowBg:"yellow_background",tealBg:"teal_background",blueBg:"blue_background",purpleBg:"purple_background",pinkBg:"pink_background",redBg:"red_background"},a=(e,t)=>{let r=t?"-light":"";switch(e){case"ColorDefault":return"color-default";case"ColorGray":return"color-gray";case"ColorBrown":return"color-brown";case"ColorOrange":return"color-orange";case"ColorYellow":return"color-yellow";case"ColorGreen":return"color-green";case"ColorBlue":return"color-blue";case"ColorPurple":return"color-purple";case"ColorPink":return"color-pink";case"ColorRed":return"color-red";case"BgDefault":return"bg-default"+r;case"BgGray":return"bg-gray"+r;case"BgBrown":return"bg-brown"+r;case"BgOrange":return"bg-orange"+r;case"BgYellow":return"bg-yellow"+r;case"BgGreen":return"bg-green"+r;case"BgBlue":return"bg-blue"+r;case"BgPurple":return"bg-purple"+r;case"BgPink":return"bg-pink"+r;case"BgRed":return"bg-red"+r;default:return""}};function l(e,t){let r="Color",a="text"===t?r:"background"===t?"Bg":null;switch(e){case n.gray:return(a||r)+"Gray";case n.brown:return(a||r)+"Brown";case n.orange:return(a||r)+"Orange";case n.yellow:return(a||r)+"Yellow";case n.green:case n.teal:return(a||r)+"Green";case n.blue:return(a||r)+"Blue";case n.purple:return(a||r)+"Purple";case n.pink:return(a||r)+"Pink";case n.red:return(a||r)+"Red";case n.grayBg:return(a||"Bg")+"Gray";case n.brownBg:return(a||"Bg")+"Brown";case n.orangeBg:return(a||"Bg")+"Orange";case n.yellowBg:return(a||"Bg")+"Yellow";case n.tealBg:return(a||"Bg")+"Green";case n.blueBg:return(a||"Bg")+"Blue";case n.purpleBg:return(a||"Bg")+"Purple";case n.pinkBg:return(a||"Bg")+"Pink";case n.redBg:return(a||"Bg")+"Red";default:return(a||r)+"Default"}}let o=(e,t)=>a(e,t)},22548:function(){},38879:function(){},80440:function(){},83076:function(){},53615:function(){},28282:function(){},99218:function(){},83976:function(){},90600:function(){}}]);
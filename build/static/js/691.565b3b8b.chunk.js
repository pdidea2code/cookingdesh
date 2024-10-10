"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[691],{52691:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var o=a(9955),c=a(90977),r=a(13838),s=a(89078),n=a(72791),i=a(57689),l=a(76794),d=a(24824),u=a(29900),h=a(29655),m=a(62062),p=a.n(m),g=a(52608),w=a(80184);const v=()=>{const e=(0,i.s0)(),[t,a]=(0,n.useState)([]),m=async()=>{try{const e=(await(0,g.pT)()).data.info.map((e=>({...e,status:Boolean(e.status)})));a(e)}catch(e){console.log(e),e.response&&e.response.data&&!e.response.data.success?401===e.response.data.status?h.Am.error(e.response.data.message):h.Am.error(e.response.data.message||"An unexpected error occurred."):h.Am.error("An unexpected error occurred.")}};(0,n.useEffect)((()=>{m()}),[]);const v=[{name:"duration",label:"Duration",options:{filter:!0,sort:!0}},{name:"amount",label:"Amount",options:{filter:!0,sort:!0}},{name:"day",label:"day",options:{filter:!0,sort:!0}},{name:"status",label:"Status",options:{filter:!0,sort:!1,customBodyRender:(e,c)=>{let{rowIndex:r}=c;const{status:s,_id:n}=t[r];return(0,w.jsx)(o.Z,{checked:s,onChange:()=>(async(e,t)=>{const o={id:t,status:!e};try{await(0,g.E9)(o,t),h.Am.success("Status changed successfully!",{key:t}),a((a=>a.map((a=>a._id===t?{...a,status:!e}:a))))}catch{h.Am.error("Something went wrong!",{key:t})}})(s,n)})}}},{name:"_id",label:"Action",options:{customBodyRender:a=>(0,w.jsxs)("div",{children:[(0,w.jsx)(l.Z,{className:"editButton",onClick:()=>{const o=t.find((e=>e._id===a));e("/Plan-form",{state:{editData:o}})}}),(0,w.jsx)(d.Z,{className:"deleteButton",onClick:async()=>{if(await p()({title:"Are you sure?",text:"Are you sure you want to delete this plan? All related data will also be deleted.",icon:"warning",buttons:["No, cancel it!","Yes, I am sure!"],dangerMode:!0}))try{await(0,g.Kh)(a),h.Am.success("Deleted successfully!",{key:a}),m()}catch{h.Am.error("Something went wrong!",{key:a})}}})]})}}],k=e=>{let{selectedRows:a}=e;return(0,w.jsx)("div",{children:(0,w.jsx)(c.Z,{onClick:()=>(async e=>{const a=e.data.map((e=>t[e.dataIndex]._id));if(await p()({title:"Are you sure?",text:"Are you sure that you want to delete the selected plans?",icon:"warning",buttons:["No, cancel it!","Yes, I am sure!"],dangerMode:!0}))try{await(0,g.$O)(a),h.Am.success("Deleted successfully!",{key:a.join(",")}),m()}catch{h.Am.error("Something went wrong!",{key:a.join(",")})}})(a),children:(0,w.jsx)(u.Z,{})})})},b={customToolbarSelect:e=>(0,w.jsx)(k,{selectedRows:e})};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(h.Ix,{}),(0,w.jsx)("div",{className:"right-text",children:(0,w.jsx)(r.Z,{variant:"contained",size:"medium",className:"AddButton",onClick:()=>e("/Plan-form"),children:"Add Plan"})}),(0,w.jsx)(s.ZP,{title:"Plan List",data:t,columns:v,options:b})]})}},29900:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(76189),c=a(80184);const r=(0,o.Z)((0,c.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},24824:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(76189),c=a(80184);const r=(0,o.Z)((0,c.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1"}),"DeleteRounded")},76794:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(76189),c=a(80184);const r=(0,o.Z)((0,c.jsx)("path",{d:"M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"EditRounded")},9955:(e,t,a)=>{a.d(t,{Z:()=>Z});var o=a(63366),c=a(87462),r=a(72791),s=a(63733),n=a(94419),i=a(12065),l=a(14036),d=a(97278),u=a(31402),h=a(66934),m=a(75878),p=a(21217);function g(e){return(0,p.Z)("MuiSwitch",e)}const w=(0,m.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);var v=a(80184);const k=["className","color","edge","size","sx"],b=(0,h.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.edge&&t["edge".concat((0,l.Z)(a.edge))],t["size".concat((0,l.Z)(a.size))]]}})((e=>{let{ownerState:t}=e;return(0,c.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===t.edge&&{marginLeft:-8},"end"===t.edge&&{marginRight:-8},"small"===t.size&&{width:40,height:24,padding:7,["& .".concat(w.thumb)]:{width:16,height:16},["& .".concat(w.switchBase)]:{padding:4,["&.".concat(w.checked)]:{transform:"translateX(16px)"}}})})),y=(0,h.ZP)(d.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.switchBase,{["& .".concat(w.input)]:t.input},"default"!==a.color&&t["color".concat((0,l.Z)(a.color))]]}})((e=>{let{theme:t}=e;return{position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:"".concat("light"===t.palette.mode?t.palette.common.white:t.palette.grey[300]),transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),["&.".concat(w.checked)]:{transform:"translateX(20px)"},["&.".concat(w.disabled)]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:"".concat("light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[600])},["&.".concat(w.checked," + .").concat(w.track)]:{opacity:.5},["&.".concat(w.disabled," + .").concat(w.track)]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:"".concat("light"===t.palette.mode?.12:.2)},["& .".concat(w.input)]:{left:"-100%",width:"300%"}}}),(e=>{let{theme:t,ownerState:a}=e;return(0,c.Z)({"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,i.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==a.color&&{["&.".concat(w.checked)]:{color:(t.vars||t).palette[a.color].main,"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,i.Fq)(t.palette[a.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(w.disabled)]:{color:t.vars?t.vars.palette.Switch["".concat(a.color,"DisabledColor")]:"".concat("light"===t.palette.mode?(0,i.$n)(t.palette[a.color].main,.62):(0,i._j)(t.palette[a.color].main,.55))}},["&.".concat(w.checked," + .").concat(w.track)]:{backgroundColor:(t.vars||t).palette[a.color].main}})})),x=(0,h.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})((e=>{let{theme:t}=e;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}})),f=(0,h.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})((e=>{let{theme:t}=e;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),Z=r.forwardRef((function(e,t){const a=(0,u.Z)({props:e,name:"MuiSwitch"}),{className:r,color:i="primary",edge:d=!1,size:h="medium",sx:m}=a,p=(0,o.Z)(a,k),w=(0,c.Z)({},a,{color:i,edge:d,size:h}),Z=(e=>{const{classes:t,edge:a,size:o,color:r,checked:s,disabled:i}=e,d={root:["root",a&&"edge".concat((0,l.Z)(a)),"size".concat((0,l.Z)(o))],switchBase:["switchBase","color".concat((0,l.Z)(r)),s&&"checked",i&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=(0,n.Z)(d,g,t);return(0,c.Z)({},t,u)})(w),S=(0,v.jsx)(f,{className:Z.thumb,ownerState:w});return(0,v.jsxs)(b,{className:(0,s.Z)(Z.root,r),sx:m,ownerState:w,children:[(0,v.jsx)(y,(0,c.Z)({type:"checkbox",icon:S,checkedIcon:S,ref:t,ownerState:w},p,{classes:(0,c.Z)({},Z,{root:Z.switchBase})})),(0,v.jsx)(x,{className:Z.track,ownerState:w})]})}))}}]);
//# sourceMappingURL=691.565b3b8b.chunk.js.map
"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[310],{49310:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var a=s(90977),n=s(13838),o=s(89078),c=s(72791),i=s(57689),r=s(76794),d=s(24824),l=s(29900),u=s(29655),m=s(62062),h=s.n(m),p=s(52608),w=s(80184);const x=()=>{const e=(0,i.s0)(),{state:t}=(0,i.TH)(),[s,m]=(0,c.useState)([]),x=async()=>{try{const e=(await(0,p.Oj)(t.id)).data.info.map((e=>({...e,recipeId:e.recipeid})));m(e)}catch(e){console.log(e),e.response.data.success||(401===e.response.data.status?u.Am.error(e.response.data.message):u.Am.error(e.response.data.message||"Something went wrong!"))}};(0,c.useEffect)((()=>{x()}),[]);const y=[{name:"name",label:"Name",options:{filter:!0,sort:!0}},{name:"amount",label:"Amount",options:{filter:!0,sort:!0}},{name:"_id",label:"Action",options:{customBodyRender:t=>(0,w.jsxs)("div",{children:[(0,w.jsx)(r.Z,{className:"editButton",onClick:()=>{const a=s.find((e=>e._id===t));e("/Nutrition-form",{state:{editData:a}})}}),(0,w.jsx)(d.Z,{className:"deleteButton",onClick:async()=>{if(await h()({title:"Are you sure?",text:"Are you sure you want to delete this nutrition entry? All related data will also be deleted.",icon:"warning",buttons:["No, cancel it!","Yes, I am sure!"],dangerMode:!0}))try{await(0,p.EW)(t),u.Am.success("Deleted successfully!",{key:t}),x()}catch{u.Am.error("Something went wrong!",{key:t})}}})]})}}],j=e=>{let{selectedRows:t}=e;return(0,w.jsx)("div",{children:(0,w.jsx)(a.Z,{onClick:()=>(async e=>{const t=e.data.map((e=>s[e.dataIndex]._id));if(await h()({title:"Are you sure?",text:"Are you sure that you want to delete the selected nutrition entries?",icon:"warning",buttons:["No, cancel it!","Yes, I am sure!"],dangerMode:!0}))try{await(0,p.cU)(t),u.Am.success("Deleted successfully!",{key:t.join(",")}),x()}catch{u.Am.error("Something went wrong!",{key:t.join(",")})}})(t),children:(0,w.jsx)(l.Z,{})})})},f={customToolbarSelect:(e,t)=>(0,w.jsx)(j,{selectedRows:e,data:t,columns:y})};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u.Ix,{}),(0,w.jsx)("div",{className:"right-text",children:(0,w.jsx)(n.Z,{variant:"contained",size:"medium",className:"AddButton",onClick:()=>e("/Nutrition-Add",{state:{id:t.id}}),children:"Add Nutrition"})}),(0,w.jsx)(o.ZP,{title:"Nutrition List",data:s,columns:y,options:f})]})}},29900:(e,t,s)=>{s.d(t,{Z:()=>o});var a=s(76189),n=s(80184);const o=(0,a.Z)((0,n.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},24824:(e,t,s)=>{s.d(t,{Z:()=>o});var a=s(76189),n=s(80184);const o=(0,a.Z)((0,n.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1"}),"DeleteRounded")},76794:(e,t,s)=>{s.d(t,{Z:()=>o});var a=s(76189),n=s(80184);const o=(0,a.Z)((0,n.jsx)("path",{d:"M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"EditRounded")}}]);
//# sourceMappingURL=310.b52055ec.chunk.js.map
"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[503],{24503:(e,s,r)=>{r.r(s),r.d(s,{default:()=>m});var a=r(89078),t=r(72791),n=r(57689),o=r(29655),i=(r(62062),r(52608)),l=r(78983),c=r(61134),d=r(80184);const m=()=>{(0,n.s0)();const[e,s]=(0,t.useState)([]),{register:r,getValues:m,setValue:u,handleSubmit:p,clearErrors:x,formState:{errors:f}}=(0,c.cI)();(0,t.useEffect)((()=>{(async()=>{try{const e=(await(0,i.Ox)()).data.info.map((e=>({...e,planname:e.planid.duration,username:e.userid.name})));s(e)}catch(e){console.log(e),e.response&&e.response.data&&!e.response.data.success?401===e.response.data.status?o.Am.error(e.response.data.message):o.Am.error(e.response.data.message||"An unexpected error occurred."):o.Am.error("An unexpected error occurred.")}})()}),[]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.Ix,{}),(0,d.jsxs)(l.lx,{className:"row g-3 mb-4",onSubmit:p((async e=>{try{const s=await(0,i.bV)(e.sessionid);o.Am.success(s.data.message)}catch(s){o.Am.error(s.response.data.message||"An unexpected error occurred.")}})),children:[(0,d.jsxs)(l.b7,{xl:4,md:12,children:[(0,d.jsx)(l.L8,{children:"Chack Payment"}),(0,d.jsx)(l.jO,{type:"text",id:"validationDefault01",...r("sessionid",{required:"sessionid is required"}),placeholder:"sessionid",invalid:!!f.sessionid}),(0,d.jsx)(l.CO,{invalid:!0,children:"sessionid is required"})]}),(0,d.jsx)(l.b7,{xl:2,md:12,children:(0,d.jsx)(l.u5,{type:"submit",className:"mt-4",children:"search"})})]}),(0,d.jsx)(a.ZP,{title:"Payment List",data:e,columns:[{name:"planname",label:"plan name",options:{filter:!0,sort:!0}},{name:"amount",label:"Amount",options:{filter:!0,sort:!0}},{name:"username",label:"user name",options:{filter:!0,sort:!0}},{name:"currency",label:"currency",options:{filter:!0,sort:!0}},{name:"status",label:"status",options:{filter:!0,sort:!0}},{name:"paymentId",label:"paymentId",options:{filter:!0,sort:!0}},{name:"sessionId",label:"sessionId",options:{filter:!0,sort:!0}}],options:{}})]})}}}]);
//# sourceMappingURL=503.3658f8f6.chunk.js.map
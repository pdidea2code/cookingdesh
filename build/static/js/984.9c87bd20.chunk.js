"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[984],{51984:(e,s,n)=>{n.r(s),n.d(s,{default:()=>u});var l=n(72791),a=n(78983),r=n(61134),t=n(24846),i=n(98030),m=n(52608),c=n(29655),o=(n(5462),n(57689)),d=n(80184);const u=()=>{const[e,s]=(0,l.useState)(!1),{state:n}=(0,o.TH)(),u=(0,o.s0)(),{register:x,control:h,handleSubmit:j,formState:{errors:p}}=(0,r.cI)({defaultValues:{elements:[{name:"",amount:"",unitId:"",idValue:""}]}}),{fields:b,append:g,remove:v}=(0,r.Dq)({control:h,name:"elements"}),N=()=>{g({name:"",amount:"",idValue:n.id})};return(0,l.useEffect)((()=>{console.log(n.id)}),[]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.KB,{className:"mt-3",children:(0,d.jsx)(a.rb,{children:(0,d.jsx)(a.b7,{md:12,children:(0,d.jsxs)(a.xH,{children:[(0,d.jsx)(a.bn,{children:(0,d.jsx)("strong",{children:"Nutrition Form"})}),(0,d.jsxs)(a.sl,{className:"mt-3",children:[(0,d.jsx)(c.Ix,{}),(0,d.jsxs)(a.lx,{className:"row g-3",onSubmit:j((async e=>{s(!0);try{const s=e.elements.map((e=>({name:e.name,amount:e.amount,recipeid:n.id})));console.log(s);const l=await(0,m.FM)(s);console.log("API Response:",l.data),c.Am.success("Data submitted successfully!"),u("/Nutrition",{state:{id:n.id}})}catch(l){console.error("Error submitting form data:",l),c.Am.error("Error submitting form data.")}finally{s(!1)}})),children:[b.map(((e,s)=>{var n,l,r,m,c,o,u,h;return(0,d.jsxs)(a.rb,{className:"mb-3 align-items-end",children:[(0,d.jsxs)(a.b7,{xl:3,md:12,children:[(0,d.jsx)(a.L8,{children:"Name"}),(0,d.jsx)(a.jO,{type:"text",...x("elements.".concat(s,".name"),{required:"Name is required"}),invalid:!(null===(n=p.elements)||void 0===n||null===(l=n[s])||void 0===l||!l.name),placeholder:"Name"}),(null===(r=p.elements)||void 0===r||null===(m=r[s])||void 0===m?void 0:m.name)&&(0,d.jsx)(a.Jh,{className:"text-danger",children:p.elements[s].name.message})]}),(0,d.jsxs)(a.b7,{xl:3,md:12,children:[(0,d.jsx)(a.L8,{children:"Amount"}),(0,d.jsx)(a.jO,{type:"text",...x("elements.".concat(s,".amount"),{required:"Amount is required"}),invalid:!(null===(c=p.elements)||void 0===c||null===(o=c[s])||void 0===o||!o.amount),placeholder:"Amount"}),(null===(u=p.elements)||void 0===u||null===(h=u[s])||void 0===h?void 0:h.amount)&&(0,d.jsx)(a.Jh,{className:"text-danger",children:p.elements[s].amount.message})]}),(0,d.jsx)(a.b7,{xl:2,md:12,className:"mt-2",children:(0,d.jsx)(a.u5,{onClick:()=>(e=>{v(e)})(s),color:"danger",className:"me-2",children:"Remove"})}),s===b.length-1&&(0,d.jsx)(a.b7,{xl:1,md:12,children:(0,d.jsx)(a.u5,{onClick:N,color:"primary",className:"me-2",children:(0,d.jsx)(t.Z,{icon:i.q})})})]},e.id)})),(0,d.jsx)(a.rb,{className:"mt-3",children:(0,d.jsx)(a.b7,{md:12,className:"text-center",children:e?(0,d.jsxs)(a.u5,{disabled:!0,children:[(0,d.jsx)(a.LQ,{component:"span",size:"sm","aria-hidden":"true"}),"Loading..."]}):(0,d.jsx)(a.u5,{type:"submit",className:"AddButton",children:"Submit"})})})]})]})]})})})})})}},98030:(e,s,n)=>{n.d(s,{q:()=>l});var l=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='440 240 272 240 272 72 240 72 240 240 72 240 72 272 240 272 240 440 272 440 272 272 440 272 440 240' class='ci-primary'/>"]}}]);
//# sourceMappingURL=984.9c87bd20.chunk.js.map
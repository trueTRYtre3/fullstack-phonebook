(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{20:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(15),a=n.n(r),o=(n(20),n(6)),u=n(3),i=n(0),s=function(t){return Object(i.jsxs)("div",{children:["Filter shown with:  ",Object(i.jsx)("input",{onChange:function(e){t.setFilterContact(t.persons.filter((function(t){return t.name===e.target.value})))}})]})},d=function(t){var e=Object(c.useState)(""),n=Object(u.a)(e,2),r=n[0],a=n[1],o=Object(c.useState)(""),s=Object(u.a)(o,2),d=s[0],j=s[1];return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.persons.some((function(t){return t.name===r}))?window.confirm("".concat(r," is already added to phonebook, replace the old number with a new one"))&&(t.updateContact(r,d),a(""),j("")):(t.createContact(r,d),a(""),j(""))},children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{onChange:function(t){return a(t.target.value)},value:r})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{onChange:function(t){return j(t.target.value)},value:d})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},j=function(t){return Object(i.jsx)("div",{children:t.contactList.map((function(e,n){return Object(i.jsxs)("p",{children:[e.name," ",e.number,"  ",Object(i.jsx)("button",{onClick:function(){return function(e){window.confirm("Delete ".concat(e.name))&&t.deleteContact(e.id,e.name)}(e)},children:"Delete"})]},n)}))})},b=n(4),f=n.n(b),h="/api/persons",l=function(){return f.a.get(h).then((function(t){return t.data}))},O=function(t){return f.a.post(h,t).then((function(t){return t.data}))},m=function(t,e){return f.a.put("".concat(h,"/").concat(t),e).then((function(t){return t.data}))},p=function(t){return f.a.delete("".concat(h,"/").concat(t)).then((function(t){return t.data}))},x=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)([]),b=Object(u.a)(a,2),f=b[0],h=b[1],x=Object(c.useState)(!1),v=Object(u.a)(x,2),w=v[0],C=v[1],g=Object(c.useState)(!1),S=Object(u.a)(g,2),k=S[0],y=S[1],D=Object(c.useState)({}),F=Object(u.a)(D,2),L=F[0],N=F[1],A=Object(c.useState)(""),E=Object(u.a)(A,2),I=E[0],J=E[1];Object(c.useEffect)((function(){l().then((function(t){r(t)}))}),[]);var P=Object(i.jsxs)("h2",{className:"message",children:[L.word," ",L.name]}),B=Object(i.jsx)("h2",{className:"errorMessage",children:I}),M=0!==f.length?f:n;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Phonebook"}),w&&(k?P:B),Object(i.jsx)(s,{setFilterContact:h,persons:n}),Object(i.jsx)("h1",{children:"Add New Contact"}),Object(i.jsx)(d,{persons:n,setPersons:r,updateContact:function(t,e){var c=n.find((function(e){return e.name===t})),a=Object(o.a)(Object(o.a)({},c),{},{number:e});m(c.id,a).then((function(e){r(n.map((function(n){return n.name!==t?n:e}))),C(!0),y(!0),N({name:t,word:"Updated"})}))},createContact:function(t,e){O({name:t,number:e}).then((function(e){r(n.concat(e)),C(!0),y(!0),N({name:t,word:"Added"})})).catch((function(t){y(!1),C(!0),J(t.response.data.error)}))}}),Object(i.jsx)("h1",{children:"Contact List"}),Object(i.jsx)(j,{contactList:M,deleteContact:function(t,e){p(t).then((function(){r(n.filter((function(e){return e.id!==t}))),C(!0),N({name:e,word:"Deleted"})})).catch((function(c){C(!0),y(!1),J("Information of ".concat(e," has already been removed from the server")),r(n.filter((function(e){return e.id!==t})))}))}})]})};a.a.render(Object(i.jsx)(x,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.de811641.chunk.js.map
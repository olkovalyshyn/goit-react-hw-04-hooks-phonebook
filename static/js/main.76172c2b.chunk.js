(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{18:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__2G4yp",label:"ContactForm_label__P9lsJ",input:"ContactForm_input__3WGRX",button:"ContactForm_button__10IF-"}},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n(1),c=n.n(o),r=n(10),s=n.n(r),u=(n(18),n(12)),i=n(4),l=n(2),m=n.n(l);function b(t){var e=t.onAdd,n=Object(o.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],u=Object(o.useState)(""),l=Object(i.a)(u,2),b=l[0],f=l[1],d=function(t){switch(t.currentTarget.name){case"name":s(t.currentTarget.value);break;case"number":f(t.currentTarget.value);break;default:return}};return Object(a.jsxs)("form",{className:m.a.form,onSubmit:function(t){t.preventDefault(),s(""),f(""),e(r,b)},children:[Object(a.jsxs)("label",{className:m.a.label,children:["Name",Object(a.jsx)("input",{type:"text",name:"name",className:m.a.input,value:r,onChange:d})]}),Object(a.jsxs)("label",{className:m.a.label,children:["Number",Object(a.jsx)("input",{type:"tel",name:"number",className:m.a.input,value:b,onChange:d})]}),Object(a.jsx)("button",{type:"submit",className:m.a.button,children:"Add contact"})]})}var f=n(3),d=n.n(f),j=n(8),C=n.n(j);function h(t){var e=t.contacts,n=t.onDeleteContact;return console.log("!!!contacts",e),Object(a.jsx)("ul",{className:C.a.formContact,children:e.map((function(t){var e=t.id,o=t.name,c=t.number;return Object(a.jsxs)("li",{className:C.a.formContactItem,children:[o,": ",c,Object(a.jsx)("button",{className:C.a.formContactButton,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})}var g=h;h.propType={contacts:d.a.arrayOf(d.a.shape({id:d.a.string,name:d.a.string,number:d.a.string})),onDeleteContact:d.a.func};var p=function(t){var e=t.value,n=t.onChange;return Object(a.jsx)("input",{type:"text",value:e,onChange:n})},O=n(11),v=n.n(O),x=(n(29),[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]);function _(){var t=Object(o.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("savedContacts")))&&void 0!==t?t:x})),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(o.useState)(""),s=Object(i.a)(r,2),l=s[0],m=s[1];Object(o.useEffect)((function(){window.localStorage.setItem("savedContacts",JSON.stringify(n))}),[n]),console.log("!!!APP",n);var f=localStorage.getItem("savedContacts"),d=JSON.parse(f);return console.log("!!!parsedContactsFromLocalStorage",d),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(b,{onAdd:function(t,e){var a={id:v.a.generate(),name:t,number:e};n.find((function(t){return t.name.toLowerCase()===a.name.toLowerCase()}))?alert("".concat(t," is already in contacts.")):c((function(t){return[a].concat(Object(u.a)(t))}))}}),Object(a.jsx)("h3",{children:"Find contacts by name"}),Object(a.jsx)(p,{value:l,onChange:function(t){m(t.currentTarget.value)}}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(g,{contacts:function(){var t=l.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),onDeleteContact:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})}var S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),a(t),o(t),c(t),r(t)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root")),S()},8:function(t,e,n){t.exports={formContact:"ContactList_formContact__2gY3E",formContactItem:"ContactList_formContactItem__2l5ar",formContactButton:"ContactList_formContactButton__kTtaS"}}},[[30,1,2]]]);
//# sourceMappingURL=main.76172c2b.chunk.js.map
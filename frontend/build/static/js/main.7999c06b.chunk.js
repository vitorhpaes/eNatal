(this.webpackJsonpnatal=this.webpackJsonpnatal||[]).push([[0],{66:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(1),s=a.n(n),c=a(13),o=a.n(c),i=a(34),d=a(5),u=a(6),l=a.n(u),j=a(12),p=a(8),h=a(31),b=a.n(h).a.create({baseURL:"http://natalsolidariolages.online/api"});var O=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),o=Object(p.a)(c,2),i=o[0],d=o[1];function u(e){localStorage.setItem("numeroPedido",e),d(e)}function h(){return(h=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.post("/pedido",{pedido:a});case 2:t=e.sent,u(t.data.numero);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){localStorage.getItem("numeroPedido")}),[]),Object(r.jsxs)("div",{className:"hover",children:[Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h3",{children:"Natal solid\xe1rio"}),Object(r.jsx)("h1",{children:"Lages - SC"})]}),Object(r.jsx)("div",{className:"card-pedido",children:i?Object(r.jsx)("div",{className:"show-numero-pedido",children:Object(r.jsxs)("h1",{children:["Ol\xe1!! Recebemos seu pedido com sucesso!",Object(r.jsx)("br",{}),"Volte aqui mais tarde para ver se o seu pedido foi realizado!",Object(r.jsx)("br",{}),"Voc\xea tamb\xe9m pode consultar a partir do n\xfamero do seu pedido!!",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("center",{children:["N\xfamero: ",i]})]})}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("textarea",{className:"caixa",placeholder:"Digite seu pedido aqui",onChange:function(e){return s(e.target.value)},children:a}),Object(r.jsx)("button",{className:"btn-envio-pedido",onClick:function(){return h.apply(this,arguments)},children:"Enviar pedido!"})]})})]})},m=a(16),x=a(32);var f=function(e){var t=e.pedido,a=e.confirmar,s=e.afterChange,c=Object(n.useState)(""),o=Object(p.a)(c,2),i=o[0],d=o[1];function u(){return(u=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.post("/pedido/setStatus",{pedidoId:t.id,status:1});case 2:s&&s();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.post("/pedido/setStatus",{pedidoId:t.id,status:0});case 2:s&&s();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e="Ol\xe1!! Quero realizar um sonho! Eu selecionei o pedido de n\xfamero ".concat(t.id,". Como fa\xe7o para realiz\xe1-lo?");d("https://api.whatsapp.com/send?phone=".concat("5547999254473","&text=").concat(e))}),[t]),Object(r.jsxs)("div",{className:"card-pedido ".concat(t.status?"resolvido":""),children:[Object(r.jsxs)("div",{className:"card-header",children:["Pedido n\xba ",t.id]}),Object(r.jsx)("div",{className:"card-body",children:t.pedido}),Object(r.jsxs)("div",{className:"card-footer",children:[!a&&Object(r.jsx)(r.Fragment,{children:2!==t.status?Object(r.jsx)("a",{className:"btn-resolver-pedido ".concat(t.status?"disabled":""),href:t.status?"#":i,target:t.status?"":"_blank",children:t.status?"Pedido realizado!":Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x.a,{})," Realizar!!"]})}):Object(r.jsxs)("center",{children:[Object(r.jsx)("br",{}),"Tem certeza que digitou o n\xfamero certo??"]})}),a&&!t.status&&Object(r.jsx)("button",{className:"btn-resolver-pedido",onClick:function(){return u.apply(this,arguments)},children:"Confirmar realiza\xe7\xe3o"}),a&&!!t.status&&t.status>0&&Object(r.jsx)("button",{className:"btn-resolver-pedido disabled",onClick:function(){return h.apply(this,arguments)},children:"Pedido j\xe1 realizado"})]})]})};var v=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),o=Object(p.a)(c,2),i=o[0],d=o[1],u=Object(m.a)(["pedidos",i],(function(){return v.apply(this,arguments)})),h=u.isLoading,O=u.isFetching,x=u.error;function v(){return(v=Object(j.a)(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i?{pedidoId:i}:{},e.next=3,b.get("/pedido",{params:t});case 3:a=e.sent,r=a.data,s(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return u.data,Object(r.jsxs)("div",{className:"hover flex-start",children:[Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h3",{children:"Realize um sonho!"}),Object(r.jsxs)("p",{children:["Dividimos o mesmo objetivo! Um sorriso \xe9 um passo a mais por um mundo melhor!",Object(r.jsx)("br",{}),"Vem comigo, vou te mostrar algum sonho que voc\xea pode realizar!"]}),Object(r.jsx)("input",{placeholder:"Busque o seu pedido pelo n\xfamero!",className:"form-control",onChange:function(e){return d(e.target.value)},value:i})]}),(h||O)&&Object(r.jsx)("h2",{children:"Carregando pedidos..."}),x&&Object(r.jsx)("h2",{children:"Erro ao carregar pedidos..."}),a.length?a.map((function(e){return Object(r.jsx)(f,{pedido:e},e.id)})):Object(r.jsx)(f,{pedido:{status:2,pedido:"Nenhum pedido encontrado"}})]})},g=a(33),S=a(17);var N=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),o=Object(p.a)(c,2),i=o[0],d=o[1],u=Object(n.useState)(null),h=Object(p.a)(u,2),O=h[0],x=h[1],v=Object(m.a)(["pedidos",i],(function(){return F.apply(this,arguments)})),N=v.isLoading,C=v.isFetching,w=v.error,z=v.refetch;function y(){return(y=Object(j.a)(l.a.mark((function e(){var t,a,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S.a.loading("Fazendo login"),a=t.hide,e.next=3,b.post("/auth",{password:I});case 3:if(r=e.sent,a(),n=r.data.login){e.next=8;break}return e.abrupt("return",S.a.error("Senha incorreta..."));case 8:S.a.success("Login realizado com sucesso"),x(n),localStorage.setItem("auth",n),b.defaults.headers.Authorization=n;case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){var e=localStorage.getItem("auth");if(!e)return!1;x(e),b.defaults.headers.Authorization=e}));var E=Object(n.useState)(""),k=Object(p.a)(E,2),I=k[0],_=k[1];if(!O)return Object(r.jsxs)("div",{className:"hover",children:[Object(r.jsx)("input",{type:"password",placeholder:"Senha de acesso",id:"login-input",onChange:function(e){return _(e.target.value)},value:I}),Object(r.jsxs)("div",{id:"login-btn",onClick:function(){return y.apply(this,arguments)},children:[Object(r.jsx)(g.a,{})," Login"]})]});function F(){return(F=Object(j.a)(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i?{pedidoId:i}:{},console.log(t),e.next=4,b.get("/pedido",{params:t});case 4:a=e.sent,r=a.data,s(r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.jsxs)("div",{className:"hover flex-start",children:[Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h3",{children:"Confirma\xe7\xe3o de pedidos"}),Object(r.jsx)("p",{children:"Somente confirme o pedido se ele foi realizado!"}),Object(r.jsx)("input",{placeholder:"N\xfamero do pedido realizado...",className:"form-control",onChange:function(e){return d(e.target.value)},value:i})]}),(N||C)&&Object(r.jsx)("h2",{children:"Carregando pedidos..."}),w&&Object(r.jsx)("h2",{children:"Erro ao carregar pedidos..."}),a.length?a.map((function(e){return Object(r.jsx)(f,{pedido:e,confirmar:!0,afterChange:z},e.id)})):Object(r.jsx)(f,{pedido:{status:2,pedido:"Nenhum pedido encontrado"}})]})};a(60),a(66);var C=function(){return console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})),Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(i.a,{children:Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{exact:!0,path:"/",component:O}),Object(r.jsx)(d.a,{exact:!0,path:"/realizeUmSonho",component:v}),Object(r.jsx)(d.a,{exact:!0,path:"/confirmar",component:N})]})})})};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.7999c06b.chunk.js.map
import{d as T,r as m,u as N,i as R,m as l,o as j,p as z,v as e,a as s,z as $,x as t,S as U,B as n}from"./vue.52656417.js";import{p as V,l as q}from"./main.ac5b2b8e.js";import{_ as G}from"./source.9971ae9c.js";const H=T({name:"LayoutMenu",props:{collapse:String},setup(){const i=m(!1);new ResizeObserver(c=>{c.forEach(a=>{const o=a.contentRect;o.width<=1440?(i.value=!0,console.log(o.width)):i.value=!1})}).observe(document.body);const r=N(),f=m("form-base"),h=c=>{let a=c;return document.location.hash.includes("?")&&(a+=document.location.hash.substring(document.location.hash.indexOf("?"))),a};return R(()=>{r.name&&(f.value=r.name)}),{version:V.version,defaultActive:f,getMenuLink:h,logoUrl:q,isCollapse:i}}}),I={class:"aside-logo"},J=["src"],Q=s("h1",null,"\u9E3F\u9E3EPRO",-1),W={class:"sub-title"},Y={class:"aside-menu"},K={class:"scroll-box"},X={class:"scroll-cell"},Z={class:"scroll-body"},ee=n("DASHBOARD"),te=n("\u4EEA\u8868\u76D8"),ne=n("\u5DE5\u4F5C\u53F0"),ue=n("Pages"),ie=s("span",null,"\u8868\u5355\u9875",-1),le=n("\u57FA\u7840\u8868\u5355"),se=n("\u5206\u6B65\u8868\u5355-\u6A2A\u5411"),oe=n("\u5206\u6B65\u8868\u5355-\u7EB5\u5411"),de=n("\u5206\u533A\u8868\u5355"),ae=n("\u7EFC\u5408\u8868\u5355"),_e=s("span",null,"\u8868\u683C\u9875",-1),ce=n("\u57FA\u7840\u8868\u683C"),re=s("span",null,"\u5185\u90E8\u6EDA\u52A8\u8868\u683C",-1),fe=n(),pe=n("\u9875\u7B7E\u5F0F\u8868\u683C"),he=n("\u5361\u7247\u9875\u7B7E\u5F0F\u8868\u683C"),ge=n("\u5206\u680F\u5F0F\u8868\u683C"),me=s("span",null,"\u5217\u8868\u9875",-1),xe=n("\u7528\u6237\u5217\u8868"),Ee=n("\u6587\u7AE0\u5217\u8868"),ke=s("span",null,"\u6587\u7AE0\u5217\u8868",-1),be=n("\u4EA7\u54C1\u5217\u8868"),Fe=n("\u9879\u76EE\u5217\u8868"),Le=n("\u63CF\u8FF0\u5217\u8868"),Ce=n("\u6587\u4EF6\u5217\u8868"),Me=s("span",null,"\u4EFB\u52A1\u5217\u8868",-1),ve=s("span",null,"\u8BE6\u60C5\u9875",-1),ye=n("\u4FE1\u606F\u5C55\u793A"),Ae=n("\u4EFB\u52A1\u8BE6\u60C5"),Be=n("\u6B65\u9AA4\u8BE6\u60C5"),De=n("\u7528\u6237"),we=n("\u4F01\u4E1A\u4FE1\u606F"),Pe=n("\u641C\u7D22\u7ED3\u679C"),Se=n("FAQ"),Oe=s("span",null,"\u7ED3\u679C\u9875",-1),Te=n("Error 404"),Ne=n("Error 500"),Re=n("Empty"),je=n("\u7EF4\u62A4\u4E2D"),ze=n("\u70ED\u66F4\u65B0"),$e=n("\u7ED3\u679C\u53CD\u9988-\u6210\u529F"),Ue=n("\u7ED3\u679C\u53CD\u9988-\u5931\u8D25"),Ve=s("span",null,"\u6CE8\u518C\u767B\u5F55",-1),qe=n("\u6CE8\u518C"),Ge=n("\u767B\u5F55"),He=n("\u5206\u6B65\u6CE8\u518C"),Ie=n("\u627E\u56DE\u5BC6\u7801"),Je=n("\u91CD\u8BBE\u5BC6\u7801"),Qe=n("\u77ED\u4FE1\u9A8C\u8BC1"),We=n("\u90AE\u4EF6\u9A8C\u8BC1"),Ye=n("\u4FE1\u606F\u786E\u8BA4"),Ke=n("\u7ED3\u679C\u53CD\u9988\u90AE\u4EF6"),Xe=n("WIDGETS"),Ze=s("span",null,"\u5361\u7247",-1),et=n("\u4FE1\u606F\u5217\u8868"),tt=n("\u6570\u636E\u7EDF\u8BA1"),nt=n("\u8868\u683C"),ut=n("\u6DF7\u5408"),it=n("\u6587\u7AE0"),lt=n("\u5BFC\u822A"),st=s("span",null,"\u5F39\u7A97",-1),ot=n("\u6D6E\u7A97"),dt=n("\u6A21\u6001\u7A97"),at=s("span",null,"\u56FE\u8868",-1),_t=n("\u6298\u7EBF\u56FE"),ct=n("\u67F1\u72B6\u56FE"),rt=n("\u997C\u72B6\u56FE"),ft=n("\u5176\u4ED6\u56FE"),pt=s("span",null,"\u56FE\u6807",-1),ht=n("Twotones"),gt=n("Fill"),mt=n("Files"),xt=n("APPS"),Et=n("\u65E5\u5386"),kt=n("\u804A\u5929"),bt=n("\u7F16\u8F91\u5668"),Ft=n("\u6D88\u606F\u90AE\u7BB1"),Lt=n("LAYOUT"),Ct=s("span",null,"\u6846\u67B6",-1),Mt=n("\u6B22\u8FCE"),vt=n("\u63D0\u793A"),yt=n("\u8868\u5355");function At(i,x,r,f,h,c){const a=l("fill-Layer"),o=l("hl-icon"),u=l("hl-menu-item"),E=l("fill-airplay"),_=l("hl-menu-item-group"),k=l("fill-edit"),d=l("hl-sub-menu"),b=l("fill-page"),p=l("hl-badge"),F=l("fill-Server"),L=l("fill-BookOpen"),C=l("fill-Notice"),M=l("fill-Preview"),v=l("fill-copy"),g=l("fill-box"),y=l("fill-ChartPie"),A=l("fill-Exit"),B=l("fill-Calendar"),D=l("fill-Talk"),w=l("fill-mail"),P=l("fill-Application"),S=l("hl-menu"),O=l("hl-aside");return j(),z(O,{class:U(i.collapse)},{default:e(()=>[s("div",I,[s("img",{src:i.logoUrl,alt:"hongluang.ui"},null,8,J),Q,s("span",W,$(i.version),1)]),s("div",Y,[s("div",K,[s("div",X,[s("div",Z,[t(S,{"default-active":i.defaultActive,"unique-opened":!0,router:!0,collapse:i.isCollapse},{default:e(()=>[t(_,null,{title:e(()=>[ee]),default:e(()=>[t(u,{index:i.getMenuLink("dashboard")},{title:e(()=>[te]),default:e(()=>[t(o,null,{default:e(()=>[t(a)]),_:1})]),_:1},8,["index"]),t(u,{index:i.getMenuLink("workbench")},{title:e(()=>[ne]),default:e(()=>[t(o,null,{default:e(()=>[t(E)]),_:1})]),_:1},8,["index"])]),_:1}),t(_,null,{title:e(()=>[ue]),default:e(()=>[t(d,{index:"forms","popper-append-to-body":!0,"fallback-placements":["right-start"]},{title:e(()=>[t(o,null,{default:e(()=>[t(k)]),_:1}),ie]),default:e(()=>[t(u,{index:i.getMenuLink("form-base")},{default:e(()=>[le]),_:1},8,["index"]),t(u,{index:i.getMenuLink("form-step-x")},{default:e(()=>[se]),_:1},8,["index"]),t(u,{index:i.getMenuLink("form-step-y")},{default:e(()=>[oe]),_:1},8,["index"]),t(u,{index:i.getMenuLink("form-zone")},{default:e(()=>[de]),_:1},8,["index"]),t(u,{index:i.getMenuLink("form-multiple")},{default:e(()=>[ae]),_:1},8,["index"])]),_:1}),t(d,{index:"tables","popper-append-to-body":!0,"fallback-placements":["right-start"]},{title:e(()=>[t(o,null,{default:e(()=>[t(b)]),_:1}),_e]),default:e(()=>[t(u,{index:i.getMenuLink("table-base")},{default:e(()=>[ce]),_:1},8,["index"]),t(u,{index:i.getMenuLink("table-inner-scroll")},{default:e(()=>[re,fe,t(p,{value:"new",type:"danger",style:{"align-self":"right"},class:"static"})]),_:1},8,["index"]),t(u,{index:i.getMenuLink("table-tabs")},{default:e(()=>[pe]),_:1},8,["index"]),t(u,{index:i.getMenuLink("table-tabs-card")},{default:e(()=>[he]),_:1},8,["index"]),t(u,{index:i.getMenuLink("table-cols")},{default:e(()=>[ge]),_:1},8,["index"])]),_:1}),t(d,{index:"lists","popper-append-to-body":!0,"fallback-placements":["right-start"]},{title:e(()=>[t(o,null,{default:e(()=>[t(F)]),_:1}),me]),default:e(()=>[t(u,{index:i.getMenuLink("list-user")},{default:e(()=>[xe]),_:1},8,["index"]),t(u,{index:i.getMenuLink("list-article2")},{default:e(()=>[Ee]),_:1},8,["index"]),t(u,{index:i.getMenuLink("list-article")},{default:e(()=>[ke,t(p,{value:"new",type:"danger",style:{"align-self":"right"},class:"static"})]),_:1},8,["index"]),t(u,{index:i.getMenuLink("list-product")},{default:e(()=>[be]),_:1},8,["index"]),t(u,{index:i.getMenuLink("list-project")},{default:e(()=>[Fe]),_:1},8,["index"]),t(u,{index:i.getMenuLink("list-description")},{default:e(()=>[Le]),_:1},8,["index"]),t(u,{index:i.getMenuLink("list-files")},{default:e(()=>[Ce]),_:1},8,["index"]),t(u,{index:i.getMenuLink("list-task")},{default:e(()=>[Me,t(p,{value:"new",type:"danger",style:{"align-self":"right"},class:"static"})]),_:1},8,["index"])]),_:1}),t(d,{index:"detail","popper-append-to-body":!0,"fallback-placements":["right-start"]},{title:e(()=>[t(o,null,{default:e(()=>[t(L)]),_:1}),ve]),default:e(()=>[t(u,{index:i.getMenuLink("detail-multiple")},{default:e(()=>[ye]),_:1},8,["index"]),t(u,{index:i.getMenuLink("detail-task")},{default:e(()=>[Ae]),_:1},8,["index"]),t(u,{index:i.getMenuLink("detail-step")},{default:e(()=>[Be]),_:1},8,["index"]),t(u,{index:i.getMenuLink("profile-user")},{default:e(()=>[De]),_:1},8,["index"]),t(u,{index:i.getMenuLink("profile-enterprise")},{default:e(()=>[we]),_:1},8,["index"]),t(u,{index:i.getMenuLink("search-result")},{default:e(()=>[Pe]),_:1},8,["index"]),t(u,{index:i.getMenuLink("faq")},{default:e(()=>[Se]),_:1},8,["index"])]),_:1}),t(d,{index:"result","popper-append-to-body":!0,"fallback-placements":["right-start"]},{title:e(()=>[t(o,null,{default:e(()=>[t(C)]),_:1}),Oe]),default:e(()=>[t(u,{index:"/result/result-404"},{default:e(()=>[Te]),_:1}),t(u,{index:"/result/result-500"},{default:e(()=>[Ne]),_:1}),t(u,{index:"/result/result-empty"},{default:e(()=>[Re]),_:1}),t(u,{index:"/result/result-maintenance"},{default:e(()=>[je]),_:1}),t(u,{index:"/result/updating"},{default:e(()=>[ze]),_:1}),t(u,{index:"/result/result-success"},{default:e(()=>[$e]),_:1}),t(u,{index:"/result/result-error"},{default:e(()=>[Ue]),_:1})]),_:1}),t(d,{index:"verify","popper-append-to-body":!0,"fallback-placements":["right-start"]},{title:e(()=>[t(o,null,{default:e(()=>[t(M)]),_:1}),Ve]),default:e(()=>[t(u,{index:"/verify/sign-up"},{default:e(()=>[qe]),_:1}),t(u,{index:"/verify/sign-in"},{default:e(()=>[Ge]),_:1}),t(u,{index:"/verify/sign-up-step"},{default:e(()=>[He]),_:1}),t(u,{index:"/verify/retrieve-password"},{default:e(()=>[Ie]),_:1}),t(u,{index:"/verify/reset-password"},{default:e(()=>[Je]),_:1}),t(u,{index:"/verify/verify-sms"},{default:e(()=>[Qe]),_:1}),t(u,{index:"/verify/verify-mail"},{default:e(()=>[We]),_:1}),t(u,{index:"/verify/sign-up-confirm"},{default:e(()=>[Ye]),_:1}),t(u,{index:"/verify/result-mail"},{default:e(()=>[Ke]),_:1})]),_:1})]),_:1}),t(_,null,{title:e(()=>[Xe]),default:e(()=>[t(d,{index:"4","popper-append-to-body":!0,"fallback-placements":["right-start"]},{title:e(()=>[t(o,null,{default:e(()=>[t(v)]),_:1}),Ze]),default:e(()=>[t(u,{index:i.getMenuLink("info-card")},{default:e(()=>[et]),_:1},8,["index"]),t(u,{index:i.getMenuLink("data-card")},{default:e(()=>[tt]),_:1},8,["index"]),t(u,{index:i.getMenuLink("table-card")},{default:e(()=>[nt]),_:1},8,["index"]),t(u,{index:i.getMenuLink("mixed-card")},{default:e(()=>[ut]),_:1},8,["index"]),t(u,{index:i.getMenuLink("article-card")},{default:e(()=>[it]),_:1},8,["index"]),t(u,{index:i.getMenuLink("nav-card")},{default:e(()=>[lt]),_:1},8,["index"])]),_:1}),t(d,{index:"6","popper-append-to-body":!0,"fallback-placements":["right-start"]},{title:e(()=>[t(o,null,{default:e(()=>[t(g)]),_:1}),st]),default:e(()=>[t(u,{index:i.getMenuLink("modeless")},{default:e(()=>[ot]),_:1},8,["index"]),t(u,{index:i.getMenuLink("modals")},{default:e(()=>[dt]),_:1},8,["index"])]),_:1}),t(d,{index:"chart","popper-append-to-body":!0,"fallback-placements":["right-start"]},{title:e(()=>[t(o,null,{default:e(()=>[t(y)]),_:1}),at]),default:e(()=>[t(u,{index:i.getMenuLink("line-chart")},{default:e(()=>[_t]),_:1},8,["index"]),t(u,{index:i.getMenuLink("column-chart")},{default:e(()=>[ct]),_:1},8,["index"]),t(u,{index:i.getMenuLink("pie-chart")},{default:e(()=>[rt]),_:1},8,["index"]),t(u,{index:i.getMenuLink("other-chart")},{default:e(()=>[ft]),_:1},8,["index"])]),_:1}),t(d,{index:"11","popper-append-to-body":!0,"fallback-placements":["right-start"]},{title:e(()=>[t(o,null,{default:e(()=>[t(A)]),_:1}),pt]),default:e(()=>[t(u,{index:i.getMenuLink("icon-twotones")},{default:e(()=>[ht]),_:1},8,["index"]),t(u,{index:i.getMenuLink("icon-fill")},{default:e(()=>[gt]),_:1},8,["index"]),t(u,{index:i.getMenuLink("icon-files")},{default:e(()=>[mt]),_:1},8,["index"])]),_:1})]),_:1}),t(_,null,{title:e(()=>[xt]),default:e(()=>[t(u,{index:i.getMenuLink("calendar")},{title:e(()=>[Et]),default:e(()=>[t(o,null,{default:e(()=>[t(B)]),_:1})]),_:1},8,["index"]),t(u,{index:i.getMenuLink("chat")},{title:e(()=>[kt]),default:e(()=>[t(o,null,{default:e(()=>[t(D)]),_:1})]),_:1},8,["index"]),t(u,{index:i.getMenuLink("editor")},{title:e(()=>[bt]),default:e(()=>[t(o,null,{default:e(()=>[t(g)]),_:1})]),_:1},8,["index"]),t(u,{index:"inbox"},{title:e(()=>[Ft]),default:e(()=>[t(o,null,{default:e(()=>[t(w)]),_:1})]),_:1})]),_:1}),t(_,null,{title:e(()=>[Lt]),default:e(()=>[t(d,{index:"10","popper-append-to-body":!0,"fallback-placements":["right-start"]},{title:e(()=>[t(o,null,{default:e(()=>[t(P)]),_:1}),Ct]),default:e(()=>[t(u,{index:"table"},{default:e(()=>[Mt]),_:1}),t(u,{index:"table"},{default:e(()=>[vt]),_:1}),t(u,{index:"table"},{default:e(()=>[yt]),_:1})]),_:1})]),_:1})]),_:1},8,["default-active","collapse"])])])])])]),_:1},8,["class"])}var Pt=G(H,[["render",At]]);export{Pt as L};

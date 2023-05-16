import{_ as R}from"./source.9971ae9c.js";import{d as I,r as m,aY as g,m as t,o as $,c as j,x as u,v as e,a,F as q,B as s,z as U}from"./vue.52656417.js";import"./echarts.3578bebe.js";const G=I({setup(){const o=m("first"),n=m([{id:1,color:"primary",icon:"server",title:"Button \u6309\u94AE",sub_title:"HTML, JS, Scss",type:"\u8868\u5355",des:"\u94AE\u7EC4\u4EF6\u4E5F\u62E5\u6709\u7EDF\u4E00\u7684\u72B6\u6001\u8272\uFF0C\u5982\uFF1Aprimary, danger \u7B49",update:"2021\u5E747\u670818\u65E5"},{id:2,color:"warning",icon:"Copy",title:"Input \u8F93\u5165\u6846",sub_title:"HTML, JS, Scss",type:"\u8868\u5355",des:"\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\u8F93\u5165\u5185\u5BB9\uFF0CInput \u4E3A\u53D7\u63A7\u7EC4\u4EF6",update:"2021\u5E747\u670818\u65E5"},{id:3,color:"success",icon:"Computer",title:"Autocomplete \u8F93\u5165\u5EFA\u8BAE",sub_title:"HTML, JS, Scss",type:"\u8868\u5355",des:"autocomplete \u662F\u4E00\u4E2A\u5E26\u8F93\u5165\u5EFA\u8BAE\u7684\u8F93\u5165\u6846\u7EC4\u4EF6",update:"2021\u5E747\u670818\u65E5"},{id:4,color:"danger",icon:"Clock",title:"InputNumber \u8BA1\u6570\u5668",sub_title:"HTML, JS, Scss",type:"\u8868\u5355",des:"\u8BA1\u6570\u5668\u7531group\u5BB9\u5668\u548Cbutton\u3001input\u7EC4\u6210",update:"2021\u5E747\u670818\u65E5"},{id:5,color:"info",icon:"Camera",title:"Select \u9009\u62E9\u5668",sub_title:"HTML, JS, Scss",type:"\u8868\u5355",des:"\u5F53\u9009\u9879\u8FC7\u591A\u65F6\uFF0C\u4F7F\u7528\u4E0B\u62C9\u83DC\u5355\u5C55\u793A\u5E76\u9009\u62E9\u5185\u5BB9",update:"2021\u5E747\u670818\u65E5"},{id:6,color:"warning",icon:"Box",title:"Radio \u5355\u9009\u6846",sub_title:"HTML, JS, Scss",type:"\u8868\u5355",des:"\u7528\u4E8E\u5728\u591A\u4E2A\u5907\u9009\u9879\u4E2D\u9009\u4E2D\u5355\u4E2A\u72B6\u6001",update:"2021\u5E747\u670818\u65E5"},{id:7,color:"danger",icon:"Book",title:"Checkbox \u590D\u9009\u6846",sub_title:"HTML, JS, Scss",type:"\u8868\u5355",des:"\u4F7F\u7528checkbox\u6765\u521B\u5EFA\u8DE8\u6D4F\u89C8\u5668\u7684\u590D\u9009\u6846",update:"2021\u5E747\u670818\u65E5"},{id:8,color:"success",icon:"Repository",title:"Switch \u5F00\u5173",sub_title:"HTML, JS, Scss",type:"\u8868\u5355",des:"\u8868\u793A\u4E24\u79CD\u76F8\u4E92\u5BF9\u7ACB\u7684\u72B6\u6001\u95F4\u7684\u5207\u6362",update:"2021\u5E747\u670818\u65E5"},{id:8,color:"success",icon:"Repository",title:"Switch \u5F00\u5173",sub_title:"HTML, JS, Scss",type:"\u8868\u5355",des:"\u8868\u793A\u4E24\u79CD\u76F8\u4E92\u5BF9\u7ACB\u7684\u72B6\u6001\u95F4\u7684\u5207\u6362",update:"2021\u5E747\u670818\u65E5"},{id:8,color:"success",icon:"Repository",title:"Switch \u5F00\u5173",sub_title:"HTML, JS, Scss",type:"\u8868\u5355",des:"\u8868\u793A\u4E24\u79CD\u76F8\u4E92\u5BF9\u7ACB\u7684\u72B6\u6001\u95F4\u7684\u5207\u6362",update:"2021\u5E747\u670818\u65E5"},{id:8,color:"success",icon:"Repository",title:"Switch \u5F00\u5173",sub_title:"HTML, JS, Scss",type:"\u8868\u5355",des:"\u8868\u793A\u4E24\u79CD\u76F8\u4E92\u5BF9\u7ACB\u7684\u72B6\u6001\u95F4\u7684\u5207\u6362",update:"2021\u5E747\u670818\u65E5"}]),E=m([{title:"#",slotName:"tableIndex",headerSlotName:"firstCol",width:"66px"},{title:"\u7EC4\u4EF6\u540D\u79F0",prop:"title"},{title:"\u7C7B\u578B",prop:"type",width:"10%"},{title:"\u7B80\u4ECB",prop:"des"},{title:"\u66F4\u65B0\u65E5\u671F",prop:"update",width:"13%"},{title:"\u64CD\u4F5C",slotName:"handle",align:"center",width:"10%"}]),F=g({pageSize:100,total:400,currentPage:1,show:!1}),B=[{placeholder:"\u9009\u62E9\u586B\u62A5\u72B6\u6001",fill:!0,value:"",name:"prop1",prop:{label:"name",value:"code"},options:[{name:"\u5BA1\u6838\u5B8C\u6210",code:"1"},{name:"\u5BA1\u6838\u4E2D",code:"2"},{name:"\u8349\u7A3F",code:"3"},{name:"\u5BA1\u6838\u9A73\u56DE",code:"4"}]},{placeholder:"\u9009\u62E9\u540C\u6B65\u72B6\u6001",fill:!0,value:"",name:"prop2",options:[{label:"\u5DF2\u540C\u6B65",value:"1"},{label:"\u672A\u540C\u6B65",value:"2"}]}],b=g({show:!0,fill:!0,placeholder:"\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"}),p=g({colCount:"count-md-3 count-sm-2",items:B});return{activeName:o,tableData:n,cols:E,pagination:F,searcher:b,selector:p}}}),P=a("h4",null,"2021\u5E74\u5EA6\u5386\u4E0B\u533A\u57CE\u5E02\u98CE\u9669\u6570\u636E\u6536\u96C6",-1),Y=a("div",{class:"bg-light text-secondary radius-xxs p-t-sm p-b-sm p-l-md p-r-md m-t-md",style:{"min-height":"calc(var(--xxs) * 17)"}}," \u8BF7\u5404\u5B89\u59D4\u529E\u6210\u5458\u5355\u4F4D\u7EC4\u7EC7\u6240\u8F96\u4F01\u4E1A\u5B8C\u62102021\u5E74\u5EA6\u4F01\u4E1A\u98CE\u9669\u70B9\u6570\u636E\u4E0E\u5E94\u6025\u8D44\u6E90\u6570\u636E\u7684\u586B\u62A5\u5DE5\u4F5C ",-1),K=a("span",{class:"text-light"},"\u53C2\u4E0E\u673A\u6784",-1),O=a("h3",{style:{"line-height":"unset"}},"136",-1),Q=a("span",{class:"text-light"},"\u5DF2\u586B\u62A5\u6570",-1),W=a("h3",{style:{"line-height":"unset"}},"835",-1),X=s("\u8FDB\u884C\u4E2D"),Z=a("span",null,"\u5F00\u59CB\u65F6\u95F4",-1),uu=a("span",null,"2022.01.16",-1),eu=a("span",null,"\u7ED3\u675F\u65F6\u95F4",-1),tu=a("span",null,"2022.03.16",-1),lu=a("span",{class:"static text-danger"},"3\u5929",-1),ou=a("h4",null,"\u91C7\u96C6\u5185\u5BB9",-1),au=s("\u98CE\u9669\u70B9\u586B\u62A5\u8868\u5355"),su=s("\u5E94\u6025\u6551\u63F4\u961F\u4F0D\u586B\u62A5\u8868\u5355"),nu=s("\u5E94\u6025\u6551\u63F4\u961F\u4F0D"),iu={class:"panel-header-left"},cu=a("div",{class:"panel-title"},null,-1),ru={class:"panel-header-right"},du=s(" \u5BFC\u51FA\u5217\u8868 "),pu=s(" \u65B0\u589E\u6570\u636E "),_u=a("h5",{class:"m-l-md"},"\u91C7\u96C6\u5185\u5BB9",-1),hu=s(" \u98CE\u9669\u70B9\u586B\u62A5\u8868\u5355 "),fu=s("180"),mu=s(" \u5E94\u6025\u6551\u63F4\u961F\u4F0D\u586B\u62A5\u8868 "),gu=s("65"),Eu=s(" \u5E94\u6025\u7269\u8D28\u6536\u96C6 "),Fu=s("0"),Bu=s(U("")),bu=s("\u6279\u91CF\u5220\u9664"),Cu=s("\u6279\u91CF\u5BA1\u6838");function yu(o,n,E,F,B,b){const p=t("two-edit"),i=t("hl-icon"),c=t("hl-button"),l=t("hl-group"),x=t("two-briefcase"),w=t("two-chart-bar"),d=t("hl-tag"),D=t("hl-progress"),C=t("hl-col"),S=t("hl-scrollbar"),V=t("hl-row"),_=t("hl-panel"),y=t("hl-tab-pane"),k=t("hl-tabs"),T=t("two-storage"),z=t("two-plus"),h=t("hl-list-item"),H=t("hl-list"),J=t("hb-table-searchbar"),f=t("hl-checkbox"),v=t("hl-popover"),L=t("two-delete"),M=t("hl-simple-table"),N=t("hl-pagination");return $(),j(q,null,[u(_,{padding:"var(--xxl)","footer-padding":"0","footer-class":"item-left",class:"main-panel texture-bg-circuit"},{default:e(()=>[u(V,null,{default:e(()=>[u(C,{span:"col-16",dir:"vertical",class:"border-right p-r-xxl"},{default:e(()=>[u(l,{gap:"var(--xxs)"},{default:e(()=>[P,u(c,{type:"primary",size:"sm",equal:"",round:"",effect:"light","no-fill":""},{default:e(()=>[u(i,null,{default:e(()=>[u(p)]),_:1})]),_:1})]),_:1}),Y,u(l,{class:"m-t-lg static",gap:"calc(var(--xs) * 8)"},{default:e(()=>[u(l,{align:"middle",gap:"var(--sm)"},{default:e(()=>[u(l,{align:"middle",gap:"var(--xs)"},{default:e(()=>[u(i,{size:"xs",fill:"",round:"",class:"border bg-element text-secondary"},{default:e(()=>[u(x)]),_:1}),K]),_:1}),O]),_:1}),u(l,{align:"middle",gap:"var(--sm)"},{default:e(()=>[u(l,{align:"middle",gap:"var(--xs)"},{default:e(()=>[u(i,{size:"xs",fill:"",round:"",class:"border bg-element text-secondary"},{default:e(()=>[u(w)]),_:1}),Q]),_:1}),W]),_:1})]),_:1}),u(l,{align:"middle",full:"",gap:"var(--xl)",class:"m-t-lg"},{default:e(()=>[u(d,{type:"primary",size:"lg",class:"static"},{default:e(()=>[X]),_:1}),u(l,{dir:"vertical",full:"full-x",gap:"var(--xs)",align:"middle"},{default:e(()=>[u(l,{full:"",align:"between",class:"font-sm"},{default:e(()=>[u(l,{gap:"var(--sm)",class:"static"},{default:e(()=>[Z,uu]),_:1}),u(l,{gap:"var(--sm)",class:"static"},{default:e(()=>[eu,tu,lu]),_:1})]),_:1}),u(D,{type:"primary",percentage:60,"stroke-width":"var(--xxs)","show-text":!1})]),_:1})]),_:1})]),_:1}),u(C,{span:"col-8",class:"p-l-xxl"},{default:e(()=>[u(l,{dir:"vertical",gap:"var(--md)",block:""},{default:e(()=>[u(l,{gap:"var(--xxs)"},{default:e(()=>[ou,u(c,{type:"primary",size:"sm",equal:"",round:"",effect:"light","no-fill":""},{default:e(()=>[u(i,null,{default:e(()=>[u(p)]),_:1})]),_:1})]),_:1}),u(S,{height:"calc(var(--xxs) * 44)"},{default:e(()=>[u(l,{dir:"vertical",align:"left",gap:"var(--sm)"},{default:e(()=>[u(d,{type:"primary",effect:"light"},{default:e(()=>[au]),_:1}),u(d,{type:"primary",effect:"light"},{default:e(()=>[su]),_:1}),u(d,{type:"primary",effect:"light"},{default:e(()=>[nu]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),u(_,{class:"table-panel m-t-lg","body-class":"p-t-none"},{header:e(()=>[a("div",iu,[u(k,{modelValue:o.activeName,"onUpdate:modelValue":n[0]||(n[0]=r=>o.activeName=r),type:"line","show-pane":!1,style:{"flex-grow":"1"},"nav-height":"calc(var(--xxs) * 18)"},{default:e(()=>[u(y,{label:"\u586B\u62A5\u8BE6\u60C5",name:"first"}),u(y,{label:"\u673A\u6784\u8BE6\u60C5",name:"second"})]),_:1},8,["modelValue"])]),cu,a("div",ru,[u(l,{gap:"var(--sm)"},{default:e(()=>[u(c,{type:"primary",effect:"light","icon-position":"left"},{icon:e(()=>[u(i,null,{default:e(()=>[u(T)]),_:1})]),default:e(()=>[du]),_:1}),u(c,{type:"primary","icon-position":"left"},{icon:e(()=>[u(i,null,{default:e(()=>[u(z)]),_:1})]),default:e(()=>[pu]),_:1})]),_:1})])]),default:e(()=>[u(l,{full:"full-x"},{default:e(()=>[u(l,{dir:"vertical",block:"",gap:"var(--sm)",class:"w-xl static p-xl border-right"},{default:e(()=>[_u,u(H,{hover:""},{default:e(()=>[u(h,null,{suffix:e(()=>[u(d,{type:"primary",size:"sm",effect:"light"},{default:e(()=>[fu]),_:1})]),default:e(()=>[hu]),_:1}),u(h,null,{suffix:e(()=>[u(d,{type:"primary",size:"sm",effect:"light"},{default:e(()=>[gu]),_:1})]),default:e(()=>[mu]),_:1}),u(h,null,{suffix:e(()=>[u(d,{type:"danger",size:"sm",effect:"light"},{default:e(()=>[Fu]),_:1})]),default:e(()=>[Eu]),_:1})]),_:1})]),_:1}),u(_,{class:"table-panel",padding:"0","footer-class":"p-lg p-l-xl p-r-xl border-top",style:{height:"calc(var(--xl) * 20)","box-shadow":"none"},"inner-scroll":""},{footer:e(()=>[u(N,{layout:"slot, prev, pager, next, jumper, sizes",total:50,gap:o.gapValue,"pager-gap":o.pagerGapValue,block:"",class:"w-full"},{default:e(()=>[u(l,{class:"w-full",gap:"var(--lg)"},{default:e(()=>[u(f,{modelValue:o.selectedAll,"onUpdate:modelValue":n[3]||(n[3]=r=>o.selectedAll=r),onChange:o.selectAll},null,8,["modelValue","onChange"]),u(l,{gap:"var(--sm)"},{default:e(()=>[u(c,{type:"primary",effect:"light"},{default:e(()=>[bu]),_:1}),u(c,{type:"primary",effect:"light"},{default:e(()=>[Cu]),_:1})]),_:1})]),_:1})]),_:1},8,["gap","pager-gap"])]),default:e(()=>[u(J,{class:"p-l-xl p-r-xl p-t-lg p-b-lg border-bottom",selector:o.selector,searcher:o.searcher,padding:"0",gap:"var(--md)"},null,8,["selector","searcher"]),u(M,{class:"borderless-last",border:"border-x",padding:"var(--xl)","fixed-header":"",hover:"",stripe:"",cols:o.cols,data:o.tableData},{firstCol:e(()=>[u(f,{modelValue:o.selectedAll,"onUpdate:modelValue":n[1]||(n[1]=r=>o.selectedAll=r),onChange:o.selectAll},null,8,["modelValue","onChange"])]),tableIndex:e(({row:r})=>[u(f,{modelValue:o.selectedRows,"onUpdate:modelValue":n[2]||(n[2]=A=>o.selectedRows=A),label:r.id,onChange:A=>o.selectRow(r.id)},{default:e(()=>[Bu]),_:2},1032,["modelValue","label","onChange"])]),handle:e(()=>[u(l,{gap:"var(--xxs)"},{default:e(()=>[u(v,{trigger:"hover",content:"\u7F16\u8F91",placement:"top",tooltip:""},{reference:e(()=>[u(c,{type:"primary",equal:"",radius:"","no-fill":"",effect:"light",hover:"prmary"},{default:e(()=>[u(i,null,{default:e(()=>[u(p)]),_:1})]),_:1})]),_:1}),u(v,{trigger:"hover",content:"\u5220\u9664",placement:"top",tooltip:""},{reference:e(()=>[u(c,{type:"primary",equal:"",radius:"","no-fill":"",effect:"light",hover:"prmary"},{default:e(()=>[u(i,null,{default:e(()=>[u(L)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["cols","data"])]),_:1})]),_:1})]),_:1})],64)}var wu=R(G,[["render",yu]]);export{wu as default};

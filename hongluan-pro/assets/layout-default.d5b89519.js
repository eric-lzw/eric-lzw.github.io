var D=Object.defineProperty;var l=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var u=(e,o,a)=>o in e?D(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,d=(e,o)=>{for(var a in o||(o={}))H.call(o,a)&&u(e,a,o[a]);if(l)for(var a of l(o))v.call(o,a)&&u(e,a,o[a]);return e};import{L as C,a as j,b as S}from"./main.38bb39c0.js";import{L as g}from"./menu.4801e785.js";import{L as F}from"./drawer.14a1631f.js";import{_ as $}from"./source.9971ae9c.js";import{d as k,aY as V,r as B,t as N,m as r,c as O,x as t,v as s,S as R,p as x,b as z,F as E,o as f,R as M}from"./vue.52656417.js";import"./hl-icons.00d69127.js";import"./echarts.3578bebe.js";const Y=k({components:{LayoutHeader:C,LayoutSubHeader:j,LayoutMenu:g,LayoutFooter:S,LayoutDrawer:F},setup(){const e=V({boxed:["boxed1"],header:["fixed-header"],fullHeader:["full-header1"],aside:["fixed-aside"],subHeader:["fixed-sub-header"],fullSubHeader:["full-sub-header1"],footer:["fixed-footer1"],fullFooter:["full-footer1"]}),o=B(!1);return d({drawerVisible:o,openDrawer:()=>{o.value=!0},changeLayout:n=>{e.header=n.header,e.aside=n.aside,e.subHeader=n.subHeader,e.footer=n.footer,e.boxed=n.boxed,o.value=!1},closeDrawer:()=>{o.value=!1}},N(e))}});function q(e,o,a,c,i,n){const m=r("layout-header"),p=r("layout-sub-header"),b=r("layout-menu"),h=r("hl-main"),_=r("hl-container"),y=r("layout-footer"),w=r("hl-layout"),L=r("layout-drawer");return f(),O(E,null,[t(w,{class:R([e.boxed,e.header,e.fullHeader,e.aside,e.subHeader,e.fullSubHeader,e.footer,e.fullFooter])},{default:s(()=>[t(m,{onOpenDrawer:e.openDrawer},null,8,["onOpenDrawer"]),t(p),t(_,null,{default:s(()=>[t(b),t(h,null,{default:s(()=>[M(e.$slots,"default")]),_:3})]),_:3}),t(y)]),_:3},8,["class"]),e.drawerVisible?(f(),x(L,{key:0,onSubmit:e.changeLayout,onCancel:e.closeDrawer},null,8,["onSubmit","onCancel"])):z("",!0)],64)}var U=$(Y,[["render",q]]);export{U as default};

var L=Object.defineProperty;var l=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var u=(e,o,a)=>o in e?L(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,d=(e,o)=>{for(var a in o||(o={}))H.call(o,a)&&u(e,a,o[a]);if(l)for(var a of l(o))v.call(o,a)&&u(e,a,o[a]);return e};import{L as C,a as j,b as S}from"./main.b8a36c8c.js";import{L as k}from"./menu.8b084038.js";import{L as g}from"./drawer.153be6ef.js";import{_ as F}from"./source.d28dd6c2.js";import{d as $,aY as V,r as B,t as x,m as r,c as N,x as t,v as s,S as O,p as R,b as z,F as E,o as c,R as M}from"./vue.52656417.js";import"./hl-icons.00d69127.js";import"./echarts.3578bebe.js";const Y=$({components:{LayoutHeader:C,LayoutSubHeader:j,LayoutMenu:k,LayoutFooter:S,LayoutDrawer:g},setup(){const e=V({boxed:["boxed1"],header:["fixed-header"],fullHeader:["full-header1"],aside:["fixed-aside"],subHeader:["fixed-sub-header"],fullSubHeader:["full-sub-header1"],footer:["fixed-footer1"],fullFooter:["full-footer1"]}),o=B(!1);return d({drawerVisible:o,openDrawer:()=>{o.value=!0},changeLayout:n=>{e.header=n.header,e.aside=n.aside,e.subHeader=n.subHeader,e.footer=n.footer,e.boxed=n.boxed,o.value=!1},closeDrawer:()=>{o.value=!1}},x(e))}});function q(e,o,a,f,i,n){const m=r("layout-header"),p=r("layout-sub-header"),b=r("layout-menu"),h=r("hl-main"),_=r("hl-container"),y=r("layout-footer"),w=r("hl-layout"),D=r("layout-drawer");return c(),N(E,null,[t(w,{class:O([e.boxed,e.header,e.fullHeader,e.aside,e.subHeader,e.fullSubHeader,e.footer,e.fullFooter])},{default:s(()=>[t(m,{onOpenDrawer:e.openDrawer},null,8,["onOpenDrawer"]),t(p),t(_,null,{default:s(()=>[t(b),t(h,null,{default:s(()=>[M(e.$slots,"default")]),_:3})]),_:3}),t(y)]),_:3},8,["class"]),e.drawerVisible?(c(),R(D,{key:0,onSubmit:e.changeLayout,onCancel:e.closeDrawer},null,8,["onSubmit","onCancel"])):z("",!0)],64)}var U=F(Y,[["render",q]]);export{U as default};

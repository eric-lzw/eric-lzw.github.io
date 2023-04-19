import{p as _,a0 as x,I as n,L as h,W as m,X as o,P as s,V as g,T as d,R as u,H as z,Q as t,a3 as y,o as C}from"./vue.aa74a145.js";import{H as P}from"./index.908f7c94.js";import"./hongluan.f6433a83.js";import"./highlight.171c852c.js";import"./hongluan-icons.eb437c6f.js";const M=d("open"),j=_({setup(p){const a=x({max:3}),e=()=>{P("this is a message.")};return(c,i)=>{const l=n("hl-button"),r=n("hl-config-provider");return h(),m("div",null,[o(r,{message:g(a)},{default:s(()=>[o(l,{onClick:e},{default:s(()=>[M]),_:1})]),_:1},8,["message"])])}}});var k=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));const O=d("\u5207\u6362\u8BED\u8A00"),W=_({setup(p){const a=u({name:"zh-cn",hl:{pagination:{goto:"\u53BB\u5F80",pagesize:"\u5927\u5C0F",total:"\u5171 {total}",pageClassifier:"",deprecationWarning:"\u5E9F\u5F03"}}}),e=u({name:"en",hl:{pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",deprecationWarning:"Deprecated usages detected, please refer to the Pagination documentation for more details"}}}),c=()=>{const i=a.value;a.value=e.value,e.value=i};return(i,l)=>{const r=n("hl-pagination"),f=n("hl-config-provider"),v=n("hl-button"),b=n("hl-group");return h(),z(b,null,{default:s(()=>[o(f,{locale:e.value},{default:s(()=>[o(r,{layout:"prev, pager, next, total",total:50})]),_:1},8,["locale"]),o(v,{style:{"margin-left":"8px","vertical-align":"middle"},onClick:c},{default:s(()=>[O]),_:1})]),_:1})}}});var H=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));const S=t("h1",null,"Config Provider \u5168\u5C40\u914D\u7F6E",-1),T=t("p",null,"Config Provider \u88AB\u7528\u6765\u63D0\u4F9B\u5168\u5C40\u7684\u914D\u7F6E\u9009\u9879\uFF0C\u8BA9\u4F60\u7684\u914D\u7F6E\u80FD\u591F\u5728\u5168\u5C40\u90FD\u80FD\u591F\u88AB\u8BBF\u95EE\u5230\uFF0CConfig Provider \u4F7F\u7528\u4E86 Vue \u7684 provide/inject \u7279\u6027",-1),F=t("h2",{id:"guo-ji-hua-xiang-guan-pei-zhi"},[t("a",{class:"header-anchor",href:"#guo-ji-hua-xiang-guan-pei-zhi"}),d(" \u56FD\u9645\u5316 \u76F8\u5173\u914D\u7F6E")],-1),I=t("p",null,"\u901A\u8FC7 Config Provider \u6765\u914D\u7F6E\u591A\u8BED\u8A00\uFF0C\u8BA9\u4F60\u7684\u5E94\u7528\u53EF\u4EE5\u968F\u65F6\u5207\u6362\u8BED\u8A00\u3002",-1),$=t("div",null,[t("p",null,"\u4F7F\u7528\u4E24\u4E2A\u5C5E\u6027\u6765\u63D0\u4F9B i18n \u76F8\u5173\u914D\u7F6E")],-1),A=t("h2",{id:"message-xiang-guan-pei-zhi"},[t("a",{class:"header-anchor",href:"#message-xiang-guan-pei-zhi"}),d(" Message \u76F8\u5173\u914D\u7F6E")],-1),B=C('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>locale</td><td>\u7FFB\u8BD1\u6587\u672C\u5BF9\u8C61</td><td>Object&lt;Language&gt;</td><td>zh-cn / zh-tw / en</td><td>Chinese</td></tr><tr><td>size</td><td>\u5168\u5C40\u7EC4\u4EF6\u5927\u5C0F</td><td>string</td><td>sm / md / lg</td><td>-</td></tr><tr><td>zIndex</td><td>\u5168\u5C40\u521D\u59CB\u5316zIndex</td><td>number</td><td>-</td><td>-</td></tr><tr><td>message</td><td>Message\u76F8\u5173\u914D\u7F6E, <a href="#message-attributes">\u53C2\u89C1\u4E0B\u8868</a></td><td>MessageGlobalConfig</td><td>-</td><td>\u53C2\u89C1\u4E0B\u8868</td></tr><tr><td>experimental-features</td><td>\u5B9E\u9A8C\u7279\u6027\uFF0C\u9ED8\u8BA4\u5168\u90E8\u914D\u7F6E\u4E3Afalse</td><td>Object</td><td>-</td><td>-</td></tr></tbody></table><h2 id="message-attributes"><a class="header-anchor" href="#message-attributes"></a> Message Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>max</td><td>\u540C\u65F6\u663E\u793AMessage\u7684\u6700\u5927\u6570\u91CF</td><td>number</td><td>-</td><td>-</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots"></a> Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u2014</td><td>\u9ED8\u8BA4\u63D2\u69FD</td></tr></tbody></table>',6),Q={setup(p){const a="config-provider",e={"../../../examples/config-provider/message.vue":k,"../../../examples/config-provider/usage.vue":H};return(c,i)=>{const l=n("demo-block"),r=n("right-nav");return h(),m(y,null,[t("section",null,[S,T,F,I,o(l,{fs:"",demos:g(e),"component-id":a,"path-name":"config-provider/usage","source-code":`<template>
  <hl-group>
    <hl-config-provider :locale="locale2">
      <hl-pagination layout="prev, pager, next, total" :total="50" />
    </hl-config-provider>
    <hl-button style="margin-left: 8px; vertical-align: middle" @click="toggle">\u5207\u6362\u8BED\u8A00</hl-button>
  </hl-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const locale1 = ref({
  name: 'zh-cn',
  hl: {
    pagination: {
      goto: '\u53BB\u5F80',
      pagesize: '\u5927\u5C0F',
      total: '\u5171 {total}',
      pageClassifier: '',
      deprecationWarning: '\u5E9F\u5F03',
    },
  },
})
const locale2 = ref({
  name: 'en',
  hl: {
    pagination: {
      goto: 'Go to',
      pagesize: '/page',
      total: 'Total {total}',
      pageClassifier: '',
      deprecationWarning: 'Deprecated usages detected, please refer to the Pagination documentation for more details',
    },
  },
})
const toggle = () => {
  const temp = locale1.value
  locale1.value = locale2.value
  locale2.value = temp
}

<\/script>
`},{default:s(()=>[$]),_:1},8,["demos"]),A,o(l,{fs:"",demos:g(e),"component-id":a,"path-name":"config-provider/message","source-code":`<template>
  <div>
    <hl-config-provider :message="config">
      <hl-button @click="open">open</hl-button>
    </hl-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { HlMessage } from 'hongluan-ui'

const config = reactive({
  max: 3,
})
const open = () => {
  HlMessage('this is a message.')
}

<\/script>
`},null,8,["demos"]),B]),o(r)],64)}}};export{Q as default};

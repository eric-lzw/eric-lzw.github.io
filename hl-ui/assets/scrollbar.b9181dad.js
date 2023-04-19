import{I as i,L as a,H as S,P as d,W as c,ag as g,Q as t,U as x,a3 as h,p as T,R as p,E as z,X as o,T as r,V as v,o as O}from"./vue.aa74a145.js";import{_ as j}from"./index.908f7c94.js";import"./hongluan.f6433a83.js";import"./highlight.171c852c.js";import"./hongluan-icons.eb437c6f.js";const M={};function P(_,e){const l=i("hl-scrollbar");return a(),S(l,{height:"calc(var(--lg) * 10)"},{default:d(()=>[(a(),c(h,null,g(20,n=>t("span",{key:n,class:"display-block p-md m-b-xs bg-primary text-center text-inverse"},x(n),1)),64))]),_:1})}var L=j(M,[["render",P]]),V=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));const C={},D={class:"display-flex",style:{gap:"var(--md)"}};function E(_,e){const l=i("hl-scrollbar");return a(),S(l,null,{default:d(()=>[t("div",D,[(a(),c(h,null,g(20,n=>t("span",{key:n,class:"w-sm static p-md bg-primary text-center text-inverse"},x(n),1)),64))])]),_:1})}var H=j(C,[["render",E]]),I=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));const A=T({setup(_){const e=p(0),l=p(0),n=p(null),b=p(null),u=s=>{b.value.setScrollTop(s)},m=s=>`${s} px`,y=({scrollTop:s})=>{l.value=s};return z(()=>{e.value=n.value.clientHeight-380}),(s,k)=>{const $=i("hl-scrollbar"),w=i("hl-slider");return a(),c(h,null,[o($,{ref_key:"scrollbar",ref:b,height:"calc(var(--lg) * 10)",always:"",onScroll:y},{default:d(()=>[t("div",{ref_key:"inner",ref:n},[(a(),c(h,null,g(20,f=>t("span",{key:f,class:"display-block p-md m-b-xs bg-primary text-center text-inverse"},x(f),1)),64))],512)]),_:1},512),o(w,{modelValue:l.value,"onUpdate:modelValue":k[0]||(k[0]=f=>l.value=f),max:e.value,"format-tooltip":m,onInput:u},null,8,["modelValue","max"])],64)}}});var Q=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));const R=r("\u6DFB\u52A0\u5143\u7D20"),U=r("\u5220\u9664\u5143\u7D20"),W=T({setup(_){const e=p(3),l=()=>{e.value++},n=()=>{e.value>0&&e.value--};return(b,u)=>{const m=i("hl-button"),y=i("hl-scrollbar");return a(),c(h,null,[o(m,{class:"m-r-md",onClick:l},{default:d(()=>[R]),_:1}),o(m,{onClick:n},{default:d(()=>[U]),_:1}),o(y,{class:"m-t-lg","max-height":"calc(var(--lg) * 10)"},{default:d(()=>[(a(!0),c(h,null,g(e.value,s=>(a(),c("span",{key:s,class:"display-block p-md m-b-xs bg-primary text-center text-inverse"},x(s),1))),128))]),_:1})],64)}}});var X=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));const B=t("h1",null,"Scrollbar \u6EDA\u52A8\u6761",-1),F=t("p",null,"\u7528\u4E8E\u66FF\u6362\u6D4F\u89C8\u5668\u539F\u751F\u6EDA\u52A8\u6761\u3002",-1),N=t("h2",{id:"ji-chu-yong-fa"},[t("a",{class:"header-anchor",href:"#ji-chu-yong-fa"}),r(" \u57FA\u7840\u7528\u6CD5")],-1),q=t("div",null,[t("p",null,[r("\u901A\u8FC7 "),t("code",null,"height"),r(" \u5C5E\u6027\u8BBE\u7F6E\u6EDA\u52A8\u6761\u9AD8\u5EA6\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\u5219\u6839\u636E\u7236\u5BB9\u5668\u9AD8\u5EA6\u81EA\u9002\u5E94\u3002")])],-1),G=t("h2",{id:"heng-xiang-gun-dong"},[t("a",{class:"header-anchor",href:"#heng-xiang-gun-dong"}),r(" \u6A2A\u5411\u6EDA\u52A8")],-1),J=t("div",null,[t("p",null,"\u5F53\u5143\u7D20\u5BBD\u5EA6\u5927\u4E8E\u6EDA\u52A8\u6761\u5BBD\u5EA6\u65F6\uFF0C\u4F1A\u663E\u793A\u6A2A\u5411\u6EDA\u52A8\u6761\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u9F20\u6807\u6EDA\u8F6E\u8FDB\u884C\u6A2A\u5411\u6EDA\u52A8\u3002")],-1),K=t("h2",{id:"zui-da-gao-du"},[t("a",{class:"header-anchor",href:"#zui-da-gao-du"}),r(" \u6700\u5927\u9AD8\u5EA6")],-1),Y=t("div",null,[t("p",null,"\u5F53\u5143\u7D20\u9AD8\u5EA6\u8D85\u8FC7\u6700\u5927\u9AD8\u5EA6\uFF0C\u624D\u4F1A\u663E\u793A\u6EDA\u52A8\u6761\u3002")],-1),Z=t("h2",{id:"shou-dong-gun-dong"},[t("a",{class:"header-anchor",href:"#shou-dong-gun-dong"}),r(" \u624B\u52A8\u6EDA\u52A8")],-1),tt=t("div",null,[t("p",null,[r("\u901A\u8FC7\u4F7F\u7528 "),t("code",null,"setScrollTop"),r(" \u4E0E "),t("code",null,"setScrollLeft"),r(" \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u624B\u52A8\u63A7\u5236\u6EDA\u52A8\u6761\u6EDA\u52A8\u3002")])],-1),et=O('<h2 id="attributes"><a class="header-anchor" href="#attributes"></a> Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>height</td><td>\u6EDA\u52A8\u6761\u9AD8\u5EA6</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>max-height</td><td>\u6EDA\u52A8\u6761\u6700\u5927\u9AD8\u5EA6</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>native</td><td>\u662F\u5426\u4F7F\u7528\u539F\u751F\u6EDA\u52A8\u6761\u6837\u5F0F</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>wrap-style</td><td>\u5305\u88F9\u5BB9\u5668\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>wrap-class</td><td>\u5305\u88F9\u5BB9\u5668\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>view-style</td><td>\u89C6\u56FE\u7684\u81EA\u5B9A\u4E49\u6837\u5F0F</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>view-class</td><td>\u89C6\u56FE\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>noresize</td><td>\u4E0D\u54CD\u5E94\u5BB9\u5668\u5C3A\u5BF8\u53D8\u5316\uFF0C\u5982\u679C\u5BB9\u5668\u5C3A\u5BF8\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u6700\u597D\u8BBE\u7F6E\u5B83\u53EF\u4EE5\u4F18\u5316\u6027\u80FD</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>tag</td><td>\u89C6\u56FE\u7684\u5143\u7D20\u6807\u7B7E</td><td>string</td><td>\u2014</td><td>div</td></tr><tr><td>always</td><td>\u6EDA\u52A8\u6761\u603B\u662F\u663E\u793A</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>min-size</td><td>\u6EDA\u52A8\u6761\u6700\u5C0F\u5C3A\u5BF8</td><td>number</td><td>\u2014</td><td>20</td></tr><tr><td>distance</td><td>\u8DDD\u79BB\u5E95\u90E8\u6216\u8005\u53F3\u4FA7\u81F3\u5C11\u591A\u5C11\u50CF\u7D20\u89E6\u53D1\u4E8B\u4EF6\u3002<em><strong>\u8FD9\u4E2A\u503C\u6700\u597D\u4E0D\u8981\u8BBE\u7F6E\u62100\uFF0C\u5426\u5219\u6709\u53EF\u80FD\u4E0D\u89E6\u53D1\u4E8B\u4EF6</strong></em></td><td>number</td><td>\u2014</td><td>5</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events"></a> Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>scroll</td><td>\u6EDA\u52A8\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u6EDA\u52A8\u8DDD\u79BB <code>{ scrollLeft, scrollTop }</code></td></tr><tr><td>at-end</td><td>\u6EDA\u52A8\u5230\u5E95\u90E8\u6216\u8005\u53F3\u4FA7\u65F6\u89E6\u53D1\uFF0C\u76EE\u524D\u53EA\u652F\u6301\u6EDA\u52A8\u5230\u5E95\u90E8\u89E6\u53D1</td><td><code>{ vertical: true }</code></td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods"></a> Methods</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>scrollTo</td><td>\u6EDA\u52A8\u5230\u7279\u5B9A\u7684\u4F4D\u7F6E</td><td>(options: ScrollToOptions | number, yCoord?: number)</td></tr><tr><td>setScrollTop</td><td>\u8BBE\u7F6E\u6EDA\u52A8\u6761\u5230\u9876\u90E8\u7684\u8DDD\u79BB</td><td>(scrollTop: number)</td></tr><tr><td>setScrollLeft</td><td>\u8BBE\u7F6E\u6EDA\u52A8\u6761\u5230\u5DE6\u8FB9\u7684\u8DDD\u79BB</td><td>(scrollLeft: number)</td></tr><tr><td>update</td><td>\u624B\u52A8\u66F4\u65B0\u6EDA\u52A8\u6761\u72B6\u6001</td><td>\u2014</td></tr></tbody></table>',6),at={setup(_){const e="scrollbar",l={"../../../examples/scrollbar/basic.vue":V,"../../../examples/scrollbar/h.vue":I,"../../../examples/scrollbar/manual.vue":Q,"../../../examples/scrollbar/max-height.vue":X};return(n,b)=>{const u=i("demo-block"),m=i("right-nav");return a(),c(h,null,[t("section",null,[B,F,N,o(u,{fs:"",demos:v(l),"component-id":e,"path-name":"scrollbar/basic","source-code":`<template>
  <hl-scrollbar height="calc(var(--lg) * 10)">
    <span v-for="item in 20" :key="item" class="display-block p-md m-b-xs bg-primary text-center text-inverse">{{ item }}</span>
  </hl-scrollbar>
</template>
`},{default:d(()=>[q]),_:1},8,["demos"]),G,o(u,{fs:"",demos:v(l),"component-id":e,"path-name":"scrollbar/h","source-code":`<template>
  <hl-scrollbar>
    <div class="display-flex" style="gap: var(--md)">
      <span v-for="item in 20" :key="item" class="w-sm static p-md bg-primary text-center text-inverse">{{ item }}</span>
    </div>
  </hl-scrollbar>
</template>
`},{default:d(()=>[J]),_:1},8,["demos"]),K,o(u,{fs:"",demos:v(l),"component-id":e,"path-name":"scrollbar/max-height","source-code":`<template>
  <hl-button class="m-r-md" @click="add">\u6DFB\u52A0\u5143\u7D20</hl-button>
  <hl-button @click="del">\u5220\u9664\u5143\u7D20</hl-button>
  <hl-scrollbar class="m-t-lg" max-height="calc(var(--lg) * 10)">
    <span v-for="item in count" :key="item" class="display-block p-md m-b-xs bg-primary text-center text-inverse">{{ item }}</span>
  </hl-scrollbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(3)

const add = () => {
  count.value++
}
const del = () => {
  if (count.value > 0) {
    count.value--
  }
}

<\/script>
`},{default:d(()=>[Y]),_:1},8,["demos"]),Z,o(u,{fs:"",demos:v(l),"component-id":e,"path-name":"scrollbar/manual","source-code":`<template>
  <hl-scrollbar ref="scrollbar" height="calc(var(--lg) * 10)" always @scroll="scroll">
    <div ref="inner">
      <span v-for="item in 20" :key="item" class="display-block p-md m-b-xs bg-primary text-center text-inverse">{{ item }}</span>
    </div>
  </hl-scrollbar>
  <hl-slider v-model="value" :max="max" :format-tooltip="formatTooltip" @input="inputSlider" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const max = ref(0)
const value = ref(0)
const inner = ref(null)
const scrollbar = ref(null)

const inputSlider = value => {
  scrollbar.value.setScrollTop(value)
}
const formatTooltip = value => {
  return \`\${value} px\`
}

const scroll = ({ scrollTop }) => {
  value.value = scrollTop
}

onMounted(() => {
  max.value = inner.value.clientHeight - 380
})
<\/script>
`},{default:d(()=>[tt]),_:1},8,["demos"]),et]),o(m)],64)}}};export{at as default};

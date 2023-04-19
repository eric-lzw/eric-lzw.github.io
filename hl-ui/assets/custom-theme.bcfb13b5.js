import{I as a,L as c,W as t,Q as s,X as n,P as h,a3 as i,o as l,T as o}from"./vue.aa74a145.js";import{_ as r}from"./index.908f7c94.js";import"./hongluan.f6433a83.js";import"./highlight.171c852c.js";import"./hongluan-icons.eb437c6f.js";const m={},d=l(`<h1>\u81EA\u5B9A\u4E49\u4E3B\u9898</h1><p>\u9E3F\u9E3E\u63D0\u4F9B\u4E86\u51E0\u79CD\u81EA\u5B9A\u4E49\u4E3B\u9898\u7684\u65B9\u5F0F\uFF1A</p><ul><li>\u5728\u7EBFTheme Editor\u751F\u6210\u4E3B\u9898\uFF08\u76EE\u524D\u4EC5\u652F\u6301\u914D\u7F6E:root\u4E0BCSS Variables\uFF09</li><li>\u76F4\u63A5\u8986\u76D6CSS Variables</li><li>\u81EA\u5B9A\u4E49SCSS Config\u6587\u4EF6</li></ul><h2 id="1.-shi-yong-zai-xian-theme-editor"><a class="header-anchor" href="#1.-shi-yong-zai-xian-theme-editor"></a> 1. \u4F7F\u7528\u5728\u7EBFTheme Editor</h2><p>\u6253\u5F00<a href="https://cestc-aqyj.github.io/hongluan-theme-editor">Theme Editor</a>\uFF0C\u914D\u7F6E\u5B8C\u6210\u4EE5\u540E\u9009\u62E9\u4E0B\u8F7D\u4E3B\u9898\u6587\u4EF6\uFF0C\u7136\u540E\u5728\u5165\u53E3\u6587\u4EF6\u5904\u5F15\u5165\u5373\u53EF\u3002</p><pre><code class="hljs language-ts"><span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">HongluanUI</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-ui&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;hongluan-ui/dist/index.scss&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;theme.css&#39;</span> <span class="hljs-comment">//\u4E0B\u8F7D\u4E0B\u6765\u7684\u4E3B\u9898\u6587\u4EF6</span>
</code></pre><h2 id="2.-zhi-jie-fu-gai-css-variables"><a class="header-anchor" href="#2.-zhi-jie-fu-gai-css-variables"></a> 2. \u76F4\u63A5\u8986\u76D6CSS Variables</h2><p>\u60A8\u53EF\u4EE5\u6839\u636E\u9700\u6C42\u76F4\u63A5\u8986\u76D6\u5B9A\u4E49\u5728:root\u4E0B\u4EE5\u53CA\u7EC4\u4EF6\u7C7B\u540D\u4E0B\u7684\u53D8\u91CF\u6765\u5B9E\u73B0\u81EA\u5B9A\u4E49\u4E3B\u9898\u3002</p><h2 id="3.-zi-ding-yi-scss-configwen-jian"><a class="header-anchor" href="#3.-zi-ding-yi-scss-configwen-jian"></a> 3. \u81EA\u5B9A\u4E49SCSS Config\u6587\u4EF6</h2><p>Hongluan UI \u7684\u6837\u5F0F\u4F7F\u7528 <a href="https://sass-lang.com/">SCSS</a> \u7F16\u5199\uFF0C\u5982\u679C\u4F60\u7684\u9879\u76EE\u4E5F\u4F7F\u7528\u4E86 SCSS\uFF0C\u90A3\u4E48\u53EF\u4EE5\u76F4\u63A5\u5728\u9879\u76EE\u4E2D\u7F16\u8BD1Hongluan UI\u7684\u6837\u5F0F\u3002</p><p>\u65B0\u5EFA\u4E00\u4E2A\u6837\u5F0F\u6587\u4EF6\uFF0C\u4F8B\u5982 <code>style.scss</code>\uFF0C\u5F15\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><pre><code class="hljs language-scss"><span class="hljs-keyword">@use</span> <span class="hljs-string">&quot;sass:math&quot;</span>;
<span class="hljs-keyword">@use</span> <span class="hljs-string">&quot;sass:map&quot;</span>;
<span class="hljs-comment">// \u62F7\u8D1D &lt;path/node_modules&gt;/hongluan-ui/theme/scss/common/config.scss \u5230\u4F60\u7684\u5DE5\u7A0B\u76EE\u5F55\u5E76\u5F15\u5165\uFF0C</span>
<span class="hljs-comment">// \u4F60\u4E5F\u53EF\u4EE5\u8D77\u4E2A\u6709\u8FA8\u8BC6\u5EA6\u540D\u79F0\uFF0C\u4F8B\u5982:</span>
<span class="hljs-keyword">@import</span> <span class="hljs-string">&#39;./project-theme.scss&#39;</span>;

<span class="hljs-comment">// \u5F15\u5165Hongluan UI\u7684\u7EC4\u4EF6\u6837\u5F0F\u5F15\u5BFC\u6587\u4EF6</span>
<span class="hljs-keyword">@import</span> <span class="hljs-string">&#39;&lt;path/node_modules&gt;/hongluan-ui/theme/scss/index.scss&#39;</span>;
<span class="hljs-comment">// \u6216\u8005\u76F4\u63A5\u5F15\u5165components.scss\u5373\u53EF</span>
<span class="hljs-comment">// @import &#39;&lt;path/node_modules&gt;/hongluan-ui/theme/scss/components.scss&#39;;</span>

</code></pre><p>\u7136\u540E\u5728\u9879\u76EE\u7684\u5165\u53E3\u6587\u4EF6\u4E2D\u5F15\u5165<code>style.scss</code>\u6837\u5F0F\u6587\u4EF6\u5373\u53EF\uFF08\u65E0\u9700\u518D\u5F15\u5165 Hongluan UI \u7F16\u8BD1\u597D\u7684 CSS \u6587\u4EF6\uFF09\uFF1A</p><pre><code class="hljs language-JS"><span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">HongluanUI</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;hongluan-ui&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;./style.scss&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">App</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./App.vue&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>(<span class="hljs-title class_">App</span>)
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">HongluanUI</span>)
</code></pre>`,14),u={id:"4.-zi-ding-yi-scss-colorswen-jian-2.2.0"},g=s("a",{class:"header-anchor",href:"#4.-zi-ding-yi-scss-colorswen-jian-2.2.0"},null,-1),j=o(" 4. \u81EA\u5B9A\u4E49SCSS Colors\u6587\u4EF6"),_=o("2.2.0"),y=l(`<p>\u65B0\u5EFA\u4E00\u4E2A\u6837\u5F0F\u6587\u4EF6\uFF0C\u4F8B\u5982 <code>my-colors.scss</code>\uFF0C\u628A<code>&lt;path/node_modules&gt;/hongluan-ui/theme/scss/common/colors.scss</code>\u91CC\u7684\u5185\u5BB9\u62F7\u8D1D\u5230<code>my-colors.scss</code>\u3002\u5220\u9664\u4E0D\u9700\u8981\u6539\u53D8\u7684\u53D8\u91CF\uFF0C\u4FEE\u6539\u9700\u8981\u6539\u53D8\u7684\u53D8\u91CF\u503C\uFF0C\u7136\u540E</p><pre><code class="hljs language-scss"><span class="hljs-keyword">@use</span> <span class="hljs-string">&quot;sass:math&quot;</span>;
<span class="hljs-keyword">@use</span> <span class="hljs-string">&quot;sass:map&quot;</span>;

<span class="hljs-keyword">@import</span> <span class="hljs-string">&#39;./my-colors.scss&#39;</span>;

<span class="hljs-comment">// \u5F15\u5165Hongluan UI\u7684\u7EC4\u4EF6\u6837\u5F0F\u5F15\u5BFC\u6587\u4EF6</span>
<span class="hljs-keyword">@import</span> <span class="hljs-string">&#39;&lt;path/node_modules&gt;/hongluan-ui/theme/scss/index.scss&#39;</span>;
<span class="hljs-comment">// \u6216\u8005\u76F4\u63A5\u5F15\u5165config.scss\u548Ccomponents.scss\u5373\u53EF</span>
<span class="hljs-comment">// @import &#39;&lt;path/node_modules&gt;/hongluan-ui/theme/scss/config.scss&#39;;</span>
<span class="hljs-comment">// @import &#39;&lt;path/node_modules&gt;/hongluan-ui/theme/scss/components.scss&#39;;</span>

</code></pre>`,2);function f(w,S){const e=a("hl-tag"),p=a("right-nav");return c(),t(i,null,[s("section",null,[d,s("h2",u,[g,j,n(e,{type:"primary",size:"sm",class:"m-l-xs"},{default:h(()=>[_]),_:1})]),y]),n(p)],64)}var I=r(m,[["render",f]]);export{I as default};

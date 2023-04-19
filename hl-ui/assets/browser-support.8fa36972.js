import{I as n,L as o,W as p,Q as s,X as l,P as r,a3 as c,T as t,o as d}from"./vue.aa74a145.js";import{_ as g}from"./index.908f7c94.js";import"./hongluan.f6433a83.js";import"./highlight.171c852c.js";import"./hongluan-icons.eb437c6f.js";const h={},u=s("h1",null,"\u6D4F\u89C8\u5668\u652F\u6301",-1),_=s("ul",null,[s("li",null,"Hongluan \u652F\u6301\u6240\u6709\u4E3B\u6D41\u6D4F\u89C8\u5668\u548C\u5E73\u53F0\u7684 \u6700\u65B0\u3001\u7A33\u5B9A\u7248\u672C\uFF0C(\u4E0D\u5305\u62EC IE11 \u53CA\u4EE5\u4E0B\u7248\u672C)\u3002"),s("li",null,"\u6240\u6709\u7684\u7EC4\u4EF6\u90FD\u662F\u901A\u8FC7\u6700\u65B0\u7684 CSS3 \u6837\u5F0F\u7F16\u5199\u3002"),s("li",null,[t("\u57FA\u4E8E "),s("a",{href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0038-vue3-ie11-support.md"},"Vue3"),t(" \u5F00\u53D1\uFF0C\u6240\u4EE5\u4E5F\u4E0D\u652F\u6301\u5728 IE11 \u53CA\u4E4B\u524D\u7248\u672C\u8FD0\u884C\u3002")]),s("li",null,[t("\u9700\u8981\u5728\u652F\u6301 ES2018 \u548C ResizeObserver \u7684\u6D4F\u89C8\u5668\u4E0A\u8FD0\u884C\u3002 \u5982\u679C\u60A8\u7684\u6D4F\u89C8\u5668\u652F\u6301\uFF0C\u8BF7\u6DFB\u52A0 "),s("a",{href:"https://babeljs.io/docs/en/babel-polyfill"},"Babel"),t(" \u548C\u76F8\u5E94\u7684 Polyfill\u3002")])],-1),b=s("p",null,"Edge \u2265 79",-1),m=s("p",null,"Firefox \u2265 78",-1),f=s("p",null,"Chrome \u2265 64",-1),v=s("p",null,"Safari \u2265 12",-1),x=d(`<h2 id="gong-ying-shang-qian-zhui"><a class="header-anchor" href="#gong-ying-shang-qian-zhui"></a> \u4F9B\u5E94\u5546\u524D\u7F00</h2><p>\u8BB8\u591A CSS \u5C5E\u6027\u8981\u6C42\u6D4F\u89C8\u5668\u80FD\u591F\u7406\u89E3\u4F9B\u5E94\u5546\u524D\u7F00\uFF0C\u4F8B\u5982 background-clip: text \u9700\u8981-webkit \u524D\u7F00\u624D\u80FD\u5728\u5927\u591A\u6570\u6D4F\u89C8\u5668\u4E2D\u5DE5\u4F5C\uFF1A</p><pre><code class="hljs language-scss"><span class="hljs-selector-class">.bg-filter</span> {
  backdrop-<span class="hljs-attribute">filter</span>: <span class="hljs-built_in">blur</span>(<span class="hljs-number">8px</span>);
  -webkit-backdrop-<span class="hljs-attribute">filter</span>: <span class="hljs-built_in">blur</span>(<span class="hljs-number">8px</span>);
}
</code></pre><p>\u4F60\u4F7F\u7528 Hongluan \u63D0\u4F9B\u7684\u5DE5\u5177\u7C7B\u90FD\u5DF2\u7ECF\u9884\u5148\u4E3A\u60A8\u6DFB\u52A0\u4E86\u524D\u7F00\u3002</p><p>\u5982\u679C\u4F60\u8981\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u60A8\u4F7F\u7528 <a href="https://github.com/postcss/autoprefixer">Autoprefixer</a>\uFF0C\u8FD9\u662F\u4E00\u4E2A PostCSS \u63D2\u4EF6\uFF0C\u5B83\u4F1A\u6839\u636E\u60A8\u544A\u8BC9\u5B83\u60A8\u9700\u8981\u652F\u6301\u7684\u6D4F\u89C8\u5668\u6765\u81EA\u52A8\u6DFB\u52A0\u5FC5\u8981\u7684\u4F9B\u5E94\u5546\u524D\u7F00\u3002</p><pre><code class="hljs language-bash">npm install -D autoprefixer
</code></pre>`,6);function j(S,w){const a=n("hl-thumb"),e=n("hl-group"),i=n("right-nav");return o(),p(c,null,[s("section",null,[u,_,l(e,{align:"items-center",gap:"var(--md)",full:"",class:"p-t-xl p-b-xl"},{default:r(()=>[l(e,{class:"bg-light border radius-lg p-lg",dir:"vertical",align:"items-middle",gap:"var(--md)"},{default:r(()=>[l(a,{fit:"cover",src:"https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_128x128.png"}),b]),_:1}),l(e,{class:"bg-light border radius-lg p-lg",dir:"vertical",align:"items-middle",gap:"var(--md)"},{default:r(()=>[l(a,{fit:"cover",src:"https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_128x128.png"}),m]),_:1}),l(e,{class:"bg-light border radius-lg p-lg",dir:"vertical",align:"items-middle",gap:"var(--md)"},{default:r(()=>[l(a,{fit:"cover",src:"https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_128x128.png"}),f]),_:1}),l(e,{class:"bg-light border radius-lg p-lg",dir:"vertical",align:"items-middle",gap:"var(--md)"},{default:r(()=>[l(a,{fit:"cover",src:"https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_128x128.png"}),v]),_:1})]),_:1}),x]),l(i)],64)}var z=g(h,[["render",j]]);export{z as default};

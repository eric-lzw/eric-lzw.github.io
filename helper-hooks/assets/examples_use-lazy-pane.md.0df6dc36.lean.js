import{v as d,x as h,d as v,_ as w,o,b as c,g as s,R as r,S as i,e as k,F as P,p as f,q as _,A as y,f as m,L as q}from"./plugin-vue_export-helper.a3ace58a.js";function b(n,a,t){const e=d(!1),p=d(!1);return h(n,l=>{l===a?(e.value=!0,p.value=!0):p.value=!1,e.value&&p.value&&(t==null||t())},{immediate:!0}),{loaded:e,show:p}}const S=v({setup(){const n=d("1"),{loaded:a,show:t}=b(n,"1"),{loaded:e,show:p}=b(n,"2"),{loaded:l,show:u}=b(n,"3");return{which:n,switchPane:g=>{n.value=g},Pane1Loaded:a,Pane1Show:t,Pane2Loaded:e,Pane2Show:p,Pane3Loaded:l,Pane3Show:u}}}),L=n=>(f("data-v-1697468b"),n=n(),_(),n),C=L(()=>s("br",null,null,-1)),$={key:0},z={key:1},T={key:2};function x(n,a,t,e,p,l){return o(),c(P,null,[s("div",null,[s("button",{onClick:a[0]||(a[0]=u=>n.switchPane("1"))},"Pane1"),s("button",{onClick:a[1]||(a[1]=u=>n.switchPane("2"))},"Pane2"),s("button",{onClick:a[2]||(a[2]=u=>n.switchPane("3"))},"Pane3")]),C,n.Pane1Loaded?r((o(),c("div",$," Pane1 Content ",512)),[[i,n.Pane1Show]]):k("v-if",!0),n.Pane2Loaded?r((o(),c("div",z," Pane2 Content ",512)),[[i,n.Pane2Show]]):k("v-if",!0),n.Pane3Loaded?r((o(),c("div",T," Pane3 Content ",512)),[[i,n.Pane3Show]]):k("v-if",!0)],64)}var V=w(S,[["render",x],["__scopeId","data-v-1697468b"]]);const D=s("h3",{id:"\u8BF4\u660E",tabindex:"-1"},[m("\u8BF4\u660E "),s("a",{class:"header-anchor",href:"#\u8BF4\u660E","aria-hidden":"true"},"#")],-1),I=s("p",null,[m("\u5207\u6362DOM\u5143\u7D20\u6216\u8005\u7EC4\u4EF6\u65F6\uFF0C\u5BF9\u5176\u8FDB\u884C\u5EF6\u8FDF\u52A0\u8F7D\uFF0C\u5E76\u4E14\u53EA\u52A0\u8F7D\u4E00\u6B21"),s("br"),s("br")],-1),N=s("h4",{id:"\u793A\u4F8B",tabindex:"-1"},[m("\u793A\u4F8B "),s("a",{class:"header-anchor",href:"#\u793A\u4F8B","aria-hidden":"true"},"#")],-1),R=q(`__VP_STATIC_START__<br><br><h4 id="\u51FD\u6570\u5B9A\u4E49" tabindex="-1">\u51FD\u6570\u5B9A\u4E49 <a class="header-anchor" href="#\u51FD\u6570\u5B9A\u4E49" aria-hidden="true">#</a></h4><div class="language-typescript line-numbers-mode"><pre><code><span class="token keyword">function</span><span class="token punctuation">(</span>
  activeTab<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token comment">// \u9009\u4E2Dtab</span>
  selfMark<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span> <span class="token comment">// tab\u6807\u8BC6</span>
  cb<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token comment">// \u9009\u4E2D\u56DE\u8C03</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  loaded<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span> <span class="token comment">// \u662F\u5426\u52A0\u8F7D\uFF0C\u914D\u5408v-if\u4F7F\u7528</span>
  show<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span> <span class="token comment">//\u662F\u5426\u663E\u793A\uFF0C\u914D\u5408v-show\u4F7F\u7528</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="demo\u4EE3\u7801" tabindex="-1">Demo\u4EE3\u7801 <a class="header-anchor" href="#demo\u4EE3\u7801" aria-hidden="true">#</a></h4><div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>switchPane(<span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Pane1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>switchPane(<span class="token punctuation">&#39;</span>2<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Pane2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>switchPane(<span class="token punctuation">&#39;</span>3<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Pane3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Pane1Loaded<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Pane1Show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Pane1 Content
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Pane2Loaded<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Pane2Show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Pane2 Content
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Pane3Loaded<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Pane3Show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Pane3 Content
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useLazyPane <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> which <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">loaded</span><span class="token operator">:</span> Pane1Loaded<span class="token punctuation">,</span> <span class="token literal-property property">show</span><span class="token operator">:</span> Pane1Show <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useLazyPane</span><span class="token punctuation">(</span>which<span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">loaded</span><span class="token operator">:</span> Pane2Loaded<span class="token punctuation">,</span> <span class="token literal-property property">show</span><span class="token operator">:</span> Pane2Show <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useLazyPane</span><span class="token punctuation">(</span>which<span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">loaded</span><span class="token operator">:</span> Pane3Loaded<span class="token punctuation">,</span> <span class="token literal-property property">show</span><span class="token operator">:</span> Pane3Show <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useLazyPane</span><span class="token punctuation">(</span>which<span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">switchPane</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">idx</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      which<span class="token punctuation">.</span>value <span class="token operator">=</span> idx
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      which<span class="token punctuation">,</span>
      switchPane<span class="token punctuation">,</span>
      Pane1Loaded<span class="token punctuation">,</span>
      Pane1Show<span class="token punctuation">,</span>
      Pane2Loaded<span class="token punctuation">,</span>
      Pane2Show<span class="token punctuation">,</span>
      Pane3Loaded<span class="token punctuation">,</span>
      Pane3Show<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">button</span> <span class="token punctuation">{</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div>__VP_STATIC_END__`,6),E='{"title":"useLazyPane","description":"","frontmatter":{"title":"useLazyPane"},"headers":[{"level":3,"title":"\u8BF4\u660E","slug":"\u8BF4\u660E"}],"relativePath":"examples/use-lazy-pane.md","lastUpdated":1681811661034}',A={},F=Object.assign(A,{__name:"use-lazy-pane",setup(n){return(a,t)=>(o(),c("div",null,[D,I,N,y(V),R]))}});export{E as __pageData,F as default};

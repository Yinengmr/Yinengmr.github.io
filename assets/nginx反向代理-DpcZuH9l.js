import{i as e,o as t,r as n,t as r}from"./app-CtNkC-JB.js";var i=JSON.parse(`{"path":"/others/nginx%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86.html","title":"nignx 反向代理","lang":"zh-CN","frontmatter":{"date":"2021-12-03T00:00:00.000Z"},"git":{},"filePathRelative":"others/nginx反向代理.md"}`),a={name:`nginx反向代理.md`};function o(r,i,a,o,s,c){return t(),n(`div`,null,[...i[0]||=[e(`<h1 id="nignx-反向代理" tabindex="-1"><a class="header-anchor" href="#nignx-反向代理"><span>nignx 反向代理</span></a></h1><h2 id="nignx-反向代理-1" tabindex="-1"><a class="header-anchor" href="#nignx-反向代理-1"><span>nignx 反向代理</span></a></h2><div class="hint-container tip"><p class="hint-container-title">这里以PHP showdoc web 服务配置为参考</p><p>http://xxx.com/web 代理 http://xxx.com:8091/web/</p></div><p>nginx.conf</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">...</span>
<span class="line"></span>
<span class="line">location /web {</span>
<span class="line">    proxy_pass  http://127.0.0.1:8090;</span>
<span class="line">    proxy_redirect ~^http://127.0.0.1:8090(.*)   http://127.0.0.1$1;</span>
<span class="line">    proxy_set_header X-Real-IP  $remote_addr;</span>
<span class="line">    proxy_set_header Host $host;</span>
<span class="line">    proxy_http_version 1.1;</span>
<span class="line">    </span>
<span class="line">    proxy_set_header Connection keep-alive;</span>
<span class="line">    proxy_set_header Keep-Alive 600;</span>
<span class="line">    keepalive_timeout 600;</span>
<span class="line">}</span>
<span class="line">location ^~/server {</span>
<span class="line">    proxy_pass  http://127.0.0.1:8090;</span>
<span class="line">    proxy_redirect ~^http://127.0.0.1:8090(.*)   http://127.0.0.1$1;</span>
<span class="line">    proxy_set_header X-Real-IP  $remote_addr;</span>
<span class="line">    proxy_set_header Host $host;</span>
<span class="line">    proxy_http_version 1.1;</span>
<span class="line">    </span>
<span class="line">    proxy_set_header Connection keep-alive;</span>
<span class="line">    proxy_set_header Keep-Alive 600;</span>
<span class="line">    keepalive_timeout 600;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-router-设置createwebhistory-打包后-nginx-404-错误解决" tabindex="-1"><a class="header-anchor" href="#vue-router-设置createwebhistory-打包后-nginx-404-错误解决"><span>vue-router 设置createWebHistory 打包后 Nginx 404 错误解决</span></a></h2><div class="hint-container tip"><p class="hint-container-title">history: createWebHistory(&quot;/&quot;)</p><p>路由设置为 history: createWebHistory(&quot;/&quot;), 需要Nginx 做转发</p></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">location / {</span>
<span class="line">    # vue createWebHistory 模式下做转发</span>
<span class="line">    try_files $uri $uri/ /index.html last;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};
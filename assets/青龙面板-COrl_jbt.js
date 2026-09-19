import{i as e,o as t,r as n,t as r}from"./app-CtNkC-JB.js";var i=JSON.parse(`{"path":"/docker/%E9%9D%92%E9%BE%99%E9%9D%A2%E6%9D%BF.html","title":"","lang":"zh-CN","frontmatter":{"date":"2024-01-22T00:00:00.000Z"},"git":{},"filePathRelative":"docker/青龙面板.md"}`),a={name:`青龙面板.md`};function o(r,i,a,o,s,c){return t(),n(`div`,null,[...i[0]||=[e(`<h3 id="docker-安装青龙" tabindex="-1"><a class="header-anchor" href="#docker-安装青龙"><span>docker 安装青龙</span></a></h3><p>docker run -dit -v D:/docker/ql/data:/ql/data -p 5700:5700 -e QIBaseUrl=&quot;/&quot; -e QIPort=&quot;5700&quot; --name qinglong --hostname qinglong --restart unless-stopped whyour/qinglong:latest</p><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖"><span>安装依赖</span></a></h3><p>node依赖</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre><code class="language-txt"><span class="line">ts-md5</span>
<span class="line">@types/node</span>
<span class="line">prettytable</span>
<span class="line">node-telegram-bot-api</span>
<span class="line">tslib</span>
<span class="line">ql</span>
<span class="line">common</span>
<span class="line">fs</span>
<span class="line">typescript</span>
<span class="line">axios</span>
<span class="line">png-js</span>
<span class="line">axios</span>
<span class="line">ws@7.4.3</span>
<span class="line">crypto-js</span>
<span class="line">jieba</span>
<span class="line">global-agent</span>
<span class="line">jsdom -g</span>
<span class="line">moment</span>
<span class="line">form-data</span>
<span class="line">date-fns</span>
<span class="line">node-jsencrypt</span>
<span class="line">require</span>
<span class="line">js-base64</span>
<span class="line">tough-cookie</span>
<span class="line">json5</span>
<span class="line">jsdom</span>
<span class="line">dotenv</span>
<span class="line">qs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>python依赖</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre><code class="language-txt"><span class="line">ping3</span>
<span class="line">canvas</span>
<span class="line">requests</span>
<span class="line">jieba</span>
<span class="line">PyExecJS</span>
<span class="line">httpx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>linux依赖</p><div class="language-txt line-numbers-mode" data-highlighter="prismjs" data-ext="txt"><pre><code class="language-txt"><span class="line">Ixml</span>
<span class="line">bizMsg</span>
<span class="line">bizCode</span>
<span class="line">gcc</span>
<span class="line">python-devel</span>
<span class="line">aiohttp</span>
<span class="line">magic</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="脚本" tabindex="-1"><a class="header-anchor" href="#脚本"><span>脚本</span></a></h3><h4 id="阿里云盘每日签到" tabindex="-1"><a class="header-anchor" href="#阿里云盘每日签到"><span>阿里云盘每日签到</span></a></h4><p>https://github.com/mrabit/aliyundriveDailyCheck</p><p>获取阿里token <code>refreshToken</code> copy(JSON.parse(localStorage.token).refresh_token); console.log(JSON.parse(localStorage.token).refresh_token);</p><h4 id="掘金签到" tabindex="-1"><a class="header-anchor" href="#掘金签到"><span>掘金签到</span></a></h4><p>https://github.com/leochen-g/ql-juejinhelper</p>`,15)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};
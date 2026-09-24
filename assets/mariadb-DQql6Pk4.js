import{i as e,o as t,r as n,t as r}from"./app-W3xquOFp.js";var i=JSON.parse(`{"path":"/windows/mariadb.html","title":"Windows 下 MariaDB 安装维护与常见问题","lang":"zh-CN","frontmatter":{"title":"Windows 下 MariaDB 安装维护与常见问题","date":"2021-04-15T00:00:00.000Z"},"git":{},"filePathRelative":"windows/mariadb.md"}`),a={name:`mariadb.md`};function o(r,i,a,o,s,c){return t(),n(`div`,null,[...i[0]||=[e(`<h2 id="安装-mariadb" tabindex="-1"><a class="header-anchor" href="#安装-mariadb"><span>安装 MariaDB</span></a></h2><p>下载地址：<a href="https://mariadb.org/download/" target="_blank" rel="noopener noreferrer">https://mariadb.org/download/</a></p><p>安装时建议勾选 <strong>Modify password for root user</strong> 设置 root 密码，字符集选择 <strong>utf8mb4</strong>。</p><h2 id="重装系统后修复服务-不破坏数据" tabindex="-1"><a class="header-anchor" href="#重装系统后修复服务-不破坏数据"><span>重装系统后修复服务（不破坏数据）</span></a></h2><p>重装 Windows 后，MariaDB 的数据文件还在，但系统服务丢失了。无需重装，只需重新注册服务：</p><div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell"><pre><code class="language-powershell"><span class="line"><span class="token comment"># 进入安装目录</span></span>
<span class="line">cd D:\\Dev\\mariadb\\bin</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重新注册系统服务</span></span>
<span class="line">mysqld<span class="token punctuation">.</span>exe <span class="token operator">--</span>install mariaDB <span class="token operator">--</span>defaults-file=D:\\Dev\\mariadb\\<span class="token keyword">data</span>\\my<span class="token punctuation">.</span>ini</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启动服务</span></span>
<span class="line">net <span class="token function">start</span> mariaDB</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Service successfully installed.</span>
<span class="line">mariaDB 服务正在启动 .</span>
<span class="line">mariaDB 服务已经启动成功。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重置-root-密码" tabindex="-1"><a class="header-anchor" href="#重置-root-密码"><span>重置 root 密码</span></a></h2><p>忘记 root 密码时，通过跳过授权表的方式重置：</p><div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell"><pre><code class="language-powershell"><span class="line"><span class="token comment"># 1. 停止服务</span></span>
<span class="line">net stop mariaDB</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2. 跳过授权表启动</span></span>
<span class="line">mysqld <span class="token operator">--</span><span class="token function">skip-grant</span><span class="token operator">-</span>tables</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3. 新开一个终端，无密码登录</span></span>
<span class="line">mysql <span class="token operator">-</span>u root</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 4. 刷新权限并修改密码</span></span>
<span class="line">FLUSH PRIVILEGES<span class="token punctuation">;</span></span>
<span class="line">ALTER USER <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;新密码&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">exit</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 5. 重启服务</span></span>
<span class="line">net stop mariaDB</span>
<span class="line">net <span class="token function">start</span> mariaDB</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据备份与恢复" tabindex="-1"><a class="header-anchor" href="#数据备份与恢复"><span>数据备份与恢复</span></a></h2><div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell"><pre><code class="language-powershell"><span class="line"><span class="token comment"># 备份所有数据库</span></span>
<span class="line">mysqldump <span class="token operator">-</span>u root <span class="token operator">-</span>p <span class="token operator">--</span>all-databases &gt; D:\\backup\\mariadb_all<span class="token punctuation">.</span>sql</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 备份单个数据库</span></span>
<span class="line">mysqldump <span class="token operator">-</span>u root <span class="token operator">-</span>p mydb &gt; D:\\backup\\mydb<span class="token punctuation">.</span>sql</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 恢复</span></span>
<span class="line">mysql <span class="token operator">-</span>u root <span class="token operator">-</span>p &lt; D:\\backup\\mariadb_all<span class="token punctuation">.</span>sql</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre><code class="language-sql"><span class="line"><span class="token comment">-- 查看版本</span></span>
<span class="line"><span class="token keyword">SELECT</span> VERSION<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 查看所有数据库</span></span>
<span class="line"><span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 查看数据库大小</span></span>
<span class="line"><span class="token keyword">SELECT</span> table_schema <span class="token string">&quot;DB&quot;</span><span class="token punctuation">,</span> <span class="token function">ROUND</span><span class="token punctuation">(</span><span class="token function">SUM</span><span class="token punctuation">(</span>data_length <span class="token operator">+</span> index_length<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1024</span> <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;Size(MB)&quot;</span></span>
<span class="line"><span class="token keyword">FROM</span> information_schema<span class="token punctuation">.</span><span class="token keyword">tables</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> table_schema<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 修改字符集</span></span>
<span class="line"><span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> mydb <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_unicode_ci<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};
import{i as e,o as t,r as n,t as r}from"./app-CtNkC-JB.js";var i=JSON.parse(`{"path":"/moonbit/","title":"MoonBit（月兔）编程语言快速入门","lang":"zh-CN","frontmatter":{"date":"2025-10-29T00:00:00.000Z"},"git":{},"filePathRelative":"moonbit/README.md"}`),a={name:`README.md`};function o(r,i,a,o,s,c){return t(),n(`div`,null,[...i[0]||=[e(`<h1 id="moonbit-月兔-编程语言快速入门" tabindex="-1"><a class="header-anchor" href="#moonbit-月兔-编程语言快速入门"><span>MoonBit（月兔）编程语言快速入门</span></a></h1><h2 id="一、基础介绍" tabindex="-1"><a class="header-anchor" href="#一、基础介绍"><span>一、基础介绍</span></a></h2><h3 id="_1-1-什么是-moonbit" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是-moonbit"><span>1.1 什么是 MoonBit</span></a></h3><p>MoonBit（中文代号：月兔）是由字节跳动团队自研的<strong>面向云原生、WebAssembly、嵌入式</strong>的新一代静态强类型编译型编程语言，主打：</p><ul><li>极致小体积 WASM 产物，适合边缘、浏览器、小程序、IoT 设备</li><li>内存安全、无 GC（手动区域内存管理），性能逼近 Rust</li><li>语法简洁易上手，兼顾函数式+命令式编程范式</li><li>完善的包管理、单元测试、交叉编译、工具链一体化</li><li>可与 Rust、Go、JavaScript、WASI 生态互操作</li></ul><p>官方仓库：<a href="https://github.com/moonbitlang/moonbit" target="_blank" rel="noopener noreferrer">https://github.com/moonbitlang/moonbit</a> 官方文档：<a href="https://www.moonbitlang.com/" target="_blank" rel="noopener noreferrer">https://www.moonbitlang.com/</a></p><h3 id="_1-2-适用场景" tabindex="-1"><a class="header-anchor" href="#_1-2-适用场景"><span>1.2 适用场景</span></a></h3><ol><li>前端高性能 WASM 插件、复杂计算下沉</li><li>云函数、Serverless、WASI 云原生应用</li><li>嵌入式设备、单片机、轻量固件开发</li><li>区块链合约、规则引擎、沙盒安全执行环境</li><li>跨端高性能算法库（加密、解析、图像处理）</li></ol><h2 id="二、环境安装-windows-macos-linux" tabindex="-1"><a class="header-anchor" href="#二、环境安装-windows-macos-linux"><span>二、环境安装（Windows/macOS/Linux）</span></a></h2><h3 id="_2-1-一键安装工具链-moon" tabindex="-1"><a class="header-anchor" href="#_2-1-一键安装工具链-moon"><span>2.1 一键安装工具链 <code>moon</code></span></a></h3><h4 id="linux-macos-终端执行" tabindex="-1"><a class="header-anchor" href="#linux-macos-终端执行"><span>Linux / macOS（终端执行）</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://www.moonbitlang.com/install.sh <span class="token operator">|</span> <span class="token function">sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="windows-powershell-管理员" tabindex="-1"><a class="header-anchor" href="#windows-powershell-管理员"><span>Windows（PowerShell 管理员）</span></a></h4><div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell"><pre><code class="language-powershell"><span class="line"><span class="token function">irm</span> https:<span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>moonbitlang<span class="token punctuation">.</span>com/install<span class="token punctuation">.</span>ps1 <span class="token punctuation">|</span> <span class="token function">iex</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-2-验证安装" tabindex="-1"><a class="header-anchor" href="#_2-2-验证安装"><span>2.2 验证安装</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">moon <span class="token parameter variable">--version</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出版本号即代表安装成功。</p><h3 id="_2-3-配套编辑器插件" tabindex="-1"><a class="header-anchor" href="#_2-3-配套编辑器插件"><span>2.3 配套编辑器插件</span></a></h3><ul><li>VS Code 搜索插件：<strong>MoonBit</strong>（官方语法高亮、LSP、一键运行）</li></ul><h2 id="三、第一个-hello-world-项目" tabindex="-1"><a class="header-anchor" href="#三、第一个-hello-world-项目"><span>三、第一个 Hello World 项目</span></a></h2><h3 id="_3-1-创建新项目" tabindex="-1"><a class="header-anchor" href="#_3-1-创建新项目"><span>3.1 创建新项目</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 创建项目</span></span>
<span class="line">moon new hello_moonbit</span>
<span class="line"><span class="token builtin class-name">cd</span> hello_moonbit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>项目目录结构自动生成：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">hello_moonbit/</span>
<span class="line">├── moon.mod.json    # 项目配置、依赖、编译配置</span>
<span class="line">├── src/</span>
<span class="line">│   └── main.mbt     # 主代码文件</span>
<span class="line">└── test/            # 单元测试目录</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-编写代码-src-main-mbt" tabindex="-1"><a class="header-anchor" href="#_3-2-编写代码-src-main-mbt"><span>3.2 编写代码 <code>src/main.mbt</code></span></a></h3><div class="language-moonbit line-numbers-mode" data-highlighter="prismjs" data-ext="moonbit"><pre><code class="language-moonbit"><span class="line">// 入口主函数，程序启动点</span>
<span class="line">fn main() {</span>
<span class="line">    println(&quot;Hello MoonBit 月兔语言！&quot;)</span>
<span class="line">    println(&quot;字节跳动自研 WASM 编程语言&quot;)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-运行与编译" tabindex="-1"><a class="header-anchor" href="#_3-3-运行与编译"><span>3.3 运行与编译</span></a></h3><h4 id="直接本地解释运行" tabindex="-1"><a class="header-anchor" href="#直接本地解释运行"><span>直接本地解释运行</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">moon run</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="编译为-wasm-默认-wasi-标准" tabindex="-1"><a class="header-anchor" href="#编译为-wasm-默认-wasi-标准"><span>编译为 WASM（默认 WASI 标准）</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">moon build</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>产物在 <code>target/wasm-gc/release/build/</code> 下 <code>.wasm</code> 文件。</p><h4 id="编译为可执行二进制-部分平台支持" tabindex="-1"><a class="header-anchor" href="#编译为可执行二进制-部分平台支持"><span>编译为可执行二进制（部分平台支持）</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">moon build <span class="token parameter variable">--target</span> native</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="四、核心基础语法速览" tabindex="-1"><a class="header-anchor" href="#四、核心基础语法速览"><span>四、核心基础语法速览</span></a></h2><h3 id="_4-1-变量与常量" tabindex="-1"><a class="header-anchor" href="#_4-1-变量与常量"><span>4.1 变量与常量</span></a></h3><div class="language-moonbit line-numbers-mode" data-highlighter="prismjs" data-ext="moonbit"><pre><code class="language-moonbit"><span class="line">// 不可变变量（默认推荐）</span>
<span class="line">let a = 100</span>
<span class="line">let s: String = &quot;字符串&quot;</span>
<span class="line"></span>
<span class="line">// 可变变量 mut</span>
<span class="line">let mut b = 200</span>
<span class="line">b = 300</span>
<span class="line"></span>
<span class="line">// 常量 const（编译期确定）</span>
<span class="line">const PI: Float64 = 3.1415926</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-基础数据类型" tabindex="-1"><a class="header-anchor" href="#_4-2-基础数据类型"><span>4.2 基础数据类型</span></a></h3><div class="language-moonbit line-numbers-mode" data-highlighter="prismjs" data-ext="moonbit"><pre><code class="language-moonbit"><span class="line">// 整数：Int、Int64、UInt32 等</span>
<span class="line">let num: Int = 666</span>
<span class="line">// 浮点数</span>
<span class="line">let f: Float64 = 2.33</span>
<span class="line">// 布尔</span>
<span class="line">let flag: Bool = true</span>
<span class="line">// 字符串</span>
<span class="line">let str = &quot;MoonBit&quot;</span>
<span class="line">// 字符</span>
<span class="line">let c = &#39;M&#39;</span>
<span class="line">// 单元类型（类似 void）</span>
<span class="line">let unit: Unit = ()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-函数定义" tabindex="-1"><a class="header-anchor" href="#_4-3-函数定义"><span>4.3 函数定义</span></a></h3><h4 id="普通函数" tabindex="-1"><a class="header-anchor" href="#普通函数"><span>普通函数</span></a></h4><div class="language-moonbit line-numbers-mode" data-highlighter="prismjs" data-ext="moonbit"><pre><code class="language-moonbit"><span class="line">fn add(x: Int, y: Int) -&gt; Int {</span>
<span class="line">    x + y</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 单行简写</span>
<span class="line">fn sub(x: Int, y: Int) -&gt; Int = x - y</span>
<span class="line"></span>
<span class="line">fn main() {</span>
<span class="line">    println(add(1, 2))</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="高阶函数-函数作为参数" tabindex="-1"><a class="header-anchor" href="#高阶函数-函数作为参数"><span>高阶函数（函数作为参数）</span></a></h4><div class="language-moonbit line-numbers-mode" data-highlighter="prismjs" data-ext="moonbit"><pre><code class="language-moonbit"><span class="line">fn apply(v: Int, f: (Int) -&gt; Int) -&gt; Int {</span>
<span class="line">    f(v)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">fn main() {</span>
<span class="line">    let res = apply(5, fn(x) { x * x })</span>
<span class="line">    println(res)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-条件判断-if-else" tabindex="-1"><a class="header-anchor" href="#_4-4-条件判断-if-else"><span>4.4 条件判断 if / else</span></a></h3><div class="language-moonbit line-numbers-mode" data-highlighter="prismjs" data-ext="moonbit"><pre><code class="language-moonbit"><span class="line">fn main() {</span>
<span class="line">    let score = 85</span>
<span class="line">    if score &gt;= 90 {</span>
<span class="line">        println(&quot;A&quot;)</span>
<span class="line">    } else if score &gt;= 60 {</span>
<span class="line">        println(&quot;B&quot;)</span>
<span class="line">    } else {</span>
<span class="line">        println(&quot;C&quot;)</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // if 表达式赋值</span>
<span class="line">    let level = if score &gt; 80 { &quot;good&quot; } else { &quot;normal&quot; }</span>
<span class="line">    println(level)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-循环" tabindex="-1"><a class="header-anchor" href="#_4-5-循环"><span>4.5 循环</span></a></h3><h4 id="while-循环" tabindex="-1"><a class="header-anchor" href="#while-循环"><span>while 循环</span></a></h4><div class="language-moonbit line-numbers-mode" data-highlighter="prismjs" data-ext="moonbit"><pre><code class="language-moonbit"><span class="line">fn main() {</span>
<span class="line">    let mut i = 0</span>
<span class="line">    while i &lt; 5 {</span>
<span class="line">        println(i)</span>
<span class="line">        i = i + 1</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="for-迭代循环-range" tabindex="-1"><a class="header-anchor" href="#for-迭代循环-range"><span>for 迭代循环（Range）</span></a></h4><div class="language-moonbit line-numbers-mode" data-highlighter="prismjs" data-ext="moonbit"><pre><code class="language-moonbit"><span class="line">fn main() {</span>
<span class="line">    for i in 0..5 {</span>
<span class="line">        println(i)</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-数组与切片" tabindex="-1"><a class="header-anchor" href="#_4-6-数组与切片"><span>4.6 数组与切片</span></a></h3><div class="language-moonbit line-numbers-mode" data-highlighter="prismjs" data-ext="moonbit"><pre><code class="language-moonbit"><span class="line">fn main() {</span>
<span class="line">    // 定长数组</span>
<span class="line">    let arr: [Int; 3] = [1, 2, 3]</span>
<span class="line">    // 动态数组（Vec）</span>
<span class="line">    let mut vec = Vec::new()</span>
<span class="line">    vec.push(10)</span>
<span class="line">    vec.push(20)</span>
<span class="line">    println(vec[0])</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-7-结构体-struct" tabindex="-1"><a class="header-anchor" href="#_4-7-结构体-struct"><span>4.7 结构体 struct</span></a></h3><div class="language-moonbit line-numbers-mode" data-highlighter="prismjs" data-ext="moonbit"><pre><code class="language-moonbit"><span class="line">// 定义结构体</span>
<span class="line">struct User {</span>
<span class="line">    name: String,</span>
<span class="line">    age: Int</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">fn main() {</span>
<span class="line">    let u = User {</span>
<span class="line">        name: &quot;ZhangSan&quot;,</span>
<span class="line">        age: 22</span>
<span class="line">    }</span>
<span class="line">    println(u.name)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-8-枚举-enum-代数数据类型-adt" tabindex="-1"><a class="header-anchor" href="#_4-8-枚举-enum-代数数据类型-adt"><span>4.8 枚举 enum（代数数据类型 ADT）</span></a></h3><p>MoonBit 强依赖枚举做错误处理、模式匹配，是核心特性：</p><div class="language-moonbit line-numbers-mode" data-highlighter="prismjs" data-ext="moonbit"><pre><code class="language-moonbit"><span class="line">enum Result&lt;T, E&gt; {</span>
<span class="line">    Ok(T),</span>
<span class="line">    Err(E)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">fn div(a: Int, b: Int) -&gt; Result&lt;Int, String&gt; {</span>
<span class="line">    if b == 0 {</span>
<span class="line">        Err(&quot;除数不能为0&quot;)</span>
<span class="line">    } else {</span>
<span class="line">        Ok(a / b)</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">fn main() {</span>
<span class="line">    match div(10, 2) {</span>
<span class="line">        Ok(v) =&gt; println(v),</span>
<span class="line">        Err(e) =&gt; println(e)</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-9-模式匹配-match" tabindex="-1"><a class="header-anchor" href="#_4-9-模式匹配-match"><span>4.9 模式匹配 match</span></a></h3><div class="language-moonbit line-numbers-mode" data-highlighter="prismjs" data-ext="moonbit"><pre><code class="language-moonbit"><span class="line">fn check_num(n: Int) {</span>
<span class="line">    match n {</span>
<span class="line">        0 =&gt; println(&quot;zero&quot;),</span>
<span class="line">        1 | 2 =&gt; println(&quot;small&quot;),</span>
<span class="line">        _ =&gt; println(&quot;other&quot;)</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、模块、包管理与依赖" tabindex="-1"><a class="header-anchor" href="#五、模块、包管理与依赖"><span>五、模块、包管理与依赖</span></a></h2><h3 id="_5-1-模块划分" tabindex="-1"><a class="header-anchor" href="#_5-1-模块划分"><span>5.1 模块划分</span></a></h3><p>一个 <code>.mbt</code> 文件为一个模块，用 <code>mod</code> 组织代码：</p><div class="language-moonbit line-numbers-mode" data-highlighter="prismjs" data-ext="moonbit"><pre><code class="language-moonbit"><span class="line">// math.mbt</span>
<span class="line">pub fn square(x: Int) -&gt; Int = x * x</span>
<span class="line"></span>
<span class="line">// main.mbt</span>
<span class="line">mod math</span>
<span class="line">fn main() {</span>
<span class="line">    println(math::square(5))</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>pub</code> 代表对外导出，默认私有。</p><h3 id="_5-2-添加第三方依赖" tabindex="-1"><a class="header-anchor" href="#_5-2-添加第三方依赖"><span>5.2 添加第三方依赖</span></a></h3><p>编辑根目录 <code>moon.mod.json</code>，在 <code>dependencies</code> 增加：</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;moonbitlang/sha256&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.1.0&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行自动拉取依赖：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">moon update</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="六、单元测试" tabindex="-1"><a class="header-anchor" href="#六、单元测试"><span>六、单元测试</span></a></h2><p>MoonBit 内置原生测试框架，无需第三方库。 在 <code>test/main_test.mbt</code> 写入：</p><div class="language-moonbit line-numbers-mode" data-highlighter="prismjs" data-ext="moonbit"><pre><code class="language-moonbit"><span class="line">#[test]</span>
<span class="line">fn test_add() {</span>
<span class="line">    assert_eq!(1 + 1, 2)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">#[test]</span>
<span class="line">#[should_panic]</span>
<span class="line">fn test_panic() {</span>
<span class="line">    panic!(&quot;预期崩溃用例&quot;)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行全部测试：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">moon <span class="token builtin class-name">test</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="七、编译产物与部署说明" tabindex="-1"><a class="header-anchor" href="#七、编译产物与部署说明"><span>七、编译产物与部署说明</span></a></h2><h3 id="_7-1-输出产物类型" tabindex="-1"><a class="header-anchor" href="#_7-1-输出产物类型"><span>7.1 输出产物类型</span></a></h3><ol><li><strong>wasm-gc</strong>（默认）：WASM GC 标准，体积最小，浏览器/WASI 通用</li><li><strong>wasi</strong>：传统 WASI 版本，兼容老旧运行时</li><li><strong>native</strong>：编译为本机系统二进制（Linux/macOS）</li></ol><h3 id="_7-2-wasm-调用简单示例-js-加载" tabindex="-1"><a class="header-anchor" href="#_7-2-wasm-调用简单示例-js-加载"><span>7.2 WASM 调用简单示例（JS 加载）</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// Node.js / 浏览器加载 MoonBit 编译出的 .wasm</span></span>
<span class="line"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> buf <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;xxx.wasm&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">WebAssembly<span class="token punctuation">.</span><span class="token function">instantiate</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> instance <span class="token operator">=</span> res<span class="token punctuation">.</span>instance<span class="token punctuation">;</span></span>
<span class="line">  instance<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八、常用-cli-命令汇总" tabindex="-1"><a class="header-anchor" href="#八、常用-cli-命令汇总"><span>八、常用 CLI 命令汇总</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">moon new <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>          <span class="token comment"># 新建项目</span></span>
<span class="line">moon run                 <span class="token comment"># 直接运行代码</span></span>
<span class="line">moon build               <span class="token comment"># 编译构建</span></span>
<span class="line">moon <span class="token builtin class-name">test</span>                <span class="token comment"># 执行单元测试</span></span>
<span class="line">moon update              <span class="token comment"># 更新依赖包</span></span>
<span class="line">moon clean               <span class="token comment"># 清空编译产物</span></span>
<span class="line">moon <span class="token function">fmt</span>                 <span class="token comment"># 代码自动格式化</span></span>
<span class="line">moon check               <span class="token comment"># 静态语法检查</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九、新手避坑要点" tabindex="-1"><a class="header-anchor" href="#九、新手避坑要点"><span>九、新手避坑要点</span></a></h2><ol><li><strong>变量默认不可变</strong>，修改必须加 <code>mut</code>；</li><li>函数最后表达式自动返回，无需多余 <code>return</code>；</li><li>空值没有 <code>null</code>，统一用枚举 <code>Option&lt;T&gt;{Some(T), None}</code>；</li><li>无 GC，靠区域内存（Region）管理，避免内存泄漏；</li><li>WASM 产物不支持直接操作操作系统 API，需要绑定 WASI；</li><li>字符串不可修改，拼接使用 <code>String::concat</code> 或插值。</li></ol><h2 id="十、进阶学习路线" tabindex="-1"><a class="header-anchor" href="#十、进阶学习路线"><span>十、进阶学习路线</span></a></h2><ol><li>所有权 &amp; Region 内存模型（MoonBit 核心）</li><li>Trait 特征系统、泛型编程</li><li>WASI 标准接口调用（文件、网络、环境变量）</li><li>与 Rust/JS 双向 FFI 互调用</li><li>编写可发布的 MoonBit 公共包</li><li>嵌入式裸机 WASM 固件开发</li></ol><hr>`,87)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};
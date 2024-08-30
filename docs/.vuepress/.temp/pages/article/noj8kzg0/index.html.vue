<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<p>个人算法模板总结，基础算法提供C++/Python两种代码，较为复杂的算法使用C++代码。</p>
<p>几场ICPC网络赛和自主练习往年省赛下来，我发现使用Python在解决一些字符串问题时代码比较简洁，不易出错,缺点是运行速度是C++的至少3倍以上，适合解决签到题和一些技巧题(大数相乘).</p>
<p>持续更新中</p>
<h1 id="工具" tabindex="-1"><a class="header-anchor" href="#工具"><span>工具</span></a></h1>
<h2 id="临时评测机" tabindex="-1"><a class="header-anchor" href="#临时评测机"><span>临时评测机</span></a></h2>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include &lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line">	int i = 0;</span>
<span class="line">	while (i &lt; 1000) {</span>
<span class="line">		system(&quot;data.exe &gt; data.txt&quot;);</span>
<span class="line">		system(&quot;baoli.exe &lt; data.txt &gt; baoli.txt&quot;);</span>
<span class="line">		system(&quot;test.exe &lt; data.txt &gt; test.txt&quot;);</span>
<span class="line">		if (system(&quot;fc test.txt baoli.txt&quot;))</span>
<span class="line">			break;</span>
<span class="line">		else {</span>
<span class="line">			cout &lt;&lt; &quot;success&quot; &lt;&lt; endl;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h1>
<h2 id="python-sortedlist" tabindex="-1"><a class="header-anchor" href="#python-sortedlist"><span>[Python]SortedList</span></a></h2>
<p>可以将输入的序列进行排序,并且可以保存有序的同时，在<code v-pre>O(log(n))</code>的复杂度下完成后续的插入和删除的操作.适合于需要保持序列的有序性同时需要不断修改的情形</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">from</span> sortedcontainers <span class="token keyword">import</span> SortedList</span>
<span class="line">sl <span class="token operator">=</span> SortedList<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment">#初始化</span></span>
<span class="line"></span>
<span class="line">sl<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token comment">#添加一个元素 O(log(n))</span></span>
<span class="line">sl<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment">#添加一组元素O(k*log(n))</span></span>
<span class="line">bisect_left<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token comment">#lower_bound()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">sl<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">#清除全部 O(n)</span></span>
<span class="line">sl<span class="token punctuation">.</span>discard<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token comment">#删除某个值,O(log(n))</span></span>
<span class="line">sl<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token comment">#删除，不存在会报错</span></span>
<span class="line">sl<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token comment">#弹出索引为-1的元素</span></span>
<span class="line"></span>
<span class="line">sl<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token comment">#返回4的个数</span></span>
<span class="line">sl<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token comment">#返回4的下标,多个值返回最小下标</span></span>
<span class="line"></span>
<span class="line">sl<span class="token punctuation">.</span>islice<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token comment">#切片[2,4]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="玄学算法" tabindex="-1"><a class="header-anchor" href="#玄学算法"><span>玄学算法</span></a></h1>
<h2 id="模拟退火" tabindex="-1"><a class="header-anchor" href="#模拟退火"><span>模拟退火</span></a></h2>
<p><img src="@source/notes/.vuepress/assets/image-20230922145538179.png" alt="image-20230922145538179"></p>
<p><strong>接受概率</strong></p>
<p><img src="@source/notes/.vuepress/assets/jsgl.png" alt="jsgl"></p>
<p><strong>如何产生新解</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">坐标系内：随机生成一个点，或者生成一个向量。</span>
<span class="line">序列问题： random_shuffle 或者随机交换两个数。</span>
<span class="line">网格问题：可以看做二维序列，每次交换两个格子即可。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">//https://codeforces.com/gym/101981 D题</span>
<span class="line">using namespace std;</span>
<span class="line">#define int long long</span>
<span class="line">#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int Maxn = 1e5 + 10;</span>
<span class="line"></span>
<span class="line">struct Point {</span>
<span class="line">    int x, y, z;</span>
<span class="line">} p[105];</span>
<span class="line">int N;</span>
<span class="line"></span>
<span class="line">double dist(double x, double y, double z) {</span>
<span class="line">    double mx = 0;</span>
<span class="line">    for (int i = 1; i &lt;= N; i++) {</span>
<span class="line">        mx = max(mx, sqrt(</span>
<span class="line">                (x - p[i].x) * (x - p[i].x) +</span>
<span class="line">                (y - p[i].y) * (y - p[i].y) +</span>
<span class="line">                (z - p[i].z) * (z - p[i].z)));</span>
<span class="line">    }</span>
<span class="line">    return mx;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">double X, Y, Z, ans;//全局最优点</span>
<span class="line">void SA() {</span>
<span class="line">    double T = 4, delta = 0.998;//初始温度、降温率</span>
<span class="line">    while (T &gt; 1e-8) {</span>
<span class="line">        //给最优点加抖动干扰,温度越高，抖动越大</span>
<span class="line">        double x = X + ((rand() &lt;&lt; 1) - RAND_MAX) * T;</span>
<span class="line">        double y = Y + ((rand() &lt;&lt; 1) - RAND_MAX) * T;</span>
<span class="line">        double z = Z + ((rand() &lt;&lt; 1) - RAND_MAX) * T;</span>
<span class="line">        double mx = dist(x, y, z);</span>
<span class="line">		//出现更优解</span>
<span class="line">        if (mx &lt; ans) {</span>
<span class="line">            ans = mx, X = x, Y = y, Z = z;</span>
<span class="line">        } else if (rand() &lt; exp((ans - mx) / T) * RAND_MAX) {</span>
<span class="line">            //温度越高接受的概率越大</span>
<span class="line">            X = x, Y = y, Z = z;//如果可以接受</span>
<span class="line">        }</span>
<span class="line">        T *= delta;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">signed main() {</span>
<span class="line">    cin &gt;&gt; N;</span>
<span class="line">    for (int i = 1; i &lt;= N; i++) {</span>
<span class="line">        cin &gt;&gt; p[i].x &gt;&gt; p[i].y &gt;&gt; p[i].z;</span>
<span class="line">        X += p[i].x, Y += p[i].y, Z += p[i].z;</span>
<span class="line">    }</span>
<span class="line">    X /= N, Y /= N, Z /= N;//假定局部最优点</span>
<span class="line">    ans = dist(X, Y, Z);</span>
<span class="line">    SA();</span>
<span class="line">    printf(&quot;%-10f\n&quot;, ans);</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="基础算法" tabindex="-1"><a class="header-anchor" href="#基础算法"><span>基础算法</span></a></h1>
<h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串"><span>字符串</span></a></h2>
<h3 id="kmp" tabindex="-1"><a class="header-anchor" href="#kmp"><span>KMP</span></a></h3>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">int ne[Maxn];</span>
<span class="line">void get_Next(string s){</span>
<span class="line">    int L=s.size();</span>
<span class="line">    ne[0]=-1;</span>
<span class="line">    int i=0,j=-1;</span>
<span class="line">    while(i&lt;L){</span>
<span class="line">        if(j==-1 || s[i]==s[j]){</span>
<span class="line">            ne[++i]=++j;</span>
<span class="line">        }else j=ne[j];</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void KMP(string str,string s){</span>
<span class="line">    int L1=str.size(),L2=s.size();</span>
<span class="line">    int i=0,j=0;</span>
<span class="line">    while(i&lt;L1){</span>
<span class="line">        if(j==-1 || str[i]==s[j])i++,j++;</span>
<span class="line">        else j=ne[j];</span>
<span class="line">        if(j==L2){</span>
<span class="line">            cout&lt;&lt;i-j+1&lt;&lt;endl;</span>
<span class="line">            j=ne[j];</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>python</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">def</span> <span class="token function">KMP_algorithm</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> substring<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">'''</span>
<span class="line">    KMP字符串匹配的主函数</span>
<span class="line">    若存在字串返回字串在字符串中开始的位置下标，或者返回-1</span>
<span class="line">    '''</span></span>
<span class="line">    pnext <span class="token operator">=</span> gen_pnext<span class="token punctuation">(</span>substring<span class="token punctuation">)</span></span>
<span class="line">    n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span></span>
<span class="line">    m <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>substring<span class="token punctuation">)</span></span>
<span class="line">    i<span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span>j<span class="token operator">&lt;</span>m<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>string<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span>substring<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            i <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">            j <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">elif</span> <span class="token punctuation">(</span>j<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            j <span class="token operator">=</span> pnext<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            i <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> m<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> i<span class="token operator">-</span>j</span>
<span class="line">    <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span></span>
<span class="line">            </span>
<span class="line"> </span>
<span class="line"><span class="token keyword">def</span> <span class="token function">gen_pnext</span><span class="token punctuation">(</span>substring<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">"""</span>
<span class="line">    构造临时数组pnext</span>
<span class="line">    """</span></span>
<span class="line">    index<span class="token punctuation">,</span> m <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>substring<span class="token punctuation">)</span></span>
<span class="line">    pnext <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">*</span>m</span>
<span class="line">    i <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">while</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>substring<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> substring<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            pnext<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> index <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">            index <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">            i <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">elif</span> <span class="token punctuation">(</span>index<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            index <span class="token operator">=</span> pnext<span class="token punctuation">[</span>index<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            pnext<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">            i <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">return</span> pnext</span>
<span class="line"> </span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">"__main__"</span><span class="token punctuation">:</span></span>
<span class="line">    string <span class="token operator">=</span> <span class="token string">'abcxabcdabcdabcy'</span></span>
<span class="line">    substring <span class="token operator">=</span> <span class="token string">'abcdabcy'</span></span>
<span class="line">    out <span class="token operator">=</span> KMP_algorithm<span class="token punctuation">(</span>string<span class="token punctuation">,</span> substring<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="马拉车" tabindex="-1"><a class="header-anchor" href="#马拉车"><span>马拉车</span></a></h3>
<p>C++</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int Maxn=3e7+10;</span>
<span class="line">string s;</span>
<span class="line">int d[Maxn];</span>
<span class="line">int get_d(int n){</span>
<span class="line">    d[1]=1;</span>
<span class="line">    for(int i=2,l,r=1;i&lt;=n;i++){</span>
<span class="line">        if(i&lt;=r)d[i]=min(d[r-i+l],r-i+1);</span>
<span class="line">        while(s[i-d[i]]==s[i+d[i]])d[i]++;</span>
<span class="line">        if(i+d[i]-1&gt;r)l=i-d[i]+1,r=i+d[i]-1;</span>
<span class="line">    }</span>
<span class="line">    int mx=0;</span>
<span class="line">    for(int i=1;i&lt;=n;i++){</span>
<span class="line">        mx=max(mx,d[i]);</span>
<span class="line">    }</span>
<span class="line">    return mx-1;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    string str;cin&gt;&gt;str;</span>
<span class="line">    s+=&quot;$#&quot;;</span>
<span class="line">    for(char x:str){</span>
<span class="line">        s+=x,s+='#';</span>
<span class="line">    }</span>
<span class="line">    cout&lt;&lt;get_d(s.size()-1);</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">def</span> <span class="token function">longestPalindrome</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">str</span><span class="token punctuation">:</span></span>
<span class="line">    tem_s <span class="token operator">=</span> <span class="token string">'@#'</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> s<span class="token punctuation">:</span></span>
<span class="line">        tem_s <span class="token operator">+=</span> i <span class="token operator">+</span> <span class="token string">'#'</span></span>
<span class="line">    s <span class="token operator">=</span> tem_s <span class="token operator">+</span> <span class="token string">'&amp;'</span></span>
<span class="line">    Lens <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span></span>
<span class="line">    max_right <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    max_mid_index <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    p <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> Lens</span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>Lens<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> i <span class="token operator">></span> max_right<span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">while</span> s<span class="token punctuation">[</span>i<span class="token operator">-</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>i<span class="token operator">+</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">                p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">            max_right <span class="token operator">=</span> i<span class="token operator">+</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-</span><span class="token number">1</span></span>
<span class="line">            max_mid_index <span class="token operator">=</span> i</span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> p<span class="token punctuation">[</span><span class="token number">2</span><span class="token operator">*</span>max_mid_index <span class="token operator">-</span> i<span class="token punctuation">]</span></span>
<span class="line">            <span class="token keyword">if</span> p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> i <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">></span> max_right<span class="token punctuation">:</span></span>
<span class="line">                p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> max_right <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">            <span class="token keyword">while</span> s<span class="token punctuation">[</span>i<span class="token operator">-</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>i<span class="token operator">+</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">                p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">            <span class="token keyword">if</span> i <span class="token operator">+</span> p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">></span> max_right<span class="token punctuation">:</span></span>
<span class="line">                max_right <span class="token operator">=</span> i<span class="token operator">+</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-</span><span class="token number">1</span></span>
<span class="line">                max_mid_index <span class="token operator">=</span> i</span>
<span class="line">    index <span class="token operator">=</span> p<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> s<span class="token punctuation">[</span>index <span class="token operator">-</span> p<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">:</span>index <span class="token operator">+</span> p<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">'#'</span><span class="token punctuation">,</span><span class="token string">''</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串哈希" tabindex="-1"><a class="header-anchor" href="#字符串哈希"><span>字符串哈希</span></a></h3>
<p>hash[i]代表[0,i]所映射的哈希值</p>
<p>$hash[i]=hash[i-1]*Base+asc(s[i])$</p>
<p>求区间S[l,r]所对应的哈希值</p>
<p>$res=hash[r]-hash[l-1]*Base^{r-l+1}$</p>
<p>https://leetcode-cn.com/problems/distinct-echo-substrings/</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    typedef unsigned long long ll;</span>
<span class="line">    const int BASE = 131, MOD = 998244353;</span>
<span class="line">    ll p[10010], h[10010];</span>
<span class="line"></span>
<span class="line">    ll get(int l, int r) {</span>
<span class="line">        return (h[r] - h[l - 1] * p[r - l + 1] % MOD + MOD) % MOD;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    vector&lt;int&gt; findSubstring(string s, vector&lt;string&gt; &amp;words) {</span>
<span class="line">        ll n = s.size(), L = words[0].size(), m = words.size();</span>
<span class="line">        p[0] = 1;</span>
<span class="line">        for (int i = 1; i &lt;= n; i++)p[i] = p[i - 1] * BASE % MOD;</span>
<span class="line">        s = &quot; &quot; + s;</span>
<span class="line">        for (int i = 1; i &lt;= n; i++)h[i] = (h[i - 1] * BASE + (s[i] - 'a' + 1)) % MOD;</span>
<span class="line"></span>
<span class="line">        vector&lt;ll&gt; hashList;//存储每个单词的哈希值</span>
<span class="line">        for (int i = 0; i &lt; m; i++) {</span>
<span class="line">            ll res = 0;</span>
<span class="line">            for (int j = 0; j &lt; L; j++) {</span>
<span class="line">                res = (res * BASE + (words[i][j] - 'a' + 1)) % MOD;</span>
<span class="line">            }</span>
<span class="line">            hashList.push_back(res);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        vector&lt;int&gt; ans;</span>
<span class="line">        for (int i = 1; i + L * m - 1 &lt;= n; i++) {</span>
<span class="line">            //枚举起点</span>
<span class="line">            map&lt;ll, int&gt; hx;</span>
<span class="line">            for (ll x: hashList)hx[x]++;</span>
<span class="line"></span>
<span class="line">            int ok = true;</span>
<span class="line">            for (int j = 0; j &lt; m; j++) {</span>
<span class="line">                int l = i + j * L, r = i + (j + 1) * L - 1;</span>
<span class="line">                int x = get(l, r);</span>
<span class="line">                if (!hx.count(x)) {</span>
<span class="line">                    ok = false;</span>
<span class="line">                    break;</span>
<span class="line">                }</span>
<span class="line">                hx[x]--;</span>
<span class="line">                if (!hx[x])hx.erase(x);</span>
<span class="line">            }</span>
<span class="line">            if (ok) ans.push_back(i - 1);</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lcs" tabindex="-1"><a class="header-anchor" href="#lcs"><span>LCS</span></a></h3>
<p>状态转移:</p>
<p>$dp[i][j] = dp[i-1][j-1],s1[i]=s2[j]$</p>
<p>$dp[i][j]=max(dp[i-1][j],dp[i][j-1]),s1[i]!=s2[j]$</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define int long long</span>
<span class="line">#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)</span>
<span class="line">using namespace std;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int Maxn = 1e5 + 10;</span>
<span class="line">int dp[1010][1010];</span>
<span class="line"></span>
<span class="line">signed main() {</span>
<span class="line">    string s1, s2;</span>
<span class="line">    cin &gt;&gt; s1 &gt;&gt; s2;</span>
<span class="line">    int n = s1.size(), m = s2.size();</span>
<span class="line">    s1 = &quot; &quot; + s1, s2 = &quot; &quot; + s2;</span>
<span class="line">    for (int i = 1; i &lt;= n; i++) {</span>
<span class="line">        for (int j = 1; j &lt;= m; j++) {</span>
<span class="line">            if (s1[i] == s2[j]) {</span>
<span class="line">                dp[i][j] = dp[i - 1][j - 1] + 1;</span>
<span class="line">            } else {</span>
<span class="line">                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 通过DP倒推LCS</span>
<span class="line">    string ans;</span>
<span class="line">    int p1 = n, p2 = m;</span>
<span class="line">    while (dp[p1][p2] != 0) {</span>
<span class="line">        if (s1[p1] == s2[p2]) {</span>
<span class="line">            ans.push_back(s1[p1]);</span>
<span class="line">            p1--, p2--;</span>
<span class="line">        } else {</span>
<span class="line">            if (dp[p1 - 1][p2] != dp[p1][p2 - 1]) {</span>
<span class="line">                // 判断是从哪个状态推导而来</span>
<span class="line">                if (dp[p1 - 1][p2] == dp[p1][p2]) {</span>
<span class="line">                    p1--;</span>
<span class="line">                } else {</span>
<span class="line">                    p2--;</span>
<span class="line">                }</span>
<span class="line">            } else {</span>
<span class="line">                p1--;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    std::reverse(ans.begin(), ans.end());</span>
<span class="line">    cout &lt;&lt; ans &lt;&lt; endl;</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数学" tabindex="-1"><a class="header-anchor" href="#数学"><span>数学</span></a></h2>
<h3 id="费马小定理" tabindex="-1"><a class="header-anchor" href="#费马小定理"><span>费马小定理</span></a></h3>
<p>$若p为素数，gcd(a,p)=1,则a^{p-1}\equiv1$</p>
<h3 id="欧拉定理" tabindex="-1"><a class="header-anchor" href="#欧拉定理"><span>欧拉定理</span></a></h3>
<p>$若gcd(a,m)=1,则a^{φ(m)}=1 (mod m)$</p>
<p>扩展欧拉定理</p>
<img src="@source/notes/.vuepress/assets/image-20231110111249531.png" alt="image-20231110111249531" style="left:float" />
<h3 id="线性求乘法逆元" tabindex="-1"><a class="header-anchor" href="#线性求乘法逆元"><span>线性求乘法逆元</span></a></h3>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">int inv[Maxn];</span>
<span class="line">//求1~n中每个数 关于p的逆元</span>
<span class="line">void Inv(int n,int p){</span>
<span class="line">    inv[1]=1;</span>
<span class="line">    for(int i=2;i&lt;=n;i++)inv[i]=(p-p/i)*inv[p%i]%p;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="排列组合" tabindex="-1"><a class="header-anchor" href="#排列组合"><span>排列组合</span></a></h3>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">import</span> math</span>
<span class="line">n<span class="token punctuation">,</span>m<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>perm<span class="token punctuation">(</span>n<span class="token punctuation">,</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">#排列</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>comb<span class="token punctuation">(</span>n<span class="token punctuation">,</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">#组合</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>线性求排列组合</p>
<p>$设fac[i]为i的阶乘,inv[i]为阶乘逆元,inv[i] = inv[i+1] *(i+1)$</p>
<h3 id="c-m-n-frac-n-m-n-m" tabindex="-1"><a class="header-anchor" href="#c-m-n-frac-n-m-n-m"><span>$C^m_n = \frac{n!}{m!(n-m)!}$</span></a></h3>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">int C(int n,int m){</span>
<span class="line">	if(m&gt;n)return 0;</span>
<span class="line">	if(m==0)return 1;</span>
<span class="line">	return fac[n] * inv[m]%mod * inv[n-m]%mod;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="欧拉筛" tabindex="-1"><a class="header-anchor" href="#欧拉筛"><span>欧拉筛</span></a></h3>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">vector&lt;int&gt; array;//一开始把所有的数字都标记为素数</span>
<span class="line">vector&lt;int&gt; pri;//把素数单独存进来</span>
<span class="line">void isPrime(int n) {</span>
<span class="line">	array.push_back(0);</span>
<span class="line">	array.push_back(0);</span>
<span class="line">	for (int i = 2; i &lt;= n; i++) {</span>
<span class="line">		array.push_back(1);</span>
<span class="line">	}</span>
<span class="line">	for (int i = 2; i &lt;= n; i++) {</span>
<span class="line">        //如果array[i]没有被标记为合数</span>
<span class="line">		if (array[i]==1)</span>
<span class="line">			pri.push_back(i);</span>
<span class="line">		//遍历素数数组 </span>
<span class="line">		for (int j = 0; j &lt; pri.size(); j++) {</span>
<span class="line">			if (i * pri[j] &gt; n)</span>
<span class="line">				break;</span>
<span class="line">			array[i * pri[j]] = false; //标记为合数</span>
<span class="line">			//保证每个合数只会被它的最小质因数筛去，因此每个数只会被标记一次</span>
<span class="line">			if (i % pri[j] == 0)</span>
<span class="line">				break;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>python</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line">used<span class="token operator">=</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">#记录合数</span></span>
<span class="line">isPrime<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment">#记录素数</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">Euler</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">	<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span>N<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">		<span class="token keyword">if</span> i <span class="token keyword">not</span> <span class="token keyword">in</span> used<span class="token punctuation">:</span></span>
<span class="line">			isPrime<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">		<span class="token keyword">for</span> x <span class="token keyword">in</span> isPrime<span class="token punctuation">:</span></span>
<span class="line">			<span class="token keyword">if</span> x<span class="token operator">*</span>i<span class="token operator">></span>N<span class="token punctuation">:</span></span>
<span class="line">				<span class="token keyword">break</span></span>
<span class="line">			used<span class="token punctuation">.</span>add<span class="token punctuation">(</span>x<span class="token operator">*</span>i<span class="token punctuation">)</span></span>
<span class="line">			<span class="token keyword">if</span> i<span class="token operator">%</span>x<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">				<span class="token keyword">break</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展欧几里得" tabindex="-1"><a class="header-anchor" href="#扩展欧几里得"><span>扩展欧几里得</span></a></h3>
<p>证明过程：</p>
<p><code v-pre>gcd(a,b)=gad(b,a%b)</code></p>
<p>ax+by=gcd(a,b)</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">ll exgcd(ll a,ll b,ll&amp; x ,ll&amp; y){</span>
<span class="line">    if(!b){</span>
<span class="line">        x=1,y=0;//b的0的情况 ax+by=gcd(a,b)=a</span>
<span class="line">        return a;</span>
<span class="line">    }</span>
<span class="line">    //x1=y2,y1=y1-(a/b)*y2</span>
<span class="line">    int d= exgcd(b,a%b,y,x);</span>
<span class="line">    y-=a/b*x;</span>
<span class="line">    return d;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python版本</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line">n <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">x<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">def</span> <span class="token function">exgcd</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">global</span> x<span class="token punctuation">,</span> y</span>
<span class="line">    <span class="token keyword">if</span> b <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span> </span>
<span class="line">        x<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span></span>
<span class="line">        <span class="token keyword">return</span> a</span>
<span class="line">    d <span class="token operator">=</span> exgcd<span class="token punctuation">(</span>b<span class="token punctuation">,</span> a <span class="token operator">%</span> b<span class="token punctuation">)</span></span>
<span class="line">    x<span class="token punctuation">,</span> y <span class="token operator">=</span> y<span class="token punctuation">,</span> x</span>
<span class="line">    y <span class="token operator">-=</span> <span class="token punctuation">(</span>a <span class="token operator">//</span> b<span class="token punctuation">)</span> <span class="token operator">*</span> x</span>
<span class="line">    <span class="token keyword">return</span> d</span>
<span class="line">    </span>
<span class="line"><span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    exgcd<span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="快速幂" tabindex="-1"><a class="header-anchor" href="#快速幂"><span>快速幂</span></a></h3>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">int qpow(int a,int b,int mod){</span>
<span class="line">    int res=1;</span>
<span class="line">    while(b){</span>
<span class="line">        if(b&amp;1)res=(res*a)%mod;</span>
<span class="line">        a=(a*a)%mod;</span>
<span class="line">        b&gt;&gt;=1;</span>
<span class="line">    }</span>
<span class="line">    return res;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二分搜索" tabindex="-1"><a class="header-anchor" href="#二分搜索"><span>二分搜索</span></a></h2>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">//不断搜索找到最后一个小于等于的值</span>
<span class="line">int L=1,R=N;</span>
<span class="line">while(L&lt;R){</span>
<span class="line">	int mid=(L+R+1)&gt;&gt;1;</span>
<span class="line">	if(a[mid]&gt;target)R=mid-1;</span>
<span class="line">	else L=mid;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//精确查找---用迭代的方式实现二分查找，精确查找目标元素的位置,假定数组递增排列，且不存在重复元素</span>
<span class="line">int bsearch2(int low,int high,int target){</span>
<span class="line">    while(low &lt;= high){</span>
<span class="line">        int mid = low + (high - low)/2;</span>
<span class="line">        if(num[mid] &gt; target){</span>
<span class="line">            high = mid -1;</span>
<span class="line">        }</span>
<span class="line">        else if(num[mid] &lt; target){</span>
<span class="line">            low = mid + 1;</span>
<span class="line">        }</span>
<span class="line">        else{</span>
<span class="line">            return mid;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return -1;</span>
<span class="line">}</span>
<span class="line"> </span>
<span class="line"> </span>
<span class="line"> </span>
<span class="line">//界限查找----用二分查找寻找上届，正好大于目标数的那个数(严格界限，不包含自身)</span>
<span class="line">int bsearchupperbound(int low,int high,int target){</span>
<span class="line">    if(low &gt; high || target &gt;= num[high]){</span>
<span class="line">        return -1;</span>
<span class="line">    }</span>
<span class="line"> </span>
<span class="line">    while(low &lt; high){</span>
<span class="line">        int mid = low + (high - low)/2;</span>
<span class="line">        if(num[mid] &gt; target){</span>
<span class="line">            high = mid;</span>
<span class="line">        }</span>
<span class="line">        else{</span>
<span class="line">            low = mid + 1;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return high;</span>
<span class="line">}</span>
<span class="line"> </span>
<span class="line"> </span>
<span class="line">//界限查找---用二分查找寻找上届，正好大于等于目标数的那个数(松散界限，可以包含自身)</span>
<span class="line">int bsearch5(int low,int high,int target){</span>
<span class="line">    if(low &gt; high || target &gt; num[high]){</span>
<span class="line">        return -1;</span>
<span class="line">    }</span>
<span class="line">    while(low &lt; high){</span>
<span class="line">        int mid = low + (high -low)/2;</span>
<span class="line">        if(num[mid] &gt;= target){</span>
<span class="line">            high = mid;</span>
<span class="line">        }</span>
<span class="line">        else{</span>
<span class="line">            low = mid + 1;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return high;</span>
<span class="line">}</span>
<span class="line"> </span>
<span class="line"> </span>
<span class="line"> </span>
<span class="line">//界限查找---用二分查找寻找下届，正好小于目标数的那个数(严格界限，不包含自身)</span>
<span class="line">int bsearchlowerbound(int low,int high,int target){</span>
<span class="line">    if(low &gt; high || target &lt;= num[low]){</span>
<span class="line">        return -1;</span>
<span class="line">    }</span>
<span class="line"> </span>
<span class="line">    while(low &lt; high){</span>
<span class="line">        int mid = (low + high + 1) / 2;     //这里用向上取整，否则陷入死循环 因为low无法往上爬超过high</span>
<span class="line"> </span>
<span class="line">        if(num[mid] &lt; target){</span>
<span class="line">            low = mid;</span>
<span class="line">        }</span>
<span class="line">        else{</span>
<span class="line">            high = mid -1;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return low;</span>
<span class="line">}</span>
<span class="line"> </span>
<span class="line"> </span>
<span class="line">//界限查找---用二分法寻找下届，正好小于等于目标的那个数  (松散界限，可以包含自身)</span>
<span class="line">int bsearch6(int low,int high,int target){</span>
<span class="line">    if(low &gt; high || target &lt; num[low]){</span>
<span class="line">        return -1;</span>
<span class="line">    }</span>
<span class="line">    while(low &lt; high){</span>
<span class="line">        int mid = (low + high + 1)/2;</span>
<span class="line">        if(num[mid] &lt;= target){</span>
<span class="line">            low = mid;</span>
<span class="line">        }</span>
<span class="line">        else{</span>
<span class="line">            high = mid - 1;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return low;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="差分数组" tabindex="-1"><a class="header-anchor" href="#差分数组"><span>差分数组</span></a></h2>
<p>https://blog.csdn.net/weixin_54202947/article/details/127980042</p>
<p>**定义：**b[i]=a[i]-a[i-1]</p>
<p>**单点查询:**a[i]=∑b[x] 1&lt;=x&lt;=i</p>
<p>**区间修改:**在[i,j]区间增加k  b[i]+k,b[j+1]-k</p>
<p>**区间求和:**添加一个辅助数组c[i]=(i-1)*b[i],当b[i]+k时,c[i]同步增加(i-1) *k</p>
<p>前i项和  Σa[i]=n*sum(b,i)-sum(c,i);</p>
<h2 id="高精度算法" tabindex="-1"><a class="header-anchor" href="#高精度算法"><span>高精度算法</span></a></h2>
<h3 id="加法" tabindex="-1"><a class="header-anchor" href="#加法"><span>加法</span></a></h3>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">void add(string num1, string num2);</span>
<span class="line">int main() {</span>
<span class="line">	string num1, num2;</span>
<span class="line">	cin &gt;&gt; num1 &gt;&gt; num2;</span>
<span class="line">	add(num1, num2);</span>
<span class="line">}</span>
<span class="line">void add(string num1, string num2) {</span>
<span class="line">	string result;</span>
<span class="line">	int p = 0, i = num1.size() - 1, j = num2.size() - 1; //p进位</span>
<span class="line">	while (i &gt;= 0 || j &gt;= 0) {</span>
<span class="line">		int value = 0;</span>
<span class="line">		if (i &gt;= 0)</span>
<span class="line">			value += (num1[i] - '0');</span>
<span class="line">		if (j &gt;= 0)</span>
<span class="line">			value += (num2[j] - '0');</span>
<span class="line">		result = to_string((value + p) % 10) + result;</span>
<span class="line">		p = (value + p) / 10;</span>
<span class="line">		i--;</span>
<span class="line">		j--;</span>
<span class="line">	}</span>
<span class="line">	if (p &gt; 0)</span>
<span class="line">		cout &lt;&lt; p;</span>
<span class="line">	cout &lt;&lt; result &lt;&lt; endl;;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>python比较适合写这类题</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line">a<span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图论" tabindex="-1"><a class="header-anchor" href="#图论"><span>图论</span></a></h2>
<h3 id="桥与割点的判定" tabindex="-1"><a class="header-anchor" href="#桥与割点的判定"><span>桥与割点的判定</span></a></h3>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include &lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line"></span>
<span class="line">const int Maxn = 100;</span>
<span class="line">int dfn[Maxn], low[Maxn], head[Maxn], cnt, num;</span>
<span class="line">struct edge {</span>
<span class="line">	int to;</span>
<span class="line">	int next;</span>
<span class="line">} e[Maxn * Maxn];</span>
<span class="line">void add(int u, int v) {</span>
<span class="line">	e[++cnt].next = head[u];</span>
<span class="line">	e[cnt].to = v;</span>
<span class="line">	head[u] = cnt;</span>
<span class="line">}</span>
<span class="line">//桥</span>
<span class="line">void dfs(int u, int fat) {</span>
<span class="line">	dfn[u] = low[u] = ++num;</span>
<span class="line">	for (int i = head[u]; i; i = e[i].next) {</span>
<span class="line">		int v = e[i].to;</span>
<span class="line">		if (v == fat)</span>
<span class="line">			continue;//是父节点则跳过</span>
<span class="line">		if (!dfn[v]) {</span>
<span class="line">			dfs(v, u);</span>
<span class="line">			low[u] = min(low[u], low[v]);</span>
<span class="line">			if (low[v] &gt; dfn[u]) {</span>
<span class="line">				//无法回到u之前的结点</span>
<span class="line">				cout &lt;&lt; u &lt;&lt;&quot;-&quot;&lt;&lt;v&lt;&lt; &quot;是桥&quot; &lt;&lt; endl;</span>
<span class="line">			}</span>
<span class="line">		} else {</span>
<span class="line">			low[u] = min(low[u], dfn[v]);</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line">//割点</span>
<span class="line">void dfs2(int u, int fat) {</span>
<span class="line">	dfn[u] = low[u] = ++num;</span>
<span class="line">	for (int i = head[u]; i; i = e[i].next) {</span>
<span class="line">		int v = e[i].to;</span>
<span class="line">		if (v == fat)</span>
<span class="line">			continue;//是父节点则跳过</span>
<span class="line">		if (!dfn[v]) {</span>
<span class="line">			dfs(v, u);</span>
<span class="line">			low[u] = min(low[u], low[v]);</span>
<span class="line">			if (low[v] &gt;= dfn[u]) {</span>
<span class="line">				count++;</span>
<span class="line">				if (root != u || count &gt; 1)</span>
<span class="line">					cout &lt;&lt; u &lt;&lt; &quot;是割点&quot; &lt;&lt; endl;</span>
<span class="line">			}</span>
<span class="line">		} else {</span>
<span class="line">			low[u] = min(low[u], dfn[v]);</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line">	int N, a, b;</span>
<span class="line">	cin &gt;&gt; N;</span>
<span class="line">	while (N--) {</span>
<span class="line">		cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">		add(a, b);</span>
<span class="line">		add(b, a);</span>
<span class="line">	}</span>
<span class="line">	dfs(1, 0);</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最短路径" tabindex="-1"><a class="header-anchor" href="#最短路径"><span>最短路径</span></a></h3>
<h4 id="dijkstra算法-优先队列" tabindex="-1"><a class="header-anchor" href="#dijkstra算法-优先队列"><span>dijkstra算法-优先队列</span></a></h4>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int,int&gt; PII;</span>
<span class="line">const int Maxn=1e5+10;</span>
<span class="line">int dis[Maxn],N,M;</span>
<span class="line">int head[Maxn],vis[Maxn],tot;</span>
<span class="line">priority_queue&lt;PII,vector&lt;PII&gt;,greater&lt;PII&gt;&gt; q;</span>
<span class="line">struct Node{</span>
<span class="line">    int to,next,val;</span>
<span class="line">    bool operator &lt;(Node&amp; a){</span>
<span class="line">        return val&lt;a.val;</span>
<span class="line">    }</span>
<span class="line">}edge[2*Maxn];</span>
<span class="line">void add(int x,int y,int w){</span>
<span class="line">    edge[++tot].to=y;</span>
<span class="line">    edge[tot].val=w;</span>
<span class="line">    edge[tot].next=head[x];</span>
<span class="line">    head[x]=tot;</span>
<span class="line">}</span>
<span class="line">void dijkstra(int x){</span>
<span class="line">    q.push({0,x});</span>
<span class="line">    for(int i=1;i&lt;=N;i++)dis[i]=INT_MAX;</span>
<span class="line">    dis[x]=0;</span>
<span class="line">    while(q.size()){</span>
<span class="line">        int pos=q.top().second;q.pop();</span>
<span class="line">        if(vis[pos])continue;</span>
<span class="line">        vis[pos]=1;</span>
<span class="line">        for(int i=head[pos];i;i=edge[i].next){</span>
<span class="line">            int v=edge[i].to,w=edge[i].val;</span>
<span class="line">            if(dis[v]&gt;dis[pos]+w){</span>
<span class="line">                dis[v]=dis[pos]+w;</span>
<span class="line">                q.push({dis[v],v});</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    int s;</span>
<span class="line">    cin&gt;&gt;N&gt;&gt;M&gt;&gt;s;</span>
<span class="line">    for(int i=0;i&lt;M;i++){</span>
<span class="line">        int u,v,w;cin&gt;&gt;u&gt;&gt;v&gt;&gt;w;</span>
<span class="line">        add(u,v,w);</span>
<span class="line">    }</span>
<span class="line">    dijkstra(s);</span>
<span class="line">    for(int i=1;i&lt;=N;i++)cout&lt;&lt;dis[i]&lt;&lt;&quot; &quot;;</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="spfa" tabindex="-1"><a class="header-anchor" href="#spfa"><span>SPFA</span></a></h4>
<p>SPFA 可以用于判断s点是否能抵达一个负环，只需记录最短路经过了多少条边，当经过了至少n条边时，说明s点可以抵达一个负环。</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int Maxn=3e3+10;</span>
<span class="line">struct Node{</span>
<span class="line">    int to,next,w;</span>
<span class="line">}edge[Maxn*2];</span>
<span class="line">int head[Maxn],tot;</span>
<span class="line">void add(int u,int v,int w){</span>
<span class="line">    edge[++tot].to=v;</span>
<span class="line">    edge[tot].w=w;</span>
<span class="line">    edge[tot].next=head[u];</span>
<span class="line">    head[u]=tot;</span>
<span class="line">}</span>
<span class="line">int dis[Maxn],cnt[Maxn],vis[Maxn];</span>
<span class="line">bool SPFA(int n){</span>
<span class="line">    memset(dis,0x3f,sizeof(dis));</span>
<span class="line">    memset(cnt,0,sizeof(cnt));</span>
<span class="line">    memset(vis,0,sizeof(vis));</span>
<span class="line">    queue&lt;int&gt; q;</span>
<span class="line">    q.push(1);</span>
<span class="line">    vis[1]=1,dis[1]=0;</span>
<span class="line">    while(!q.empty()){</span>
<span class="line">        int u=q.front();vis[u]=0;q.pop();</span>
<span class="line">        for(int i=head[u];i;i=edge[i].next){</span>
<span class="line">            int v=edge[i].to,w=edge[i].w;</span>
<span class="line">            if(dis[v]&gt;dis[u]+w){</span>
<span class="line">                dis[v]=dis[u]+w;</span>
<span class="line">                cnt[v]=cnt[u]+1;</span>
<span class="line">                if(cnt[v]&gt;=n)return true;</span>
<span class="line">                if(!vis[v]){</span>
<span class="line">                    q.push(v);</span>
<span class="line">                    vis[v]=1;</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return false;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    int T;</span>
<span class="line">    scanf(&quot;%d&quot;,&amp;T);</span>
<span class="line">    while(T--){</span>
<span class="line">        tot=0;</span>
<span class="line">        memset(head,0,sizeof(head));</span>
<span class="line">        int n,m;</span>
<span class="line">        scanf(&quot;%d%d&quot;,&amp;n,&amp;m);</span>
<span class="line">        for(int i=1;i&lt;=m;i++){</span>
<span class="line">            int u,v,w;</span>
<span class="line">            scanf(&quot;%d%d%d&quot;,&amp;u,&amp;v,&amp;w);</span>
<span class="line">            add(u,v,w);</span>
<span class="line">            if(w&gt;=0)add(v,u,w);</span>
<span class="line">        }</span>
<span class="line">        printf(&quot;%s\n&quot;, SPFA(n)?&quot;YES&quot;:&quot;NO&quot;);</span>
<span class="line">    }</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多源最短路-floyd" tabindex="-1"><a class="header-anchor" href="#多源最短路-floyd"><span>多源最短路-Floyd</span></a></h4>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">for(int k=1;k&lt;=n;k++){</span>
<span class="line">	for(int i=1;i&lt;=n;i++){</span>
<span class="line">		for(int j=1;j&lt;=n;j++){</span>
<span class="line">			dis[i][j]=min(dis[i][j],dis[i][k]+dis[k][j]);</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.acwing.com/problem/content/1490/" target="_blank" rel="noopener noreferrer">1488. 最短距离 - AcWing题库</a></p>
<p>超级源点。求图上任意一点到最近商店的距离。</p>
<p>设超级源点为0，与所有商店的距离为0</p>
<p>通过一次dijkstra就能得出dis[i]，即i到0的距离</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int,int&gt; PII;</span>
<span class="line">const int Maxn=3e5+10;</span>
<span class="line">int dis[Maxn],h[Maxn],tot,vis[Maxn];</span>
<span class="line">int N,M,K,a[Maxn];</span>
<span class="line">priority_queue&lt;PII,vector&lt;PII&gt;,greater&lt;PII&gt;&gt; q;</span>
<span class="line">struct Node{</span>
<span class="line">    int to,next,val;</span>
<span class="line"></span>
<span class="line">}edge[Maxn];</span>
<span class="line"></span>
<span class="line">void add(int u,int v,int val){</span>
<span class="line">    edge[++tot].to=v;</span>
<span class="line">    edge[tot].next=h[u];</span>
<span class="line">    edge[tot].val=val;</span>
<span class="line">    h[u]=tot;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void dijkstra(int u){</span>
<span class="line">    for(int i=1;i&lt;=N;i++)dis[i]=INT_MAX;</span>
<span class="line">    dis[u]=0;</span>
<span class="line">    q.emplace(dis[u],u);</span>
<span class="line">    while(q.size()){</span>
<span class="line">        int pos=q.top().second;q.pop();</span>
<span class="line">        if(vis[pos])continue;</span>
<span class="line">        vis[pos]=1;</span>
<span class="line">        for(int i=h[pos];i;i=edge[i].next){</span>
<span class="line">            int v=edge[i].to,w=edge[i].val;</span>
<span class="line">            if(dis[v]&gt;dis[pos]+w){</span>
<span class="line">                dis[v]=dis[pos]+w;</span>
<span class="line">                q.emplace(dis[v],v);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    cin&gt;&gt;N&gt;&gt;M;</span>
<span class="line">    for(int i=0;i&lt;M;i++){</span>
<span class="line">        int u,v,w;cin&gt;&gt;u&gt;&gt;v&gt;&gt;w;</span>
<span class="line">        add(u,v,w),add(v,u,w);</span>
<span class="line">    }</span>
<span class="line">    cin&gt;&gt;K;</span>
<span class="line">    //商店坐标</span>
<span class="line">    for(int i=0;i&lt;K;i++){</span>
<span class="line">        int x;cin&gt;&gt;x;</span>
<span class="line">        add(0,x,0);</span>
<span class="line">    }</span>
<span class="line">    dijkstra(0);</span>
<span class="line">    //Q次询问</span>
<span class="line">    int Q;cin&gt;&gt;Q;</span>
<span class="line">    while(Q--){</span>
<span class="line">        int y;cin&gt;&gt;y;</span>
<span class="line">        cout&lt;&lt;dis[y]&lt;&lt;endl;</span>
<span class="line">    }</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.acwing.com/problem/content/3308/" target="_blank" rel="noopener noreferrer">3305. 作物杂交 - AcWing题库</a></p>
<p>另类的建图方式，需要额外存储一个值代表组合点</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int,int&gt; PII;</span>
<span class="line">const int Maxn=1e5+10;</span>
<span class="line">const int Maxm=2010;</span>
<span class="line">int a[Maxm],dis[Maxm];</span>
<span class="line">struct Node{</span>
<span class="line">    int to,next,w,b;</span>
<span class="line">}edge[2*Maxn];</span>
<span class="line">int head[Maxm],tot,vis[Maxm];</span>
<span class="line">int N,M,K,T;</span>
<span class="line">priority_queue&lt;PII,vector&lt;PII&gt;,greater&lt;PII&gt;&gt; q;</span>
<span class="line"></span>
<span class="line">void add(int A,int B,int C){</span>
<span class="line">    edge[++tot].to=C;</span>
<span class="line">    edge[tot].w=max(a[A],a[B]);</span>
<span class="line">    edge[tot].b=B;</span>
<span class="line">    edge[tot].next=head[A];</span>
<span class="line">    head[A]=tot;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void dijkstra(){</span>
<span class="line">    while(!q.empty()){</span>
<span class="line">        int x=q.top().second;</span>
<span class="line">        q.pop();</span>
<span class="line">        if(vis[x])continue;</span>
<span class="line">        vis[x]=1;</span>
<span class="line">        for(int i=head[x];i;i=edge[i].next){</span>
<span class="line">            int v=edge[i].to,w=edge[i].w,b=edge[i].b;</span>
<span class="line">            if(dis[v]&gt;max(dis[x],dis[b])+w){</span>
<span class="line">                dis[v]=max(dis[x],dis[b])+w;</span>
<span class="line">                q.push({dis[v],v});</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    ios::sync_with_stdio(false);</span>
<span class="line">    cin.tie(0),cout.tie(0);</span>
<span class="line">    memset(dis,0x3f,sizeof(dis));</span>
<span class="line">    cin&gt;&gt;N&gt;&gt;M&gt;&gt;K&gt;&gt;T;</span>
<span class="line">    for(int i=1;i&lt;=N;i++)cin&gt;&gt;a[i];</span>
<span class="line">    for(int i=1;i&lt;=M;i++){</span>
<span class="line">        int x;cin&gt;&gt;x;</span>
<span class="line">        q.push({0,x});</span>
<span class="line">        dis[x]=0;</span>
<span class="line">    }</span>
<span class="line">    for(int i=0;i&lt;K;i++){</span>
<span class="line">        int x,y,z;cin&gt;&gt;x&gt;&gt;y&gt;&gt;z;</span>
<span class="line">        add(x,y,z),add(y,x,z);</span>
<span class="line">    }</span>
<span class="line">    dijkstra();</span>
<span class="line">    cout&lt;&lt;dis[T]&lt;&lt;endl;</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最小生成树kruskal" tabindex="-1"><a class="header-anchor" href="#最小生成树kruskal"><span>最小生成树Kruskal</span></a></h3>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int Maxn=1e5+10;</span>
<span class="line"></span>
<span class="line">struct Node{</span>
<span class="line">    int x,y,w;</span>
<span class="line">    bool operator &lt; (const Node&amp; o) const{</span>
<span class="line">        return w&lt;o.w;</span>
<span class="line">    }</span>
<span class="line">}edge[Maxn*2];</span>
<span class="line">int fat[Maxn],vis[Maxn];</span>
<span class="line"></span>
<span class="line">int find(int x){</span>
<span class="line">    return fat[x]==x?x:fat[x]=find(fat[x]);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    int N,M;cin&gt;&gt;N&gt;&gt;M;</span>
<span class="line">    for(int i=1;i&lt;=N;i++)fat[i]=i;</span>
<span class="line">    for(int i=1;i&lt;=M;i++){</span>
<span class="line">        int x,y,w;cin&gt;&gt;x&gt;&gt;y&gt;&gt;w;</span>
<span class="line">        edge[i]={x,y,w};</span>
<span class="line">    }</span>
<span class="line">    sort(edge+1,edge+M+1);</span>
<span class="line">    ll res=0,cnt=0;</span>
<span class="line">    for(int i=1;i&lt;=M;i++){</span>
<span class="line">        int x=edge[i].x,y=edge[i].y,w=edge[i].w;</span>
<span class="line">        int fx=find(x),fy=find(y);</span>
<span class="line">        if(fx!=fy){</span>
<span class="line">            res+=w;</span>
<span class="line">            fat[fx]=fy;</span>
<span class="line">            cnt++;</span>
<span class="line">        }</span>
<span class="line">        if(cnt==N-1)break;</span>
<span class="line">    }</span>
<span class="line">    if(cnt!=N-1)cout&lt;&lt;&quot;orz&quot;&lt;&lt;endl;</span>
<span class="line">    else cout&lt;&lt;res&lt;&lt;endl;</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>超级源点。<a href="https://www.acwing.com/problem/content/3731/" target="_blank" rel="noopener noreferrer">3728. 城市通电 - AcWing题库</a></p>
<p>需要让每个城市都通电有两种方式，1自身作为发电厂，2是间接连接发电厂</p>
<p>设立一个超级源点0，i点设立发电厂可以看作0到i的距离为c</p>
<p>i与j连接，其距离为**(abs(x[i]-x[j])+abs(y[i]-y[j]))*(k[i]+k[j])**</p>
<p>这样就把复杂的问题变成了最小生成树问题</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">#define int long long</span>
<span class="line">const int Maxn=2010;</span>
<span class="line">int fat[Maxn],tot,k[Maxn],vis[Maxn*Maxn],cnt;</span>
<span class="line"></span>
<span class="line">struct Node{</span>
<span class="line">    int x,y;</span>
<span class="line">}point[Maxn];</span>
<span class="line">struct Edge{</span>
<span class="line">    int a,b,dis;</span>
<span class="line">    bool operator &lt; (const Edge&amp; o){</span>
<span class="line">        return dis&lt;o.dis;</span>
<span class="line">    }</span>
<span class="line">}edge[Maxn*Maxn];</span>
<span class="line"></span>
<span class="line">int find(int x){</span>
<span class="line">    return x==fat[x]?x:fat[x]=find(fat[x]);</span>
<span class="line">}</span>
<span class="line">int kruskal(){</span>
<span class="line">    int res=0;</span>
<span class="line">    sort(edge+1,edge+tot+1);</span>
<span class="line">    for(int i=1;i&lt;=tot;i++){</span>
<span class="line">        int x=find(edge[i].a),y=find(edge[i].b);</span>
<span class="line">        if(x!=y){</span>
<span class="line">            fat[x]=y;</span>
<span class="line">            res+=edge[i].dis;</span>
<span class="line">            vis[i]=1;</span>
<span class="line">            cnt++;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return res;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">signed main(){</span>
<span class="line">    int n;</span>
<span class="line">    scanf(&quot;%lld&quot;,&amp;n);</span>
<span class="line">    for(int i=1;i&lt;=n;i++)fat[i]=i;</span>
<span class="line">    for(int i=1;i&lt;=n;i++){</span>
<span class="line">//        cin&gt;&gt;point[i].x&gt;&gt;point[i].y;</span>
<span class="line">            scanf(&quot;%lld%lld&quot;,&amp;point[i].x,&amp;point[i].y);</span>
<span class="line">    }</span>
<span class="line">    for(int i=1;i&lt;=n;i++){</span>
<span class="line">        int c;</span>
<span class="line">        scanf(&quot;%lld&quot;,&amp;c);</span>
<span class="line">        edge[++tot]= {0,i,c};//从0连接到第i个点,距离为c</span>
<span class="line">    }</span>
<span class="line">    for(int i=1;i&lt;=n;i++){</span>
<span class="line">//        cin&gt;&gt;k[i];</span>
<span class="line">        scanf(&quot;%lld&quot;,&amp;k[i]);</span>
<span class="line">        for(int j=1;j&lt;i;j++){</span>
<span class="line">            int dis=(abs(point[i].x-point[j].x)+abs(point[i].y-point[j].y))*(k[i]+k[j]);</span>
<span class="line">            edge[++tot]={i,j,dis};</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    printf(&quot;%lld\n&quot;,kruskal());</span>
<span class="line">    vector&lt;int&gt; v;</span>
<span class="line">    vector&lt;pair&lt;int,int&gt;&gt; ed;</span>
<span class="line">    for(int i=1;i&lt;=tot;i++){</span>
<span class="line">        if(vis[i]){</span>
<span class="line">            if(edge[i].a)ed.push_back({edge[i].a,edge[i].b});</span>
<span class="line">            else v.push_back(edge[i].b);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    printf(&quot;%lld\n&quot;,v.size());</span>
<span class="line">    for(int x:v)printf(&quot;%lld &quot;,x);</span>
<span class="line">    printf(&quot;\n%lld\n&quot;,ed.size());</span>
<span class="line"></span>
<span class="line">    for(int i=0;i&lt;ed.size();i++){</span>
<span class="line">        printf(&quot;%lld %lld\n&quot;,ed[i].first,ed[i].second);</span>
<span class="line">    }</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kruskal重构树" tabindex="-1"><a class="header-anchor" href="#kruskal重构树"><span>Kruskal重构树</span></a></h3>
<p><img src="@source/notes/.vuepress/assets/image-20231114171138121.png" alt="image-20231114171138121"></p>
<p>依次选取最短边，每条边对应一个新的节点，新节点的权值为该边的边权</p>
<p>原图中两个点间所有路径上的边最大权值的最小值 == 最小生成树上两点简单路径的边最大权值 == Kruskal重构树上两点 LCA的点权。</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">#define int long long</span>
<span class="line">#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)</span>
<span class="line">using namespace std;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int Maxn = 1e5 + 10;</span>
<span class="line">struct Edge{</span>
<span class="line">    int u,v,w;</span>
<span class="line">    bool operator &lt; (const Edge o)const{</span>
<span class="line">        return w&gt;o.w;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line">int fat[Maxn],tot,n,m;</span>
<span class="line">int val[Maxn];//重构树的点权</span>
<span class="line">vector&lt;int&gt; E[Maxn];//重构树的边</span>
<span class="line">vector&lt;Edge&gt; edge(Maxn);</span>
<span class="line">int find(int x){return fat[x]==x?x:fat[x]=find(fat[x]);}</span>
<span class="line"></span>
<span class="line">//在最小生成树的基础上构建重构树</span>
<span class="line">void kruskal(){</span>
<span class="line">    std::sort(edge.begin()+1, edge.begin()+m+1);</span>
<span class="line">    for (int i = 1; i &lt;= 2*n; i++)fat[i] = i;</span>
<span class="line">    tot=n;</span>
<span class="line">    for(int i=1;i&lt;=m;i++){</span>
<span class="line">        auto [x,y,z] = edge[i];</span>
<span class="line">        int fx=find(x),fy=find(y);</span>
<span class="line">        if(fx!=fy){</span>
<span class="line">            fat[fx]=fat[fy]=++tot;</span>
<span class="line">            val[tot]=z;</span>
<span class="line">            E[tot].push_back(fx);</span>
<span class="line">            E[tot].push_back(fy);</span>
<span class="line">            E[fx].push_back(tot);</span>
<span class="line">            E[fy].push_back(tot);</span>
<span class="line">            if(tot==2*n-1)break;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int vis[Maxn];</span>
<span class="line">int dep[Maxn];//深度</span>
<span class="line">int dp[Maxn][20];//第2^i个父节点</span>
<span class="line">void dfs(int u,int fa){</span>
<span class="line">    dep[u]=dep[fa]+1;</span>
<span class="line">    dp[u][0] = fa;</span>
<span class="line">    for(int i=1;i&lt;20;i++)dp[u][i] = dp[dp[u][i-1]][i-1];</span>
<span class="line">    for(int v:E[u]){</span>
<span class="line">        if(v==fa)continue;</span>
<span class="line">        dfs(v,u);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">int LCA(int u,int v){</span>
<span class="line">    if(dep[u]&lt;dep[v])return LCA(v,u);</span>
<span class="line">    //同步到相同深度</span>
<span class="line">    for(int i=19;~i;i--)if(dep[dp[u][i]]&gt;=dep[v])u=dp[u][i];</span>
<span class="line">    //向上倍增</span>
<span class="line">    for(int i=19;~i;i--)if(dp[u][i]!=dp[v][i])u=dp[u][i],v=dp[v][i];</span>
<span class="line">    return dp[u][0];</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">signed main() {</span>
<span class="line">    ios;</span>
<span class="line">    cin &gt;&gt; n &gt;&gt; m;</span>
<span class="line">    for (int i = 1; i &lt;= m; i++) cin&gt;&gt;edge[i].u&gt;&gt;edge[i].v&gt;&gt;edge[i].w;</span>
<span class="line">    kruskal();</span>
<span class="line">    for(int i=1;i&lt;=n;i++){</span>
<span class="line">        int root = find(i);</span>
<span class="line">        if(!vis[root]){</span>
<span class="line">            dfs(root,0);</span>
<span class="line">            vis[root]=1;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    int q;cin&gt;&gt;q;</span>
<span class="line">    while(q--){</span>
<span class="line">        int x,y;cin&gt;&gt;x&gt;&gt;y;</span>
<span class="line">        int lca = LCA(x,y);</span>
<span class="line">        cout&lt;&lt;(lca?val[lca]:-1)&lt;&lt;endl;</span>
<span class="line">    }</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拓扑排序" tabindex="-1"><a class="header-anchor" href="#拓扑排序"><span>拓扑排序</span></a></h3>
<p>拓扑排序可以用于判断图中是否存在环</p>
<p>选择入度为0的结点加入队列，每次删除该结点相邻的边，如有入度为0 的点则再次加入队列</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">int n, m;</span>
<span class="line">vector&lt;int&gt; G[MAXN];</span>
<span class="line">int in[MAXN];  // 存储每个结点的入度</span>
<span class="line"></span>
<span class="line">bool toposort() {</span>
<span class="line">  vector&lt;int&gt; L;</span>
<span class="line">  queue&lt;int&gt; S;</span>
<span class="line">  for (int i = 1; i &lt;= n; i++)</span>
<span class="line">    if (in[i] == 0) S.push(i);</span>
<span class="line">  while (!S.empty()) {</span>
<span class="line">    int u = S.front();</span>
<span class="line">    S.pop();</span>
<span class="line">    L.push_back(u);</span>
<span class="line">    for (auto v : G[u]) {</span>
<span class="line">      if (--in[v] == 0) {</span>
<span class="line">        S.push(v);</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  if (L.size() == n) {</span>
<span class="line">    for (auto i : L) cout &lt;&lt; i &lt;&lt; ' ';</span>
<span class="line">    return true;</span>
<span class="line">  } else {</span>
<span class="line">    return false;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二分图" tabindex="-1"><a class="header-anchor" href="#二分图"><span>二分图</span></a></h3>
<h4 id="最大匹配-匈牙利算法" tabindex="-1"><a class="header-anchor" href="#最大匹配-匈牙利算法"><span>最大匹配-匈牙利算法</span></a></h4>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int Maxn=2010;</span>
<span class="line">int G[Maxn][Maxn],vis[Maxn],match[Maxn];</span>
<span class="line">int n,m,e;</span>
<span class="line">bool dfs(int u){</span>
<span class="line">    for(int i=1;i&lt;=m;i++){</span>
<span class="line">        if(!vis[i] &amp;&amp; G[u][i]){</span>
<span class="line">            vis[i]=1;</span>
<span class="line">            if(!match[i] || dfs(match[i])){</span>
<span class="line">                match[i]=u;</span>
<span class="line">                return true;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return false;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    cin&gt;&gt;n&gt;&gt;m&gt;&gt;e;</span>
<span class="line">    for(int i=0;i&lt;e;i++){</span>
<span class="line">        int a,b;cin&gt;&gt;a&gt;&gt;b;</span>
<span class="line">        G[a][b]=1;</span>
<span class="line">    }</span>
<span class="line">    int ans=0;</span>
<span class="line">    for(int i=1;i&lt;=n;i++){</span>
<span class="line">        memset(vis,0,sizeof(vis));</span>
<span class="line">        if(dfs(i))ans++;</span>
<span class="line">    }</span>
<span class="line">    cout&lt;&lt;ans&lt;&lt;endl;</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间戳代替memset,省时间</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">if(vis[v]!=now){</span>
<span class="line">	vis[v]=now;</span>
<span class="line">	...</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">for(int i=1;i&lt;=n;i++){</span>
<span class="line">    ++now;</span>
<span class="line">    if(dfs(i))</span>
<span class="line">        ...</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="树" tabindex="-1"><a class="header-anchor" href="#树"><span>树</span></a></h2>
<h3 id="直径" tabindex="-1"><a class="header-anchor" href="#直径"><span>直径</span></a></h3>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">	int pos[3],cnt=0,ma=0,dis[Maxn];</span>
<span class="line">    mx=1;</span>
<span class="line">    for(int i=0;i&lt;3;i++){</span>
<span class="line">        dep[mx]=0;</span>
<span class="line">        dfs(mx,-1);</span>
<span class="line">        for(int j=1;j&lt;=T;j++){</span>
<span class="line">            dis[j]=max(dis[j],dep[j]);//预处理每个结点到两个端点的距离</span>
<span class="line">            ma=max(ma,dis[j]);//直径</span>
<span class="line">        }</span>
<span class="line">        pos[cnt++]=mx;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子树操作" tabindex="-1"><a class="header-anchor" href="#子树操作"><span>子树操作</span></a></h3>
<h4 id="dfs序" tabindex="-1"><a class="header-anchor" href="#dfs序"><span>dfs序</span></a></h4>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">int s[Maxn],e[Maxn],dfn[Maxn],t;</span>
<span class="line">void dfs(int u){</span>
<span class="line">    dfn[++t]=u;</span>
<span class="line">    s[u]=t;</span>
<span class="line">    for(int i=head[u];i;i=edge[i].next){</span>
<span class="line">        int v=edge[i].to;</span>
<span class="line">        dfs(v);</span>
<span class="line">    }</span>
<span class="line">    e[u]=t;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例题：codeforces 877E （DFS序+线段树）</p>
<p>做法：一般是选择根节点操作子树。将整棵树的遍历一遍得出dfs序，并用s[i],e[i]记录结点i的开始时间和结束时间。例如一棵树的dfs序是1 2 5 6 3 7 4 8 9 10,可以根据s[2]=2,e[2]=4确定区间[2,5,6]是其子树。线段树中每一个叶子节点的值为a[dfn[l]]</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">#define int long long</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int Maxn=2e5+10;</span>
<span class="line">struct Node{</span>
<span class="line">    int to,next;</span>
<span class="line">}edge[2*Maxn];</span>
<span class="line">int head[Maxn],tot;</span>
<span class="line">int A[Maxn];</span>
<span class="line">void add(int u,int v){</span>
<span class="line">    edge[++tot].to=v;</span>
<span class="line">    edge[tot].next=head[u];</span>
<span class="line">    head[u]=tot;</span>
<span class="line">}</span>
<span class="line">int s[Maxn],e[Maxn],dfn[Maxn],t;</span>
<span class="line">void dfs(int u){</span>
<span class="line">    dfn[++t]=u;</span>
<span class="line">    s[u]=t;</span>
<span class="line">    for(int i=head[u];i;i=edge[i].next){</span>
<span class="line">        int v=edge[i].to;</span>
<span class="line">        dfs(v);</span>
<span class="line">    }</span>
<span class="line">    e[u]=t;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">struct Tree{</span>
<span class="line">    int l,r,val,lazy;</span>
<span class="line">}T[Maxn&lt;&lt;4];</span>
<span class="line"></span>
<span class="line">void pushup(int node){</span>
<span class="line">    T[node].val=T[node&lt;&lt;1].val+T[node&lt;&lt;1|1].val;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void pushdown(int node){</span>
<span class="line">    if(T[node].lazy){</span>
<span class="line">        T[node].lazy=0;</span>
<span class="line">        Tree&amp; left=T[node&lt;&lt;1];</span>
<span class="line">        Tree&amp; right=T[node&lt;&lt;1|1];</span>
<span class="line">        left.lazy^=1;</span>
<span class="line">        left.val=(left.r-left.l+1)-left.val;</span>
<span class="line">        right.lazy^=1;</span>
<span class="line">        right.val=(right.r-right.l+1)-right.val;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void build(int node,int l,int r){</span>
<span class="line">    T[node]={l,r,0,0};</span>
<span class="line">    if(l==r){</span>
<span class="line">        T[node].val=A[dfn[l]];</span>
<span class="line">        return;</span>
<span class="line">    }</span>
<span class="line">    int mid=(l+r)&gt;&gt;1;</span>
<span class="line">    build(node&lt;&lt;1,l,mid);</span>
<span class="line">    build(node&lt;&lt;1|1,mid+1,r);</span>
<span class="line">    pushup(node);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int query(int node,int l,int r){</span>
<span class="line">    if(l&lt;=T[node].l&amp;&amp;T[node].r&lt;=r){</span>
<span class="line">        return T[node].val;</span>
<span class="line">    }</span>
<span class="line">    pushdown(node);</span>
<span class="line">    int mid=(T[node].l+T[node].r)&gt;&gt;1,val=0;</span>
<span class="line">    if(l&lt;=mid)val+= query(node&lt;&lt;1,l,r);</span>
<span class="line">    if(mid&lt;r)val+= query(node&lt;&lt;1|1,l,r);</span>
<span class="line">    return val;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void modify(int node,int l,int r){</span>
<span class="line">    if(l&lt;=T[node].l&amp;&amp;T[node].r&lt;=r){</span>
<span class="line">        T[node].lazy^=1;</span>
<span class="line">        T[node].val=(T[node].r-T[node].l+1)-T[node].val;</span>
<span class="line">        return;</span>
<span class="line">    }</span>
<span class="line">    pushdown(node);</span>
<span class="line">    ll mid=(T[node].r+T[node].l)&gt;&gt;1;</span>
<span class="line">    if(l&lt;=mid)modify(node&lt;&lt;1,l,r);</span>
<span class="line">    if(mid&lt;r)modify(node&lt;&lt;1|1,l,r);</span>
<span class="line">    pushup(node);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">signed main(){</span>
<span class="line">    int N,x;cin&gt;&gt;N;</span>
<span class="line">    for(int i=2;i&lt;=N;i++){</span>
<span class="line">        cin&gt;&gt;x;</span>
<span class="line">        add(x,i);</span>
<span class="line">    }</span>
<span class="line">    for(int i=1;i&lt;=N;i++)cin&gt;&gt;A[i];</span>
<span class="line">    dfs(1);</span>
<span class="line">    build(1,1,N);</span>
<span class="line">    int q,v;cin&gt;&gt;q;</span>
<span class="line">    string str;</span>
<span class="line">    while(q--){</span>
<span class="line">        cin&gt;&gt;str&gt;&gt;v;</span>
<span class="line">        if(str==&quot;get&quot;){</span>
<span class="line">            cout&lt;&lt;query(1,s[v],e[v])&lt;&lt;endl;</span>
<span class="line">        }else{</span>
<span class="line">            modify(1,s[v],e[v]);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>POJ3321</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">/****************************************</span>
<span class="line">  *Author:  Mai</span>
<span class="line">  *Contact:</span>
<span class="line">  *Description:根据dfs序的特征给树标号，再用树状数组求和</span>
<span class="line">*****************************************/</span>
<span class="line">#include &lt;iostream&gt;</span>
<span class="line">#include &lt;vector&gt;</span>
<span class="line">#define syncIO ios::sync_with_stdio(false),cin.tie(0),cout.tie(0);</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int maxn=1e5+10;</span>
<span class="line">vector&lt;vector&lt;int&gt;&gt; edge(maxn);</span>
<span class="line">int s[maxn],e[maxn],vis[maxn],c[maxn],tot=1,a[maxn];</span>
<span class="line">void dfs(int u){</span>
<span class="line">    s[u]=tot++;</span>
<span class="line">    vis[u]=1;</span>
<span class="line">    for(int i=0;i&lt;edge[u].size();i++){</span>
<span class="line">        int v=edge[u][i];</span>
<span class="line">        if(vis[v])continue;</span>
<span class="line">        dfs(v);</span>
<span class="line">    }</span>
<span class="line">    e[u]=tot-1;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int lowbit(int x){</span>
<span class="line">    return x&amp;(-x);</span>
<span class="line">}</span>
<span class="line">int sum(int i){</span>
<span class="line">    int res=0;</span>
<span class="line">    for(;i&gt;0;i-= lowbit(i))res+=c[i];</span>
<span class="line">    return res;</span>
<span class="line">}</span>
<span class="line">void add(int i,int k){</span>
<span class="line">    for(;i&lt;maxn;i+= lowbit(i)){</span>
<span class="line">        c[i]+=k;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">void solve(){</span>
<span class="line">    int n,m,x,y;</span>
<span class="line">//    cin&gt;&gt;n;</span>
<span class="line">    scanf(&quot;%d&quot;,&amp;n);</span>
<span class="line">    for(int i=1;i&lt;n;i++){</span>
<span class="line">//        cin&gt;&gt;x&gt;&gt;y;</span>
<span class="line">        scanf(&quot;%d%d&quot;,&amp;x,&amp;y);</span>
<span class="line">        edge[x].push_back(y);</span>
<span class="line">//        edge[y].push_back(x);</span>
<span class="line">    }</span>
<span class="line">    dfs(1);</span>
<span class="line">    for(int i=1;i&lt;=n;i++)a[i]=1,add(i,1);</span>
<span class="line">    char ch;</span>
<span class="line">    int num;</span>
<span class="line">//    cin&gt;&gt;m;</span>
<span class="line">    scanf(&quot;%d&quot;,&amp;m);</span>
<span class="line">    for(int i=0;i&lt;m;i++){</span>
<span class="line">//        cin&gt;&gt;ch&gt;&gt;num;</span>
<span class="line">        scanf(&quot; %c%d&quot;,&amp;ch,&amp;num);</span>
<span class="line">        if(ch=='Q'){</span>
<span class="line">            cout&lt;&lt;sum(e[num])-sum(s[num]-1)&lt;&lt;endl;</span>
<span class="line">        }else{</span>
<span class="line">            if(a[num])add(s[num],-1);</span>
<span class="line">            else add(s[num],1);</span>
<span class="line">            a[num]^=1;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line">//    syncIO;</span>
<span class="line">    solve();</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://ac.nowcoder.com/acm/contest/64819/D" target="_blank" rel="noopener noreferrer">D-Genealogy in the trees_牛客练习赛115 (nowcoder.com)</a></p>
<p>将子树关系转换成区间,再使用树状数组记录贡献</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">#define int long long</span>
<span class="line">#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int Maxn=3e5+10;</span>
<span class="line">int tr[Maxn];</span>
<span class="line">int lowbit(int x){return x&amp;-x;}</span>
<span class="line">int sum(int x){</span>
<span class="line">    int res=0;</span>
<span class="line">    for(;x&gt;0;x-= lowbit(x))res+=tr[x];</span>
<span class="line">    return res;</span>
<span class="line">}</span>
<span class="line">void add(int x,int d){for(;x&lt;Maxn;x+= lowbit(x))tr[x]+=d;}</span>
<span class="line">vector&lt;int&gt; edge[Maxn];</span>
<span class="line">vector&lt;int&gt; pq[Maxn];</span>
<span class="line">vector&lt;pair&lt;int,int&gt;&gt; ab[Maxn];</span>
<span class="line">vector&lt;int&gt; ans(Maxn);</span>
<span class="line">int l[Maxn],r[Maxn],t=0;</span>
<span class="line">void dfs(int u,int fa){</span>
<span class="line">    l[u]=++t;</span>
<span class="line">    for(int v:edge[u]){</span>
<span class="line">        if(v==fa)continue;</span>
<span class="line">        dfs(v,u);</span>
<span class="line">    }</span>
<span class="line">    r[u]=t;</span>
<span class="line">}</span>
<span class="line">void dfs2(int u,int fa){</span>
<span class="line">    //当p=u时，所有对应的q都会在之后的递归中产生贡献</span>
<span class="line">    for(int q:pq[u]){</span>
<span class="line">        add(l[q],1);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    for(auto [b,id]:ab[u]){</span>
<span class="line">        //根据题目条件,p-&gt;a,当a=u时,a的所有祖先节点都满足情况</span>
<span class="line">        //第二个条件 b-&gt;q,只需要判断以b为根的子树中，p产生了多少个贡献</span>
<span class="line">        ans[id] = sum(r[b])-sum(l[b]-1);</span>
<span class="line">    }</span>
<span class="line">    for(int v:edge[u]){</span>
<span class="line">        if(v==fa)continue;</span>
<span class="line">        dfs2(v,u);</span>
<span class="line">    }</span>
<span class="line">    //回溯</span>
<span class="line">    for(int q:pq[u]){</span>
<span class="line">        add(l[q],-1);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line">signed main(){</span>
<span class="line">    int n,m,Q;cin&gt;&gt;n&gt;&gt;m&gt;&gt;Q;</span>
<span class="line">    for(int i=1;i&lt;n;i++){</span>
<span class="line">        int u,v;cin&gt;&gt;u&gt;&gt;v;</span>
<span class="line">        edge[u].push_back(v);</span>
<span class="line">        edge[v].push_back(u);</span>
<span class="line">    }</span>
<span class="line">    dfs(1,0);//子树关系转换成区间</span>
<span class="line">    for(int i=0;i&lt;m;i++){</span>
<span class="line">        int p,q;cin&gt;&gt;p&gt;&gt;q;</span>
<span class="line">        pq[p].push_back(q);</span>
<span class="line">    }</span>
<span class="line">    for(int i=0;i&lt;Q;i++){</span>
<span class="line">        int a,b;cin&gt;&gt;a&gt;&gt;b;</span>
<span class="line">        ab[a].emplace_back(b,i);</span>
<span class="line">    }</span>
<span class="line">    dfs2(1,0);</span>
<span class="line">    for(int i=0;i&lt;Q;i++){</span>
<span class="line">        cout&lt;&lt;ans[i]&lt;&lt;endl;</span>
<span class="line">    }</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="公共祖先问题" tabindex="-1"><a class="header-anchor" href="#公共祖先问题"><span>公共祖先问题</span></a></h3>
<h4 id="倍增求lca" tabindex="-1"><a class="header-anchor" href="#倍增求lca"><span>倍增求LCA</span></a></h4>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">int dep[Maxn];//深度</span>
<span class="line">int dp[Maxn][20];//第2^i个父节点</span>
<span class="line">void dfs(int u,int fa){</span>
<span class="line">    dep[u]=dep[fa]+1;</span>
<span class="line">    dp[u][0] = fa;</span>
<span class="line">    for(int i=1;i&lt;20;i++)dp[u][i] = dp[dp[u][i-1]][i-1];</span>
<span class="line">    for(int v:E[u]){</span>
<span class="line">        if(v==fa)continue;</span>
<span class="line">        dfs(v,u);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">int LCA(int u,int v){</span>
<span class="line">    if(dep[u]&lt;dep[v])return LCA(v,u);</span>
<span class="line">    //同步到相同深度</span>
<span class="line">    for(int i=19;~i;i--)if(dep[dp[u][i]]&gt;=dep[v])u=dp[u][i];</span>
<span class="line">    //向上倍增</span>
<span class="line">    for(int i=19;~i;i--)if(dp[u][i]!=dp[v][i])u=dp[u][i],v=dp[v][i];</span>
<span class="line">    return dp[u][0];</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="欧拉序列" tabindex="-1"><a class="header-anchor" href="#欧拉序列"><span>欧拉序列</span></a></h4>
<p><img src="@source/notes/.vuepress/assets/1209138-20170729151024207-1541824194.png" alt="img"></p>
<p>欧拉序列为8,5,9,5,8,4,6,15,6,7,6,4,10,11,10,16,3,16,12,16,10,2,10,4,8,1,14,1,13,1,88,5,9,5,8,4,6,15,6,7,6,4,10,11,10,16,3,16,12,16,10,2,10,4,8,1,14,1,13,1,8 。</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">void dfs(int u){</span>
<span class="line">    dfn[++cnt]=u;</span>
<span class="line">    for(int i=head[u];i;i=edge[i].next){</span>
<span class="line">        int v=edge[i].to;</span>
<span class="line">        dfs(v);</span>
<span class="line">        dfn[++cnt]=u;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在线rmq算法" tabindex="-1"><a class="header-anchor" href="#在线rmq算法"><span>在线RMQ算法</span></a></h4>
<p>dep[i]记录结点i的深度，seq[]记录欧拉序列,pos[i]用于记录第i个结点第一次出现在seq中的位置</p>
<p><code v-pre>st[i][j]</code>代表在seq[i,i+2^j-1]中深度最小的序号,例如<code v-pre>st[i][0]</code>记录的是结点i的下标</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include &lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">const int Maxn = 10005;</span>
<span class="line">int head[Maxn], cnt = 0, seq[Maxn], pos[Maxn], vis[Maxn], dep[Maxn], tot = 0;</span>
<span class="line">int ST[Maxn][20];</span>
<span class="line">int n, a, b;</span>
<span class="line"></span>
<span class="line">struct node {</span>
<span class="line">	int to, next;</span>
<span class="line">} edge[Maxn * Maxn];</span>
<span class="line"></span>
<span class="line">void add(int u, int v) {</span>
<span class="line">	edge[++cnt].to = v;</span>
<span class="line">	edge[cnt].next = head[u];</span>
<span class="line">	head[u] = cnt;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//从u点开始遍历</span>
<span class="line">void dfs(int u, int d) {</span>
<span class="line">	vis[u] = true;</span>
<span class="line">	seq[++tot] = u;//遍历顺序</span>
<span class="line">	pos[u] = tot; //首次出现的位置</span>
<span class="line">	dep[tot] = d;</span>
<span class="line">	for (int i = head[u]; i; i = edge[i].next) {</span>
<span class="line">		int v = edge[i].to;</span>
<span class="line">		if (vis[v])</span>
<span class="line">			continue;</span>
<span class="line">		dfs(v, d + 1);</span>
<span class="line">		seq[++tot] = u;//走回父节点</span>
<span class="line">		dep[tot] = d;</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void createST() {</span>
<span class="line">//	ST[i][j]代表 区间[i,i+2^j-1]区间内深度最小的点</span>
<span class="line">	for (int i = 1; i &lt;= tot; i++) {</span>
<span class="line">		ST[i][0] = i;//记录最小深度的下标</span>
<span class="line">	}</span>
<span class="line">	for (int j = 1; j &lt;= log2(tot); j++) {</span>
<span class="line">		for (int i = 1; i &lt;= tot - (1 &lt;&lt; j) + 1; i++) {</span>
<span class="line">			if (dep[ST[i][j - 1]] &lt; dep[ST[i + (1 &lt;&lt; (j - 1))][j - 1]]) {</span>
<span class="line">				ST[i][j] = ST[i][j - 1];</span>
<span class="line">			} else {</span>
<span class="line">				ST[i][j] = ST[i + (1 &lt;&lt; (j - 1))][j - 1];</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int query(int x, int y) {</span>
<span class="line">	int l = pos[x], r = pos[y];</span>
<span class="line">	if (l &gt; r)</span>
<span class="line">		swap(l, r);</span>
<span class="line">	int k = log2(r - l + 1);</span>
<span class="line">	if (dep[ST[l][k]] &lt; dep[ST[r - (1 &lt;&lt; k) + 1][k]]) {</span>
<span class="line">		return ST[l][k];</span>
<span class="line">	} else {</span>
<span class="line">		return ST[r - (1 &lt;&lt; k) + 1][k];</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line">int main() {</span>
<span class="line">	cin &gt;&gt; n;</span>
<span class="line">	for (int i = 1; i &lt; n; i++) {</span>
<span class="line">		cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">		add(a, b);</span>
<span class="line">		add(b, a);</span>
<span class="line">	}</span>
<span class="line">	dfs(1, 0);</span>
<span class="line">	createST();</span>
<span class="line">	cin &gt;&gt; a &gt;&gt; b; //寻找a与b的公共祖先</span>
<span class="line">	cout &lt;&lt; seq[query(a, b)];</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tarjan算法" tabindex="-1"><a class="header-anchor" href="#tarjan算法"><span>Tarjan算法</span></a></h4>
<p>从初始点开始深度遍历，当u点完成子树所有点的遍历时，判断与之有查询的点v是否已被遍历</p>
<p>若 点v被遍历则利用查并集找到父节点是自身的结点</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include &lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">vector&lt;vector&lt;int&gt;&gt; ve(10005);</span>
<span class="line">vector&lt;vector&lt;pair&lt;int, int&gt;&gt;&gt; query(10005);</span>
<span class="line">vector&lt;int&gt; ans(10005);</span>
<span class="line">int n, fat[10005], vis[10005];</span>
<span class="line">void add(int u, int v) {</span>
<span class="line">	ve[u].push_back(v);</span>
<span class="line">	ve[v].push_back(u);</span>
<span class="line">}</span>
<span class="line">int find(int x) {</span>
<span class="line">	if (fat[x] != x) {</span>
<span class="line">		fat[x] = find(fat[x]);</span>
<span class="line">	}</span>
<span class="line">	return fat[x];</span>
<span class="line">}</span>
<span class="line">void dfs(int u) {</span>
<span class="line">	vis[u] = 1;</span>
<span class="line">	for (int i = 0; i &lt; ve[u].size(); i++) {</span>
<span class="line">		if (vis[ve[u][i]])</span>
<span class="line">			continue;</span>
<span class="line">		dfs(ve[u][i]);</span>
<span class="line">		fat[ve[u][i]] = u;</span>
<span class="line">	}</span>
<span class="line">	for (int i = 0; i &lt; query[u].size(); i++) {</span>
<span class="line">		int v = query[u][i].first;</span>
<span class="line">		if (vis[v]) {</span>
<span class="line">			ans[query[u][i].second] = find(v);</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line">int main() {</span>
<span class="line"></span>
<span class="line">	int a, b;</span>
<span class="line">	cin &gt;&gt; n;</span>
<span class="line">	for (int i = 1; i &lt; n; i++) {</span>
<span class="line">		cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">		add(a, b);</span>
<span class="line">	}</span>
<span class="line">	for (int i = 1; i &lt;= n; i++)</span>
<span class="line">		fat[i] = i;</span>
<span class="line">	cout &lt;&lt; &quot;---------&quot; &lt;&lt; endl;</span>
<span class="line">	int m = 0;</span>
<span class="line">	cin &gt;&gt; m;</span>
<span class="line">	for (int i = 0; i &lt; m; i++) {</span>
<span class="line">		cin &gt;&gt; a &gt;&gt; b;</span>
<span class="line">		query[a].push_back({b, i});</span>
<span class="line">		query[b].push_back({a, i});</span>
<span class="line">	}</span>
<span class="line">	dfs(1);</span>
<span class="line">	for (int i = 0; i &lt; m; i++) {</span>
<span class="line">		cout &lt;&lt; ans[i] &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="树上差分" tabindex="-1"><a class="header-anchor" href="#树上差分"><span>树上差分</span></a></h3>
<p>点差分，cnt[u]++,cnt[v]++,cnt[lca]--,cnt[fat[lca]]--</p>
<p>边差分，cnt[u]++,cnt[v]++,cnt[lca]-=2</p>
<h2 id="博弈论" tabindex="-1"><a class="header-anchor" href="#博弈论"><span>博弈论</span></a></h2>
<h3 id="巴什博弈" tabindex="-1"><a class="header-anchor" href="#巴什博弈"><span>巴什博弈</span></a></h3>
<p>有n个物品，每次可以取1~m个物品，不能取物品者输</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">n=(m+1)*q+r</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>r=0</strong>时，无论先手如何取，先手取k个，后手可以取m+1-k个，后手总能将改变状态至(m+1)*(q-1)。<strong>先手必败</strong></p>
<p>r!=0时，相当于先手取r个，将(m+1)*q的先手状态转移给后手，攻守易形了。<strong>后手必败</strong></p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">if(n%(m+1))cout&lt;&lt;&quot;先手赢&quot;&lt;&lt;endl;</span>
<span class="line">else cout&lt;&lt;&quot;后手赢&quot;&lt;&lt;endl;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="尼姆博弈" tabindex="-1"><a class="header-anchor" href="#尼姆博弈"><span>尼姆博弈</span></a></h3>
<p>有n堆物品，记为a1,a2,a3,a4,a5....,an可以从任意一堆中取任意数量物品，不能取物品者输</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">a1^a2^a3^a4^a5^...^an=0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>当满足异或为0，无论先手如何取，都将改变整体的异或状态，而后手可以将异或状态再次改变为0</p>
<p>也就是说每一次改变异或状态为0 的都是先手，最后一次异或为0 的状态是</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">0 0 0 0 0....0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>先手无法再改变，<strong>先手必败</strong>。否则<strong>后手必败</strong></p>
<p>例题</p>
<p>https://vjudge.csgrandeur.cn/contest/530522#problem/A</p>
<h3 id="博弈问题的解决方式" tabindex="-1"><a class="header-anchor" href="#博弈问题的解决方式"><span>博弈问题的解决方式</span></a></h3>
<h4 id="icg游戏求某方胜出" tabindex="-1"><a class="header-anchor" href="#icg游戏求某方胜出"><span>ICG游戏求某方胜出</span></a></h4>
<p>两个玩家轮流拿，每次可以拿1,2,k(或者更多)</p>
<p>通过打表寻找规律</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">//sg函数例题1:acwing 4005. 取石子游戏</span>
<span class="line">//以下为该题的sg递推函数</span>
<span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int inf=0x3f;</span>
<span class="line">int f[1110];//对于先手0表示必败1表示必胜 </span>
<span class="line">string s[2]={&quot;后手赢&quot;,&quot;先手赢&quot;};</span>
<span class="line">int main(){</span>
<span class="line">	int n,k;</span>
<span class="line">    cin&gt;&gt;n&gt;&gt;k;</span>
<span class="line">    f[0]=0;</span>
<span class="line">    f[1]=1;</span>
<span class="line">    f[2]=1;</span>
<span class="line">    f[k]=1;</span>
<span class="line">    for(int i=3;i&lt;k;i++){</span>
<span class="line">    	if(!f[i-1]||!f[i-2])f[i]=1;</span>
<span class="line">    	else f[i]=0;</span>
<span class="line">	}</span>
<span class="line">	for(int i=k+1;i&lt;=n;i++){</span>
<span class="line">		if(!f[i-1]||!f[i-2]||!f[i-k])f[i]=1;</span>
<span class="line">		else f[i]=0;</span>
<span class="line">	}</span>
<span class="line">	for(int i=0;i&lt;=n;i++)</span>
<span class="line">    cout&lt;&lt;&quot;n等于 &quot;&lt;&lt;i&lt;&lt;&quot;时, &quot;&lt;&lt;s[f[i]]&lt;&lt;endl;</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/notes/.vuepress/assets/image-20230322101946677.png" alt="image-20230322101946677" style="zoom: 67%;float:left" />
<h4 id="记忆化搜索-状态压缩" tabindex="-1"><a class="header-anchor" href="#记忆化搜索-状态压缩"><span>记忆化搜索+状态压缩</span></a></h4>
<p><a href="https://leetcode.cn/problems/can-i-win/description/" target="_blank" rel="noopener noreferrer">464. 我能赢吗 - 力扣（Leetcode）</a></p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    unordered_map&lt;int,bool&gt; mp;</span>
<span class="line">    bool canIWin(int maxChoosableInteger, int desiredTotal) {</span>
<span class="line">        if((1+maxChoosableInteger)*maxChoosableInteger/2&lt;desiredTotal)return false;</span>
<span class="line">        return dfs(maxChoosableInteger,desiredTotal,0,0);    </span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    bool dfs(int maxChoosableInteger,int desiredTotal,int usedNumber,int total){</span>
<span class="line">        if(!mp.count(usedNumber)){</span>
<span class="line">            bool res=false;</span>
<span class="line">            for(int i=0;i&lt;maxChoosableInteger;i++){</span>
<span class="line">                if(((usedNumber &gt;&gt; i) &amp; 1) == 0){</span>
<span class="line">                    if(total+i+1&gt;=desiredTotal || !dfs(maxChoosableInteger,desiredTotal,usedNumber|(1&lt;&lt;i),total+i+1)){</span>
<span class="line">                        res=true;</span>
<span class="line">                        break;</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">            mp[usedNumber]=res;</span>
<span class="line">        }</span>
<span class="line">        return mp[usedNumber];</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">/****************************************</span>
<span class="line">  *Author:  Mai</span>
<span class="line">  *Contact:</span>
<span class="line">  *Description:先对n的奇偶性进行分类讨论：</span>
<span class="line">  * 1、奇数：任意一个奇数都可以分解为多个非2质数,设该数为z=x*y,z为奇数，x、y为z的非2质因数</span>
<span class="line">  *     先手可以减去y,z-y=(x-1)*y,此时x-1为偶数，而y为奇数</span>
<span class="line">  *     Bob的最优解是减去y,将z变成奇数,也就是(x-2)*y</span>
<span class="line">  *     因为x,y都是奇数，所以当先手面临奇数局面时，无论减去x,还是y，都会将z变成偶数</span>
<span class="line">  *     后手可以接着将z变成奇数</span>
<span class="line">  *     直到先手遇到x*1或1*y的局面，先手必输</span>
<span class="line">  * 2、2的奇数次幂必败，2的偶数次幂必胜</span>
<span class="line">  *     2^i先手可以取2^(i-1)个，将其变成2^(i-1)</span>
<span class="line">  *     或者取任意因子，将其变成非2次幂偶数，根据结论1，非2次幂偶数必胜，对手必胜则自身必败</span>
<span class="line">  *     综上所述，当i为奇数时，先手必败，i为偶数时，后手必败</span>
<span class="line">*****************************************/</span>
<span class="line">#include &lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">void solve(){</span>
<span class="line">    ll n;</span>
<span class="line">    cin&gt;&gt;n;</span>
<span class="line">    //奇数先手必败</span>
<span class="line">    if(n&amp;1)cout&lt;&lt;&quot;Bob&quot;&lt;&lt;endl;</span>
<span class="line">    //非2^i次偶数先手必胜</span>
<span class="line">    else if(n-(n&amp;-n))cout&lt;&lt;&quot;Alice&quot;&lt;&lt;endl;</span>
<span class="line">    //2^i次的情况</span>
<span class="line">    else{</span>
<span class="line">        int cnt=1;</span>
<span class="line">        while((1&lt;&lt;cnt)&lt;n)cnt++;</span>
<span class="line">        if(cnt&amp;1)cout&lt;&lt;&quot;Bob&quot;&lt;&lt;endl;</span>
<span class="line">        else cout&lt;&lt;&quot;Alice&quot;&lt;&lt;endl;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">int main() {</span>
<span class="line">    int T;</span>
<span class="line">    cin&gt;&gt;T;</span>
<span class="line">    while(T--)solve();</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="高级数据结构" tabindex="-1"><a class="header-anchor" href="#高级数据结构"><span>高级数据结构</span></a></h1>
<h2 id="优先队列" tabindex="-1"><a class="header-anchor" href="#优先队列"><span>优先队列</span></a></h2>
<h3 id="子序列之和求第k大-小" tabindex="-1"><a class="header-anchor" href="#子序列之和求第k大-小"><span>子序列之和求第K大/小</span></a></h3>
<p>之前一直有遇到这样题却没有记录，今天刚好写一下</p>
<p><a href="https://leetcode.cn/problems/find-the-k-sum-of-an-array/" target="_blank" rel="noopener noreferrer">2386. 找出数组的第 K 大和 - 力扣（LeetCode）</a></p>
<p>非负数的情况下，<strong>考虑维护(s,i)代表以a[i]结尾</strong>，和为s的子序列。每次入堆的元素为(s+a[i+1],i+1)或(s+a[i+1]-a[i],i+1)，这样的考虑是完备的，空集为第1小，所以只需求到k-1小</p>
<p>加上负数主要的困难在于多个负数累加起来会变得更小，不满足全局单调性。记录负数和为total_neg，负数转正后排序，假设堆顶元素为s'为当前序列第k小，那么s'+total_neg就能还原成原子序列第k小</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    typedef pair&lt;long long,int&gt; PII;</span>
<span class="line">    long long kSum(vector&lt;int&gt;&amp; a, int k) {</span>
<span class="line">        long long total = 0;</span>
<span class="line">        for(int &amp;x:a){</span>
<span class="line">            if(x&gt;=0)total+=x;</span>
<span class="line">            else x=-x;</span>
<span class="line">        }</span>
<span class="line">        sort(a.begin(),a.end());</span>
<span class="line">        priority_queue&lt;PII,vector&lt;PII&gt;,greater&lt;PII&gt;&gt; heap;</span>
<span class="line">        heap.push({a[0],0});</span>
<span class="line">        long long tmp=0;</span>
<span class="line">        for(int i=2;i&lt;=k;i++){</span>
<span class="line">            auto [v,j] = heap.top();heap.pop();</span>
<span class="line">            tmp = v;</span>
<span class="line">            if(j==a.size()-1)continue;</span>
<span class="line">            heap.push({v+a[j+1],j+1});</span>
<span class="line">            heap.push({v+a[j+1]-a[j],j+1});</span>
<span class="line">        }</span>
<span class="line">        return total-tmp;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.luogu.com.cn/problem/P1631" target="_blank" rel="noopener noreferrer">P1631 序列合并 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)</a></p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">#define int long long</span>
<span class="line">#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)</span>
<span class="line">using namespace std;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int Maxn = 1e5 + 10;</span>
<span class="line"></span>
<span class="line">struct Node {</span>
<span class="line">    int a, b, sum;</span>
<span class="line"></span>
<span class="line">    bool operator&lt;(const Node o) const {</span>
<span class="line">        return sum &gt; o.sum;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">signed main() {</span>
<span class="line">    int N;</span>
<span class="line">    cin &gt;&gt; N;</span>
<span class="line">    vector&lt;int&gt; a(N + 1), b(N + 1);</span>
<span class="line">    for (int i = 1; i &lt;= N; i++)cin &gt;&gt; a[i];</span>
<span class="line">    for (int i = 1; i &lt;= N; i++)cin &gt;&gt; b[i];</span>
<span class="line"></span>
<span class="line">    priority_queue&lt;Node&gt; heap;//&lt;sum,ai_pos,bi_pos&gt;</span>
<span class="line">    for (int i = 1; i &lt;= N; i++)heap.push({i, 1,a[i] + b[1]});</span>
<span class="line">    for(int i=1;i&lt;=N;i++){</span>
<span class="line">        auto u = heap.top();heap.pop();</span>
<span class="line">        cout&lt;&lt;u.sum&lt;&lt;&quot; &quot;;</span>
<span class="line">        heap.push({u.a,u.b+1,u.sum-b[u.b]+b[u.b+1]});</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="st表" tabindex="-1"><a class="header-anchor" href="#st表"><span>ST表</span></a></h2>
<p>ST表可以快速获取某个区间内的最值，用<code v-pre>st[i][j]</code>表示从下标i开始长度为2^j次方的区间内的最值</p>
<p>与线段树相比，效率更高，但不能像线段树一样做修改操作</p>
<p>常见的ST表题型：</p>
<ol>
<li>
<p>区间差值问题</p>
<p>寻找一维区间内的最大值和最小值的差</p>
</li>
<li>
<p>最频繁值问题</p>
<p>一般先预处理一张dp表，再根据dp表求ST表</p>
</li>
<li>
<p>最小分段树</p>
<p>面试官问题(HDU3486)</p>
</li>
<li>
<p>二维区间最值差</p>
<p>将二维问题转化为一维问题，在多个一维区间内找最值</p>
</li>
</ol>
<h3 id="区间最大值" tabindex="-1"><a class="header-anchor" href="#区间最大值"><span>区间最大值</span></a></h3>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include &lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line">	int n = 10;</span>
<span class="line">	int array[] = {0, 5, 3, 7, 2, 12, 1, 6, 4, 8, 15};</span>
<span class="line">	int ST[n+1][n+1];</span>
<span class="line"></span>
<span class="line">	for (int i = 1; i &lt;= 10; i++)</span>
<span class="line">		ST[i][0] = array[i];</span>
<span class="line"></span>
<span class="line">	int k = log2(n);</span>
<span class="line">	/*</span>
<span class="line">    	F[i][j]代表从i开始长度为2^j的区间内的最大值</span>
<span class="line">    	F[i][j]=max(F[i][j-1],F[i+1&lt;&lt;(j-1)][j-1])</span>
<span class="line">    */</span>
<span class="line">	for (int j = 1; j &lt;= k; j++) {</span>
<span class="line">		for (int i = 1; i + (1 &lt;&lt; j) - 1 &lt;= n; i++) {</span>
<span class="line">			ST[i][j] = max(ST[i][j - 1], ST[i + (1 &lt;&lt; (j - 1))][j - 1]);</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">    //查询操作</span>
<span class="line">	int l, r;</span>
<span class="line">	while (cin &gt;&gt; l &gt;&gt; r) {</span>
<span class="line">		k = log2(r - l + 1);</span>
<span class="line">		cout &lt;&lt; max(ST[l][k], ST[r - (1 &lt;&lt; k) + 1][k]) &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>POJ3368</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include &lt;iostream&gt;</span>
<span class="line">#include &lt;cmath&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">const int maxn = 50005;</span>
<span class="line">int a[maxn], t[maxn][20], s[maxn][20];</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line">	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);</span>
<span class="line"></span>
<span class="line">	int N, Q;</span>
<span class="line">	cin &gt;&gt; N &gt;&gt; Q;</span>
<span class="line"></span>
<span class="line">	for (int i = 1; i &lt;= N; i++)</span>
<span class="line">		cin &gt;&gt; a[i];</span>
<span class="line"></span>
<span class="line">	int k = log((double)N) / log(2.0);</span>
<span class="line"></span>
<span class="line">	for (int i = 1; i &lt;= N; i++) {</span>
<span class="line">		t[i][0] = s[i][0] = a[i];</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	for (int j = 1; j &lt;= k; j++) {</span>
<span class="line">		for (int i = 1; i &lt;= N - (1 &lt;&lt; j) + 1; i++) {</span>
<span class="line">			t[i][j] = max(t[i][j - 1], t[i + (1 &lt;&lt; (j - 1))][j - 1]);</span>
<span class="line">			s[i][j] = min(s[i][j - 1], s[i + (1 &lt;&lt; (j - 1))][j - 1]);</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	int l, r;</span>
<span class="line">	while (Q--) {</span>
<span class="line">		cin &gt;&gt; l &gt;&gt; r;</span>
<span class="line">		k = log(double(r - l + 1)) / log(2.0);</span>
<span class="line">		cout &lt;&lt; max(t[l][k], t[r - (1 &lt;&lt; k) + 1][k]) - min(s[l][k], s[r - (1 &lt;&lt; k) + 1][k]) &lt;&lt; endl;</span>
<span class="line">	}</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二维区间差值问题" tabindex="-1"><a class="header-anchor" href="#二维区间差值问题"><span>二维区间差值问题</span></a></h3>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include &lt;iostream&gt;</span>
<span class="line">#include &lt;cmath&gt;</span>
<span class="line">#include &lt;algorithm&gt;</span>
<span class="line">using namespace std;</span>
<span class="line"></span>
<span class="line">const int Maxn = 255;</span>
<span class="line">int STmax[Maxn][Maxn][10], STmin[Maxn][Maxn][10], N, B, K;</span>
<span class="line">int log2(int x) {</span>
<span class="line">	return log(x * 1.0) / log(2.0);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void STinit() {</span>
<span class="line">	for (int k = 1; k &lt;= N; k++) {</span>
<span class="line">		for (int j = 1; j &lt;= log2(N); j++) {</span>
<span class="line">			for (int i = 1; i &lt;= N - (1 &lt;&lt; j) + 1; i++) {</span>
<span class="line">				STmax[k][i][j] = max(STmax[k][i][j - 1], STmax[k][i + (1 &lt;&lt; (j - 1))][j - 1]);</span>
<span class="line">				STmin[k][i][j] = min(STmin[k][i][j - 1], STmin[k][i + (1 &lt;&lt; (j - 1))][j - 1]);</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int query(int x, int y) {</span>
<span class="line">	int len = log2(B);</span>
<span class="line">	int maxv = -1, minv = 300;</span>
<span class="line">	int l = y, r = y + B - 1;</span>
<span class="line">	for (int k = x; k &lt; x + B; k++) {</span>
<span class="line">		maxv = max(maxv, max(STmax[k][l][len], STmax[k][r - (1 &lt;&lt; len) + 1][len]));</span>
<span class="line">		minv = min(minv, min(STmin[k][l][len], STmin[k][r - (1 &lt;&lt; len) + 1][len]));</span>
<span class="line">	}</span>
<span class="line">	return maxv - minv;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line">	while (~scanf(&quot;%d%d%d&quot;, &amp;N, &amp;B, &amp;K)) {</span>
<span class="line"></span>
<span class="line">		for (int i = 1; i &lt;= N; i++) {</span>
<span class="line">			for (int j = 1; j &lt;= N; j++) {</span>
<span class="line">				scanf(&quot;%d&quot;, &amp;STmax[i][j][0]);</span>
<span class="line">				STmin[i][j][0] = STmax[i][j][0];</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">		STinit();</span>
<span class="line">		int x, y;</span>
<span class="line">		while (K--) {</span>
<span class="line">			scanf(&quot;%d%d&quot;, &amp;x, &amp;y);</span>
<span class="line">			printf(&quot;%d\n&quot;, query(x, y));</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="线段树" tabindex="-1"><a class="header-anchor" href="#线段树"><span>线段树</span></a></h2>
<p><img src="@source/notes/.vuepress/assets/线段树-16998715761332.png" alt="线段树"></p>
<h3 id="线段树模板" tabindex="-1"><a class="header-anchor" href="#线段树模板"><span>线段树模板</span></a></h3>
<h4 id="普通线段树" tabindex="-1"><a class="header-anchor" href="#普通线段树"><span>普通线段树</span></a></h4>
<p>补充更多细节，优化了写法</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">#define int long long</span>
<span class="line">#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)</span>
<span class="line">#define yes cout&lt;&lt;&quot;YES&quot;&lt;&lt;endl</span>
<span class="line">#define no cout&lt;&lt;&quot;NO&quot;&lt;&lt;endl</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int,int&gt; PII;</span>
<span class="line">const int Maxn=1e5+10,INF=0x3f3f3f3f;</span>
<span class="line">int max(int a,int b){return a&gt;b?a:b;}</span>
<span class="line">int min(int a,int b){return a&gt;b?b:a;}</span>
<span class="line"></span>
<span class="line">struct Tree {</span>
<span class="line">    int l, r, val, lazy;</span>
<span class="line">} T[Maxn &lt;&lt; 2];</span>
<span class="line">//向上传递</span>
<span class="line">void pushup(int node) {</span>
<span class="line">    T[node].val = T[node &lt;&lt; 1].val + T[node &lt;&lt; 1 | 1].val;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//向下传递</span>
<span class="line">void pushdown(int node) {</span>
<span class="line">    if (T[node].lazy) {</span>
<span class="line">        Tree&amp; root=T[node],&amp;left=T[node&lt;&lt;1],&amp;right=T[node&lt;&lt;1|1];</span>
<span class="line">        left.lazy+=root.lazy,left.val+=(left.r-left.l+1)*root.lazy;</span>
<span class="line">        right.lazy+=root.lazy,right.val+=(right.r-right.l+1)*root.lazy;</span>
<span class="line">        root.lazy=0;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//建树</span>
<span class="line">void build(int node, int l, int r) {</span>
<span class="line">    T[node]={l,r,0,0};</span>
<span class="line">    if (l == r) {</span>
<span class="line">        cin &gt;&gt; T[node].val;</span>
<span class="line">        return;</span>
<span class="line">    }</span>
<span class="line">    int mid = (l + r) &gt;&gt; 1;</span>
<span class="line">    build(node &lt;&lt; 1, l, mid);</span>
<span class="line">    build(node &lt;&lt; 1 | 1, mid + 1, r);</span>
<span class="line">    pushup(node);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//搜索范围[l,r]</span>
<span class="line">int query(int node, int l, int r) {</span>
<span class="line">    if (l &lt;= T[node].l &amp;&amp; T[node].r &lt;= r) {</span>
<span class="line">        return T[node].val;</span>
<span class="line">    }</span>
<span class="line">    pushdown(node);</span>
<span class="line">    int mid = (T[node].r + T[node].l) &gt;&gt; 1, val = 0;</span>
<span class="line">    if (l &lt;= mid) {</span>
<span class="line">        val = query(node &lt;&lt; 1, l, r);</span>
<span class="line">    }</span>
<span class="line">    if (mid &lt; r) {</span>
<span class="line">        val += query(node &lt;&lt; 1 | 1, l, r);</span>
<span class="line">    }</span>
<span class="line">    return val;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//修改范围[l,r]内的点增加k</span>
<span class="line">void modify(int node, int l, int r, int k) {</span>
<span class="line">    if (l &lt;= T[node].l &amp;&amp; T[node].r &lt;= r) {</span>
<span class="line">        T[node].lazy += k;</span>
<span class="line">        T[node].val += (T[node].r - T[node].l + 1) * k;</span>
<span class="line">        return;</span>
<span class="line">    }</span>
<span class="line">    pushdown(node);</span>
<span class="line">    int mid = (T[node].r + T[node].l) &gt;&gt; 1;</span>
<span class="line">    if (l &lt;= mid) {</span>
<span class="line">        modify(node &lt;&lt; 1, l, r, k);</span>
<span class="line">    }</span>
<span class="line">    if (mid &lt; r) {</span>
<span class="line">        modify(node &lt;&lt; 1 | 1, l, r, k);</span>
<span class="line">    }</span>
<span class="line">    pushup(node);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">signed main() {</span>
<span class="line">    ios;</span>
<span class="line">    int N, M, op, x, y, z;</span>
<span class="line">    cin &gt;&gt; N &gt;&gt; M;</span>
<span class="line">    build(1, 1, N);</span>
<span class="line">    while (M--) {</span>
<span class="line">        cin &gt;&gt; op &gt;&gt; x &gt;&gt; y;</span>
<span class="line">        if (op == 2) {</span>
<span class="line">            cout &lt;&lt; query(1, x, y) &lt;&lt; endl;</span>
<span class="line">        } else {</span>
<span class="line">            cin &gt;&gt; z;</span>
<span class="line">            modify(1, x, y, z);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="区间赋值" tabindex="-1"><a class="header-anchor" href="#区间赋值"><span>区间赋值</span></a></h4>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">//3个操作:</span>
<span class="line">//1: l r x 将[l,r]内的每个数都赋值为 x</span>
<span class="line">//2: l r x 将[l,r]内的每个数都加上 x</span>
<span class="line">//3: l r 求[l,r]内的最大值</span>
<span class="line">//初始化时几个标记要清</span>
<span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">#define int long long</span>
<span class="line">#define lc(x) x&lt;&lt;1</span>
<span class="line">#define rc(x) x&lt;&lt;1|1</span>
<span class="line">int n,q;</span>
<span class="line">const int inf=1145141919810;//特殊的值 </span>
<span class="line">class xds{</span>
<span class="line">	public:</span>
<span class="line">	int a[1000005],tr[4000005],tag[4000005],mdf[4000005];//tag是表示增加的懒标记，mdf表示修改的懒标记 </span>
<span class="line">	void push_tag(int x){</span>
<span class="line">		tag[lc(x)]+=tag[x],tr[lc(x)]+=tag[x];</span>
<span class="line">		tag[rc(x)]+=tag[x],tr[rc(x)]+=tag[x];</span>
<span class="line">		tag[x]=0;</span>
<span class="line">	}</span>
<span class="line">	void push_mdf(int x){</span>
<span class="line">		if(mdf[x]!=inf){//如果没有下传并且有标记，才会下传 </span>
<span class="line">			tr[lc(x)]=mdf[lc(x)]=mdf[x],tag[lc(x)]=0;</span>
<span class="line">			tr[rc(x)]=mdf[rc(x)]=mdf[x],tag[rc(x)]=0;</span>
<span class="line">			mdf[x]=inf;</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	void build(int x,int l,int r){</span>
<span class="line">		mdf[x]=inf;</span>
<span class="line">		if(l==r){</span>
<span class="line">			tr[x]=a[l];</span>
<span class="line">			return;</span>
<span class="line">		}</span>
<span class="line">		int mid=(l+r)&gt;&gt;1;</span>
<span class="line">		build(lc(x),l,mid);build(rc(x),mid+1,r);</span>
<span class="line">		tr[x]=max(tr[lc(x)],tr[rc(x)]); </span>
<span class="line">	}</span>
<span class="line">	void add(int x,int l,int r,int ql,int qr,int v){</span>
<span class="line">		if(ql&lt;=l&amp;&amp;qr&gt;=r){</span>
<span class="line">			tr[x]+=v;tag[x]+=v;</span>
<span class="line">			return;</span>
<span class="line">		}</span>
<span class="line">		push_mdf(x);//push_down次序如果错了，就会清空tag数组 </span>
<span class="line">		push_tag(x);</span>
<span class="line">		int mid=(l+r)&gt;&gt;1;</span>
<span class="line">		if(ql&lt;=mid) add(lc(x),l,mid,ql,qr,v);</span>
<span class="line">		if(qr&gt;mid) add(rc(x),mid+1,r,ql,qr,v);</span>
<span class="line">		tr[x]=max(tr[lc(x)],tr[rc(x)]);</span>
<span class="line">	}</span>
<span class="line">	void modify(int x,int l,int r,int ql,int qr,int v){</span>
<span class="line">		if(ql&lt;=l&amp;&amp;qr&gt;=r){</span>
<span class="line">			tr[x]=mdf[x]=v;</span>
<span class="line">			tag[x]=0;</span>
<span class="line">			return;</span>
<span class="line">		}</span>
<span class="line">		push_mdf(x);</span>
<span class="line">		push_tag(x);</span>
<span class="line">		int mid=(l+r)&gt;&gt;1;</span>
<span class="line">		if(ql&lt;=mid) modify(lc(x),l,mid,ql,qr,v);</span>
<span class="line">		if(qr&gt;mid) modify(rc(x),mid+1,r,ql,qr,v);</span>
<span class="line">		tr[x]=max(tr[lc(x)],tr[rc(x)]);</span>
<span class="line">	}</span>
<span class="line">	int query(int x,int l,int r,int ql,int qr){</span>
<span class="line">		if(ql&lt;=l&amp;&amp;qr&gt;=r) return tr[x];</span>
<span class="line">		push_mdf(x);</span>
<span class="line">		push_tag(x);</span>
<span class="line">		int mid=(l+r)&gt;&gt;1,sm=-inf;</span>
<span class="line">		if(ql&lt;=mid) sm=max(sm,query(lc(x),l,mid,ql,qr));</span>
<span class="line">		if(qr&gt;mid) sm=max(sm,query(rc(x),mid+1,r,ql,qr));</span>
<span class="line">		return sm;</span>
<span class="line">	}</span>
<span class="line">} tre;</span>
<span class="line">signed main(){</span>
<span class="line">	scanf(&quot;%lld%lld&quot;,&amp;n,&amp;q);</span>
<span class="line">	for(int i=1;i&lt;=n;i++) scanf(&quot;%lld&quot;,&amp;tre.a[i]);</span>
<span class="line">	tre.build(1,1,n);</span>
<span class="line">	for(int i=1,op,l,r,x;i&lt;=q;i++){</span>
<span class="line">		scanf(&quot;%lld%lld%lld&quot;,&amp;op,&amp;l,&amp;r);</span>
<span class="line">		if(op==1){</span>
<span class="line">			scanf(&quot;%lld&quot;,&amp;x);</span>
<span class="line">			tre.modify(1,1,n,l,r,x);</span>
<span class="line">		}else{</span>
<span class="line">			if(op==2){</span>
<span class="line">				scanf(&quot;%lld&quot;,&amp;x);</span>
<span class="line">				tre.add(1,1,n,l,r,x);</span>
<span class="line">			}else{</span>
<span class="line">				printf(&quot;%lld\n&quot;,tre.query(1,1,n,l,r));</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">	return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多重懒标记" tabindex="-1"><a class="header-anchor" href="#多重懒标记"><span>多重懒标记</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">子节点的值=子节点的值*父节点的mul+子节点的区间*父节点的add</span>
<span class="line">子节点的add=(子节点原add*父节点mul+父节点add)</span>
<span class="line">子节点的mul=(子节点原mul*父节点mul)</span>
<span class="line">根据题意推出多重懒标记的公式</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Code</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line">#define int long long</span>
<span class="line">#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)</span>
<span class="line">#define yes cout&lt;&lt;&quot;YES&quot;&lt;&lt;endl</span>
<span class="line">#define no cout&lt;&lt;&quot;NO&quot;&lt;&lt;endl</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int Maxn = 1e5 + 10, INF = 0x3f3f3f3f;</span>
<span class="line"></span>
<span class="line">int max(int a, int b) { return a &gt; b ? a : b; }</span>
<span class="line"></span>
<span class="line">int min(int a, int b) { return a &gt; b ? b : a; }</span>
<span class="line"></span>
<span class="line">int MOD;</span>
<span class="line">struct Tree {</span>
<span class="line">    int l, r, val;</span>
<span class="line">    int lazyAdd, lazyMul;</span>
<span class="line">} T[Maxn &lt;&lt; 2];</span>
<span class="line"></span>
<span class="line">//向上传递</span>
<span class="line">void pushup(int node) {</span>
<span class="line">    T[node].val = (T[node &lt;&lt; 1].val + T[node &lt;&lt; 1 | 1].val) % MOD;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//向下传递</span>
<span class="line">void pushdown(int node) {</span>
<span class="line">    Tree &amp;root = T[node], &amp;left = T[node &lt;&lt; 1], &amp;right = T[node &lt;&lt; 1 | 1];</span>
<span class="line">    //子节点的值=子节点的值*父节点的mul+子节点的区间*父节点的add</span>
<span class="line">    left.val=(left.val*root.lazyMul+root.lazyAdd*(left.r-left.l+1))%MOD;</span>
<span class="line">    left.lazyMul=(left.lazyMul*root.lazyMul)%MOD;</span>
<span class="line">    left.lazyAdd=(left.lazyAdd*root.lazyMul+root.lazyAdd)%MOD;</span>
<span class="line"></span>
<span class="line">    right.val=(right.val*root.lazyMul+root.lazyAdd*(right.r-right.l+1))%MOD;</span>
<span class="line">    right.lazyMul=(right.lazyMul*root.lazyMul)%MOD;</span>
<span class="line">    right.lazyAdd=(right.lazyAdd*root.lazyMul+root.lazyAdd)%MOD;</span>
<span class="line"></span>
<span class="line">    root.lazyAdd=0,root.lazyMul=1;</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//建树</span>
<span class="line">void build(int node, int l, int r) {</span>
<span class="line">    T[node] = {l, r, 0, 0, 1};</span>
<span class="line">    if (l == r) {</span>
<span class="line">        cin &gt;&gt; T[node].val;</span>
<span class="line">        return;</span>
<span class="line">    }</span>
<span class="line">    int mid = (l + r) &gt;&gt; 1;</span>
<span class="line">    build(node &lt;&lt; 1, l, mid);</span>
<span class="line">    build(node &lt;&lt; 1 | 1, mid + 1, r);</span>
<span class="line">    pushup(node);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//搜索范围[l,r]</span>
<span class="line">int query(int node, int l, int r) {</span>
<span class="line">    if (l &lt;= T[node].l &amp;&amp; T[node].r &lt;= r) {</span>
<span class="line">        return T[node].val;</span>
<span class="line">    }</span>
<span class="line">    pushdown(node);</span>
<span class="line">    int mid = (T[node].r + T[node].l) &gt;&gt; 1, val = 0;</span>
<span class="line">    if (l &lt;= mid) {</span>
<span class="line">        val = (val + query(node &lt;&lt; 1, l, r)) % MOD;</span>
<span class="line">    }</span>
<span class="line">    if (mid &lt; r) {</span>
<span class="line">        val = (val + query(node &lt;&lt; 1 | 1, l, r)) % MOD;</span>
<span class="line">    }</span>
<span class="line">    return val;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//修改范围[l,r]内的点增加k</span>
<span class="line">void modifyAdd(int node, int l, int r, int k) {</span>
<span class="line">    if (l &lt;= T[node].l &amp;&amp; T[node].r &lt;= r) {</span>
<span class="line">        T[node].lazyAdd = (T[node].lazyAdd + k) % MOD;</span>
<span class="line">        T[node].val = (T[node].val + (T[node].r - T[node].l + 1) * k) % MOD;</span>
<span class="line">        return;</span>
<span class="line">    }</span>
<span class="line">    pushdown(node);</span>
<span class="line">    int mid = (T[node].r + T[node].l) &gt;&gt; 1;</span>
<span class="line">    if (l &lt;= mid) {</span>
<span class="line">        modifyAdd(node &lt;&lt; 1, l, r, k);</span>
<span class="line">    }</span>
<span class="line">    if (mid &lt; r) {</span>
<span class="line">        modifyAdd(node &lt;&lt; 1 | 1, l, r, k);</span>
<span class="line">    }</span>
<span class="line">    pushup(node);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//修改范围[l,r]内的点乘k</span>
<span class="line">void modifyMul(int node, int l, int r, int k) {</span>
<span class="line">    if (l &lt;= T[node].l &amp;&amp; T[node].r &lt;= r) {</span>
<span class="line">        T[node].lazyAdd = (T[node].lazyAdd * k) % MOD;</span>
<span class="line">        T[node].lazyMul = (T[node].lazyMul * k) % MOD;</span>
<span class="line">        T[node].val = (T[node].val * k) % MOD;</span>
<span class="line">        return;</span>
<span class="line">    }</span>
<span class="line">    pushdown(node);</span>
<span class="line">    int mid = (T[node].r + T[node].l) &gt;&gt; 1;</span>
<span class="line">    if (l &lt;= mid) {</span>
<span class="line">        modifyMul(node &lt;&lt; 1, l, r, k);</span>
<span class="line">    }</span>
<span class="line">    if (mid &lt; r) {</span>
<span class="line">        modifyMul(node &lt;&lt; 1 | 1, l, r, k);</span>
<span class="line">    }</span>
<span class="line">    pushup(node);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">signed main() {</span>
<span class="line">    ios;</span>
<span class="line">    int N, M, op, l, r, k;</span>
<span class="line">    cin &gt;&gt; N &gt;&gt; M &gt;&gt; MOD;</span>
<span class="line">    build(1, 1, N);</span>
<span class="line">    while (M--) {</span>
<span class="line">        cin &gt;&gt; op &gt;&gt; l &gt;&gt; r;</span>
<span class="line">        if (op == 3)cout &lt;&lt; query(1, l, r) &lt;&lt; endl;</span>
<span class="line">        else {</span>
<span class="line">            cin &gt;&gt; k;</span>
<span class="line">            if (op == 1)modifyMul(1, l, r, k);</span>
<span class="line">            else modifyAdd(1, l, r, k);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_01线段树" tabindex="-1"><a class="header-anchor" href="#_01线段树"><span>01线段树</span></a></h4>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">#define int long long</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int Maxn=2e5+10;</span>
<span class="line">int A[Maxn];</span>
<span class="line">string s;</span>
<span class="line">struct Tree{</span>
<span class="line">    int l,r,val0,val1,lazy;</span>
<span class="line">}T[Maxn&lt;&lt;4];</span>
<span class="line"></span>
<span class="line">void pushup(int node){</span>
<span class="line">    T[node].val0=T[node&lt;&lt;1].val0^T[node&lt;&lt;1|1].val0;</span>
<span class="line">    T[node].val1=T[node&lt;&lt;1].val1^T[node&lt;&lt;1|1].val1;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void pushdown(int node){</span>
<span class="line">    if(T[node].lazy){</span>
<span class="line">        T[node].lazy=0;</span>
<span class="line">        Tree&amp; left=T[node&lt;&lt;1];</span>
<span class="line">        Tree&amp; right=T[node&lt;&lt;1|1];</span>
<span class="line">        left.lazy^=1;</span>
<span class="line">        swap(left.val0,left.val1);</span>
<span class="line">        right.lazy^=1;</span>
<span class="line">        swap(right.val0,right.val1);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void build(int node,int l,int r){</span>
<span class="line">    T[node]={l,r,0,0,0};</span>
<span class="line">    if(l==r){</span>
<span class="line">        if(s[l]=='0')T[node].val0+=A[l];</span>
<span class="line">        else T[node].val1+=A[l];</span>
<span class="line">        return;</span>
<span class="line">    }</span>
<span class="line">    int mid=(l+r)&gt;&gt;1;</span>
<span class="line">    build(node&lt;&lt;1,l,mid);</span>
<span class="line">    build(node&lt;&lt;1|1,mid+1,r);</span>
<span class="line">    pushup(node);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int query(int node,int l,int r,int type){</span>
<span class="line">    if(l&lt;=T[node].l&amp;&amp;T[node].r&lt;=r){</span>
<span class="line">        return type?T[node].val1:T[node].val0;</span>
<span class="line">    }</span>
<span class="line">    pushdown(node);</span>
<span class="line">    int mid=(T[node].l+T[node].r)&gt;&gt;1,val=0;</span>
<span class="line">    if(l&lt;=mid)val+= query(node&lt;&lt;1,l,r,type);</span>
<span class="line">    if(mid&lt;r)val+= query(node&lt;&lt;1|1,l,r,type);</span>
<span class="line">    return val;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void modify(int node,int l,int r){</span>
<span class="line">    if(l&lt;=T[node].l&amp;&amp;T[node].r&lt;=r){</span>
<span class="line">        T[node].lazy^=1;</span>
<span class="line">        swap(T[node].val0,T[node].val1);</span>
<span class="line">        return;</span>
<span class="line">    }</span>
<span class="line">    pushdown(node);</span>
<span class="line">    ll mid=(T[node].r+T[node].l)&gt;&gt;1;</span>
<span class="line">    if(l&lt;=mid)modify(node&lt;&lt;1,l,r);</span>
<span class="line">    if(mid&lt;r)modify(node&lt;&lt;1|1,l,r);</span>
<span class="line">    pushup(node);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">signed main(){</span>
<span class="line">    int t;cin&gt;&gt;t;</span>
<span class="line">    while(t--){</span>
<span class="line">        int n;cin&gt;&gt;n;</span>
<span class="line">        for(int i=1;i&lt;=n;i++)cin&gt;&gt;A[i];</span>
<span class="line">        cin&gt;&gt;s;</span>
<span class="line">        s=&quot; &quot;+s;</span>
<span class="line">        build(1,1,n);</span>
<span class="line">        int q;cin&gt;&gt;q;</span>
<span class="line">        while(q--){</span>
<span class="line">            int op;cin&gt;&gt;op;</span>
<span class="line">            if(op==1){</span>
<span class="line">                int l,r;cin&gt;&gt;l&gt;&gt;r;</span>
<span class="line">                modify(1,l,r);</span>
<span class="line">            }else{</span>
<span class="line">                int x;cin&gt;&gt;x;</span>
<span class="line">                cout&lt;&lt;query(1,1,n,x)&lt;&lt;&quot; &quot;;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        cout&lt;&lt;endl;</span>
<span class="line">    }</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="势能线段树" tabindex="-1"><a class="header-anchor" href="#势能线段树"><span>势能线段树</span></a></h4>
<p>对于像区间开根号、区间位运算这样的区间操作来说，其<strong>对每个结点的修改量是在一定程度上是由叶结点本身现有的值来决定的</strong>，那么就很难实现lazy的合并和对区间值的直接更新，这些操作对每个结点的操作次数都是有一个隐含的“上限”的，就像有一个固定的“势能“，只要超过了这个上限值，相应的操作便会“退化”失效，也就是势能为0的情况。而当势能为0的结点连成区间时，我们便可以一口气规避掉在这个区间上的所有操作。</p>
<p>https://www.luogu.com.cn/problem/CF438D（区间取模，区间查询，单点修改）</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">#define int long long</span>
<span class="line">#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)</span>
<span class="line">using namespace std;</span>
<span class="line">typedef pair&lt;int,int&gt; PII;</span>
<span class="line">const int Maxn=1e5+10;</span>
<span class="line"></span>
<span class="line">struct Node{</span>
<span class="line">    int l,r,s,mx;</span>
<span class="line">}tr[Maxn&lt;&lt;2];</span>
<span class="line"></span>
<span class="line">void pushUp(int node){</span>
<span class="line">    tr[node].mx = max(tr[node&lt;&lt;1].mx,tr[node&lt;&lt;1|1].mx);</span>
<span class="line">    tr[node].s= tr[node&lt;&lt;1].s+tr[node&lt;&lt;1|1].s;</span>
<span class="line">}</span>
<span class="line">void build(int node,int l,int r){</span>
<span class="line">    tr[node] ={l,r,0,0};</span>
<span class="line">    if(l==r){</span>
<span class="line">        cin&gt;&gt;tr[node].s;</span>
<span class="line">        tr[node].mx = tr[node].s;</span>
<span class="line">        return;</span>
<span class="line">    }</span>
<span class="line">    int mid=(l+r)&gt;&gt;1;</span>
<span class="line">    build(node&lt;&lt;1,l,mid);</span>
<span class="line">    build(node&lt;&lt;1|1,mid+1,r);</span>
<span class="line">    pushUp(node);</span>
<span class="line">}</span>
<span class="line">void update(int node,int l,int r,int mod){</span>
<span class="line">    if(tr[node].l==tr[node].r){</span>
<span class="line">        tr[node].s %=mod;</span>
<span class="line">        tr[node].mx%=mod;</span>
<span class="line">        return;</span>
<span class="line">    }</span>
<span class="line">    int mid=(tr[node].l+tr[node].r)&gt;&gt;1;</span>
<span class="line">    if(l&lt;=mid &amp;&amp; tr[node&lt;&lt;1].mx&gt;=mod)update(node&lt;&lt;1,l,r,mod);</span>
<span class="line">    if(mid&lt;r &amp;&amp; tr[node&lt;&lt;1|1].mx&gt;=mod)update(node&lt;&lt;1|1,l,r,mod);</span>
<span class="line">    pushUp(node);</span>
<span class="line">}</span>
<span class="line">//单点修改为x</span>
<span class="line">void modify(int node,int l,int r,int x){</span>
<span class="line">    if(tr[node].l==l &amp;&amp; tr[node].r==r){</span>
<span class="line">        tr[node].s = tr[node].mx=x;</span>
<span class="line">        return;</span>
<span class="line">    }</span>
<span class="line">    int mid=(tr[node].l+tr[node].r)&gt;&gt;1;</span>
<span class="line">    if(l&lt;=mid)modify(node&lt;&lt;1,l,r,x);</span>
<span class="line">    if(mid&lt;r)modify(node&lt;&lt;1|1,l,r,x);</span>
<span class="line">    pushUp(node);</span>
<span class="line">}</span>
<span class="line">int query(int node,int l,int r){</span>
<span class="line">    if(l&lt;=tr[node].l &amp;&amp; tr[node].r&lt;=r)return tr[node].s;</span>
<span class="line">    int mid=(tr[node].l+tr[node].r)&gt;&gt;1,res=0;</span>
<span class="line">    if(l&lt;=mid)res+= query(node&lt;&lt;1,l,r);</span>
<span class="line">    if(mid&lt;r)res+= query(node&lt;&lt;1|1,l,r);</span>
<span class="line">    return res;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">signed main(){</span>
<span class="line">    ios;</span>
<span class="line">    int n,m;cin&gt;&gt;n&gt;&gt;m;</span>
<span class="line">    build(1,1,n);</span>
<span class="line">    while(m--){</span>
<span class="line">        int op,l,r,x;cin&gt;&gt;op;</span>
<span class="line">        if(op==1){</span>
<span class="line">            cin&gt;&gt;l&gt;&gt;r;</span>
<span class="line">            cout&lt;&lt;query(1,l,r)&lt;&lt;endl;</span>
<span class="line">        }else if(op==2){</span>
<span class="line">            cin&gt;&gt;l&gt;&gt;r&gt;&gt;x;</span>
<span class="line">            update(1,l,r,x);</span>
<span class="line">        }else{</span>
<span class="line">            cin&gt;&gt;l&gt;&gt;x;</span>
<span class="line">            modify(1,l,l,x);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扫描线" tabindex="-1"><a class="header-anchor" href="#扫描线"><span>扫描线</span></a></h3>
<ul>
<li>每个节点对应一个线段，相邻节点分别对应[x,y],[y,z]两个连续区间</li>
<li>向下传递时，mid不再+1</li>
</ul>
<p><img src="@source/notes/.vuepress/assets/v2-16a335e0106d0e5d1e73ba519aae0b60_720w-16995961816695.webp" alt="img"></p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">#define int long long</span>
<span class="line">#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int Maxn=1e6+10;</span>
<span class="line">int yy[Maxn&lt;&lt;1];//离散化后的值</span>
<span class="line">struct Line{</span>
<span class="line">    int x,down_y,up_y,tag;</span>
<span class="line">    bool operator &lt; (const Line l)const{</span>
<span class="line">        return x&lt;l.x;</span>
<span class="line">    }</span>
<span class="line">}line[Maxn&lt;&lt;1];</span>
<span class="line"></span>
<span class="line">struct Node{</span>
<span class="line">    int l,r,cover,length;</span>
<span class="line">}tr[Maxn&lt;&lt;2];</span>
<span class="line"></span>
<span class="line">void pushUp(int node){</span>
<span class="line">    if(tr[node].cover)tr[node].length=yy[tr[node].r]-yy[tr[node].l];</span>
<span class="line">    else if(tr[node].l+1==tr[node].r)tr[node].length=0;</span>
<span class="line">    else tr[node].length=tr[node&lt;&lt;1].length+tr[node&lt;&lt;1|1].length;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void build(int node,int l,int r){</span>
<span class="line">    tr[node]={l,r,0,0};</span>
<span class="line">    if(l+1==r)return;</span>
<span class="line">    int mid=(l+r)&gt;&gt;1;</span>
<span class="line">    build(node&lt;&lt;1,l,mid);</span>
<span class="line">    build(node&lt;&lt;1|1,mid,r);</span>
<span class="line">    pushUp(node);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void update(int node,int l,int r,int tag){</span>
<span class="line">    if(tr[node].l&gt;r || tr[node].r&lt;l)return;</span>
<span class="line">    if(l&lt;=tr[node].l &amp;&amp; tr[node].r&lt;=r){</span>
<span class="line">        tr[node].cover+=tag;</span>
<span class="line">        pushUp(node);</span>
<span class="line">        return;</span>
<span class="line">    }</span>
<span class="line">    if(tr[node].l+1==tr[node].r)return;</span>
<span class="line">    int mid=(tr[node].l+tr[node].r)&gt;&gt;1;</span>
<span class="line">    if(l&lt;=mid)update(node&lt;&lt;1,l,r,tag);</span>
<span class="line">    if(mid&lt;r)update(node&lt;&lt;1|1,l,r,tag);</span>
<span class="line">    pushUp(node);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">signed main(){</span>
<span class="line">    int n,cnt=0;cin&gt;&gt;n;</span>
<span class="line">    for(int i=1;i&lt;=n;i++){</span>
<span class="line">        int x1,y1,x2,y2;cin&gt;&gt;x1&gt;&gt;y1&gt;&gt;x2&gt;&gt;y2;</span>
<span class="line">        line[++cnt]={x1,y1,y2,1};</span>
<span class="line">        yy[cnt]=y1;</span>
<span class="line">        line[++cnt]={x2,y1,y2,-1};</span>
<span class="line">        yy[cnt]=y2;</span>
<span class="line">    }</span>
<span class="line">    sort(line+1,line+cnt+1);</span>
<span class="line">    sort(yy+1,yy+cnt+1);</span>
<span class="line"></span>
<span class="line">    int len = unique(yy+1,yy+cnt+1)-yy-1;</span>
<span class="line">    build(1,1,len);</span>
<span class="line">    int ans=0,y1,y2;</span>
<span class="line">    for(int i=1;i&lt;=cnt;i++){</span>
<span class="line">        ans+=tr[1].length*(line[i].x-line[i-1].x);</span>
<span class="line">        y1= lower_bound(yy+1,yy+len+1,line[i].down_y)-yy;</span>
<span class="line">        y2= lower_bound(yy+1,yy+len+1,line[i].up_y)-yy;</span>
<span class="line">        update(1,y1,y2,line[i].tag);</span>
<span class="line">    }</span>
<span class="line">    cout&lt;&lt;ans&lt;&lt;endl;</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二维偏序" tabindex="-1"><a class="header-anchor" href="#二维偏序"><span>二维偏序</span></a></h3>
<p>$对于矩形(x_1,y_1),(x_2,y_2)$其二维前缀和为</p>
<p>$sum[x_2][y_2] - sum[x_1-1][y_2] - sum[x2][y_1-1]+sum[x_1-1][y_1-1]$</p>
<p>整个过程就是</p>
<ul>
<li>将所有点按横坐标排序</li>
<li>将所有矩形询问拆成四个区域，即四次询问，所有询问按 $x$ 轴排序</li>
<li>遍历询问，设当前横坐标为 $x$，保证 $x ′ ≤ x$ 的所有点的纵坐标已加入树状数组，在树状数组中查询答案，贡献加至原询问处</li>
<li>输出每个原询问的答案</li>
</ul>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">#define int long long</span>
<span class="line">#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int Maxn=1e7+10;</span>
<span class="line"></span>
<span class="line">int tr[Maxn];</span>
<span class="line">int lowbit(int x){return x&amp;-x;}</span>
<span class="line">void add(int x){for(;x&lt;Maxn;x+=lowbit(x))tr[x]++;}</span>
<span class="line">int sum(int x){</span>
<span class="line">    int res=0;</span>
<span class="line">    for(;x&gt;0;x-=lowbit(x))res+=tr[x];</span>
<span class="line">    return res;</span>
<span class="line">}</span>
<span class="line">signed main(){</span>
<span class="line">    ios;</span>
<span class="line">    int n,m;cin&gt;&gt;n&gt;&gt;m;</span>
<span class="line">    vector&lt;pair&lt;int,int&gt;&gt; point;//&lt;x,y&gt;</span>
<span class="line">    vector&lt;tuple&lt;int,int,int,int&gt;&gt; query;//&lt;x,y,d,id&gt;</span>
<span class="line">    for(int i=0,x,y;i&lt;n;i++){</span>
<span class="line">        cin&gt;&gt;x&gt;&gt;y;</span>
<span class="line">        x++,y++;</span>
<span class="line">        point.emplace_back(x,y);</span>
<span class="line">    }</span>
<span class="line">    //按x排序</span>
<span class="line">    std::sort(point.begin(), point.end());</span>
<span class="line"></span>
<span class="line">    for(int i=0,a,b,c,d;i&lt;m;i++){</span>
<span class="line">        cin&gt;&gt;a&gt;&gt;b&gt;&gt;c&gt;&gt;d;</span>
<span class="line">        a++,b++,c++,d++;</span>
<span class="line">        query.emplace_back(a-1,b-1,1,i);//左下角</span>
<span class="line">        query.emplace_back(a-1,d,-1,i);//左上角</span>
<span class="line">        query.emplace_back(c,b-1,-1,i);//右下角</span>
<span class="line">        query.emplace_back(c,d,1,i);//右上角</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    std::sort(query.begin(), query.end());</span>
<span class="line">    int cur=0;</span>
<span class="line">    vector&lt;int&gt; ans(m);</span>
<span class="line">    for(auto [x,y,d,id]:query){</span>
<span class="line">        while(cur&lt;n &amp;&amp; point[cur].first &lt;=x){</span>
<span class="line">            add(point[cur].second);</span>
<span class="line">            cur++;</span>
<span class="line">        }</span>
<span class="line">        ans[id] += d*sum(y);</span>
<span class="line">    }</span>
<span class="line">    for(int i=0;i&lt;m;i++)cout&lt;&lt;ans[i]&lt;&lt;endl;</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="树状数组" tabindex="-1"><a class="header-anchor" href="#树状数组"><span>树状数组</span></a></h2>
<p>cin和cout容易wa</p>
<p>目前能用树状数组解决的问题：</p>
<ol>
<li>一维/二维区间求和，单点修改</li>
<li>求逆序数</li>
<li>树状数组在树上的应用</li>
</ol>
<h3 id="求逆序对" tabindex="-1"><a class="header-anchor" href="#求逆序对"><span>求逆序对</span></a></h3>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int Maxn=5e5+10;</span>
<span class="line"></span>
<span class="line">inline int read() {</span>
<span class="line">    char ch=getchar();</span>
<span class="line">    int x=0,m=1;</span>
<span class="line">    while(!isdigit(ch)){</span>
<span class="line">        if (ch=='-') m=-1;</span>
<span class="line">        ch=getchar();</span>
<span class="line">    }</span>
<span class="line">    while(isdigit(ch)){</span>
<span class="line">        x=x*10+ch-'0';</span>
<span class="line">        ch=getchar();</span>
<span class="line">    }</span>
<span class="line">    return x*m;</span>
<span class="line">}</span>
<span class="line">ll c[Maxn],m,n,A[Maxn],B[Maxn],hx[Maxn];</span>
<span class="line">ll lowbit(ll x){</span>
<span class="line">    return x&amp;(-x);</span>
<span class="line">}</span>
<span class="line">ll sum(ll x){</span>
<span class="line">    ll res=1;</span>
<span class="line">    for(;x&gt;0;x-= lowbit(x))res+=c[x];</span>
<span class="line">    return res;</span>
<span class="line">}</span>
<span class="line">void add(ll x){</span>
<span class="line">    for(;x&lt;=n;x+= lowbit(x))c[x]++;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int get_id(ll x){</span>
<span class="line">    return lower_bound(B,B+m,x)-B+1;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    ll ans=0,x;</span>
<span class="line">    n=read();</span>
<span class="line">    for(int i=0;i&lt;n;i++){</span>
<span class="line">        A[i]=read();</span>
<span class="line">        B[i]=A[i];</span>
<span class="line">    }</span>
<span class="line">    sort(B,B+n);</span>
<span class="line">    m=unique(B,B+n)-B;</span>
<span class="line"></span>
<span class="line">    for(int i=0;i&lt;n;i++){</span>
<span class="line">        x= get_id(A[i]);</span>
<span class="line">        ans+=(sum(m)-sum(x-1)-hx[x]);</span>
<span class="line">        add(x);</span>
<span class="line">        hx[x]++;</span>
<span class="line">    }</span>
<span class="line">    cout&lt;&lt;ans&lt;&lt;endl;</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一维树状数组" tabindex="-1"><a class="header-anchor" href="#一维树状数组"><span>一维树状数组</span></a></h3>
<img src="@source/notes/.vuepress/assets/image-20221219125551527.png" alt="image-20221219125551527" style="zoom:50%;" />
<p>lowbit(x)表示c[i]存储值的区间长度，比如c[4]的区间长度为4</p>
<p>**前驱(左子树)😗*c[i-lowbit(x)]是c[i]的直接前驱，求sum(x)只需要把x的所有前驱加起来即可</p>
<p>**后继(父节点)😗*c[i+lowbit(x)]是c[i]的父节点，每次更新c[i]都需要把c[i]的父节点一起更新</p>
<h4 id="普通-单点修改-区间查询" tabindex="-1"><a class="header-anchor" href="#普通-单点修改-区间查询"><span>[普通]单点修改，区间查询</span></a></h4>
<p><strong>对A[i]进行单点修改时，仅会对c[i]及其父节点有影响，所以可以直接从c[i]开始进行更新</strong></p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">int a[15],c[15],n;</span>
<span class="line">int lowbit(int i){</span>
<span class="line">    return (-i)&amp;i;</span>
<span class="line">}</span>
<span class="line">//求和不断寻找左子树</span>
<span class="line">int sum(int i){</span>
<span class="line">    int res=0;</span>
<span class="line">    for(;i&gt;0;i-= lowbit(i)){</span>
<span class="line">        res+=c[i];</span>
<span class="line">    }</span>
<span class="line">    return res;</span>
<span class="line">}</span>
<span class="line">//单点修改不断更新父节点</span>
<span class="line">void add(int x,int k){</span>
<span class="line">    for(int i=x;i&lt;=n;i+= lowbit(i)){</span>
<span class="line">        c[i]+=k;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void solve(){</span>
<span class="line">    cin&gt;&gt;n;</span>
<span class="line">    for(int i=1;i&lt;=n;i++){</span>
<span class="line">        cin&gt;&gt;a[i];</span>
<span class="line">        add(i,a[i]);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="差分-区间修改-单点查询" tabindex="-1"><a class="header-anchor" href="#差分-区间修改-单点查询"><span>[差分]区间修改，单点查询</span></a></h4>
<p>对于差分的详解</p>
<p>https://blog.csdn.net/qq_52466006/article/details/120978631</p>
<p>https://blog.csdn.net/fsahfgsadhsakndas/article/details/52650026</p>
<p>差分数组b[i]=a[i]-a[i-1],用树状数组c[]维护数组b的前缀和</p>
<p>a[i]=Σbx (i&lt;=x&lt;=j)=sum(i)</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">int sum(int i){</span>
<span class="line">	int res=0;</span>
<span class="line">	for(;i&gt;0;i-=lowbit(i))res+=c[i];</span>
<span class="line">	return res;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于差分数组中a[i]~a[j]区间增加K可以转化为差分数组b[i]+k,b[j+1]-k的证明</p>
<p>https://blog.csdn.net/qq_44786250/article/details/100056975</p>
<img src="@source/notes/.vuepress/assets/image-20221220202243243.png" alt="image-20221220202243243" style="zoom: 67%;" />
<p>所以进行区间修改[i~j]+K,可以直接使用add(i,k),add(j+1,-k)完成修改</p>
<p>在实际写代码的时候b[i]数组可以省略,直接构建树状数组</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">for(int i=1;i&lt;=n;i++){</span>
<span class="line">	cin&gt;&gt;a[i];</span>
<span class="line">	add(i,a[i]-a[i-1]);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">while(m--){</span>
<span class="line">    cin&gt;&gt;x&gt;&gt;y&gt;&gt;k;</span>
<span class="line">    add(x,k),add(y+1,k);</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【洛谷】树状数组2</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">/****************************************</span>
<span class="line">  *Author:  Mai</span>
<span class="line">  *Contact:</span>
<span class="line">  *Description:树状数组进行区域修改需要用到差分数组,设b[x]=a[i]-a[i-1]</span>
<span class="line">  我们构建一个树状数组c[]</span>
<span class="line">   所以我们可以得出以下公式：</span>
<span class="line">   单点查询：a[i]=b[1]+b[2]+b[3]+...+b[i]=sum(i)</span>
<span class="line">   区域修改：Σa[x]+k(i&lt;=x&lt;=j) 等价于 b[i]+k,b[j+1]+k</span>
<span class="line">   即 add(i,k),add(j+1,-k)</span>
<span class="line">*****************************************/</span>
<span class="line">#include &lt;bits/stdc++.h&gt;</span>
<span class="line">#define syncIO ios::sync_with_stdio(false),cin.tie(0),cout.tie(0);</span>
<span class="line">#define sc scanf</span>
<span class="line">#define ptf printf</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int maxn=1e5+10;</span>
<span class="line">ll c[5*maxn],a[5*maxn];</span>
<span class="line">int N,M;</span>
<span class="line">int lowbit(int x){</span>
<span class="line">    return x&amp;(-x);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">ll sum(int x){</span>
<span class="line">    ll res=0;</span>
<span class="line">    for(;x&gt;0;x-= lowbit(x))res+=c[x];</span>
<span class="line">    return res;</span>
<span class="line">}</span>
<span class="line">void add(int x,int k){</span>
<span class="line">    for(;x&lt;=N;x+= lowbit(x)){</span>
<span class="line">        c[x]+=k;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">void solve(){</span>
<span class="line">    int x,y,k,ch;</span>
<span class="line">    sc(&quot;%d%d&quot;,&amp;N,&amp;M);</span>
<span class="line">    for(int i=1;i&lt;=N;i++){</span>
<span class="line">        sc(&quot;%lld&quot;,&amp;a[i]);</span>
<span class="line">        add(i,a[i]-a[i-1]);</span>
<span class="line">    }</span>
<span class="line">    while(M--){</span>
<span class="line">        sc(&quot;%d&quot;,&amp;ch);</span>
<span class="line">        if(ch==1){</span>
<span class="line">            sc(&quot;%d%d%d&quot;,&amp;x,&amp;y,&amp;k);</span>
<span class="line">            add(x,k),add(y+1,-k);</span>
<span class="line">        }else if(ch==2){</span>
<span class="line">            sc(&quot;%d&quot;,&amp;x);</span>
<span class="line">            ptf(&quot;%lld\n&quot;,sum(x));</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line">    solve();</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="差分变形-区间修改-区间查询" tabindex="-1"><a class="header-anchor" href="#差分变形-区间修改-区间查询"><span>[差分变形]区间修改，区间查询</span></a></h4>
<p>b[i]=a[i]-a[i-1]，则a[i]=Σbx (i&lt;=x&lt;=j)=sum(i)</p>
<p>a[1]+a[2]+a[3]+...+a[n]</p>
<p>=(b[1])+(b[1]+b[2])+(b[1]+b[2]+b[3])+...+(b[1]+b[2]+...+b[n])</p>
<p>=n*b[1]+ (n-1) <em>b[2]+...(n-i) * b[i]+...+1</em>b[n]</p>
<p>=n*(b[1]+b[2]+b[3]+...+b[n])-(0 *b[1]+1 *b[2]+2 *b[3]+...+(n-1) * b[n])</p>
<p>*<em>b[i]~b[n]可以通过sum(i)快速求出前缀和,但是(i-1)<em>b[i]不能直接求出</em></em></p>
<p>令b2[i]=(i-1)*b[i],构建树状数组c2维护b2的前缀和</p>
<p>那么Σai=n*sum(i)-sum2(i);</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">POJ3468</span>
<span class="line">/****************************************</span>
<span class="line">  *Author:  Mai</span>
<span class="line">  *Contact:</span>
<span class="line">  *Description:</span>
<span class="line">*****************************************/</span>
<span class="line">#include &lt;bits/stdc++.h&gt;</span>
<span class="line">#define syncIO ios::sync_with_stdio(false),cin.tie(0),cout.tie(0)</span>
<span class="line">#define int long long</span>
<span class="line">#define sc scanf</span>
<span class="line">#define ptf printf</span>
<span class="line">#define mem(a,b) memset(a,b,sizeof(b))</span>
<span class="line">#define lcm(x,y) (x)*(y)/(__gcd((x),(y)))</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int maxn=1e5+10;</span>
<span class="line">int c[maxn],c2[maxn];</span>
<span class="line">int lowbit(int x){return x&amp;(-x);}</span>
<span class="line">void add(int x,int k){</span>
<span class="line">    int n=x-1;</span>
<span class="line">    for(;x&lt;maxn;x+= lowbit(x)){</span>
<span class="line">        c[x]+=k;</span>
<span class="line">        c2[x]+=n*k;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">void add(int x,int y,int k){</span>
<span class="line">    add(x,k),add(y+1,-k);</span>
<span class="line">}</span>
<span class="line">int sum(int x){</span>
<span class="line">    int res=0,n=x;</span>
<span class="line">    for(;x&gt;0;x-=lowbit(x)){</span>
<span class="line">        res+=(n*c[x]-c2[x]);</span>
<span class="line">    }</span>
<span class="line">    return res;</span>
<span class="line">}</span>
<span class="line">int sum(int x,int y){</span>
<span class="line">    return sum(y)-sum(x-1);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void solve(){</span>
<span class="line">    int N,Q,a=0,b,k;</span>
<span class="line">    sc(&quot;%lld%lld&quot;,&amp;N,&amp;Q);</span>
<span class="line">    for(int i=1;i&lt;=N;i++){</span>
<span class="line">        sc(&quot;%lld&quot;,&amp;b);</span>
<span class="line">        add(i,b-a);</span>
<span class="line">        a=b;</span>
<span class="line">    }</span>
<span class="line">    char ch;</span>
<span class="line">    while(Q--){</span>
<span class="line">        sc(&quot; %c%lld%lld&quot;,&amp;ch,&amp;a,&amp;b);</span>
<span class="line">        if(ch=='Q'){</span>
<span class="line">            ptf(&quot;%lld\n&quot;,sum(a,b));</span>
<span class="line">        }else{</span>
<span class="line">            sc(&quot;%lld&quot;,&amp;k);</span>
<span class="line">            add(a,b,k);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">signed main() {</span>
<span class="line">    syncIO;</span>
<span class="line">    solve();</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="最值-维护区间最值" tabindex="-1"><a class="header-anchor" href="#最值-维护区间最值"><span>[最值]维护区间最值</span></a></h4>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int Maxn=1e5+10;</span>
<span class="line">ll Trie[Maxn],dp[Maxn],diff[Maxn],a[Maxn],cnt;</span>
<span class="line">int lowbit(int x){return x&amp;(-x);}</span>
<span class="line">void add(int x,ll k){</span>
<span class="line">    for(;x&lt;Maxn;x+= lowbit(x))Trie[x]=max(k,Trie[x]);</span>
<span class="line">}</span>
<span class="line">ll query(int x){</span>
<span class="line">    ll res=0;</span>
<span class="line">    for(;x&gt;0;x-= lowbit(x))res=max(res,Trie[x]);</span>
<span class="line">    return res;</span>
<span class="line">}</span>
<span class="line">int get_id(ll x){</span>
<span class="line">    return lower_bound(diff,diff+cnt,x)-diff+1;</span>
<span class="line">}</span>
<span class="line">int main(){</span>
<span class="line">    int n;cin&gt;&gt;n;</span>
<span class="line">    for(int i=1;i&lt;=n;i++){</span>
<span class="line">        cin&gt;&gt;a[i];</span>
<span class="line">        diff[i-1]=a[i];</span>
<span class="line">    }</span>
<span class="line">    sort(diff,diff+n);</span>
<span class="line">    cnt=unique(diff,diff+n)-diff;</span>
<span class="line">    ll ans=0;</span>
<span class="line">    for(int i=1;i&lt;=n;i++){</span>
<span class="line">        a[i]= get_id(a[i]);</span>
<span class="line">        dp[i]=diff[a[i]-1]+ query(a[i]-1);</span>
<span class="line">        ans=max(ans, dp[i]);</span>
<span class="line">        add(a[i],dp[i]);</span>
<span class="line">    }</span>
<span class="line">    cout&lt;&lt;ans;</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二维树状数组" tabindex="-1"><a class="header-anchor" href="#二维树状数组"><span>二维树状数组</span></a></h3>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">void add(int x,int y,int k){</span>
<span class="line">    for(int i=x;i&lt;=N;i++){</span>
<span class="line">        for(int j=x;j&lt;=N;j++){</span>
<span class="line">            c[i][j]+=k;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">int sum(int x,int y){</span>
<span class="line">	int res=0;</span>
<span class="line">	for(int i=x;i&gt;0;i-=lowbit(i)){</span>
<span class="line">		for(int j=y;j&gt;0;j-=lowbit(j)){</span>
<span class="line">			res+=c[i][j];</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">    return res;</span>
<span class="line">}</span>
<span class="line">int sum(int x1,int y1,int x2,int y2){</span>
<span class="line">    return sum(x2,y2)-sum(x1-1,y2)-sum(x2,y1-1)+sum(x1-1,y1-1);</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="差分变形" tabindex="-1"><a class="header-anchor" href="#差分变形"><span>差分变形</span></a></h4>
<p><code v-pre>b[i][j]=a[i][j]-a[i-1][j]-a[i][j-1]+a[i-1][j-1]</code></p>
<p>单点查询</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">cin&gt;&gt;x;</span>
<span class="line">sum(x);</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>区间修改</p>
<img src="@source/notes/.vuepress/assets/二维差分数组.png" style="zoom:50%;float:left" />
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">void add(int a,int b,int x,int y,int k){</span>
<span class="line">    add(a,b,k);</span>
<span class="line">    add(x+1,b,-k),add(a,y+1,-k);</span>
<span class="line">    add(x+1,y+1,k);</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字典树" tabindex="-1"><a class="header-anchor" href="#字典树"><span>字典树</span></a></h2>
<h3 id="经典字典树" tabindex="-1"><a class="header-anchor" href="#经典字典树"><span>经典字典树</span></a></h3>
<img src="@source/notes/.vuepress/assets/字典树.png" style="zoom:50%;" />
<p>字符串大小为M，数量为N，字典树的大小一般要开M*N</p>
<p>数组写法</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">const int maxn=1e6+10;</span>
<span class="line">int Trie[maxn][27],e[maxn],tot,ids;</span>
<span class="line">string key[maxn];</span>
<span class="line">void insert(string s,int id){</span>
<span class="line">    int row=0;</span>
<span class="line">    for(int i=0;i&lt;s.size();i++){</span>
<span class="line">        int ch-s[i]-'a';</span>
<span class="line">        if(!Trie[row][ch]){</span>
<span class="line">            Trie[row][ch]=++tot;</span>
<span class="line">        }</span>
<span class="line">        row=Trie[row][ch];</span>
<span class="line">    }</span>
<span class="line">    e[row]=id;</span>
<span class="line">}</span>
<span class="line">int search(string s){</span>
<span class="line">    int row=0;</span>
<span class="line">    for(int i=0;i&lt;s.size();i++){</span>
<span class="line">        if(!Trie[row][s[i]-'a'])return 0;</span>
<span class="line">        row=Trie[row][s[i]-'a'];</span>
<span class="line">    }</span>
<span class="line">    return e[row];</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ICPC杭州站 K题</p>
<p>使用字典树预处理公共前缀后第一个字符的对数数量，从而求出逆序字符串</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int maxn=1e5;</span>
<span class="line">const int N=26;</span>
<span class="line">ll f[N][N],add;//某个公共前缀之后的字母对数</span>
<span class="line">ll Trie[maxn*N][N],cnt[maxn*N],tot;</span>
<span class="line"></span>
<span class="line">void insert(string s){</span>
<span class="line">    int row=0;</span>
<span class="line">    for(int i=0;i&lt;s.size();i++){</span>
<span class="line">        int ch=s[i]-'a';</span>
<span class="line">        //寻找本层早于该字母ch出现的字母</span>
<span class="line">        for(int j=0;j&lt;N;j++){</span>
<span class="line">            if(ch!=j&amp;&amp;Trie[row][j]){</span>
<span class="line">                f[ch][j]+=cnt[Trie[row][j]];</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        if(!Trie[row][ch]){</span>
<span class="line">            Trie[row][ch]=++tot;</span>
<span class="line">        }</span>
<span class="line">        row=Trie[row][ch];</span>
<span class="line">        cnt[row]++;</span>
<span class="line">    }</span>
<span class="line">    //真前缀情况</span>
<span class="line">    for(int i=0;i&lt;N;i++){</span>
<span class="line">        if(Trie[row][i])add+=cnt[Trie[row][i]];</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    int n,q;cin&gt;&gt;n&gt;&gt;q;</span>
<span class="line">    for(int i=0;i&lt;n;i++){</span>
<span class="line">        string s;cin&gt;&gt;s;</span>
<span class="line">        insert(s);</span>
<span class="line">    }</span>
<span class="line">    while(q--){</span>
<span class="line">        string s;</span>
<span class="line">        cin&gt;&gt;s;</span>
<span class="line">        ll ans=add;</span>
<span class="line">        for(int i=0;i&lt;N;i++){</span>
<span class="line">            for(int j=i+1;j&lt;N;j++){</span>
<span class="line">                ans+=f[s[i]-'a'][s[j]-'a'];</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        cout&lt;&lt;ans&lt;&lt;endl;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_01字典树" tabindex="-1"><a class="header-anchor" href="#_01字典树"><span>01字典树</span></a></h3>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">#define int long long</span>
<span class="line">const int Maxn=3e5+10;</span>
<span class="line">int Trie[33*Maxn][2],cnt[33*Maxn],tot;</span>
<span class="line">int s[Maxn];</span>
<span class="line">void insert(int x,int d){</span>
<span class="line">    int row=0;</span>
<span class="line">    for(int i=30;i&gt;=0;i--){</span>
<span class="line">        int c=(x&gt;&gt;i)&amp;1;</span>
<span class="line">        if(!Trie[row][c])Trie[row][c]=++tot;</span>
<span class="line">        row=Trie[row][c];</span>
<span class="line">        cnt[row]+=d;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int query(int x){</span>
<span class="line">    int row=0,res=0;</span>
<span class="line">    for(int i=30;i&gt;=0;i--){</span>
<span class="line">        int c=(x&gt;&gt;i)&amp;1;</span>
<span class="line">        if(cnt[Trie[row][c]]){</span>
<span class="line">            res=(res&lt;&lt;1);</span>
<span class="line">            row=Trie[row][c];</span>
<span class="line">        }else{</span>
<span class="line">            res=(res&lt;&lt;1)+1;</span>
<span class="line">            row=Trie[row][c^1];</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return res;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">signed main(){</span>
<span class="line">    int N,x;cin&gt;&gt;N;</span>
<span class="line">    for(int i=1;i&lt;=N;i++)cin&gt;&gt;s[i];</span>
<span class="line">    for(int i=1;i&lt;=N;i++){</span>
<span class="line">        cin&gt;&gt;x;</span>
<span class="line">        insert(x,1);</span>
<span class="line">    }</span>
<span class="line">    for(int i=1;i&lt;=N;i++){</span>
<span class="line">        x= query(s[i]);</span>
<span class="line">        cout&lt;&lt;x&lt;&lt;&quot; &quot;;</span>
<span class="line">        insert(x^s[i],-1);</span>
<span class="line">    }</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可持久化线段树" tabindex="-1"><a class="header-anchor" href="#可持久化线段树"><span>可持久化线段树</span></a></h2>
<h3 id="普通可持久化线段树" tabindex="-1"><a class="header-anchor" href="#普通可持久化线段树"><span>普通可持久化线段树</span></a></h3>
<p>可持久化线段树的思想，是每次修改都新增一个根节点root[i],需要回溯版本时，从该root[i]进入，修改时需要维护两个指针，一个指向上一版本pre，一个指向当前版本cur,当前版本需要先拷贝上一版本的数据，在此基础上进行修改，从root[i]进入时，会走到cur节点而不会走到pre节点</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">#define lc(x) T[x].lc</span>
<span class="line">#define rc(x) T[x].rc</span>
<span class="line">#define tr(x) T[x]</span>
<span class="line">#define val(x) T[x].val</span>
<span class="line">#define lazy(x) T[x].lazy</span>
<span class="line">#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int Maxn=1e5+10;</span>
<span class="line"></span>
<span class="line">struct Node{</span>
<span class="line">    ll val,lazy;</span>
<span class="line">    int lc,rc;</span>
<span class="line">}T[Maxn*32];</span>
<span class="line">int root[Maxn],cnt=0;</span>
<span class="line"></span>
<span class="line">void build(int &amp;now,int l,int r){</span>
<span class="line">    now=++cnt;</span>
<span class="line">    if(l==r){</span>
<span class="line">        cin&gt;&gt;val(now);</span>
<span class="line">        return;</span>
<span class="line">    }</span>
<span class="line">    int mid=(l+r)&gt;&gt;1;</span>
<span class="line">    build(lc(now),l,mid);</span>
<span class="line">    build(rc(now),mid+1,r);</span>
<span class="line">    val(now)=val(lc(now))+val(rc(now));</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void modify(int pre,int &amp;now,ll d,int cl,int cr,int l,int r){</span>
<span class="line">    now=++cnt,tr(now)=tr(pre);</span>
<span class="line">    if(l&lt;=cl &amp;&amp; cr&lt;=r){</span>
<span class="line">        lazy(now)+=d;</span>
<span class="line">    }else{</span>
<span class="line">        int mid=(cl+cr)&gt;&gt;1;</span>
<span class="line">        if(l&lt;=mid)modify(lc(pre),lc(now),d,cl,mid,l,r);</span>
<span class="line">        if(mid&lt;r)modify(rc(pre),rc(now),d,mid+1,cr,l,r);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    //目标区间[1,4],当前区间[2,6],有效更新区间为[2,4],更新值为(4-2+1)*d;</span>
<span class="line">    val(now)=val(pre)+(min(r,cr)-max(l,cl)+1)*d;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">ll query(int now,int cl,int cr,int l,int r,ll lazy){</span>
<span class="line">    if(l&lt;=cl &amp;&amp; cr&lt;=r)return val(now)+lazy*(cr-cl+1);</span>
<span class="line">    int mid=(cl+cr)&gt;&gt;1;</span>
<span class="line">    ll res=0;</span>
<span class="line">    lazy+=lazy(now);</span>
<span class="line">    if(l&lt;=mid)res+= query(lc(now),cl,mid,l,r,lazy);</span>
<span class="line">    if(mid&lt;r)res+= query(rc(now),mid+1,cr,l,r,lazy);</span>
<span class="line">    return res;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">signed main(){</span>
<span class="line">    ios;</span>
<span class="line">    int N,M;</span>
<span class="line">    while(cin&gt;&gt;N&gt;&gt;M){</span>
<span class="line">        int t=0;</span>
<span class="line">        cnt=0;</span>
<span class="line">        build(root[t],1,N);</span>
<span class="line">        while(M--){</span>
<span class="line">            char op;cin&gt;&gt;op;</span>
<span class="line">            if(op=='C'){</span>
<span class="line">                int l,r,d;cin&gt;&gt;l&gt;&gt;r&gt;&gt;d;</span>
<span class="line">                t++;</span>
<span class="line">                modify(root[t-1],root[t],d,1,N,l,r);</span>
<span class="line">            }else if(op=='Q'){</span>
<span class="line">                int l,r;cin&gt;&gt;l&gt;&gt;r;</span>
<span class="line">                cout&lt;&lt;query(root[t],1,N,l,r,0)&lt;&lt;endl;</span>
<span class="line">            }else if(op=='H'){</span>
<span class="line">                int l,r,ti;cin&gt;&gt;l&gt;&gt;r&gt;&gt;ti;</span>
<span class="line">                cout&lt;&lt;query(root[ti],1,N,l,r,0)&lt;&lt;endl;</span>
<span class="line">            }else cin&gt;&gt;t;</span>
<span class="line">        }</span>
<span class="line">        cout&lt;&lt;endl;</span>
<span class="line">    }</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可持久化权值线段树-主席树" tabindex="-1"><a class="header-anchor" href="#可持久化权值线段树-主席树"><span>可持久化权值线段树(主席树)</span></a></h3>
<p><img src="@source/notes/.vuepress/assets/43583016786686502.png" alt="43583016786686502"></p>
<p><img src="@source/notes/.vuepress/assets/82706116786694272-16786722086762.png" alt="82706116786694272"></p>
<p><img src="@source/notes/.vuepress/assets/131612716786696782-16786722124343.png" alt="131612716786696782"></p>
<p><img src="@source/notes/.vuepress/assets/212769416786718922-16786722163984.png" alt="212769416786718922"></p>
<p>主席树利用了权值线段树和可持久化线段树的思想，在动态开店</p>
<p>对于权值线段树，区间[l,r]的最大值，可以通过子节点数量来判断，如果lc(x)的数量&gt;k,那么第k大值就在左子树中</p>
<p><code v-pre>tr(lc(x)).s&gt;=k</code></p>
<p>转换成主席树 <code v-pre>tr(lc(y))-tr(lc(x))</code>,x代表第l-1棵主席树，y代表第r棵主席树</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">#define lc(x) tr[x].ch[0]</span>
<span class="line">#define rc(x) tr[x].ch[1]</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int Maxn=2e5+10;</span>
<span class="line">vector&lt;int&gt; ve;</span>
<span class="line">int a[Maxn],root[Maxn],idx;</span>
<span class="line">struct Node{</span>
<span class="line">    int ch[2];</span>
<span class="line">    int s;</span>
<span class="line">}tr[Maxn*22];</span>
<span class="line"></span>
<span class="line">void build(int&amp; x,int l,int r){</span>
<span class="line">    x=++idx;</span>
<span class="line">    if(l==r)return;</span>
<span class="line">    int mid=(l+r)&gt;&gt;1;</span>
<span class="line">    build(lc(x),l,mid);</span>
<span class="line">    build(rc(x),mid+1,r);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void insert(int x,int&amp; y,int l,int r,int v){</span>
<span class="line">    y=++idx;tr[y]=tr[x];tr[y].s++;</span>
<span class="line">    if(l==r)return;</span>
<span class="line">    int mid=(l+r)&gt;&gt;1;</span>
<span class="line">    if(v&lt;=mid)insert(lc(x),lc(y),l,mid,v);</span>
<span class="line">    else insert(rc(x),rc(y),mid+1,r,v);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int query(int x,int y,int l,int r,int k){</span>
<span class="line">    if(l==r)return l;</span>
<span class="line">    int mid=(l+r)&gt;&gt;1;</span>
<span class="line">    int s=tr[lc(y)].s-tr[lc(x)].s;</span>
<span class="line">    if(k&lt;=s)return query(lc(x),lc(y),l,mid,k);</span>
<span class="line">    else return query(rc(x),rc(y),mid+1,r,k-s);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int getId(int x){</span>
<span class="line">    return lower_bound(ve.begin(),ve.end(),x)-ve.begin()+1;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    int n,m;cin&gt;&gt;n&gt;&gt;m;</span>
<span class="line">    for(int i=1;i&lt;=n;i++){</span>
<span class="line">        cin&gt;&gt;a[i];</span>
<span class="line">        ve.push_back(a[i]);</span>
<span class="line">    }</span>
<span class="line">    sort(ve.begin(),ve.end());</span>
<span class="line">    ve.erase(unique(ve.begin(),ve.end()),ve.end());</span>
<span class="line">    for(int i=1;i&lt;=n;i++){</span>
<span class="line">        insert(root[i-1],root[i],1,ve.size(), getId(a[i]));</span>
<span class="line">    }</span>
<span class="line">    int l,r,k;</span>
<span class="line">    while(m--){</span>
<span class="line">        cin&gt;&gt;l&gt;&gt;r&gt;&gt;k;</span>
<span class="line">        int id= query(root[l-1],root[r],1,ve.size(),k)-1;</span>
<span class="line">        cout&lt;&lt;ve[id]&lt;&lt;endl;</span>
<span class="line">    }</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划"><span>动态规划</span></a></h1>
<h2 id="背包问题" tabindex="-1"><a class="header-anchor" href="#背包问题"><span>背包问题</span></a></h2>
<h3 id="_01背包" tabindex="-1"><a class="header-anchor" href="#_01背包"><span>01背包</span></a></h3>
<p>f[l]由f[l-w]推导，所以得从后往前</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">for (int i = 1; i &lt;= n; i++)</span>
<span class="line">  for (int l = W; l &gt;= w[i]; l--)</span>
<span class="line">    f[l] = max(f[l], f[l - w[i]] + v[i]);</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="完全背包" tabindex="-1"><a class="header-anchor" href="#完全背包"><span>完全背包</span></a></h3>
<p>因为$dp[i][j]=max(dp[i-1][j],dp[i-1][j-v[i]]+w[i],dp[i-1][j-2\times v[i]+2\times w[i],...)$</p>
<p>并且$dp[i][j-v]=max(dp[i-1][j-v],dp[i-1][j-v[i]]+w[i],dp[i-1][j-2\times v[i]+2\times w[i],...)$</p>
<p>所以$dp[i][j]=max(dp[i-1][j],dp[i][j-v]+w)$</p>
<p>再优化成一维 dp[i]=max(dp[i],dp[i-v]+w);</p>
<p>dp[i]是最优解的前提是dp[i-v]已是最优解,所以推导应从前往后</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">const int N=1010;</span>
<span class="line">int dp[N][N];</span>
<span class="line">int main(){</span>
<span class="line">    int n,m;cin&gt;&gt;n&gt;&gt;m;</span>
<span class="line">    for(int i=1;i&lt;=n;i++){</span>
<span class="line">        int v,w;cin&gt;&gt;v&gt;&gt;w;</span>
<span class="line">        for(int j=1;j&lt;=m;j++){</span>
<span class="line">            dp[i][j]=dp[i-1][j];</span>
<span class="line">            if(j&gt;=v)dp[i][j]=max(dp[i][j],dp[i][j-v]+w);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    cout&lt;&lt;dp[n][m];</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多重背包" tabindex="-1"><a class="header-anchor" href="#多重背包"><span>多重背包</span></a></h3>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">const int N=110;</span>
<span class="line">int dp[N][N];</span>
<span class="line">int main(){</span>
<span class="line">    int n,m;cin&gt;&gt;n&gt;&gt;m;</span>
<span class="line">    for(int i=1;i&lt;=n;i++){</span>
<span class="line">        int s,v,w;cin&gt;&gt;v&gt;&gt;w&gt;&gt;s;</span>
<span class="line">        for(int j=1;j&lt;=m;j++){</span>
<span class="line">            for(int k=0;k&lt;=s&amp;&amp;k&lt;=j/v;k++){</span>
<span class="line">                dp[i][j]=max(dp[i][j],dp[i-1][j-k*v]+k*w);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    cout&lt;&lt;dp[n][m];</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二进制优化多重背包</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">//w[i]存储拆分后的价值</span>
<span class="line">//v[i]存储拆分后的体积</span>
<span class="line">int k=0;</span>
<span class="line">for(int i=0;i&lt;n;i++){</span>
<span class="line">    int w,v,k;cin&gt;&gt;w&gt;&gt;v&gt;&gt;t;</span>
<span class="line">    int res=1;</span>
<span class="line">    if(!t)t=9999999;//对完全背包的特殊处理</span>
<span class="line">    while(t){</span>
<span class="line">        w[++k]=res*w;</span>
<span class="line">        v[k]=res*v;</span>
<span class="line">        t-=res;</span>
<span class="line">        res&lt;&lt;=1;</span>
<span class="line">        if(t&lt;res){</span>
<span class="line">            w[++k]=w*t,v[k]=v*t;</span>
<span class="line">            break;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="混合背包" tabindex="-1"><a class="header-anchor" href="#混合背包"><span>混合背包</span></a></h3>
<p>当每个物品都可能存在无限个或有限个数量时，朴素做法是根据类型套板子</p>
<p>依据多重背包的二进制优化思想，把每个物品都根据二进制拆分</p>
<p>特别的，无限个物品可以设为一个很大的值，比如1e6</p>
<p>这样每个物品都有有限个数量，之后便是多重背包的做法</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">	//依次放入物品</span>
<span class="line">	for(int i=1;i&lt;=k;i++){</span>
<span class="line">        for(int j=maxV;j&gt;=V[i];j--){</span>
<span class="line">            dp[j]=max(dp[j],dp[j-V[i]]+W[i]);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整代码</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int Maxn=1e6+10;</span>
<span class="line"></span>
<span class="line">int dp[10010];</span>
<span class="line">int W[Maxn],V[Maxn];</span>
<span class="line">int main(){</span>
<span class="line">    int h1,h2,m1,m2,n,maxV;</span>
<span class="line">    scanf(&quot;%d:%d %d:%d %d&quot;,&amp;h1,&amp;m1,&amp;h2,&amp;m2,&amp;n);</span>
<span class="line">    maxV=(h2-h1-1)*60+(m2-m1+60);</span>
<span class="line">    int k=0;</span>
<span class="line">    for(int i=0;i&lt;n;i++){</span>
<span class="line">        int w,v,t;</span>
<span class="line">        scanf(&quot;%d%d%d&quot;,&amp;v,&amp;w,&amp;t);</span>
<span class="line">        int res=1;</span>
<span class="line">        if(!t)t=Maxn;</span>
<span class="line">        while(t){</span>
<span class="line">            W[++k]=res*w;</span>
<span class="line">            V[k]=res*v;</span>
<span class="line">            t-=res;</span>
<span class="line">            res&lt;&lt;=1;</span>
<span class="line">            if(t&lt;res){</span>
<span class="line">                W[++k]=w*t,V[k]=v*t;</span>
<span class="line">                break;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    for(int i=1;i&lt;=k;i++){</span>
<span class="line">        for(int j=maxV;j&gt;=V[i];j--){</span>
<span class="line">            dp[j]=max(dp[j],dp[j-V[i]]+W[i]);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    cout&lt;&lt;dp[maxV]&lt;&lt;endl;</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二维背包dp" tabindex="-1"><a class="header-anchor" href="#二维背包dp"><span>二维背包dp</span></a></h3>
<p>有n个任务需要完成，完成第i个任务需要花费ti分钟，产生ci元的开支。</p>
<p>现在有T分钟时间,W元钱来处理这些任务，求最多能完成多少任务。</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int Maxn=1e5+10;</span>
<span class="line">int dp[210][210];</span>
<span class="line">int main(){</span>
<span class="line">    int n,m,t;cin&gt;&gt;n&gt;&gt;m&gt;&gt;t;</span>
<span class="line"></span>
<span class="line">    for(int k=0;k&lt;n;k++){</span>
<span class="line">        int mi,ti;cin&gt;&gt;mi&gt;&gt;ti;</span>
<span class="line">        for(int i=m;i&gt;=mi;i--){</span>
<span class="line">            for(int j=t;j&gt;=ti;j--){</span>
<span class="line">                dp[i][j]=max(dp[i][j],dp[i-mi][j-ti]+1);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    cout&lt;&lt;dp[m][t]&lt;&lt;endl;</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分组背包" tabindex="-1"><a class="header-anchor" href="#分组背包"><span>分组背包</span></a></h3>
<p>每一组只能选一个，求最大价值即可</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">typedef pair&lt;int,int&gt; PII;</span>
<span class="line">const int Maxn=1e5+10;</span>
<span class="line">vector&lt;PII&gt; bb[105];</span>
<span class="line">int dp[Maxn];</span>
<span class="line">int main(){</span>
<span class="line">    int n,m;cin&gt;&gt;n&gt;&gt;m;</span>
<span class="line">    for(int i=0;i&lt;m;i++){</span>
<span class="line">        int a,b,c;cin&gt;&gt;a&gt;&gt;b&gt;&gt;c;</span>
<span class="line">        bb[c].push_back({a,b});</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    for(int i=0;i&lt;105;i++){</span>
<span class="line">        //循环每组</span>
<span class="line">        for(int j=n;j&gt;0;j--){</span>
<span class="line">            //循环容量</span>
<span class="line">            for(int k=0;k&lt;bb[i].size();k++){</span>
<span class="line">                int v=bb[i][k].first,w=bb[i][k].second;</span>
<span class="line">                if(j&gt;=v)dp[j]=max(dp[j],dp[j-v]+w);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    cout&lt;&lt;dp[n];</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="依赖背包" tabindex="-1"><a class="header-anchor" href="#依赖背包"><span>依赖背包</span></a></h3>
<p>01背包升级版，如果物品a的附加品是b,c</p>
<p>那么需要考虑的拿法就是：</p>
<p>1、什么都不拿 2、只拿a 3、拿ab 4、拿ac 5、拿abc</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">typedef long long ll;</span>
<span class="line">const int Maxn=1e5+10;</span>
<span class="line"></span>
<span class="line">struct Node{</span>
<span class="line">    ll v,w,id;</span>
<span class="line">}bb[65];</span>
<span class="line"></span>
<span class="line">vector&lt;Node&gt; annex[65];</span>
<span class="line">ll dp[Maxn];</span>
<span class="line">int cnt;//主键数量</span>
<span class="line">int main(){</span>
<span class="line">    int n,m;cin&gt;&gt;n&gt;&gt;m;</span>
<span class="line">    for(int i=1;i&lt;=m;i++){</span>
<span class="line">        int v,p,q;cin&gt;&gt;v&gt;&gt;p&gt;&gt;q;</span>
<span class="line">        if(!q){</span>
<span class="line">            //是主件的情况</span>
<span class="line">            bb[++cnt]={v,v*p,i};</span>
<span class="line">        }else{</span>
<span class="line">            annex[q].push_back({v,v*p,i});</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    for(int i=1;i&lt;=cnt;i++){</span>
<span class="line">        int ids=bb[i].id,w=bb[i].w,v=bb[i].v;</span>
<span class="line">        //枚举所有的主件</span>
<span class="line">        for(int j=n;j&gt;=v;j--){</span>
<span class="line">            //只选择主件</span>
<span class="line">            dp[j]=max(dp[j],dp[j-v]+w);</span>
<span class="line">            //选择产品1</span>
<span class="line">            if(annex[ids].size()&gt;=1){</span>
<span class="line">                int anx_v=annex[ids][0].v+v,anx_w=annex[ids][0].w+w;</span>
<span class="line">                if(anx_v&lt;=j)dp[j]=max(dp[j],dp[j-anx_v]+anx_w);</span>
<span class="line">            }</span>
<span class="line">            if(annex[ids].size()&gt;1){</span>
<span class="line">                //选择产品2</span>
<span class="line">                int anx_v=annex[ids][1].v+v,anx_w=annex[ids][1].w+w;</span>
<span class="line">                if(anx_v&lt;=j)dp[j]=max(dp[j],dp[j-anx_v]+anx_w);</span>
<span class="line">                //都选</span>
<span class="line">                anx_v=annex[ids][0].v+annex[ids][1].v+v,anx_w=annex[ids][0].w+annex[ids][1].w+w;</span>
<span class="line">                if(anx_v&lt;=j)dp[j]=max(dp[j],dp[j-anx_v]+anx_w);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    cout&lt;&lt;dp[n]&lt;&lt;endl;</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="树型dp" tabindex="-1"><a class="header-anchor" href="#树型dp"><span>树型dp</span></a></h2>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line">using namespace std;</span>
<span class="line">const int Maxn=6010;</span>
<span class="line">int fat[Maxn];</span>
<span class="line">struct Node{</span>
<span class="line">    int to,next;</span>
<span class="line">}edge[Maxn*Maxn];</span>
<span class="line">int w[Maxn];</span>
<span class="line">int head[Maxn],tot;</span>
<span class="line">void add(int u,int v){</span>
<span class="line">    edge[++tot].to=v;</span>
<span class="line">    edge[tot].next=head[u];</span>
<span class="line">    head[u]=tot;</span>
<span class="line">}</span>
<span class="line">//以u为根,选/不选 的状态能获得的最大价值</span>
<span class="line">int dp[Maxn][2];</span>
<span class="line">void dfs(int u){</span>
<span class="line">    dp[u][1]=w[u];</span>
<span class="line">    for(int i=head[u];i;i=edge[i].next){</span>
<span class="line">        int v=edge[i].to;</span>
<span class="line">        dfs(v);</span>
<span class="line">        dp[u][0]+=max(dp[v][1],dp[v][0]);</span>
<span class="line">        dp[u][1]+=dp[v][0];</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">    // int n;cin&gt;&gt;n;</span>
<span class="line">    int n;scanf(&quot;%d&quot;,&amp;n);</span>
<span class="line">    for(int i=1;i&lt;=n;i++)scanf(&quot;%d&quot;,&amp;w[i]);</span>
<span class="line">    for(int i=1;i&lt;n;i++){</span>
<span class="line">        int L,K;scanf(&quot;%d%d&quot;,&amp;L,&amp;K);</span>
<span class="line">        fat[L]=1;</span>
<span class="line">        add(K,L);</span>
<span class="line">    }</span>
<span class="line">    int ans=0;</span>
<span class="line">    for(int i=1;i&lt;=n;i++){</span>
<span class="line">        if(!fat[i]){</span>
<span class="line">            dfs(i);</span>
<span class="line">            printf(&quot;%d&quot;,max(dp[i][0],dp[i][1]));</span>
<span class="line">            break;</span>
<span class="line">        }</span>
<span class="line">    }   </span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数位dp" tabindex="-1"><a class="header-anchor" href="#数位dp"><span>数位DP</span></a></h2>
<h3 id="至少有-1-位重复的数字" tabindex="-1"><a class="header-anchor" href="#至少有-1-位重复的数字"><span><a href="https://leetcode.cn/problems/numbers-with-repeated-digits/description/" target="_blank" rel="noopener noreferrer">至少有 1 位重复的数字</a></span></a></h3>
<p><code v-pre>dp[i][j]</code>记录前i位在没有限制的情况下的有效数量。</p>
<p>有限制与无限制的区别在于，同j的情况下，<strong>无限制的(i,j)所能得到的情况多于有限制的(i,j)</strong>,所以有限制时不能记忆化</p>
<p>f(i,used,isLimit,isNum)代表前i位中使用的数字集合为used</p>
<p>isLimit代表是否存在限制，用于限制数字的枚举的上限</p>
<p>isNum代表前面是否有填过数字</p>
<div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre v-pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    int numDupDigitsAtMostN(int n) {</span>
<span class="line">        string s=to_string(n);</span>
<span class="line">        int m=s.size(),dp[m+1][1&lt;&lt;10];</span>
<span class="line">        memset(dp,-1,sizeof(dp));</span>
<span class="line">        function&lt;int(int,int,bool,bool)&gt; f= [&amp;](int i,int used,bool isLimit,bool isNum) -&gt;int{</span>
<span class="line">            //如果前面填了数字，代表有效枚举</span>
<span class="line">            if(i==m)return isNum;</span>
<span class="line">            //如果前面枚举了数字 且 状态已经存在</span>
<span class="line">            if(!isLimit &amp;&amp;isNum &amp;&amp; dp[i][used]!=-1){</span>
<span class="line">                return dp[i][used];</span>
<span class="line">            }</span>
<span class="line">            int res=0;</span>
<span class="line">            //如果前面没有填数字，这一位也可以选择不填</span>
<span class="line">            if(!isNum)res=f(i+1,used,false,isNum);</span>
<span class="line">            //如果存在限制，那么最多枚举到s[i]</span>
<span class="line">            int up=isLimit?s[i]-'0':9;</span>
<span class="line">            </span>
<span class="line">            //如果前面没有填过数字，则最少从1开始，反之从0 开始</span>
<span class="line">            for(int d=1-isNum;d&lt;=up;d++){</span>
<span class="line">                //如果数字d被使用过了</span>
<span class="line">                if((used&gt;&gt;d)&amp;1)continue;</span>
<span class="line">                res+=f(i+1,used|(1&lt;&lt;d),isLimit&amp;&amp;d==up,true);</span>
<span class="line">            }</span>
<span class="line">            //限制状态只会出现一次，所以不用记忆化</span>
<span class="line">            if(!isLimit &amp;&amp; isNum)dp[i][used]=res;</span>
<span class="line">            return res;</span>
<span class="line">        };</span>
<span class="line">        return n-f(0,0,true,false);</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>python中使用@cache装饰器可以替代记忆化数组</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">numberOfBeautifulIntegers</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> low<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> high<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> k<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">def</span> <span class="token function">dp</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            s<span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span></span>
<span class="line">            m<span class="token operator">=</span><span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span></span>
<span class="line">            <span class="token decorator annotation punctuation">@cache</span></span>
<span class="line">            <span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span>pos<span class="token punctuation">:</span><span class="token builtin">int</span><span class="token punctuation">,</span>odd<span class="token punctuation">:</span><span class="token builtin">int</span><span class="token punctuation">,</span>even<span class="token punctuation">:</span><span class="token builtin">int</span><span class="token punctuation">,</span>y<span class="token punctuation">,</span>isLimit<span class="token punctuation">:</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span><span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">                <span class="token keyword">if</span> pos<span class="token operator">==</span>m<span class="token punctuation">:</span></span>
<span class="line">                    <span class="token keyword">return</span> odd<span class="token operator">==</span>even <span class="token keyword">and</span> y<span class="token operator">==</span><span class="token number">0</span></span>
<span class="line">                res<span class="token operator">=</span><span class="token number">0</span></span>
<span class="line">                <span class="token keyword">if</span> odd<span class="token operator">==</span><span class="token number">0</span> <span class="token keyword">and</span> even<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">                    res<span class="token operator">+=</span>f<span class="token punctuation">(</span>pos<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>odd<span class="token punctuation">,</span>even<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token boolean">False</span><span class="token punctuation">)</span></span>
<span class="line">                    </span>
<span class="line">                up <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">if</span> isLimit <span class="token keyword">else</span> <span class="token number">9</span></span>
<span class="line">                low <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>odd<span class="token operator">></span><span class="token number">0</span> <span class="token keyword">or</span> even<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token number">1</span></span>
<span class="line">                </span>
<span class="line">                <span class="token keyword">for</span> d <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>low<span class="token punctuation">,</span>up<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">                    res<span class="token operator">+=</span>f<span class="token punctuation">(</span>pos<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>odd<span class="token operator">+</span><span class="token punctuation">(</span>d<span class="token operator">&amp;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>even<span class="token operator">+</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span>d<span class="token operator">&amp;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>y<span class="token operator">*</span><span class="token number">10</span><span class="token operator">+</span>d<span class="token punctuation">)</span><span class="token operator">%</span>k<span class="token punctuation">,</span>isLimit <span class="token keyword">and</span> d<span class="token operator">==</span>up<span class="token punctuation">)</span></span>
<span class="line">                </span>
<span class="line">                <span class="token keyword">return</span> res</span>
<span class="line">                </span>
<span class="line">            <span class="token keyword">return</span> f<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token boolean">True</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> dp<span class="token punctuation">(</span>high<span class="token punctuation">)</span><span class="token operator">-</span>dp<span class="token punctuation">(</span>low<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



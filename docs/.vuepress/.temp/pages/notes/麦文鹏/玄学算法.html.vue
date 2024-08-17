<template><div><h1 id="玄学算法" tabindex="-1"><a class="header-anchor" href="#玄学算法"><span>玄学算法</span></a></h1>
<h2 id="模拟退火" tabindex="-1"><a class="header-anchor" href="#模拟退火"><span>模拟退火</span></a></h2>
<p><img src="/assets/image-20230922145538179.png" alt="image-20230922145538179"></p>
<p><strong>接受概率</strong></p>
<p><img src="/assets/jsgl.png" alt="jsgl"></p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



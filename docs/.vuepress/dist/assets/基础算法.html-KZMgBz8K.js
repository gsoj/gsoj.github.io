import{_ as n,c as s,o as a,b as i}from"./app-Doa0sysg.js";const l="/assets/image-20231110111249531.png",e="/assets/image-20231114171138121.png",p="/assets/1209138-20170729151024207-1541824194.png",c="/assets/image-20230322101946677.png",d={},t=i(`<h1 id="基础算法" tabindex="-1"><a class="header-anchor" href="#基础算法"><span>基础算法</span></a></h1><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串"><span>字符串</span></a></h2><h3 id="kmp" tabindex="-1"><a class="header-anchor" href="#kmp"><span>KMP</span></a></h3><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">int ne[Maxn];</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>python</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">def</span> <span class="token function">KMP_algorithm</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> substring<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&#39;&#39;&#39;</span>
<span class="line">    KMP字符串匹配的主函数</span>
<span class="line">    若存在字串返回字串在字符串中开始的位置下标，或者返回-1</span>
<span class="line">    &#39;&#39;&#39;</span></span>
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
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;</span>
<span class="line">    构造临时数组pnext</span>
<span class="line">    &quot;&quot;&quot;</span></span>
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
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span></span>
<span class="line">    string <span class="token operator">=</span> <span class="token string">&#39;abcxabcdabcdabcy&#39;</span></span>
<span class="line">    substring <span class="token operator">=</span> <span class="token string">&#39;abcdabcy&#39;</span></span>
<span class="line">    out <span class="token operator">=</span> KMP_algorithm<span class="token punctuation">(</span>string<span class="token punctuation">,</span> substring<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="马拉车" tabindex="-1"><a class="header-anchor" href="#马拉车"><span>马拉车</span></a></h3><p>C++</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line">        s+=x,s+=&#39;#&#39;;</span>
<span class="line">    }</span>
<span class="line">    cout&lt;&lt;get_d(s.size()-1);</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">def</span> <span class="token function">longestPalindrome</span><span class="token punctuation">(</span>s<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span></span>
<span class="line">    tem_s <span class="token operator">=</span> <span class="token string">&#39;@#&#39;</span></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> s<span class="token punctuation">:</span></span>
<span class="line">        tem_s <span class="token operator">+=</span> i <span class="token operator">+</span> <span class="token string">&#39;#&#39;</span></span>
<span class="line">    s <span class="token operator">=</span> tem_s <span class="token operator">+</span> <span class="token string">&#39;&amp;&#39;</span></span>
<span class="line">    Lens <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span></span>
<span class="line">    max_right <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    max_mid_index <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    p <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> Lens</span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>Lens<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> i <span class="token operator">&gt;</span> max_right<span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">while</span> s<span class="token punctuation">[</span>i<span class="token operator">-</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>i<span class="token operator">+</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">                p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">            max_right <span class="token operator">=</span> i<span class="token operator">+</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-</span><span class="token number">1</span></span>
<span class="line">            max_mid_index <span class="token operator">=</span> i</span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> p<span class="token punctuation">[</span><span class="token number">2</span><span class="token operator">*</span>max_mid_index <span class="token operator">-</span> i<span class="token punctuation">]</span></span>
<span class="line">            <span class="token keyword">if</span> p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> i <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&gt;</span> max_right<span class="token punctuation">:</span></span>
<span class="line">                p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> max_right <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">            <span class="token keyword">while</span> s<span class="token punctuation">[</span>i<span class="token operator">-</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>i<span class="token operator">+</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">                p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">            <span class="token keyword">if</span> i <span class="token operator">+</span> p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&gt;</span> max_right<span class="token punctuation">:</span></span>
<span class="line">                max_right <span class="token operator">=</span> i<span class="token operator">+</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-</span><span class="token number">1</span></span>
<span class="line">                max_mid_index <span class="token operator">=</span> i</span>
<span class="line">    index <span class="token operator">=</span> p<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> s<span class="token punctuation">[</span>index <span class="token operator">-</span> p<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">:</span>index <span class="token operator">+</span> p<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;#&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串哈希" tabindex="-1"><a class="header-anchor" href="#字符串哈希"><span>字符串哈希</span></a></h3><p>hash[i]代表[0,i]所映射的哈希值</p><p>$hash[i]=hash[i-1]*Base+asc(s[i])$</p><p>求区间S[l,r]所对应的哈希值</p><p>$res=hash[r]-hash[l-1]*Base^{r-l+1}$</p><p>https://leetcode-cn.com/problems/distinct-echo-substrings/</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">class Solution {</span>
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
<span class="line">        for (int i = 1; i &lt;= n; i++)h[i] = (h[i - 1] * BASE + (s[i] - &#39;a&#39; + 1)) % MOD;</span>
<span class="line"></span>
<span class="line">        vector&lt;ll&gt; hashList;//存储每个单词的哈希值</span>
<span class="line">        for (int i = 0; i &lt; m; i++) {</span>
<span class="line">            ll res = 0;</span>
<span class="line">            for (int j = 0; j &lt; L; j++) {</span>
<span class="line">                res = (res * BASE + (words[i][j] - &#39;a&#39; + 1)) % MOD;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lcs" tabindex="-1"><a class="header-anchor" href="#lcs"><span>LCS</span></a></h3><p>状态转移:</p><p>$dp[i][j] = dp[i-1][j-1],s1[i]=s2[j]$</p><p>$dp[i][j]=max(dp[i-1][j],dp[i][j-1]),s1[i]!=s2[j]$</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数学" tabindex="-1"><a class="header-anchor" href="#数学"><span>数学</span></a></h2><h3 id="费马小定理" tabindex="-1"><a class="header-anchor" href="#费马小定理"><span>费马小定理</span></a></h3><p>$若p为素数，gcd(a,p)=1,则a^{p-1}\\equiv1$</p><h3 id="欧拉定理" tabindex="-1"><a class="header-anchor" href="#欧拉定理"><span>欧拉定理</span></a></h3><p>$若gcd(a,m)=1,则a^{φ(m)}=1 (mod m)$</p><p>扩展欧拉定理</p><img src="`+l+`" alt="image-20231110111249531" style="left:float;"><h3 id="线性求乘法逆元" tabindex="-1"><a class="header-anchor" href="#线性求乘法逆元"><span>线性求乘法逆元</span></a></h3><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">int inv[Maxn];</span>
<span class="line">//求1~n中每个数 关于p的逆元</span>
<span class="line">void Inv(int n,int p){</span>
<span class="line">    inv[1]=1;</span>
<span class="line">    for(int i=2;i&lt;=n;i++)inv[i]=(p-p/i)*inv[p%i]%p;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="排列组合" tabindex="-1"><a class="header-anchor" href="#排列组合"><span>排列组合</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> math</span>
<span class="line">n<span class="token punctuation">,</span>m<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>perm<span class="token punctuation">(</span>n<span class="token punctuation">,</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">#排列</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>comb<span class="token punctuation">(</span>n<span class="token punctuation">,</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">#组合</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>线性求排列组合</p><p>$设fac[i]为i的阶乘,inv[i]为阶乘逆元,inv[i] = inv[i+1] *(i+1)$</p><h3 id="c-m-n-frac-n-m-n-m" tabindex="-1"><a class="header-anchor" href="#c-m-n-frac-n-m-n-m"><span>$C^m_n = \\frac{n!}{m!(n-m)!}$</span></a></h3><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">int C(int n,int m){</span>
<span class="line">	if(m&gt;n)return 0;</span>
<span class="line">	if(m==0)return 1;</span>
<span class="line">	return fac[n] * inv[m]%mod * inv[n-m]%mod;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="欧拉筛" tabindex="-1"><a class="header-anchor" href="#欧拉筛"><span>欧拉筛</span></a></h3><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">vector&lt;int&gt; array;//一开始把所有的数字都标记为素数</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>python</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">used<span class="token operator">=</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">#记录合数</span></span>
<span class="line">isPrime<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment">#记录素数</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">Euler</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">	<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span>N<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">		<span class="token keyword">if</span> i <span class="token keyword">not</span> <span class="token keyword">in</span> used<span class="token punctuation">:</span></span>
<span class="line">			isPrime<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">		<span class="token keyword">for</span> x <span class="token keyword">in</span> isPrime<span class="token punctuation">:</span></span>
<span class="line">			<span class="token keyword">if</span> x<span class="token operator">*</span>i<span class="token operator">&gt;</span>N<span class="token punctuation">:</span></span>
<span class="line">				<span class="token keyword">break</span></span>
<span class="line">			used<span class="token punctuation">.</span>add<span class="token punctuation">(</span>x<span class="token operator">*</span>i<span class="token punctuation">)</span></span>
<span class="line">			<span class="token keyword">if</span> i<span class="token operator">%</span>x<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">				<span class="token keyword">break</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展欧几里得" tabindex="-1"><a class="header-anchor" href="#扩展欧几里得"><span>扩展欧几里得</span></a></h3><p>证明过程：</p><p><code>gcd(a,b)=gad(b,a%b)</code></p><p>ax+by=gcd(a,b)</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">ll exgcd(ll a,ll b,ll&amp; x ,ll&amp; y){</span>
<span class="line">    if(!b){</span>
<span class="line">        x=1,y=0;//b的0的情况 ax+by=gcd(a,b)=a</span>
<span class="line">        return a;</span>
<span class="line">    }</span>
<span class="line">    //x1=y2,y1=y1-(a/b)*y2</span>
<span class="line">    int d= exgcd(b,a%b,y,x);</span>
<span class="line">    y-=a/b*x;</span>
<span class="line">    return d;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python版本</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">n <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="快速幂" tabindex="-1"><a class="header-anchor" href="#快速幂"><span>快速幂</span></a></h3><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">int qpow(int a,int b,int mod){</span>
<span class="line">    int res=1;</span>
<span class="line">    while(b){</span>
<span class="line">        if(b&amp;1)res=(res*a)%mod;</span>
<span class="line">        a=(a*a)%mod;</span>
<span class="line">        b&gt;&gt;=1;</span>
<span class="line">    }</span>
<span class="line">    return res;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二分搜索" tabindex="-1"><a class="header-anchor" href="#二分搜索"><span>二分搜索</span></a></h2><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">//不断搜索找到最后一个小于等于的值</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="差分数组" tabindex="-1"><a class="header-anchor" href="#差分数组"><span>差分数组</span></a></h2><p>https://blog.csdn.net/weixin_54202947/article/details/127980042</p><p>**定义：**b[i]=a[i]-a[i-1]</p><p>**单点查询:**a[i]=∑b[x] 1&lt;=x&lt;=i</p><p>**区间修改:**在[i,j]区间增加k b[i]+k,b[j+1]-k</p><p>**区间求和:**添加一个辅助数组c[i]=(i-1)*b[i],当b[i]+k时,c[i]同步增加(i-1) *k</p><p>前i项和 Σa[i]=n*sum(b,i)-sum(c,i);</p><h2 id="高精度算法" tabindex="-1"><a class="header-anchor" href="#高精度算法"><span>高精度算法</span></a></h2><h3 id="加法" tabindex="-1"><a class="header-anchor" href="#加法"><span>加法</span></a></h3><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">void add(string num1, string num2);</span>
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
<span class="line">			value += (num1[i] - &#39;0&#39;);</span>
<span class="line">		if (j &gt;= 0)</span>
<span class="line">			value += (num2[j] - &#39;0&#39;);</span>
<span class="line">		result = to_string((value + p) % 10) + result;</span>
<span class="line">		p = (value + p) / 10;</span>
<span class="line">		i--;</span>
<span class="line">		j--;</span>
<span class="line">	}</span>
<span class="line">	if (p &gt; 0)</span>
<span class="line">		cout &lt;&lt; p;</span>
<span class="line">	cout &lt;&lt; result &lt;&lt; endl;;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>python比较适合写这类题</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">a<span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图论" tabindex="-1"><a class="header-anchor" href="#图论"><span>图论</span></a></h2><h3 id="桥与割点的判定" tabindex="-1"><a class="header-anchor" href="#桥与割点的判定"><span>桥与割点的判定</span></a></h3><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include &lt;bits/stdc++.h&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最短路径" tabindex="-1"><a class="header-anchor" href="#最短路径"><span>最短路径</span></a></h3><h4 id="dijkstra算法-优先队列" tabindex="-1"><a class="header-anchor" href="#dijkstra算法-优先队列"><span>dijkstra算法-优先队列</span></a></h4><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="spfa" tabindex="-1"><a class="header-anchor" href="#spfa"><span>SPFA</span></a></h4><p>SPFA 可以用于判断s点是否能抵达一个负环，只需记录最短路经过了多少条边，当经过了至少n条边时，说明s点可以抵达一个负环。</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line">        printf(&quot;%s\\n&quot;, SPFA(n)?&quot;YES&quot;:&quot;NO&quot;);</span>
<span class="line">    }</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多源最短路-floyd" tabindex="-1"><a class="header-anchor" href="#多源最短路-floyd"><span>多源最短路-Floyd</span></a></h4><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">for(int k=1;k&lt;=n;k++){</span>
<span class="line">	for(int i=1;i&lt;=n;i++){</span>
<span class="line">		for(int j=1;j&lt;=n;j++){</span>
<span class="line">			dis[i][j]=min(dis[i][j],dis[i][k]+dis[k][j]);</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.acwing.com/problem/content/1490/" target="_blank" rel="noopener noreferrer">1488. 最短距离 - AcWing题库</a></p><p>超级源点。求图上任意一点到最近商店的距离。</p><p>设超级源点为0，与所有商店的距离为0</p><p>通过一次dijkstra就能得出dis[i]，即i到0的距离</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.acwing.com/problem/content/3308/" target="_blank" rel="noopener noreferrer">3305. 作物杂交 - AcWing题库</a></p><p>另类的建图方式，需要额外存储一个值代表组合点</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最小生成树kruskal" tabindex="-1"><a class="header-anchor" href="#最小生成树kruskal"><span>最小生成树Kruskal</span></a></h3><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>超级源点。<a href="https://www.acwing.com/problem/content/3731/" target="_blank" rel="noopener noreferrer">3728. 城市通电 - AcWing题库</a></p><p>需要让每个城市都通电有两种方式，1自身作为发电厂，2是间接连接发电厂</p><p>设立一个超级源点0，i点设立发电厂可以看作0到i的距离为c</p><p>i与j连接，其距离为**(abs(x[i]-x[j])+abs(y[i]-y[j]))*(k[i]+k[j])**</p><p>这样就把复杂的问题变成了最小生成树问题</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line">    printf(&quot;%lld\\n&quot;,kruskal());</span>
<span class="line">    vector&lt;int&gt; v;</span>
<span class="line">    vector&lt;pair&lt;int,int&gt;&gt; ed;</span>
<span class="line">    for(int i=1;i&lt;=tot;i++){</span>
<span class="line">        if(vis[i]){</span>
<span class="line">            if(edge[i].a)ed.push_back({edge[i].a,edge[i].b});</span>
<span class="line">            else v.push_back(edge[i].b);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    printf(&quot;%lld\\n&quot;,v.size());</span>
<span class="line">    for(int x:v)printf(&quot;%lld &quot;,x);</span>
<span class="line">    printf(&quot;\\n%lld\\n&quot;,ed.size());</span>
<span class="line"></span>
<span class="line">    for(int i=0;i&lt;ed.size();i++){</span>
<span class="line">        printf(&quot;%lld %lld\\n&quot;,ed[i].first,ed[i].second);</span>
<span class="line">    }</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kruskal重构树" tabindex="-1"><a class="header-anchor" href="#kruskal重构树"><span>Kruskal重构树</span></a></h3><p><img src="`+e+`" alt="image-20231114171138121"></p><p>依次选取最短边，每条边对应一个新的节点，新节点的权值为该边的边权</p><p>原图中两个点间所有路径上的边最大权值的最小值 == 最小生成树上两点简单路径的边最大权值 == Kruskal重构树上两点 LCA的点权。</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拓扑排序" tabindex="-1"><a class="header-anchor" href="#拓扑排序"><span>拓扑排序</span></a></h3><p>拓扑排序可以用于判断图中是否存在环</p><p>选择入度为0的结点加入队列，每次删除该结点相邻的边，如有入度为0 的点则再次加入队列</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">int n, m;</span>
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
<span class="line">    for (auto i : L) cout &lt;&lt; i &lt;&lt; &#39; &#39;;</span>
<span class="line">    return true;</span>
<span class="line">  } else {</span>
<span class="line">    return false;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二分图" tabindex="-1"><a class="header-anchor" href="#二分图"><span>二分图</span></a></h3><h4 id="最大匹配-匈牙利算法" tabindex="-1"><a class="header-anchor" href="#最大匹配-匈牙利算法"><span>最大匹配-匈牙利算法</span></a></h4><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间戳代替memset,省时间</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">if(vis[v]!=now){</span>
<span class="line">	vis[v]=now;</span>
<span class="line">	...</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">for(int i=1;i&lt;=n;i++){</span>
<span class="line">    ++now;</span>
<span class="line">    if(dfs(i))</span>
<span class="line">        ...</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="树" tabindex="-1"><a class="header-anchor" href="#树"><span>树</span></a></h2><h3 id="直径" tabindex="-1"><a class="header-anchor" href="#直径"><span>直径</span></a></h3><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">	int pos[3],cnt=0,ma=0,dis[Maxn];</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子树操作" tabindex="-1"><a class="header-anchor" href="#子树操作"><span>子树操作</span></a></h3><h4 id="dfs序" tabindex="-1"><a class="header-anchor" href="#dfs序"><span>dfs序</span></a></h4><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">int s[Maxn],e[Maxn],dfn[Maxn],t;</span>
<span class="line">void dfs(int u){</span>
<span class="line">    dfn[++t]=u;</span>
<span class="line">    s[u]=t;</span>
<span class="line">    for(int i=head[u];i;i=edge[i].next){</span>
<span class="line">        int v=edge[i].to;</span>
<span class="line">        dfs(v);</span>
<span class="line">    }</span>
<span class="line">    e[u]=t;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例题：codeforces 877E （DFS序+线段树）</p><p>做法：一般是选择根节点操作子树。将整棵树的遍历一遍得出dfs序，并用s[i],e[i]记录结点i的开始时间和结束时间。例如一棵树的dfs序是1 2 5 6 3 7 4 8 9 10,可以根据s[2]=2,e[2]=4确定区间[2,5,6]是其子树。线段树中每一个叶子节点的值为a[dfn[l]]</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>POJ3321</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">/****************************************</span>
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
<span class="line">        if(ch==&#39;Q&#39;){</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://ac.nowcoder.com/acm/contest/64819/D" target="_blank" rel="noopener noreferrer">D-Genealogy in the trees_牛客练习赛115 (nowcoder.com)</a></p><p>将子树关系转换成区间,再使用树状数组记录贡献</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="公共祖先问题" tabindex="-1"><a class="header-anchor" href="#公共祖先问题"><span>公共祖先问题</span></a></h3><h4 id="倍增求lca" tabindex="-1"><a class="header-anchor" href="#倍增求lca"><span>倍增求LCA</span></a></h4><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">int dep[Maxn];//深度</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="欧拉序列" tabindex="-1"><a class="header-anchor" href="#欧拉序列"><span>欧拉序列</span></a></h4><p><img src="`+p+`" alt="img"></p><p>欧拉序列为8,5,9,5,8,4,6,15,6,7,6,4,10,11,10,16,3,16,12,16,10,2,10,4,8,1,14,1,13,1,88,5,9,5,8,4,6,15,6,7,6,4,10,11,10,16,3,16,12,16,10,2,10,4,8,1,14,1,13,1,8 。</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">void dfs(int u){</span>
<span class="line">    dfn[++cnt]=u;</span>
<span class="line">    for(int i=head[u];i;i=edge[i].next){</span>
<span class="line">        int v=edge[i].to;</span>
<span class="line">        dfs(v);</span>
<span class="line">        dfn[++cnt]=u;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在线rmq算法" tabindex="-1"><a class="header-anchor" href="#在线rmq算法"><span>在线RMQ算法</span></a></h4><p>dep[i]记录结点i的深度，seq[]记录欧拉序列,pos[i]用于记录第i个结点第一次出现在seq中的位置</p><p><code>st[i][j]</code>代表在seq[i,i+2^j-1]中深度最小的序号,例如<code>st[i][0]</code>记录的是结点i的下标</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include &lt;bits/stdc++.h&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tarjan算法" tabindex="-1"><a class="header-anchor" href="#tarjan算法"><span>Tarjan算法</span></a></h4><p>从初始点开始深度遍历，当u点完成子树所有点的遍历时，判断与之有查询的点v是否已被遍历</p><p>若 点v被遍历则利用查并集找到父节点是自身的结点</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include &lt;bits/stdc++.h&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="树上差分" tabindex="-1"><a class="header-anchor" href="#树上差分"><span>树上差分</span></a></h3><p>点差分，cnt[u]++,cnt[v]++,cnt[lca]--,cnt[fat[lca]]--</p><p>边差分，cnt[u]++,cnt[v]++,cnt[lca]-=2</p><h2 id="博弈论" tabindex="-1"><a class="header-anchor" href="#博弈论"><span>博弈论</span></a></h2><h3 id="巴什博弈" tabindex="-1"><a class="header-anchor" href="#巴什博弈"><span>巴什博弈</span></a></h3><p>有n个物品，每次可以取1~m个物品，不能取物品者输</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">n=(m+1)*q+r</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>r=0</strong>时，无论先手如何取，先手取k个，后手可以取m+1-k个，后手总能将改变状态至(m+1)*(q-1)。<strong>先手必败</strong></p><p>r!=0时，相当于先手取r个，将(m+1)*q的先手状态转移给后手，攻守易形了。<strong>后手必败</strong></p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">if(n%(m+1))cout&lt;&lt;&quot;先手赢&quot;&lt;&lt;endl;</span>
<span class="line">else cout&lt;&lt;&quot;后手赢&quot;&lt;&lt;endl;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="尼姆博弈" tabindex="-1"><a class="header-anchor" href="#尼姆博弈"><span>尼姆博弈</span></a></h3><p>有n堆物品，记为a1,a2,a3,a4,a5....,an可以从任意一堆中取任意数量物品，不能取物品者输</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">a1^a2^a3^a4^a5^...^an=0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>当满足异或为0，无论先手如何取，都将改变整体的异或状态，而后手可以将异或状态再次改变为0</p><p>也就是说每一次改变异或状态为0 的都是先手，最后一次异或为0 的状态是</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">0 0 0 0 0....0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>先手无法再改变，<strong>先手必败</strong>。否则<strong>后手必败</strong></p><p>例题</p><p>https://vjudge.csgrandeur.cn/contest/530522#problem/A</p><h3 id="博弈问题的解决方式" tabindex="-1"><a class="header-anchor" href="#博弈问题的解决方式"><span>博弈问题的解决方式</span></a></h3><h4 id="icg游戏求某方胜出" tabindex="-1"><a class="header-anchor" href="#icg游戏求某方胜出"><span>ICG游戏求某方胜出</span></a></h4><p>两个玩家轮流拿，每次可以拿1,2,k(或者更多)</p><p>通过打表寻找规律</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">//sg函数例题1:acwing 4005. 取石子游戏</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+c+`" alt="image-20230322101946677" style="zoom:67%;float:left;"><h4 id="记忆化搜索-状态压缩" tabindex="-1"><a class="header-anchor" href="#记忆化搜索-状态压缩"><span>记忆化搜索+状态压缩</span></a></h4><p><a href="https://leetcode.cn/problems/can-i-win/description/" target="_blank" rel="noopener noreferrer">464. 我能赢吗 - 力扣（Leetcode）</a></p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">class Solution {</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">/****************************************</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,164),v=[t];function r(u,m){return a(),s("div",null,v)}const b=n(d,[["render",r],["__file","基础算法.html.vue"]]),g=JSON.parse('{"path":"/notes/%E9%BA%A6%E6%96%87%E9%B9%8F/%E5%9F%BA%E7%A1%80%E7%AE%97%E6%B3%95.html","title":"基础算法","lang":"zh-CN","frontmatter":{"title":"基础算法","author":"Mai"},"headers":[{"level":2,"title":"字符串","slug":"字符串","link":"#字符串","children":[{"level":3,"title":"KMP","slug":"kmp","link":"#kmp","children":[]},{"level":3,"title":"马拉车","slug":"马拉车","link":"#马拉车","children":[]},{"level":3,"title":"字符串哈希","slug":"字符串哈希","link":"#字符串哈希","children":[]},{"level":3,"title":"LCS","slug":"lcs","link":"#lcs","children":[]}]},{"level":2,"title":"数学","slug":"数学","link":"#数学","children":[{"level":3,"title":"费马小定理","slug":"费马小定理","link":"#费马小定理","children":[]},{"level":3,"title":"欧拉定理","slug":"欧拉定理","link":"#欧拉定理","children":[]},{"level":3,"title":"线性求乘法逆元","slug":"线性求乘法逆元","link":"#线性求乘法逆元","children":[]},{"level":3,"title":"排列组合","slug":"排列组合","link":"#排列组合","children":[]},{"level":3,"title":"$C^m_n = \\\\frac{n!}{m!(n-m)!}$","slug":"c-m-n-frac-n-m-n-m","link":"#c-m-n-frac-n-m-n-m","children":[]},{"level":3,"title":"欧拉筛","slug":"欧拉筛","link":"#欧拉筛","children":[]},{"level":3,"title":"扩展欧几里得","slug":"扩展欧几里得","link":"#扩展欧几里得","children":[]},{"level":3,"title":"快速幂","slug":"快速幂","link":"#快速幂","children":[]}]},{"level":2,"title":"二分搜索","slug":"二分搜索","link":"#二分搜索","children":[]},{"level":2,"title":"差分数组","slug":"差分数组","link":"#差分数组","children":[]},{"level":2,"title":"高精度算法","slug":"高精度算法","link":"#高精度算法","children":[{"level":3,"title":"加法","slug":"加法","link":"#加法","children":[]}]},{"level":2,"title":"图论","slug":"图论","link":"#图论","children":[{"level":3,"title":"桥与割点的判定","slug":"桥与割点的判定","link":"#桥与割点的判定","children":[]},{"level":3,"title":"最短路径","slug":"最短路径","link":"#最短路径","children":[]},{"level":3,"title":"最小生成树Kruskal","slug":"最小生成树kruskal","link":"#最小生成树kruskal","children":[]},{"level":3,"title":"Kruskal重构树","slug":"kruskal重构树","link":"#kruskal重构树","children":[]},{"level":3,"title":"拓扑排序","slug":"拓扑排序","link":"#拓扑排序","children":[]},{"level":3,"title":"二分图","slug":"二分图","link":"#二分图","children":[]}]},{"level":2,"title":"树","slug":"树","link":"#树","children":[{"level":3,"title":"直径","slug":"直径","link":"#直径","children":[]},{"level":3,"title":"子树操作","slug":"子树操作","link":"#子树操作","children":[]},{"level":3,"title":"公共祖先问题","slug":"公共祖先问题","link":"#公共祖先问题","children":[]},{"level":3,"title":"树上差分","slug":"树上差分","link":"#树上差分","children":[]}]},{"level":2,"title":"博弈论","slug":"博弈论","link":"#博弈论","children":[{"level":3,"title":"巴什博弈","slug":"巴什博弈","link":"#巴什博弈","children":[]},{"level":3,"title":"尼姆博弈","slug":"尼姆博弈","link":"#尼姆博弈","children":[]},{"level":3,"title":"博弈问题的解决方式","slug":"博弈问题的解决方式","link":"#博弈问题的解决方式","children":[]}]}],"git":{"updatedTime":1723910784000,"contributors":[{"name":"Mai","email":"2512834769@qq.com","commits":1}]},"filePathRelative":"notes/麦文鹏/基础算法.md"}');export{b as comp,g as data};

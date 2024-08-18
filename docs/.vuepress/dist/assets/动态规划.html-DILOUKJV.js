import{_ as n,c as s,o as a,b as i}from"./app-Doa0sysg.js";const l={},e=i(`<h1 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划"><span>动态规划</span></a></h1><h2 id="背包问题" tabindex="-1"><a class="header-anchor" href="#背包问题"><span>背包问题</span></a></h2><h3 id="_01背包" tabindex="-1"><a class="header-anchor" href="#_01背包"><span>01背包</span></a></h3><p>f[l]由f[l-w]推导，所以得从后往前</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">for (int i = 1; i &lt;= n; i++)</span>
<span class="line">  for (int l = W; l &gt;= w[i]; l--)</span>
<span class="line">    f[l] = max(f[l], f[l - w[i]] + v[i]);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="完全背包" tabindex="-1"><a class="header-anchor" href="#完全背包"><span>完全背包</span></a></h3><p>因为$dp[i][j]=max(dp[i-1][j],dp[i-1][j-v[i]]+w[i],dp[i-1][j-2\\times v[i]+2\\times w[i],...)$</p><p>并且$dp[i][j-v]=max(dp[i-1][j-v],dp[i-1][j-v[i]]+w[i],dp[i-1][j-2\\times v[i]+2\\times w[i],...)$</p><p>所以$dp[i][j]=max(dp[i-1][j],dp[i][j-v]+w)$</p><p>再优化成一维 dp[i]=max(dp[i],dp[i-v]+w);</p><p>dp[i]是最优解的前提是dp[i-v]已是最优解,所以推导应从前往后</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多重背包" tabindex="-1"><a class="header-anchor" href="#多重背包"><span>多重背包</span></a></h3><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二进制优化多重背包</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">//w[i]存储拆分后的价值</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="混合背包" tabindex="-1"><a class="header-anchor" href="#混合背包"><span>混合背包</span></a></h3><p>当每个物品都可能存在无限个或有限个数量时，朴素做法是根据类型套板子</p><p>依据多重背包的二进制优化思想，把每个物品都根据二进制拆分</p><p>特别的，无限个物品可以设为一个很大的值，比如1e6</p><p>这样每个物品都有有限个数量，之后便是多重背包的做法</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">	//依次放入物品</span>
<span class="line">	for(int i=1;i&lt;=k;i++){</span>
<span class="line">        for(int j=maxV;j&gt;=V[i];j--){</span>
<span class="line">            dp[j]=max(dp[j],dp[j-V[i]]+W[i]);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整代码</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二维背包dp" tabindex="-1"><a class="header-anchor" href="#二维背包dp"><span>二维背包dp</span></a></h3><p>有n个任务需要完成，完成第i个任务需要花费ti分钟，产生ci元的开支。</p><p>现在有T分钟时间,W元钱来处理这些任务，求最多能完成多少任务。</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分组背包" tabindex="-1"><a class="header-anchor" href="#分组背包"><span>分组背包</span></a></h3><p>每一组只能选一个，求最大价值即可</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="依赖背包" tabindex="-1"><a class="header-anchor" href="#依赖背包"><span>依赖背包</span></a></h3><p>01背包升级版，如果物品a的附加品是b,c</p><p>那么需要考虑的拿法就是：</p><p>1、什么都不拿 2、只拿a 3、拿ab 4、拿ac 5、拿abc</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="环形dp" tabindex="-1"><a class="header-anchor" href="#环形dp"><span>环形DP</span></a></h2><p>NOIP2006-S-1-能量项链</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
<span class="line"></span>
<span class="line">#define int long long</span>
<span class="line">#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)</span>
<span class="line">using namespace std;</span>
<span class="line">typedef pair&lt;int, int&gt; PII;</span>
<span class="line">const int Maxn = 1e5 + 10;</span>
<span class="line">int a[Maxn];</span>
<span class="line">int dp[310][310];</span>
<span class="line">struct Node {</span>
<span class="line">    int l, r;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">signed main() {</span>
<span class="line">    int n;</span>
<span class="line">    cin &gt;&gt; n;</span>
<span class="line">    vector&lt;Node&gt; b;</span>
<span class="line">    for (int i = 1; i &lt;= n; i++) cin &gt;&gt; a[i];</span>
<span class="line">    for (int i = 1; i &lt; n; i++) b.push_back({a[i], a[i + 1]});</span>
<span class="line">    b.push_back({a[n], a[1]});</span>
<span class="line">    int m = b.size();</span>
<span class="line">    // 复制m堆石子</span>
<span class="line">    for (int i = 0; i &lt; m; i++)b.push_back(b[i]);</span>
<span class="line"></span>
<span class="line">    for (int L = 2; L &lt;= m; L++) {</span>
<span class="line">        for (int i = 0; i &lt; 2 * m; i++) {</span>
<span class="line">            int j = i + L - 1;</span>
<span class="line">            if (j &gt;= 2 * m)break;</span>
<span class="line">            for (int k = i; k &lt; j; k++) {</span>
<span class="line">                // (1,3) (4,5) / (6,7) -&gt; 1*5*7</span>
<span class="line">                dp[i][j] = max(dp[i][j], dp[i][k] + dp[k + 1][j] + b[i].l * b[k].r * b[j].r);</span>
<span class="line">            }</span>
<span class="line">//            cout &lt;&lt; i &lt;&lt; &quot; &quot; &lt;&lt; j &lt;&lt; &quot; &quot; &lt;&lt; dp[i][j] &lt;&lt; endl;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    int ans = 0;</span>
<span class="line">    for (int i = 0; i &lt; m; i++)ans = max(ans, dp[i][i + m - 1]);</span>
<span class="line">    cout &lt;&lt; ans &lt;&lt; endl;</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="树型dp" tabindex="-1"><a class="header-anchor" href="#树型dp"><span>树型dp</span></a></h2><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include&lt;bits/stdc++.h&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数位dp" tabindex="-1"><a class="header-anchor" href="#数位dp"><span>数位DP</span></a></h2><h3 id="至少有-1-位重复的数字" tabindex="-1"><a class="header-anchor" href="#至少有-1-位重复的数字"><span><a href="https://leetcode.cn/problems/numbers-with-repeated-digits/description/" target="_blank" rel="noopener noreferrer">至少有 1 位重复的数字</a></span></a></h3><p><code>dp[i][j]</code>记录前i位在没有限制的情况下的有效数量。</p><p>有限制与无限制的区别在于，同j的情况下，<strong>无限制的(i,j)所能得到的情况多于有限制的(i,j)</strong>,所以有限制时不能记忆化</p><p>f(i,used,isLimit,isNum)代表前i位中使用的数字集合为used</p><p>isLimit代表是否存在限制，用于限制数字的枚举的上限</p><p>isNum代表前面是否有填过数字</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">class Solution {</span>
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
<span class="line">            int up=isLimit?s[i]-&#39;0&#39;:9;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>python中使用@cache装饰器可以替代记忆化数组</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">numberOfBeautifulIntegers</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> low<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> high<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> k<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">def</span> <span class="token function">dp</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            s<span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span></span>
<span class="line">            m<span class="token operator">=</span><span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span></span>
<span class="line">            <span class="token decorator annotation punctuation">@cache</span></span>
<span class="line">            <span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span>pos<span class="token punctuation">:</span><span class="token builtin">int</span><span class="token punctuation">,</span>odd<span class="token punctuation">:</span><span class="token builtin">int</span><span class="token punctuation">,</span>even<span class="token punctuation">:</span><span class="token builtin">int</span><span class="token punctuation">,</span>y<span class="token punctuation">,</span>isLimit<span class="token punctuation">:</span><span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span><span class="token builtin">int</span><span class="token punctuation">:</span></span>
<span class="line">                <span class="token keyword">if</span> pos<span class="token operator">==</span>m<span class="token punctuation">:</span></span>
<span class="line">                    <span class="token keyword">return</span> odd<span class="token operator">==</span>even <span class="token keyword">and</span> y<span class="token operator">==</span><span class="token number">0</span></span>
<span class="line">                res<span class="token operator">=</span><span class="token number">0</span></span>
<span class="line">                <span class="token keyword">if</span> odd<span class="token operator">==</span><span class="token number">0</span> <span class="token keyword">and</span> even<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">                    res<span class="token operator">+=</span>f<span class="token punctuation">(</span>pos<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>odd<span class="token punctuation">,</span>even<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token boolean">False</span><span class="token punctuation">)</span></span>
<span class="line">                    </span>
<span class="line">                up <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">if</span> isLimit <span class="token keyword">else</span> <span class="token number">9</span></span>
<span class="line">                low <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>odd<span class="token operator">&gt;</span><span class="token number">0</span> <span class="token keyword">or</span> even<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token number">1</span></span>
<span class="line">                </span>
<span class="line">                <span class="token keyword">for</span> d <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>low<span class="token punctuation">,</span>up<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">                    res<span class="token operator">+=</span>f<span class="token punctuation">(</span>pos<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>odd<span class="token operator">+</span><span class="token punctuation">(</span>d<span class="token operator">&amp;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>even<span class="token operator">+</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span>d<span class="token operator">&amp;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>y<span class="token operator">*</span><span class="token number">10</span><span class="token operator">+</span>d<span class="token punctuation">)</span><span class="token operator">%</span>k<span class="token punctuation">,</span>isLimit <span class="token keyword">and</span> d<span class="token operator">==</span>up<span class="token punctuation">)</span></span>
<span class="line">                </span>
<span class="line">                <span class="token keyword">return</span> res</span>
<span class="line">                </span>
<span class="line">            <span class="token keyword">return</span> f<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token boolean">True</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> dp<span class="token punctuation">(</span>high<span class="token punctuation">)</span><span class="token operator">-</span>dp<span class="token punctuation">(</span>low<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51),p=[e];function c(d,t){return a(),s("div",null,p)}const r=n(l,[["render",c],["__file","动态规划.html.vue"]]),u=JSON.parse('{"path":"/notes/%E9%BA%A6%E6%96%87%E9%B9%8F/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.html","title":"动态规划","lang":"zh-CN","frontmatter":{"title":"动态规划","author":"Mai"},"headers":[{"level":2,"title":"背包问题","slug":"背包问题","link":"#背包问题","children":[{"level":3,"title":"01背包","slug":"_01背包","link":"#_01背包","children":[]},{"level":3,"title":"完全背包","slug":"完全背包","link":"#完全背包","children":[]},{"level":3,"title":"多重背包","slug":"多重背包","link":"#多重背包","children":[]},{"level":3,"title":"混合背包","slug":"混合背包","link":"#混合背包","children":[]},{"level":3,"title":"二维背包dp","slug":"二维背包dp","link":"#二维背包dp","children":[]},{"level":3,"title":"分组背包","slug":"分组背包","link":"#分组背包","children":[]},{"level":3,"title":"依赖背包","slug":"依赖背包","link":"#依赖背包","children":[]}]},{"level":2,"title":"环形DP","slug":"环形dp","link":"#环形dp","children":[]},{"level":2,"title":"树型dp","slug":"树型dp","link":"#树型dp","children":[]},{"level":2,"title":"数位DP","slug":"数位dp","link":"#数位dp","children":[{"level":3,"title":"至少有 1 位重复的数字","slug":"至少有-1-位重复的数字","link":"#至少有-1-位重复的数字","children":[]}]}],"git":{"updatedTime":1723910784000,"contributors":[{"name":"Mai","email":"2512834769@qq.com","commits":1}]},"filePathRelative":"notes/麦文鹏/动态规划.md"}');export{r as comp,u as data};

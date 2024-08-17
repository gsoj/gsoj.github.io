<template><div><h1 id="工具" tabindex="-1"><a class="header-anchor" href="#工具"><span>工具</span></a></h1>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



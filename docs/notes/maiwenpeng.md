---
title: maiwenpeng
author:
createTime: 2024/08/17 11:23:37
permalink: /article/86jgqtbc/
---
# 麦文鹏
## 前言

个人算法模板总结，基础算法提供C++/Python两种代码，较为复杂的算法使用C++代码。

几场ICPC网络赛和自主练习往年省赛下来，我发现使用Python在解决一些字符串问题时代码比较简洁，不易出错,缺点是运行速度是C++的至少3倍以上，适合解决签到题和一些技巧题(大数相乘).

持续更新中

# 工具

## 临时评测机

```c++
#include <bits/stdc++.h>
using namespace std;

int main() {
	int i = 0;
	while (i < 1000) {
		system("data.exe > data.txt");
		system("baoli.exe < data.txt > baoli.txt");
		system("test.exe < data.txt > test.txt");
		if (system("fc test.txt baoli.txt"))
			break;
		else {
			cout << "success" << endl;
		}
	}
}
```



# API

## [Python]SortedList

可以将输入的序列进行排序,并且可以保存有序的同时，在`O(log(n))`的复杂度下完成后续的插入和删除的操作.适合于需要保持序列的有序性同时需要不断修改的情形

```python
from sortedcontainers import SortedList
sl = SortedList([2,1,4,3])#初始化

sl.add(10)#添加一个元素 O(log(n))
sl.update([5,6,7])#添加一组元素O(k*log(n))
bisect_left(4)#lower_bound()


sl.clear()#清除全部 O(n)
sl.discard(4)#删除某个值,O(log(n))
sl.remove(4)#删除，不存在会报错
sl.pop(-1)#弹出索引为-1的元素

sl.count(4)#返回4的个数
sl.index(4)#返回4的下标,多个值返回最小下标

sl.islice(2,4)#切片[2,4]
```

# 玄学算法

## 模拟退火

![image-20230922145538179](../.vuepress/assets/image-20230922145538179.png)

**接受概率**

![jsgl](../.vuepress/assets/jsgl.png)

**如何产生新解**

```
坐标系内：随机生成一个点，或者生成一个向量。
序列问题： random_shuffle 或者随机交换两个数。
网格问题：可以看做二维序列，每次交换两个格子即可。
```





```c++
#include<bits/stdc++.h>
//https://codeforces.com/gym/101981 D题
using namespace std;
#define int long long
#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)
typedef long long ll;
const int Maxn = 1e5 + 10;

struct Point {
    int x, y, z;
} p[105];
int N;

double dist(double x, double y, double z) {
    double mx = 0;
    for (int i = 1; i <= N; i++) {
        mx = max(mx, sqrt(
                (x - p[i].x) * (x - p[i].x) +
                (y - p[i].y) * (y - p[i].y) +
                (z - p[i].z) * (z - p[i].z)));
    }
    return mx;
}

double X, Y, Z, ans;//全局最优点
void SA() {
    double T = 4, delta = 0.998;//初始温度、降温率
    while (T > 1e-8) {
        //给最优点加抖动干扰,温度越高，抖动越大
        double x = X + ((rand() << 1) - RAND_MAX) * T;
        double y = Y + ((rand() << 1) - RAND_MAX) * T;
        double z = Z + ((rand() << 1) - RAND_MAX) * T;
        double mx = dist(x, y, z);
		//出现更优解
        if (mx < ans) {
            ans = mx, X = x, Y = y, Z = z;
        } else if (rand() < exp((ans - mx) / T) * RAND_MAX) {
            //温度越高接受的概率越大
            X = x, Y = y, Z = z;//如果可以接受
        }
        T *= delta;
    }
}

signed main() {
    cin >> N;
    for (int i = 1; i <= N; i++) {
        cin >> p[i].x >> p[i].y >> p[i].z;
        X += p[i].x, Y += p[i].y, Z += p[i].z;
    }
    X /= N, Y /= N, Z /= N;//假定局部最优点
    ans = dist(X, Y, Z);
    SA();
    printf("%-10f\n", ans);
    return 0;
}
```



# 基础算法

## 字符串

### KMP

```c++
int ne[Maxn];
void get_Next(string s){
    int L=s.size();
    ne[0]=-1;
    int i=0,j=-1;
    while(i<L){
        if(j==-1 || s[i]==s[j]){
            ne[++i]=++j;
        }else j=ne[j];
    }
}

void KMP(string str,string s){
    int L1=str.size(),L2=s.size();
    int i=0,j=0;
    while(i<L1){
        if(j==-1 || str[i]==s[j])i++,j++;
        else j=ne[j];
        if(j==L2){
            cout<<i-j+1<<endl;
            j=ne[j];
        }
    }
}
```

python

```python
def KMP_algorithm(string, substring):
    '''
    KMP字符串匹配的主函数
    若存在字串返回字串在字符串中开始的位置下标，或者返回-1
    '''
    pnext = gen_pnext(substring)
    n = len(string)
    m = len(substring)
    i, j = 0, 0
    while (i<n) and (j<m):
        if (string[i]==substring[j]):
            i += 1
            j += 1
        elif (j!=0):
            j = pnext[j-1]
        else:
            i += 1
    if (j == m):
        return i-j
    else:
        return -1
            
 
def gen_pnext(substring):
    """
    构造临时数组pnext
    """
    index, m = 0, len(substring)
    pnext = [0]*m
    i = 1
    while i < m:
        if (substring[i] == substring[index]):
            pnext[i] = index + 1
            index += 1
            i += 1
        elif (index!=0):
            index = pnext[index-1]
        else:
            pnext[i] = 0
            i += 1
    return pnext
 
if __name__ == "__main__":
    string = 'abcxabcdabcdabcy'
    substring = 'abcdabcy'
    out = KMP_algorithm(string, substring)
    print(out)
```





### 马拉车

C++

```c++
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const int Maxn=3e7+10;
string s;
int d[Maxn];
int get_d(int n){
    d[1]=1;
    for(int i=2,l,r=1;i<=n;i++){
        if(i<=r)d[i]=min(d[r-i+l],r-i+1);
        while(s[i-d[i]]==s[i+d[i]])d[i]++;
        if(i+d[i]-1>r)l=i-d[i]+1,r=i+d[i]-1;
    }
    int mx=0;
    for(int i=1;i<=n;i++){
        mx=max(mx,d[i]);
    }
    return mx-1;
}

int main(){
    string str;cin>>str;
    s+="$#";
    for(char x:str){
        s+=x,s+='#';
    }
    cout<<get_d(s.size()-1);
    return 0;
}
```

Python

```python
def longestPalindrome(s: str) -> str:
    tem_s = '@#'
    for i in s:
        tem_s += i + '#'
    s = tem_s + '&'
    Lens = len(s)
    max_right = 0
    max_mid_index = 0
    p = [0] * Lens
    for i in range(1,Lens-1):
        if i > max_right:
            while s[i-p[i]] == s[i+p[i]]:
                p[i] += 1
            max_right = i+p[i]-1
            max_mid_index = i
        else:
            p[i] = p[2*max_mid_index - i]
            if p[i] + i - 1 > max_right:
                p[i] = max_right - i + 1
            while s[i-p[i]] == s[i+p[i]]:
                p[i] += 1
            if i + p[i] - 1 > max_right:
                max_right = i+p[i]-1
                max_mid_index = i
    index = p.index(max(p))
    return s[index - p[index] + 1:index + p[index]].replace('#','')
```

### 字符串哈希

hash[i]代表[0,i]所映射的哈希值

$hash[i]=hash[i-1]*Base+asc(s[i])$

求区间S[l,r]所对应的哈希值

$res=hash[r]-hash[l-1]*Base^{r-l+1}$

https://leetcode-cn.com/problems/distinct-echo-substrings/

```c++
class Solution {
public:
    typedef unsigned long long ll;
    const int BASE = 131, MOD = 998244353;
    ll p[10010], h[10010];

    ll get(int l, int r) {
        return (h[r] - h[l - 1] * p[r - l + 1] % MOD + MOD) % MOD;
    }

    vector<int> findSubstring(string s, vector<string> &words) {
        ll n = s.size(), L = words[0].size(), m = words.size();
        p[0] = 1;
        for (int i = 1; i <= n; i++)p[i] = p[i - 1] * BASE % MOD;
        s = " " + s;
        for (int i = 1; i <= n; i++)h[i] = (h[i - 1] * BASE + (s[i] - 'a' + 1)) % MOD;

        vector<ll> hashList;//存储每个单词的哈希值
        for (int i = 0; i < m; i++) {
            ll res = 0;
            for (int j = 0; j < L; j++) {
                res = (res * BASE + (words[i][j] - 'a' + 1)) % MOD;
            }
            hashList.push_back(res);
        }

        vector<int> ans;
        for (int i = 1; i + L * m - 1 <= n; i++) {
            //枚举起点
            map<ll, int> hx;
            for (ll x: hashList)hx[x]++;

            int ok = true;
            for (int j = 0; j < m; j++) {
                int l = i + j * L, r = i + (j + 1) * L - 1;
                int x = get(l, r);
                if (!hx.count(x)) {
                    ok = false;
                    break;
                }
                hx[x]--;
                if (!hx[x])hx.erase(x);
            }
            if (ok) ans.push_back(i - 1);
        }
        return ans;
    }
};
```



### LCS

状态转移:

$dp[i][j] = dp[i-1][j-1],s1[i]=s2[j]$

$dp[i][j]=max(dp[i-1][j],dp[i][j-1]),s1[i]!=s2[j]$

```c++
#include<bits/stdc++.h>
#define int long long
#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)
using namespace std;
typedef pair<int, int> PII;
const int Maxn = 1e5 + 10;
int dp[1010][1010];

signed main() {
    string s1, s2;
    cin >> s1 >> s2;
    int n = s1.size(), m = s2.size();
    s1 = " " + s1, s2 = " " + s2;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (s1[i] == s2[j]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // 通过DP倒推LCS
    string ans;
    int p1 = n, p2 = m;
    while (dp[p1][p2] != 0) {
        if (s1[p1] == s2[p2]) {
            ans.push_back(s1[p1]);
            p1--, p2--;
        } else {
            if (dp[p1 - 1][p2] != dp[p1][p2 - 1]) {
                // 判断是从哪个状态推导而来
                if (dp[p1 - 1][p2] == dp[p1][p2]) {
                    p1--;
                } else {
                    p2--;
                }
            } else {
                p1--;
            }
        }
    }
    std::reverse(ans.begin(), ans.end());
    cout << ans << endl;
    return 0;
}
```





## 数学

### 费马小定理

$若p为素数，gcd(a,p)=1,则a^{p-1}\equiv1$

### 欧拉定理

$若gcd(a,m)=1,则a^{φ(m)}=1 (mod m)$

扩展欧拉定理

<img src="../.vuepress/assets/image-20231110111249531.png" alt="image-20231110111249531" style="left:float" />

### 线性求乘法逆元

```c++
int inv[Maxn];
//求1~n中每个数 关于p的逆元
void Inv(int n,int p){
    inv[1]=1;
    for(int i=2;i<=n;i++)inv[i]=(p-p/i)*inv[p%i]%p;
}
```

### 排列组合

```python
import math
n,m=4,2
print(math.perm(n,m))#排列
print(math.comb(n,m))#组合
```

线性求排列组合

$设fac[i]为i的阶乘,inv[i]为阶乘逆元,inv[i] = inv[i+1] *(i+1)$

### $C^m_n = \frac{n!}{m!(n-m)!}$

```c++
int C(int n,int m){
	if(m>n)return 0;
	if(m==0)return 1;
	return fac[n] * inv[m]%mod * inv[n-m]%mod;
}
```



### 欧拉筛

```c++
vector<int> array;//一开始把所有的数字都标记为素数
vector<int> pri;//把素数单独存进来
void isPrime(int n) {
	array.push_back(0);
	array.push_back(0);
	for (int i = 2; i <= n; i++) {
		array.push_back(1);
	}
	for (int i = 2; i <= n; i++) {
        //如果array[i]没有被标记为合数
		if (array[i]==1)
			pri.push_back(i);
		//遍历素数数组 
		for (int j = 0; j < pri.size(); j++) {
			if (i * pri[j] > n)
				break;
			array[i * pri[j]] = false; //标记为合数
			//保证每个合数只会被它的最小质因数筛去，因此每个数只会被标记一次
			if (i % pri[j] == 0)
				break;
		}
	}
}
```

python

```python
used=set()#记录合数
isPrime=[]#记录素数
def Euler(N):
	for i in range(2,N):
		if i not in used:
			isPrime.append(i)

		for x in isPrime:
			if x*i>N:
				break
			used.add(x*i)
			if i%x==0:
				break
```



### 扩展欧几里得

证明过程：

`gcd(a,b)=gad(b,a%b)`

ax+by=gcd(a,b)

```c++
ll exgcd(ll a,ll b,ll& x ,ll& y){
    if(!b){
        x=1,y=0;//b的0的情况 ax+by=gcd(a,b)=a
        return a;
    }
    //x1=y2,y1=y1-(a/b)*y2
    int d= exgcd(b,a%b,y,x);
    y-=a/b*x;
    return d;
}
```

Python版本

```python
n = int(input())
x, y = 1, 0
 
def exgcd(a, b):
    global x, y
    if b == 0: 
        x, y = 1, 0
        return a
    d = exgcd(b, a % b)
    x, y = y, x
    y -= (a // b) * x
    return d
    
for _ in range(n):
    a, b = map(int,input().split())
    exgcd(a, b)
    print(x, y)
```



### 快速幂

```c++
int qpow(int a,int b,int mod){
    int res=1;
    while(b){
        if(b&1)res=(res*a)%mod;
        a=(a*a)%mod;
        b>>=1;
    }
    return res;
}
```

## 二分搜索

```c++
//不断搜索找到最后一个小于等于的值
int L=1,R=N;
while(L<R){
	int mid=(L+R+1)>>1;
	if(a[mid]>target)R=mid-1;
	else L=mid;
}

//精确查找---用迭代的方式实现二分查找，精确查找目标元素的位置,假定数组递增排列，且不存在重复元素
int bsearch2(int low,int high,int target){
    while(low <= high){
        int mid = low + (high - low)/2;
        if(num[mid] > target){
            high = mid -1;
        }
        else if(num[mid] < target){
            low = mid + 1;
        }
        else{
            return mid;
        }
    }
    return -1;
}
 
 
 
//界限查找----用二分查找寻找上届，正好大于目标数的那个数(严格界限，不包含自身)
int bsearchupperbound(int low,int high,int target){
    if(low > high || target >= num[high]){
        return -1;
    }
 
    while(low < high){
        int mid = low + (high - low)/2;
        if(num[mid] > target){
            high = mid;
        }
        else{
            low = mid + 1;
        }
    }
    return high;
}
 
 
//界限查找---用二分查找寻找上届，正好大于等于目标数的那个数(松散界限，可以包含自身)
int bsearch5(int low,int high,int target){
    if(low > high || target > num[high]){
        return -1;
    }
    while(low < high){
        int mid = low + (high -low)/2;
        if(num[mid] >= target){
            high = mid;
        }
        else{
            low = mid + 1;
        }
    }
    return high;
}
 
 
 
//界限查找---用二分查找寻找下届，正好小于目标数的那个数(严格界限，不包含自身)
int bsearchlowerbound(int low,int high,int target){
    if(low > high || target <= num[low]){
        return -1;
    }
 
    while(low < high){
        int mid = (low + high + 1) / 2;     //这里用向上取整，否则陷入死循环 因为low无法往上爬超过high
 
        if(num[mid] < target){
            low = mid;
        }
        else{
            high = mid -1;
        }
    }
    return low;
}
 
 
//界限查找---用二分法寻找下届，正好小于等于目标的那个数  (松散界限，可以包含自身)
int bsearch6(int low,int high,int target){
    if(low > high || target < num[low]){
        return -1;
    }
    while(low < high){
        int mid = (low + high + 1)/2;
        if(num[mid] <= target){
            low = mid;
        }
        else{
            high = mid - 1;
        }
    }
    return low;
}

```

## 差分数组

https://blog.csdn.net/weixin_54202947/article/details/127980042

**定义：**b[i]=a[i]-a[i-1]

**单点查询:**a[i]=∑b[x] 1<=x<=i

**区间修改:**在[i,j]区间增加k  b[i]+k,b[j+1]-k

**区间求和:**添加一个辅助数组c[i]=(i-1)*b[i],当b[i]+k时,c[i]同步增加(i-1) *k

前i项和  Σa[i]=n*sum(b,i)-sum(c,i);



## 高精度算法

### 加法

```c++
void add(string num1, string num2);
int main() {
	string num1, num2;
	cin >> num1 >> num2;
	add(num1, num2);
}
void add(string num1, string num2) {
	string result;
	int p = 0, i = num1.size() - 1, j = num2.size() - 1; //p进位
	while (i >= 0 || j >= 0) {
		int value = 0;
		if (i >= 0)
			value += (num1[i] - '0');
		if (j >= 0)
			value += (num2[j] - '0');
		result = to_string((value + p) % 10) + result;
		p = (value + p) / 10;
		i--;
		j--;
	}
	if (p > 0)
		cout << p;
	cout << result << endl;;
}
```

python比较适合写这类题

```python
a,b=map(int,input().split())
print(a+b)
```





## 图论

### 桥与割点的判定

```c++
#include <bits/stdc++.h>
using namespace std;

const int Maxn = 100;
int dfn[Maxn], low[Maxn], head[Maxn], cnt, num;
struct edge {
	int to;
	int next;
} e[Maxn * Maxn];
void add(int u, int v) {
	e[++cnt].next = head[u];
	e[cnt].to = v;
	head[u] = cnt;
}
//桥
void dfs(int u, int fat) {
	dfn[u] = low[u] = ++num;
	for (int i = head[u]; i; i = e[i].next) {
		int v = e[i].to;
		if (v == fat)
			continue;//是父节点则跳过
		if (!dfn[v]) {
			dfs(v, u);
			low[u] = min(low[u], low[v]);
			if (low[v] > dfn[u]) {
				//无法回到u之前的结点
				cout << u <<"-"<<v<< "是桥" << endl;
			}
		} else {
			low[u] = min(low[u], dfn[v]);
		}
	}
}
//割点
void dfs2(int u, int fat) {
	dfn[u] = low[u] = ++num;
	for (int i = head[u]; i; i = e[i].next) {
		int v = e[i].to;
		if (v == fat)
			continue;//是父节点则跳过
		if (!dfn[v]) {
			dfs(v, u);
			low[u] = min(low[u], low[v]);
			if (low[v] >= dfn[u]) {
				count++;
				if (root != u || count > 1)
					cout << u << "是割点" << endl;
			}
		} else {
			low[u] = min(low[u], dfn[v]);
		}
	}
}

int main() {
	int N, a, b;
	cin >> N;
	while (N--) {
		cin >> a >> b;
		add(a, b);
		add(b, a);
	}
	dfs(1, 0);
}
```



### 最短路径

#### dijkstra算法-优先队列

```c++
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef pair<int,int> PII;
const int Maxn=1e5+10;
int dis[Maxn],N,M;
int head[Maxn],vis[Maxn],tot;
priority_queue<PII,vector<PII>,greater<PII>> q;
struct Node{
    int to,next,val;
    bool operator <(Node& a){
        return val<a.val;
    }
}edge[2*Maxn];
void add(int x,int y,int w){
    edge[++tot].to=y;
    edge[tot].val=w;
    edge[tot].next=head[x];
    head[x]=tot;
}
void dijkstra(int x){
    q.push({0,x});
    for(int i=1;i<=N;i++)dis[i]=INT_MAX;
    dis[x]=0;
    while(q.size()){
        int pos=q.top().second;q.pop();
        if(vis[pos])continue;
        vis[pos]=1;
        for(int i=head[pos];i;i=edge[i].next){
            int v=edge[i].to,w=edge[i].val;
            if(dis[v]>dis[pos]+w){
                dis[v]=dis[pos]+w;
                q.push({dis[v],v});
            }
        }
    }
}

int main(){
    int s;
    cin>>N>>M>>s;
    for(int i=0;i<M;i++){
        int u,v,w;cin>>u>>v>>w;
        add(u,v,w);
    }
    dijkstra(s);
    for(int i=1;i<=N;i++)cout<<dis[i]<<" ";
    return 0;
}
```

#### SPFA

SPFA 可以用于判断s点是否能抵达一个负环，只需记录最短路经过了多少条边，当经过了至少n条边时，说明s点可以抵达一个负环。

```c++
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const int Maxn=3e3+10;
struct Node{
    int to,next,w;
}edge[Maxn*2];
int head[Maxn],tot;
void add(int u,int v,int w){
    edge[++tot].to=v;
    edge[tot].w=w;
    edge[tot].next=head[u];
    head[u]=tot;
}
int dis[Maxn],cnt[Maxn],vis[Maxn];
bool SPFA(int n){
    memset(dis,0x3f,sizeof(dis));
    memset(cnt,0,sizeof(cnt));
    memset(vis,0,sizeof(vis));
    queue<int> q;
    q.push(1);
    vis[1]=1,dis[1]=0;
    while(!q.empty()){
        int u=q.front();vis[u]=0;q.pop();
        for(int i=head[u];i;i=edge[i].next){
            int v=edge[i].to,w=edge[i].w;
            if(dis[v]>dis[u]+w){
                dis[v]=dis[u]+w;
                cnt[v]=cnt[u]+1;
                if(cnt[v]>=n)return true;
                if(!vis[v]){
                    q.push(v);
                    vis[v]=1;
                }
            }
        }
    }
    return false;
}

int main(){
    int T;
    scanf("%d",&T);
    while(T--){
        tot=0;
        memset(head,0,sizeof(head));
        int n,m;
        scanf("%d%d",&n,&m);
        for(int i=1;i<=m;i++){
            int u,v,w;
            scanf("%d%d%d",&u,&v,&w);
            add(u,v,w);
            if(w>=0)add(v,u,w);
        }
        printf("%s\n", SPFA(n)?"YES":"NO");
    }
    return 0;
}
```



#### 多源最短路-Floyd

```c++
for(int k=1;k<=n;k++){
	for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			dis[i][j]=min(dis[i][j],dis[i][k]+dis[k][j]);
		}
	}
}
```



[1488. 最短距离 - AcWing题库](https://www.acwing.com/problem/content/1490/)

超级源点。求图上任意一点到最近商店的距离。

设超级源点为0，与所有商店的距离为0

通过一次dijkstra就能得出dis[i]，即i到0的距离

```c++
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef pair<int,int> PII;
const int Maxn=3e5+10;
int dis[Maxn],h[Maxn],tot,vis[Maxn];
int N,M,K,a[Maxn];
priority_queue<PII,vector<PII>,greater<PII>> q;
struct Node{
    int to,next,val;

}edge[Maxn];

void add(int u,int v,int val){
    edge[++tot].to=v;
    edge[tot].next=h[u];
    edge[tot].val=val;
    h[u]=tot;
}

void dijkstra(int u){
    for(int i=1;i<=N;i++)dis[i]=INT_MAX;
    dis[u]=0;
    q.emplace(dis[u],u);
    while(q.size()){
        int pos=q.top().second;q.pop();
        if(vis[pos])continue;
        vis[pos]=1;
        for(int i=h[pos];i;i=edge[i].next){
            int v=edge[i].to,w=edge[i].val;
            if(dis[v]>dis[pos]+w){
                dis[v]=dis[pos]+w;
                q.emplace(dis[v],v);
            }
        }
    }
}


int main(){
    cin>>N>>M;
    for(int i=0;i<M;i++){
        int u,v,w;cin>>u>>v>>w;
        add(u,v,w),add(v,u,w);
    }
    cin>>K;
    //商店坐标
    for(int i=0;i<K;i++){
        int x;cin>>x;
        add(0,x,0);
    }
    dijkstra(0);
    //Q次询问
    int Q;cin>>Q;
    while(Q--){
        int y;cin>>y;
        cout<<dis[y]<<endl;
    }
    return 0;
}
```



[3305. 作物杂交 - AcWing题库](https://www.acwing.com/problem/content/3308/)

另类的建图方式，需要额外存储一个值代表组合点

```c++
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef pair<int,int> PII;
const int Maxn=1e5+10;
const int Maxm=2010;
int a[Maxm],dis[Maxm];
struct Node{
    int to,next,w,b;
}edge[2*Maxn];
int head[Maxm],tot,vis[Maxm];
int N,M,K,T;
priority_queue<PII,vector<PII>,greater<PII>> q;

void add(int A,int B,int C){
    edge[++tot].to=C;
    edge[tot].w=max(a[A],a[B]);
    edge[tot].b=B;
    edge[tot].next=head[A];
    head[A]=tot;
}

void dijkstra(){
    while(!q.empty()){
        int x=q.top().second;
        q.pop();
        if(vis[x])continue;
        vis[x]=1;
        for(int i=head[x];i;i=edge[i].next){
            int v=edge[i].to,w=edge[i].w,b=edge[i].b;
            if(dis[v]>max(dis[x],dis[b])+w){
                dis[v]=max(dis[x],dis[b])+w;
                q.push({dis[v],v});
            }
        }
    }
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(0),cout.tie(0);
    memset(dis,0x3f,sizeof(dis));
    cin>>N>>M>>K>>T;
    for(int i=1;i<=N;i++)cin>>a[i];
    for(int i=1;i<=M;i++){
        int x;cin>>x;
        q.push({0,x});
        dis[x]=0;
    }
    for(int i=0;i<K;i++){
        int x,y,z;cin>>x>>y>>z;
        add(x,y,z),add(y,x,z);
    }
    dijkstra();
    cout<<dis[T]<<endl;
    return 0;
}
```



### 最小生成树Kruskal

```c++
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const int Maxn=1e5+10;

struct Node{
    int x,y,w;
    bool operator < (const Node& o) const{
        return w<o.w;
    }
}edge[Maxn*2];
int fat[Maxn],vis[Maxn];

int find(int x){
    return fat[x]==x?x:fat[x]=find(fat[x]);
}

int main(){
    int N,M;cin>>N>>M;
    for(int i=1;i<=N;i++)fat[i]=i;
    for(int i=1;i<=M;i++){
        int x,y,w;cin>>x>>y>>w;
        edge[i]={x,y,w};
    }
    sort(edge+1,edge+M+1);
    ll res=0,cnt=0;
    for(int i=1;i<=M;i++){
        int x=edge[i].x,y=edge[i].y,w=edge[i].w;
        int fx=find(x),fy=find(y);
        if(fx!=fy){
            res+=w;
            fat[fx]=fy;
            cnt++;
        }
        if(cnt==N-1)break;
    }
    if(cnt!=N-1)cout<<"orz"<<endl;
    else cout<<res<<endl;
    return 0;
}
```



超级源点。[3728. 城市通电 - AcWing题库](https://www.acwing.com/problem/content/3731/)

需要让每个城市都通电有两种方式，1自身作为发电厂，2是间接连接发电厂

设立一个超级源点0，i点设立发电厂可以看作0到i的距离为c

i与j连接，其距离为**(abs(x[i]-x[j])+abs(y[i]-y[j]))*(k[i]+k[j])**

这样就把复杂的问题变成了最小生成树问题

```c++
#include<bits/stdc++.h>
using namespace std;
#define int long long
const int Maxn=2010;
int fat[Maxn],tot,k[Maxn],vis[Maxn*Maxn],cnt;

struct Node{
    int x,y;
}point[Maxn];
struct Edge{
    int a,b,dis;
    bool operator < (const Edge& o){
        return dis<o.dis;
    }
}edge[Maxn*Maxn];

int find(int x){
    return x==fat[x]?x:fat[x]=find(fat[x]);
}
int kruskal(){
    int res=0;
    sort(edge+1,edge+tot+1);
    for(int i=1;i<=tot;i++){
        int x=find(edge[i].a),y=find(edge[i].b);
        if(x!=y){
            fat[x]=y;
            res+=edge[i].dis;
            vis[i]=1;
            cnt++;
        }
    }
    return res;
}

signed main(){
    int n;
    scanf("%lld",&n);
    for(int i=1;i<=n;i++)fat[i]=i;
    for(int i=1;i<=n;i++){
//        cin>>point[i].x>>point[i].y;
            scanf("%lld%lld",&point[i].x,&point[i].y);
    }
    for(int i=1;i<=n;i++){
        int c;
        scanf("%lld",&c);
        edge[++tot]= {0,i,c};//从0连接到第i个点,距离为c
    }
    for(int i=1;i<=n;i++){
//        cin>>k[i];
        scanf("%lld",&k[i]);
        for(int j=1;j<i;j++){
            int dis=(abs(point[i].x-point[j].x)+abs(point[i].y-point[j].y))*(k[i]+k[j]);
            edge[++tot]={i,j,dis};
        }
    }
    printf("%lld\n",kruskal());
    vector<int> v;
    vector<pair<int,int>> ed;
    for(int i=1;i<=tot;i++){
        if(vis[i]){
            if(edge[i].a)ed.push_back({edge[i].a,edge[i].b});
            else v.push_back(edge[i].b);
        }
    }
    printf("%lld\n",v.size());
    for(int x:v)printf("%lld ",x);
    printf("\n%lld\n",ed.size());

    for(int i=0;i<ed.size();i++){
        printf("%lld %lld\n",ed[i].first,ed[i].second);
    }
    return 0;
}
```

### Kruskal重构树

![image-20231114171138121](../.vuepress/assets/image-20231114171138121.png)

依次选取最短边，每条边对应一个新的节点，新节点的权值为该边的边权

原图中两个点间所有路径上的边最大权值的最小值 == 最小生成树上两点简单路径的边最大权值 == Kruskal重构树上两点 LCA的点权。

```c++
#include<bits/stdc++.h>

#define int long long
#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)
using namespace std;
typedef pair<int, int> PII;
const int Maxn = 1e5 + 10;
struct Edge{
    int u,v,w;
    bool operator < (const Edge o)const{
        return w>o.w;
    }
};
int fat[Maxn],tot,n,m;
int val[Maxn];//重构树的点权
vector<int> E[Maxn];//重构树的边
vector<Edge> edge(Maxn);
int find(int x){return fat[x]==x?x:fat[x]=find(fat[x]);}

//在最小生成树的基础上构建重构树
void kruskal(){
    std::sort(edge.begin()+1, edge.begin()+m+1);
    for (int i = 1; i <= 2*n; i++)fat[i] = i;
    tot=n;
    for(int i=1;i<=m;i++){
        auto [x,y,z] = edge[i];
        int fx=find(x),fy=find(y);
        if(fx!=fy){
            fat[fx]=fat[fy]=++tot;
            val[tot]=z;
            E[tot].push_back(fx);
            E[tot].push_back(fy);
            E[fx].push_back(tot);
            E[fy].push_back(tot);
            if(tot==2*n-1)break;
        }
    }
}

int vis[Maxn];
int dep[Maxn];//深度
int dp[Maxn][20];//第2^i个父节点
void dfs(int u,int fa){
    dep[u]=dep[fa]+1;
    dp[u][0] = fa;
    for(int i=1;i<20;i++)dp[u][i] = dp[dp[u][i-1]][i-1];
    for(int v:E[u]){
        if(v==fa)continue;
        dfs(v,u);
    }
}
int LCA(int u,int v){
    if(dep[u]<dep[v])return LCA(v,u);
    //同步到相同深度
    for(int i=19;~i;i--)if(dep[dp[u][i]]>=dep[v])u=dp[u][i];
    //向上倍增
    for(int i=19;~i;i--)if(dp[u][i]!=dp[v][i])u=dp[u][i],v=dp[v][i];
    return dp[u][0];
}

signed main() {
    ios;
    cin >> n >> m;
    for (int i = 1; i <= m; i++) cin>>edge[i].u>>edge[i].v>>edge[i].w;
    kruskal();
    for(int i=1;i<=n;i++){
        int root = find(i);
        if(!vis[root]){
            dfs(root,0);
            vis[root]=1;
        }
    }
    int q;cin>>q;
    while(q--){
        int x,y;cin>>x>>y;
        int lca = LCA(x,y);
        cout<<(lca?val[lca]:-1)<<endl;
    }
    return 0;
}
```



### 拓扑排序

拓扑排序可以用于判断图中是否存在环

选择入度为0的结点加入队列，每次删除该结点相邻的边，如有入度为0 的点则再次加入队列

```c++
int n, m;
vector<int> G[MAXN];
int in[MAXN];  // 存储每个结点的入度

bool toposort() {
  vector<int> L;
  queue<int> S;
  for (int i = 1; i <= n; i++)
    if (in[i] == 0) S.push(i);
  while (!S.empty()) {
    int u = S.front();
    S.pop();
    L.push_back(u);
    for (auto v : G[u]) {
      if (--in[v] == 0) {
        S.push(v);
      }
    }
  }
  if (L.size() == n) {
    for (auto i : L) cout << i << ' ';
    return true;
  } else {
    return false;
  }
}
```



### 二分图

#### 最大匹配-匈牙利算法

```c++
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const int Maxn=2010;
int G[Maxn][Maxn],vis[Maxn],match[Maxn];
int n,m,e;
bool dfs(int u){
    for(int i=1;i<=m;i++){
        if(!vis[i] && G[u][i]){
            vis[i]=1;
            if(!match[i] || dfs(match[i])){
                match[i]=u;
                return true;
            }
        }
    }
    return false;
}

int main(){
    cin>>n>>m>>e;
    for(int i=0;i<e;i++){
        int a,b;cin>>a>>b;
        G[a][b]=1;
    }
    int ans=0;
    for(int i=1;i<=n;i++){
        memset(vis,0,sizeof(vis));
        if(dfs(i))ans++;
    }
    cout<<ans<<endl;
    return 0;
}
```

时间戳代替memset,省时间

```c++
if(vis[v]!=now){
	vis[v]=now;
	...
}

for(int i=1;i<=n;i++){
    ++now;
    if(dfs(i))
        ...
}
```



## 树

### 直径

```c++
	int pos[3],cnt=0,ma=0,dis[Maxn];
    mx=1;
    for(int i=0;i<3;i++){
        dep[mx]=0;
        dfs(mx,-1);
        for(int j=1;j<=T;j++){
            dis[j]=max(dis[j],dep[j]);//预处理每个结点到两个端点的距离
            ma=max(ma,dis[j]);//直径
        }
        pos[cnt++]=mx;
    }
```



### 子树操作

#### dfs序

```c++
int s[Maxn],e[Maxn],dfn[Maxn],t;
void dfs(int u){
    dfn[++t]=u;
    s[u]=t;
    for(int i=head[u];i;i=edge[i].next){
        int v=edge[i].to;
        dfs(v);
    }
    e[u]=t;
}
```

例题：codeforces 877E （DFS序+线段树）

做法：一般是选择根节点操作子树。将整棵树的遍历一遍得出dfs序，并用s[i],e[i]记录结点i的开始时间和结束时间。例如一棵树的dfs序是1 2 5 6 3 7 4 8 9 10,可以根据s[2]=2,e[2]=4确定区间[2,5,6]是其子树。线段树中每一个叶子节点的值为a[dfn[l]]

```c++
#include<bits/stdc++.h>
using namespace std;
#define int long long
typedef long long ll;
const int Maxn=2e5+10;
struct Node{
    int to,next;
}edge[2*Maxn];
int head[Maxn],tot;
int A[Maxn];
void add(int u,int v){
    edge[++tot].to=v;
    edge[tot].next=head[u];
    head[u]=tot;
}
int s[Maxn],e[Maxn],dfn[Maxn],t;
void dfs(int u){
    dfn[++t]=u;
    s[u]=t;
    for(int i=head[u];i;i=edge[i].next){
        int v=edge[i].to;
        dfs(v);
    }
    e[u]=t;
}

struct Tree{
    int l,r,val,lazy;
}T[Maxn<<4];

void pushup(int node){
    T[node].val=T[node<<1].val+T[node<<1|1].val;
}

void pushdown(int node){
    if(T[node].lazy){
        T[node].lazy=0;
        Tree& left=T[node<<1];
        Tree& right=T[node<<1|1];
        left.lazy^=1;
        left.val=(left.r-left.l+1)-left.val;
        right.lazy^=1;
        right.val=(right.r-right.l+1)-right.val;
    }
}

void build(int node,int l,int r){
    T[node]={l,r,0,0};
    if(l==r){
        T[node].val=A[dfn[l]];
        return;
    }
    int mid=(l+r)>>1;
    build(node<<1,l,mid);
    build(node<<1|1,mid+1,r);
    pushup(node);
}

int query(int node,int l,int r){
    if(l<=T[node].l&&T[node].r<=r){
        return T[node].val;
    }
    pushdown(node);
    int mid=(T[node].l+T[node].r)>>1,val=0;
    if(l<=mid)val+= query(node<<1,l,r);
    if(mid<r)val+= query(node<<1|1,l,r);
    return val;
}

void modify(int node,int l,int r){
    if(l<=T[node].l&&T[node].r<=r){
        T[node].lazy^=1;
        T[node].val=(T[node].r-T[node].l+1)-T[node].val;
        return;
    }
    pushdown(node);
    ll mid=(T[node].r+T[node].l)>>1;
    if(l<=mid)modify(node<<1,l,r);
    if(mid<r)modify(node<<1|1,l,r);
    pushup(node);
}

signed main(){
    int N,x;cin>>N;
    for(int i=2;i<=N;i++){
        cin>>x;
        add(x,i);
    }
    for(int i=1;i<=N;i++)cin>>A[i];
    dfs(1);
    build(1,1,N);
    int q,v;cin>>q;
    string str;
    while(q--){
        cin>>str>>v;
        if(str=="get"){
            cout<<query(1,s[v],e[v])<<endl;
        }else{
            modify(1,s[v],e[v]);
        }
    }
    return 0;
}
```



POJ3321

```c++
/****************************************
  *Author:  Mai
  *Contact:
  *Description:根据dfs序的特征给树标号，再用树状数组求和
*****************************************/
#include <iostream>
#include <vector>
#define syncIO ios::sync_with_stdio(false),cin.tie(0),cout.tie(0);
using namespace std;
typedef long long ll;
const int maxn=1e5+10;
vector<vector<int>> edge(maxn);
int s[maxn],e[maxn],vis[maxn],c[maxn],tot=1,a[maxn];
void dfs(int u){
    s[u]=tot++;
    vis[u]=1;
    for(int i=0;i<edge[u].size();i++){
        int v=edge[u][i];
        if(vis[v])continue;
        dfs(v);
    }
    e[u]=tot-1;
}

int lowbit(int x){
    return x&(-x);
}
int sum(int i){
    int res=0;
    for(;i>0;i-= lowbit(i))res+=c[i];
    return res;
}
void add(int i,int k){
    for(;i<maxn;i+= lowbit(i)){
        c[i]+=k;
    }
}
void solve(){
    int n,m,x,y;
//    cin>>n;
    scanf("%d",&n);
    for(int i=1;i<n;i++){
//        cin>>x>>y;
        scanf("%d%d",&x,&y);
        edge[x].push_back(y);
//        edge[y].push_back(x);
    }
    dfs(1);
    for(int i=1;i<=n;i++)a[i]=1,add(i,1);
    char ch;
    int num;
//    cin>>m;
    scanf("%d",&m);
    for(int i=0;i<m;i++){
//        cin>>ch>>num;
        scanf(" %c%d",&ch,&num);
        if(ch=='Q'){
            cout<<sum(e[num])-sum(s[num]-1)<<endl;
        }else{
            if(a[num])add(s[num],-1);
            else add(s[num],1);
            a[num]^=1;
        }
    }
}

int main() {
//    syncIO;
    solve();
}
```



[D-Genealogy in the trees_牛客练习赛115 (nowcoder.com)](https://ac.nowcoder.com/acm/contest/64819/D)

将子树关系转换成区间,再使用树状数组记录贡献

```c++
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)
typedef long long ll;
const int Maxn=3e5+10;
int tr[Maxn];
int lowbit(int x){return x&-x;}
int sum(int x){
    int res=0;
    for(;x>0;x-= lowbit(x))res+=tr[x];
    return res;
}
void add(int x,int d){for(;x<Maxn;x+= lowbit(x))tr[x]+=d;}
vector<int> edge[Maxn];
vector<int> pq[Maxn];
vector<pair<int,int>> ab[Maxn];
vector<int> ans(Maxn);
int l[Maxn],r[Maxn],t=0;
void dfs(int u,int fa){
    l[u]=++t;
    for(int v:edge[u]){
        if(v==fa)continue;
        dfs(v,u);
    }
    r[u]=t;
}
void dfs2(int u,int fa){
    //当p=u时，所有对应的q都会在之后的递归中产生贡献
    for(int q:pq[u]){
        add(l[q],1);
    }

    for(auto [b,id]:ab[u]){
        //根据题目条件,p->a,当a=u时,a的所有祖先节点都满足情况
        //第二个条件 b->q,只需要判断以b为根的子树中，p产生了多少个贡献
        ans[id] = sum(r[b])-sum(l[b]-1);
    }
    for(int v:edge[u]){
        if(v==fa)continue;
        dfs2(v,u);
    }
    //回溯
    for(int q:pq[u]){
        add(l[q],-1);
    }

}
signed main(){
    int n,m,Q;cin>>n>>m>>Q;
    for(int i=1;i<n;i++){
        int u,v;cin>>u>>v;
        edge[u].push_back(v);
        edge[v].push_back(u);
    }
    dfs(1,0);//子树关系转换成区间
    for(int i=0;i<m;i++){
        int p,q;cin>>p>>q;
        pq[p].push_back(q);
    }
    for(int i=0;i<Q;i++){
        int a,b;cin>>a>>b;
        ab[a].emplace_back(b,i);
    }
    dfs2(1,0);
    for(int i=0;i<Q;i++){
        cout<<ans[i]<<endl;
    }
    return 0;
}
```







### 公共祖先问题

#### 倍增求LCA

```c++
int dep[Maxn];//深度
int dp[Maxn][20];//第2^i个父节点
void dfs(int u,int fa){
    dep[u]=dep[fa]+1;
    dp[u][0] = fa;
    for(int i=1;i<20;i++)dp[u][i] = dp[dp[u][i-1]][i-1];
    for(int v:E[u]){
        if(v==fa)continue;
        dfs(v,u);
    }
}
int LCA(int u,int v){
    if(dep[u]<dep[v])return LCA(v,u);
    //同步到相同深度
    for(int i=19;~i;i--)if(dep[dp[u][i]]>=dep[v])u=dp[u][i];
    //向上倍增
    for(int i=19;~i;i--)if(dp[u][i]!=dp[v][i])u=dp[u][i],v=dp[v][i];
    return dp[u][0];
}
```



#### 欧拉序列

![img](../.vuepress/assets/1209138-20170729151024207-1541824194.png)

欧拉序列为8,5,9,5,8,4,6,15,6,7,6,4,10,11,10,16,3,16,12,16,10,2,10,4,8,1,14,1,13,1,88,5,9,5,8,4,6,15,6,7,6,4,10,11,10,16,3,16,12,16,10,2,10,4,8,1,14,1,13,1,8 。

```c++
void dfs(int u){
    dfn[++cnt]=u;
    for(int i=head[u];i;i=edge[i].next){
        int v=edge[i].to;
        dfs(v);
        dfn[++cnt]=u;
    }
}
```

#### 在线RMQ算法

dep[i]记录结点i的深度，seq[]记录欧拉序列,pos[i]用于记录第i个结点第一次出现在seq中的位置

`st[i][j]`代表在seq[i,i+2^j-1]中深度最小的序号,例如`st[i][0]`记录的是结点i的下标

```c++
#include <bits/stdc++.h>
using namespace std;
const int Maxn = 10005;
int head[Maxn], cnt = 0, seq[Maxn], pos[Maxn], vis[Maxn], dep[Maxn], tot = 0;
int ST[Maxn][20];
int n, a, b;

struct node {
	int to, next;
} edge[Maxn * Maxn];

void add(int u, int v) {
	edge[++cnt].to = v;
	edge[cnt].next = head[u];
	head[u] = cnt;
}

//从u点开始遍历
void dfs(int u, int d) {
	vis[u] = true;
	seq[++tot] = u;//遍历顺序
	pos[u] = tot; //首次出现的位置
	dep[tot] = d;
	for (int i = head[u]; i; i = edge[i].next) {
		int v = edge[i].to;
		if (vis[v])
			continue;
		dfs(v, d + 1);
		seq[++tot] = u;//走回父节点
		dep[tot] = d;
	}
}

void createST() {
//	ST[i][j]代表 区间[i,i+2^j-1]区间内深度最小的点
	for (int i = 1; i <= tot; i++) {
		ST[i][0] = i;//记录最小深度的下标
	}
	for (int j = 1; j <= log2(tot); j++) {
		for (int i = 1; i <= tot - (1 << j) + 1; i++) {
			if (dep[ST[i][j - 1]] < dep[ST[i + (1 << (j - 1))][j - 1]]) {
				ST[i][j] = ST[i][j - 1];
			} else {
				ST[i][j] = ST[i + (1 << (j - 1))][j - 1];
			}
		}
	}
}

int query(int x, int y) {
	int l = pos[x], r = pos[y];
	if (l > r)
		swap(l, r);
	int k = log2(r - l + 1);
	if (dep[ST[l][k]] < dep[ST[r - (1 << k) + 1][k]]) {
		return ST[l][k];
	} else {
		return ST[r - (1 << k) + 1][k];
	}
}
int main() {
	cin >> n;
	for (int i = 1; i < n; i++) {
		cin >> a >> b;
		add(a, b);
		add(b, a);
	}
	dfs(1, 0);
	createST();
	cin >> a >> b; //寻找a与b的公共祖先
	cout << seq[query(a, b)];
}
```



#### Tarjan算法

从初始点开始深度遍历，当u点完成子树所有点的遍历时，判断与之有查询的点v是否已被遍历

若 点v被遍历则利用查并集找到父节点是自身的结点

```c++
#include <bits/stdc++.h>
using namespace std;
vector<vector<int>> ve(10005);
vector<vector<pair<int, int>>> query(10005);
vector<int> ans(10005);
int n, fat[10005], vis[10005];
void add(int u, int v) {
	ve[u].push_back(v);
	ve[v].push_back(u);
}
int find(int x) {
	if (fat[x] != x) {
		fat[x] = find(fat[x]);
	}
	return fat[x];
}
void dfs(int u) {
	vis[u] = 1;
	for (int i = 0; i < ve[u].size(); i++) {
		if (vis[ve[u][i]])
			continue;
		dfs(ve[u][i]);
		fat[ve[u][i]] = u;
	}
	for (int i = 0; i < query[u].size(); i++) {
		int v = query[u][i].first;
		if (vis[v]) {
			ans[query[u][i].second] = find(v);
		}
	}
}
int main() {

	int a, b;
	cin >> n;
	for (int i = 1; i < n; i++) {
		cin >> a >> b;
		add(a, b);
	}
	for (int i = 1; i <= n; i++)
		fat[i] = i;
	cout << "---------" << endl;
	int m = 0;
	cin >> m;
	for (int i = 0; i < m; i++) {
		cin >> a >> b;
		query[a].push_back({b, i});
		query[b].push_back({a, i});
	}
	dfs(1);
	for (int i = 0; i < m; i++) {
		cout << ans[i] << endl;
	}
}
```



### 树上差分

点差分，cnt[u]++,cnt[v]++,cnt[lca]--,cnt[fat[lca]]--

边差分，cnt[u]++,cnt[v]++,cnt[lca]-=2

## 博弈论

### 巴什博弈

有n个物品，每次可以取1~m个物品，不能取物品者输

```c++
n=(m+1)*q+r
```

**r=0**时，无论先手如何取，先手取k个，后手可以取m+1-k个，后手总能将改变状态至(m+1)*(q-1)。**先手必败**

r!=0时，相当于先手取r个，将(m+1)*q的先手状态转移给后手，攻守易形了。**后手必败**

```c++
if(n%(m+1))cout<<"先手赢"<<endl;
else cout<<"后手赢"<<endl;
```



### 尼姆博弈

有n堆物品，记为a1,a2,a3,a4,a5....,an可以从任意一堆中取任意数量物品，不能取物品者输

```c++
a1^a2^a3^a4^a5^...^an=0
```

当满足异或为0，无论先手如何取，都将改变整体的异或状态，而后手可以将异或状态再次改变为0

也就是说每一次改变异或状态为0 的都是先手，最后一次异或为0 的状态是

```
0 0 0 0 0....0
```

先手无法再改变，**先手必败**。否则**后手必败**



例题

https://vjudge.csgrandeur.cn/contest/530522#problem/A



### 博弈问题的解决方式

#### ICG游戏求某方胜出

两个玩家轮流拿，每次可以拿1,2,k(或者更多)

通过打表寻找规律

```c++
//sg函数例题1:acwing 4005. 取石子游戏
//以下为该题的sg递推函数
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const int inf=0x3f;
int f[1110];//对于先手0表示必败1表示必胜 
string s[2]={"后手赢","先手赢"};
int main(){
	int n,k;
    cin>>n>>k;
    f[0]=0;
    f[1]=1;
    f[2]=1;
    f[k]=1;
    for(int i=3;i<k;i++){
    	if(!f[i-1]||!f[i-2])f[i]=1;
    	else f[i]=0;
	}
	for(int i=k+1;i<=n;i++){
		if(!f[i-1]||!f[i-2]||!f[i-k])f[i]=1;
		else f[i]=0;
	}
	for(int i=0;i<=n;i++)
    cout<<"n等于 "<<i<<"时, "<<s[f[i]]<<endl;
    return 0;
}
```

<img src="../.vuepress/assets/image-20230322101946677.png" alt="image-20230322101946677" style="zoom: 67%;float:left" />



#### 记忆化搜索+状态压缩

[464. 我能赢吗 - 力扣（Leetcode）](https://leetcode.cn/problems/can-i-win/description/)

```c++
class Solution {
public:
    unordered_map<int,bool> mp;
    bool canIWin(int maxChoosableInteger, int desiredTotal) {
        if((1+maxChoosableInteger)*maxChoosableInteger/2<desiredTotal)return false;
        return dfs(maxChoosableInteger,desiredTotal,0,0);    
    }

    bool dfs(int maxChoosableInteger,int desiredTotal,int usedNumber,int total){
        if(!mp.count(usedNumber)){
            bool res=false;
            for(int i=0;i<maxChoosableInteger;i++){
                if(((usedNumber >> i) & 1) == 0){
                    if(total+i+1>=desiredTotal || !dfs(maxChoosableInteger,desiredTotal,usedNumber|(1<<i),total+i+1)){
                        res=true;
                        break;
                    }
                }
            }
            mp[usedNumber]=res;
        }
        return mp[usedNumber];
    }
};
```



```c++
/****************************************
  *Author:  Mai
  *Contact:
  *Description:先对n的奇偶性进行分类讨论：
  * 1、奇数：任意一个奇数都可以分解为多个非2质数,设该数为z=x*y,z为奇数，x、y为z的非2质因数
  *     先手可以减去y,z-y=(x-1)*y,此时x-1为偶数，而y为奇数
  *     Bob的最优解是减去y,将z变成奇数,也就是(x-2)*y
  *     因为x,y都是奇数，所以当先手面临奇数局面时，无论减去x,还是y，都会将z变成偶数
  *     后手可以接着将z变成奇数
  *     直到先手遇到x*1或1*y的局面，先手必输
  * 2、2的奇数次幂必败，2的偶数次幂必胜
  *     2^i先手可以取2^(i-1)个，将其变成2^(i-1)
  *     或者取任意因子，将其变成非2次幂偶数，根据结论1，非2次幂偶数必胜，对手必胜则自身必败
  *     综上所述，当i为奇数时，先手必败，i为偶数时，后手必败
*****************************************/
#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
void solve(){
    ll n;
    cin>>n;
    //奇数先手必败
    if(n&1)cout<<"Bob"<<endl;
    //非2^i次偶数先手必胜
    else if(n-(n&-n))cout<<"Alice"<<endl;
    //2^i次的情况
    else{
        int cnt=1;
        while((1<<cnt)<n)cnt++;
        if(cnt&1)cout<<"Bob"<<endl;
        else cout<<"Alice"<<endl;
    }
}
int main() {
    int T;
    cin>>T;
    while(T--)solve();
}
```



# 高级数据结构

## 优先队列

### 子序列之和求第K大/小

之前一直有遇到这样题却没有记录，今天刚好写一下

[2386. 找出数组的第 K 大和 - 力扣（LeetCode）](https://leetcode.cn/problems/find-the-k-sum-of-an-array/)

非负数的情况下，**考虑维护(s,i)代表以a[i]结尾**，和为s的子序列。每次入堆的元素为(s+a[i+1],i+1)或(s+a[i+1]-a[i],i+1)，这样的考虑是完备的，空集为第1小，所以只需求到k-1小

加上负数主要的困难在于多个负数累加起来会变得更小，不满足全局单调性。记录负数和为total_neg，负数转正后排序，假设堆顶元素为s'为当前序列第k小，那么s'+total_neg就能还原成原子序列第k小

```c++
class Solution {
public:
    typedef pair<long long,int> PII;
    long long kSum(vector<int>& a, int k) {
        long long total = 0;
        for(int &x:a){
            if(x>=0)total+=x;
            else x=-x;
        }
        sort(a.begin(),a.end());
        priority_queue<PII,vector<PII>,greater<PII>> heap;
        heap.push({a[0],0});
        long long tmp=0;
        for(int i=2;i<=k;i++){
            auto [v,j] = heap.top();heap.pop();
            tmp = v;
            if(j==a.size()-1)continue;
            heap.push({v+a[j+1],j+1});
            heap.push({v+a[j+1]-a[j],j+1});
        }
        return total-tmp;
    }
};
```

[P1631 序列合并 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)](https://www.luogu.com.cn/problem/P1631)

```c++
#include<bits/stdc++.h>

#define int long long
#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)
using namespace std;
typedef pair<int, int> PII;
const int Maxn = 1e5 + 10;

struct Node {
    int a, b, sum;

    bool operator<(const Node o) const {
        return sum > o.sum;
    }
};

signed main() {
    int N;
    cin >> N;
    vector<int> a(N + 1), b(N + 1);
    for (int i = 1; i <= N; i++)cin >> a[i];
    for (int i = 1; i <= N; i++)cin >> b[i];

    priority_queue<Node> heap;//<sum,ai_pos,bi_pos>
    for (int i = 1; i <= N; i++)heap.push({i, 1,a[i] + b[1]});
    for(int i=1;i<=N;i++){
        auto u = heap.top();heap.pop();
        cout<<u.sum<<" ";
        heap.push({u.a,u.b+1,u.sum-b[u.b]+b[u.b+1]});
    }

    return 0;
}
```



## ST表

ST表可以快速获取某个区间内的最值，用`st[i][j]`表示从下标i开始长度为2^j次方的区间内的最值

与线段树相比，效率更高，但不能像线段树一样做修改操作

常见的ST表题型：

1. 区间差值问题

   寻找一维区间内的最大值和最小值的差

2. 最频繁值问题

   一般先预处理一张dp表，再根据dp表求ST表

3. 最小分段树

   面试官问题(HDU3486)

4. 二维区间最值差

   将二维问题转化为一维问题，在多个一维区间内找最值



### 区间最大值

```c++
#include <bits/stdc++.h>
using namespace std;

int main() {
	int n = 10;
	int array[] = {0, 5, 3, 7, 2, 12, 1, 6, 4, 8, 15};
	int ST[n+1][n+1];

	for (int i = 1; i <= 10; i++)
		ST[i][0] = array[i];

	int k = log2(n);
	/*
    	F[i][j]代表从i开始长度为2^j的区间内的最大值
    	F[i][j]=max(F[i][j-1],F[i+1<<(j-1)][j-1])
    */
	for (int j = 1; j <= k; j++) {
		for (int i = 1; i + (1 << j) - 1 <= n; i++) {
			ST[i][j] = max(ST[i][j - 1], ST[i + (1 << (j - 1))][j - 1]);
		}
	}

    //查询操作
	int l, r;
	while (cin >> l >> r) {
		k = log2(r - l + 1);
		cout << max(ST[l][k], ST[r - (1 << k) + 1][k]) << endl;
	}
	return 0;
}
```

POJ3368

```c++
#include <iostream>
#include <cmath>
using namespace std;
const int maxn = 50005;
int a[maxn], t[maxn][20], s[maxn][20];

int main() {
	ios::sync_with_stdio(false), cin.tie(0), cout.tie(0);

	int N, Q;
	cin >> N >> Q;

	for (int i = 1; i <= N; i++)
		cin >> a[i];

	int k = log((double)N) / log(2.0);

	for (int i = 1; i <= N; i++) {
		t[i][0] = s[i][0] = a[i];
	}

	for (int j = 1; j <= k; j++) {
		for (int i = 1; i <= N - (1 << j) + 1; i++) {
			t[i][j] = max(t[i][j - 1], t[i + (1 << (j - 1))][j - 1]);
			s[i][j] = min(s[i][j - 1], s[i + (1 << (j - 1))][j - 1]);
		}
	}
	int l, r;
	while (Q--) {
		cin >> l >> r;
		k = log(double(r - l + 1)) / log(2.0);
		cout << max(t[l][k], t[r - (1 << k) + 1][k]) - min(s[l][k], s[r - (1 << k) + 1][k]) << endl;
	}
	return 0;
}
```



### 二维区间差值问题

```c++
#include <iostream>
#include <cmath>
#include <algorithm>
using namespace std;

const int Maxn = 255;
int STmax[Maxn][Maxn][10], STmin[Maxn][Maxn][10], N, B, K;
int log2(int x) {
	return log(x * 1.0) / log(2.0);
}

void STinit() {
	for (int k = 1; k <= N; k++) {
		for (int j = 1; j <= log2(N); j++) {
			for (int i = 1; i <= N - (1 << j) + 1; i++) {
				STmax[k][i][j] = max(STmax[k][i][j - 1], STmax[k][i + (1 << (j - 1))][j - 1]);
				STmin[k][i][j] = min(STmin[k][i][j - 1], STmin[k][i + (1 << (j - 1))][j - 1]);
			}
		}
	}
}

int query(int x, int y) {
	int len = log2(B);
	int maxv = -1, minv = 300;
	int l = y, r = y + B - 1;
	for (int k = x; k < x + B; k++) {
		maxv = max(maxv, max(STmax[k][l][len], STmax[k][r - (1 << len) + 1][len]));
		minv = min(minv, min(STmin[k][l][len], STmin[k][r - (1 << len) + 1][len]));
	}
	return maxv - minv;
}

int main() {
	while (~scanf("%d%d%d", &N, &B, &K)) {

		for (int i = 1; i <= N; i++) {
			for (int j = 1; j <= N; j++) {
				scanf("%d", &STmax[i][j][0]);
				STmin[i][j][0] = STmax[i][j][0];
			}
		}
		STinit();
		int x, y;
		while (K--) {
			scanf("%d%d", &x, &y);
			printf("%d\n", query(x, y));
		}
	}
}
```



## 线段树

![线段树](../.vuepress/assets/%E7%BA%BF%E6%AE%B5%E6%A0%91-16998715761332.png)

### 线段树模板

#### 普通线段树

补充更多细节，优化了写法

```c++
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)
#define yes cout<<"YES"<<endl
#define no cout<<"NO"<<endl
typedef long long ll;
typedef pair<int,int> PII;
const int Maxn=1e5+10,INF=0x3f3f3f3f;
int max(int a,int b){return a>b?a:b;}
int min(int a,int b){return a>b?b:a;}

struct Tree {
    int l, r, val, lazy;
} T[Maxn << 2];
//向上传递
void pushup(int node) {
    T[node].val = T[node << 1].val + T[node << 1 | 1].val;
}

//向下传递
void pushdown(int node) {
    if (T[node].lazy) {
        Tree& root=T[node],&left=T[node<<1],&right=T[node<<1|1];
        left.lazy+=root.lazy,left.val+=(left.r-left.l+1)*root.lazy;
        right.lazy+=root.lazy,right.val+=(right.r-right.l+1)*root.lazy;
        root.lazy=0;
    }
}

//建树
void build(int node, int l, int r) {
    T[node]={l,r,0,0};
    if (l == r) {
        cin >> T[node].val;
        return;
    }
    int mid = (l + r) >> 1;
    build(node << 1, l, mid);
    build(node << 1 | 1, mid + 1, r);
    pushup(node);
}

//搜索范围[l,r]
int query(int node, int l, int r) {
    if (l <= T[node].l && T[node].r <= r) {
        return T[node].val;
    }
    pushdown(node);
    int mid = (T[node].r + T[node].l) >> 1, val = 0;
    if (l <= mid) {
        val = query(node << 1, l, r);
    }
    if (mid < r) {
        val += query(node << 1 | 1, l, r);
    }
    return val;
}

//修改范围[l,r]内的点增加k
void modify(int node, int l, int r, int k) {
    if (l <= T[node].l && T[node].r <= r) {
        T[node].lazy += k;
        T[node].val += (T[node].r - T[node].l + 1) * k;
        return;
    }
    pushdown(node);
    int mid = (T[node].r + T[node].l) >> 1;
    if (l <= mid) {
        modify(node << 1, l, r, k);
    }
    if (mid < r) {
        modify(node << 1 | 1, l, r, k);
    }
    pushup(node);
}

signed main() {
    ios;
    int N, M, op, x, y, z;
    cin >> N >> M;
    build(1, 1, N);
    while (M--) {
        cin >> op >> x >> y;
        if (op == 2) {
            cout << query(1, x, y) << endl;
        } else {
            cin >> z;
            modify(1, x, y, z);
        }
    }
}
```

#### 区间赋值

```c++
//3个操作:
//1: l r x 将[l,r]内的每个数都赋值为 x
//2: l r x 将[l,r]内的每个数都加上 x
//3: l r 求[l,r]内的最大值
//初始化时几个标记要清
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define lc(x) x<<1
#define rc(x) x<<1|1
int n,q;
const int inf=1145141919810;//特殊的值 
class xds{
	public:
	int a[1000005],tr[4000005],tag[4000005],mdf[4000005];//tag是表示增加的懒标记，mdf表示修改的懒标记 
	void push_tag(int x){
		tag[lc(x)]+=tag[x],tr[lc(x)]+=tag[x];
		tag[rc(x)]+=tag[x],tr[rc(x)]+=tag[x];
		tag[x]=0;
	}
	void push_mdf(int x){
		if(mdf[x]!=inf){//如果没有下传并且有标记，才会下传 
			tr[lc(x)]=mdf[lc(x)]=mdf[x],tag[lc(x)]=0;
			tr[rc(x)]=mdf[rc(x)]=mdf[x],tag[rc(x)]=0;
			mdf[x]=inf;
		}
	}
	void build(int x,int l,int r){
		mdf[x]=inf;
		if(l==r){
			tr[x]=a[l];
			return;
		}
		int mid=(l+r)>>1;
		build(lc(x),l,mid);build(rc(x),mid+1,r);
		tr[x]=max(tr[lc(x)],tr[rc(x)]); 
	}
	void add(int x,int l,int r,int ql,int qr,int v){
		if(ql<=l&&qr>=r){
			tr[x]+=v;tag[x]+=v;
			return;
		}
		push_mdf(x);//push_down次序如果错了，就会清空tag数组 
		push_tag(x);
		int mid=(l+r)>>1;
		if(ql<=mid) add(lc(x),l,mid,ql,qr,v);
		if(qr>mid) add(rc(x),mid+1,r,ql,qr,v);
		tr[x]=max(tr[lc(x)],tr[rc(x)]);
	}
	void modify(int x,int l,int r,int ql,int qr,int v){
		if(ql<=l&&qr>=r){
			tr[x]=mdf[x]=v;
			tag[x]=0;
			return;
		}
		push_mdf(x);
		push_tag(x);
		int mid=(l+r)>>1;
		if(ql<=mid) modify(lc(x),l,mid,ql,qr,v);
		if(qr>mid) modify(rc(x),mid+1,r,ql,qr,v);
		tr[x]=max(tr[lc(x)],tr[rc(x)]);
	}
	int query(int x,int l,int r,int ql,int qr){
		if(ql<=l&&qr>=r) return tr[x];
		push_mdf(x);
		push_tag(x);
		int mid=(l+r)>>1,sm=-inf;
		if(ql<=mid) sm=max(sm,query(lc(x),l,mid,ql,qr));
		if(qr>mid) sm=max(sm,query(rc(x),mid+1,r,ql,qr));
		return sm;
	}
} tre;
signed main(){
	scanf("%lld%lld",&n,&q);
	for(int i=1;i<=n;i++) scanf("%lld",&tre.a[i]);
	tre.build(1,1,n);
	for(int i=1,op,l,r,x;i<=q;i++){
		scanf("%lld%lld%lld",&op,&l,&r);
		if(op==1){
			scanf("%lld",&x);
			tre.modify(1,1,n,l,r,x);
		}else{
			if(op==2){
				scanf("%lld",&x);
				tre.add(1,1,n,l,r,x);
			}else{
				printf("%lld\n",tre.query(1,1,n,l,r));
			}
		}
	}
	return 0;
}
```





#### 多重懒标记

```
子节点的值=子节点的值*父节点的mul+子节点的区间*父节点的add
子节点的add=(子节点原add*父节点mul+父节点add)
子节点的mul=(子节点原mul*父节点mul)
根据题意推出多重懒标记的公式
```

Code

```c++
#include<bits/stdc++.h>

using namespace std;
#define int long long
#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)
#define yes cout<<"YES"<<endl
#define no cout<<"NO"<<endl
typedef long long ll;
typedef pair<int, int> PII;
const int Maxn = 1e5 + 10, INF = 0x3f3f3f3f;

int max(int a, int b) { return a > b ? a : b; }

int min(int a, int b) { return a > b ? b : a; }

int MOD;
struct Tree {
    int l, r, val;
    int lazyAdd, lazyMul;
} T[Maxn << 2];

//向上传递
void pushup(int node) {
    T[node].val = (T[node << 1].val + T[node << 1 | 1].val) % MOD;
}

//向下传递
void pushdown(int node) {
    Tree &root = T[node], &left = T[node << 1], &right = T[node << 1 | 1];
    //子节点的值=子节点的值*父节点的mul+子节点的区间*父节点的add
    left.val=(left.val*root.lazyMul+root.lazyAdd*(left.r-left.l+1))%MOD;
    left.lazyMul=(left.lazyMul*root.lazyMul)%MOD;
    left.lazyAdd=(left.lazyAdd*root.lazyMul+root.lazyAdd)%MOD;

    right.val=(right.val*root.lazyMul+root.lazyAdd*(right.r-right.l+1))%MOD;
    right.lazyMul=(right.lazyMul*root.lazyMul)%MOD;
    right.lazyAdd=(right.lazyAdd*root.lazyMul+root.lazyAdd)%MOD;

    root.lazyAdd=0,root.lazyMul=1;

}

//建树
void build(int node, int l, int r) {
    T[node] = {l, r, 0, 0, 1};
    if (l == r) {
        cin >> T[node].val;
        return;
    }
    int mid = (l + r) >> 1;
    build(node << 1, l, mid);
    build(node << 1 | 1, mid + 1, r);
    pushup(node);
}

//搜索范围[l,r]
int query(int node, int l, int r) {
    if (l <= T[node].l && T[node].r <= r) {
        return T[node].val;
    }
    pushdown(node);
    int mid = (T[node].r + T[node].l) >> 1, val = 0;
    if (l <= mid) {
        val = (val + query(node << 1, l, r)) % MOD;
    }
    if (mid < r) {
        val = (val + query(node << 1 | 1, l, r)) % MOD;
    }
    return val;
}

//修改范围[l,r]内的点增加k
void modifyAdd(int node, int l, int r, int k) {
    if (l <= T[node].l && T[node].r <= r) {
        T[node].lazyAdd = (T[node].lazyAdd + k) % MOD;
        T[node].val = (T[node].val + (T[node].r - T[node].l + 1) * k) % MOD;
        return;
    }
    pushdown(node);
    int mid = (T[node].r + T[node].l) >> 1;
    if (l <= mid) {
        modifyAdd(node << 1, l, r, k);
    }
    if (mid < r) {
        modifyAdd(node << 1 | 1, l, r, k);
    }
    pushup(node);
}

//修改范围[l,r]内的点乘k
void modifyMul(int node, int l, int r, int k) {
    if (l <= T[node].l && T[node].r <= r) {
        T[node].lazyAdd = (T[node].lazyAdd * k) % MOD;
        T[node].lazyMul = (T[node].lazyMul * k) % MOD;
        T[node].val = (T[node].val * k) % MOD;
        return;
    }
    pushdown(node);
    int mid = (T[node].r + T[node].l) >> 1;
    if (l <= mid) {
        modifyMul(node << 1, l, r, k);
    }
    if (mid < r) {
        modifyMul(node << 1 | 1, l, r, k);
    }
    pushup(node);
}

signed main() {
    ios;
    int N, M, op, l, r, k;
    cin >> N >> M >> MOD;
    build(1, 1, N);
    while (M--) {
        cin >> op >> l >> r;
        if (op == 3)cout << query(1, l, r) << endl;
        else {
            cin >> k;
            if (op == 1)modifyMul(1, l, r, k);
            else modifyAdd(1, l, r, k);
        }
    }
}
```



#### 01线段树

```c++
#include<bits/stdc++.h>
using namespace std;
#define int long long
typedef long long ll;
const int Maxn=2e5+10;
int A[Maxn];
string s;
struct Tree{
    int l,r,val0,val1,lazy;
}T[Maxn<<4];

void pushup(int node){
    T[node].val0=T[node<<1].val0^T[node<<1|1].val0;
    T[node].val1=T[node<<1].val1^T[node<<1|1].val1;
}

void pushdown(int node){
    if(T[node].lazy){
        T[node].lazy=0;
        Tree& left=T[node<<1];
        Tree& right=T[node<<1|1];
        left.lazy^=1;
        swap(left.val0,left.val1);
        right.lazy^=1;
        swap(right.val0,right.val1);
    }
}

void build(int node,int l,int r){
    T[node]={l,r,0,0,0};
    if(l==r){
        if(s[l]=='0')T[node].val0+=A[l];
        else T[node].val1+=A[l];
        return;
    }
    int mid=(l+r)>>1;
    build(node<<1,l,mid);
    build(node<<1|1,mid+1,r);
    pushup(node);
}

int query(int node,int l,int r,int type){
    if(l<=T[node].l&&T[node].r<=r){
        return type?T[node].val1:T[node].val0;
    }
    pushdown(node);
    int mid=(T[node].l+T[node].r)>>1,val=0;
    if(l<=mid)val+= query(node<<1,l,r,type);
    if(mid<r)val+= query(node<<1|1,l,r,type);
    return val;
}

void modify(int node,int l,int r){
    if(l<=T[node].l&&T[node].r<=r){
        T[node].lazy^=1;
        swap(T[node].val0,T[node].val1);
        return;
    }
    pushdown(node);
    ll mid=(T[node].r+T[node].l)>>1;
    if(l<=mid)modify(node<<1,l,r);
    if(mid<r)modify(node<<1|1,l,r);
    pushup(node);
}

signed main(){
    int t;cin>>t;
    while(t--){
        int n;cin>>n;
        for(int i=1;i<=n;i++)cin>>A[i];
        cin>>s;
        s=" "+s;
        build(1,1,n);
        int q;cin>>q;
        while(q--){
            int op;cin>>op;
            if(op==1){
                int l,r;cin>>l>>r;
                modify(1,l,r);
            }else{
                int x;cin>>x;
                cout<<query(1,1,n,x)<<" ";
            }
        }
        cout<<endl;
    }
    return 0;
}
```



#### 势能线段树

对于像区间开根号、区间位运算这样的区间操作来说，其**对每个结点的修改量是在一定程度上是由叶结点本身现有的值来决定的**，那么就很难实现lazy的合并和对区间值的直接更新，这些操作对每个结点的操作次数都是有一个隐含的“上限”的，就像有一个固定的“势能“，只要超过了这个上限值，相应的操作便会“退化”失效，也就是势能为0的情况。而当势能为0的结点连成区间时，我们便可以一口气规避掉在这个区间上的所有操作。

https://www.luogu.com.cn/problem/CF438D（区间取模，区间查询，单点修改）

```c++
#include<bits/stdc++.h>
#define int long long
#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)
using namespace std;
typedef pair<int,int> PII;
const int Maxn=1e5+10;

struct Node{
    int l,r,s,mx;
}tr[Maxn<<2];

void pushUp(int node){
    tr[node].mx = max(tr[node<<1].mx,tr[node<<1|1].mx);
    tr[node].s= tr[node<<1].s+tr[node<<1|1].s;
}
void build(int node,int l,int r){
    tr[node] ={l,r,0,0};
    if(l==r){
        cin>>tr[node].s;
        tr[node].mx = tr[node].s;
        return;
    }
    int mid=(l+r)>>1;
    build(node<<1,l,mid);
    build(node<<1|1,mid+1,r);
    pushUp(node);
}
void update(int node,int l,int r,int mod){
    if(tr[node].l==tr[node].r){
        tr[node].s %=mod;
        tr[node].mx%=mod;
        return;
    }
    int mid=(tr[node].l+tr[node].r)>>1;
    if(l<=mid && tr[node<<1].mx>=mod)update(node<<1,l,r,mod);
    if(mid<r && tr[node<<1|1].mx>=mod)update(node<<1|1,l,r,mod);
    pushUp(node);
}
//单点修改为x
void modify(int node,int l,int r,int x){
    if(tr[node].l==l && tr[node].r==r){
        tr[node].s = tr[node].mx=x;
        return;
    }
    int mid=(tr[node].l+tr[node].r)>>1;
    if(l<=mid)modify(node<<1,l,r,x);
    if(mid<r)modify(node<<1|1,l,r,x);
    pushUp(node);
}
int query(int node,int l,int r){
    if(l<=tr[node].l && tr[node].r<=r)return tr[node].s;
    int mid=(tr[node].l+tr[node].r)>>1,res=0;
    if(l<=mid)res+= query(node<<1,l,r);
    if(mid<r)res+= query(node<<1|1,l,r);
    return res;
}

signed main(){
    ios;
    int n,m;cin>>n>>m;
    build(1,1,n);
    while(m--){
        int op,l,r,x;cin>>op;
        if(op==1){
            cin>>l>>r;
            cout<<query(1,l,r)<<endl;
        }else if(op==2){
            cin>>l>>r>>x;
            update(1,l,r,x);
        }else{
            cin>>l>>x;
            modify(1,l,l,x);
        }
    }
    return 0;
}
```





### 扫描线

- 每个节点对应一个线段，相邻节点分别对应[x,y],[y,z]两个连续区间
- 向下传递时，mid不再+1

![img](../.vuepress/assets/v2-16a335e0106d0e5d1e73ba519aae0b60_720w-16995961816695.webp)

```c++
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)
typedef long long ll;
const int Maxn=1e6+10;
int yy[Maxn<<1];//离散化后的值
struct Line{
    int x,down_y,up_y,tag;
    bool operator < (const Line l)const{
        return x<l.x;
    }
}line[Maxn<<1];

struct Node{
    int l,r,cover,length;
}tr[Maxn<<2];

void pushUp(int node){
    if(tr[node].cover)tr[node].length=yy[tr[node].r]-yy[tr[node].l];
    else if(tr[node].l+1==tr[node].r)tr[node].length=0;
    else tr[node].length=tr[node<<1].length+tr[node<<1|1].length;
}

void build(int node,int l,int r){
    tr[node]={l,r,0,0};
    if(l+1==r)return;
    int mid=(l+r)>>1;
    build(node<<1,l,mid);
    build(node<<1|1,mid,r);
    pushUp(node);
}

void update(int node,int l,int r,int tag){
    if(tr[node].l>r || tr[node].r<l)return;
    if(l<=tr[node].l && tr[node].r<=r){
        tr[node].cover+=tag;
        pushUp(node);
        return;
    }
    if(tr[node].l+1==tr[node].r)return;
    int mid=(tr[node].l+tr[node].r)>>1;
    if(l<=mid)update(node<<1,l,r,tag);
    if(mid<r)update(node<<1|1,l,r,tag);
    pushUp(node);
}

signed main(){
    int n,cnt=0;cin>>n;
    for(int i=1;i<=n;i++){
        int x1,y1,x2,y2;cin>>x1>>y1>>x2>>y2;
        line[++cnt]={x1,y1,y2,1};
        yy[cnt]=y1;
        line[++cnt]={x2,y1,y2,-1};
        yy[cnt]=y2;
    }
    sort(line+1,line+cnt+1);
    sort(yy+1,yy+cnt+1);

    int len = unique(yy+1,yy+cnt+1)-yy-1;
    build(1,1,len);
    int ans=0,y1,y2;
    for(int i=1;i<=cnt;i++){
        ans+=tr[1].length*(line[i].x-line[i-1].x);
        y1= lower_bound(yy+1,yy+len+1,line[i].down_y)-yy;
        y2= lower_bound(yy+1,yy+len+1,line[i].up_y)-yy;
        update(1,y1,y2,line[i].tag);
    }
    cout<<ans<<endl;
    return 0;
}
```



### 二维偏序

$对于矩形(x_1,y_1),(x_2,y_2)$其二维前缀和为

$sum[x_2][y_2] - sum[x_1-1][y_2] - sum[x2][y_1-1]+sum[x_1-1][y_1-1]$

整个过程就是

- 将所有点按横坐标排序
- 将所有矩形询问拆成四个区域，即四次询问，所有询问按 $x$ 轴排序
- 遍历询问，设当前横坐标为 $x$，保证 $x ′ ≤ x$ 的所有点的纵坐标已加入树状数组，在树状数组中查询答案，贡献加至原询问处
- 输出每个原询问的答案

```c++
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)
typedef long long ll;
const int Maxn=1e7+10;

int tr[Maxn];
int lowbit(int x){return x&-x;}
void add(int x){for(;x<Maxn;x+=lowbit(x))tr[x]++;}
int sum(int x){
    int res=0;
    for(;x>0;x-=lowbit(x))res+=tr[x];
    return res;
}
signed main(){
    ios;
    int n,m;cin>>n>>m;
    vector<pair<int,int>> point;//<x,y>
    vector<tuple<int,int,int,int>> query;//<x,y,d,id>
    for(int i=0,x,y;i<n;i++){
        cin>>x>>y;
        x++,y++;
        point.emplace_back(x,y);
    }
    //按x排序
    std::sort(point.begin(), point.end());

    for(int i=0,a,b,c,d;i<m;i++){
        cin>>a>>b>>c>>d;
        a++,b++,c++,d++;
        query.emplace_back(a-1,b-1,1,i);//左下角
        query.emplace_back(a-1,d,-1,i);//左上角
        query.emplace_back(c,b-1,-1,i);//右下角
        query.emplace_back(c,d,1,i);//右上角
    }

    std::sort(query.begin(), query.end());
    int cur=0;
    vector<int> ans(m);
    for(auto [x,y,d,id]:query){
        while(cur<n && point[cur].first <=x){
            add(point[cur].second);
            cur++;
        }
        ans[id] += d*sum(y);
    }
    for(int i=0;i<m;i++)cout<<ans[i]<<endl;
    return 0;
}
```



## 树状数组

cin和cout容易wa

目前能用树状数组解决的问题：

1. 一维/二维区间求和，单点修改
2. 求逆序数
3. 树状数组在树上的应用

### 求逆序对

```c++
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const int Maxn=5e5+10;

inline int read() {
    char ch=getchar();
    int x=0,m=1;
    while(!isdigit(ch)){
        if (ch=='-') m=-1;
        ch=getchar();
    }
    while(isdigit(ch)){
        x=x*10+ch-'0';
        ch=getchar();
    }
    return x*m;
}
ll c[Maxn],m,n,A[Maxn],B[Maxn],hx[Maxn];
ll lowbit(ll x){
    return x&(-x);
}
ll sum(ll x){
    ll res=1;
    for(;x>0;x-= lowbit(x))res+=c[x];
    return res;
}
void add(ll x){
    for(;x<=n;x+= lowbit(x))c[x]++;
}

int get_id(ll x){
    return lower_bound(B,B+m,x)-B+1;
}

int main(){
    ll ans=0,x;
    n=read();
    for(int i=0;i<n;i++){
        A[i]=read();
        B[i]=A[i];
    }
    sort(B,B+n);
    m=unique(B,B+n)-B;

    for(int i=0;i<n;i++){
        x= get_id(A[i]);
        ans+=(sum(m)-sum(x-1)-hx[x]);
        add(x);
        hx[x]++;
    }
    cout<<ans<<endl;
    return 0;
}
```





### 一维树状数组

<img src="../.vuepress/assets/image-20221219125551527.png" alt="image-20221219125551527" style="zoom:50%;" />

lowbit(x)表示c[i]存储值的区间长度，比如c[4]的区间长度为4

**前驱(左子树):**c[i-lowbit(x)]是c[i]的直接前驱，求sum(x)只需要把x的所有前驱加起来即可

**后继(父节点):**c[i+lowbit(x)]是c[i]的父节点，每次更新c[i]都需要把c[i]的父节点一起更新

#### [普通]单点修改，区间查询

**对A[i]进行单点修改时，仅会对c[i]及其父节点有影响，所以可以直接从c[i]开始进行更新**

```c++
int a[15],c[15],n;
int lowbit(int i){
    return (-i)&i;
}
//求和不断寻找左子树
int sum(int i){
    int res=0;
    for(;i>0;i-= lowbit(i)){
        res+=c[i];
    }
    return res;
}
//单点修改不断更新父节点
void add(int x,int k){
    for(int i=x;i<=n;i+= lowbit(i)){
        c[i]+=k;
    }
}

void solve(){
    cin>>n;
    for(int i=1;i<=n;i++){
        cin>>a[i];
        add(i,a[i]);
    }
}
```



#### [差分]区间修改，单点查询

对于差分的详解

https://blog.csdn.net/qq_52466006/article/details/120978631

https://blog.csdn.net/fsahfgsadhsakndas/article/details/52650026

差分数组b[i]=a[i]-a[i-1],用树状数组c[]维护数组b的前缀和

a[i]=Σbx (i<=x<=j)=sum(i)

```c++
int sum(int i){
	int res=0;
	for(;i>0;i-=lowbit(i))res+=c[i];
	return res;
}
```

关于差分数组中a[i]~a[j]区间增加K可以转化为差分数组b[i]+k,b[j+1]-k的证明

https://blog.csdn.net/qq_44786250/article/details/100056975

<img src="../.vuepress/assets/image-20221220202243243.png" alt="image-20221220202243243" style="zoom: 67%;" />

所以进行区间修改[i~j]+K,可以直接使用add(i,k),add(j+1,-k)完成修改

在实际写代码的时候b[i]数组可以省略,直接构建树状数组

```c++
for(int i=1;i<=n;i++){
	cin>>a[i];
	add(i,a[i]-a[i-1]);
}

while(m--){
    cin>>x>>y>>k;
    add(x,k),add(y+1,k);
}
```

【洛谷】树状数组2

```c++
/****************************************
  *Author:  Mai
  *Contact:
  *Description:树状数组进行区域修改需要用到差分数组,设b[x]=a[i]-a[i-1]
  我们构建一个树状数组c[]
   所以我们可以得出以下公式：
   单点查询：a[i]=b[1]+b[2]+b[3]+...+b[i]=sum(i)
   区域修改：Σa[x]+k(i<=x<=j) 等价于 b[i]+k,b[j+1]+k
   即 add(i,k),add(j+1,-k)
*****************************************/
#include <bits/stdc++.h>
#define syncIO ios::sync_with_stdio(false),cin.tie(0),cout.tie(0);
#define sc scanf
#define ptf printf
using namespace std;
typedef long long ll;
const int maxn=1e5+10;
ll c[5*maxn],a[5*maxn];
int N,M;
int lowbit(int x){
    return x&(-x);
}

ll sum(int x){
    ll res=0;
    for(;x>0;x-= lowbit(x))res+=c[x];
    return res;
}
void add(int x,int k){
    for(;x<=N;x+= lowbit(x)){
        c[x]+=k;
    }
}
void solve(){
    int x,y,k,ch;
    sc("%d%d",&N,&M);
    for(int i=1;i<=N;i++){
        sc("%lld",&a[i]);
        add(i,a[i]-a[i-1]);
    }
    while(M--){
        sc("%d",&ch);
        if(ch==1){
            sc("%d%d%d",&x,&y,&k);
            add(x,k),add(y+1,-k);
        }else if(ch==2){
            sc("%d",&x);
            ptf("%lld\n",sum(x));
        }
    }
}

int main() {
    solve();
}
```



#### [差分变形]区间修改，区间查询

b[i]=a[i]-a[i-1]，则a[i]=Σbx (i<=x<=j)=sum(i)

a[1]+a[2]+a[3]+...+a[n]

=(b[1])+(b[1]+b[2])+(b[1]+b[2]+b[3])+...+(b[1]+b[2]+...+b[n])

=n*b[1]+ (n-1) *b[2]+...(n-i) * b[i]+...+1*b[n]

=n*(b[1]+b[2]+b[3]+...+b[n])-(0 *b[1]+1 *b[2]+2 *b[3]+...+(n-1) * b[n])

**b[i]~b[n]可以通过sum(i)快速求出前缀和,但是(i-1)*b[i]不能直接求出**

令b2[i]=(i-1)*b[i],构建树状数组c2维护b2的前缀和

那么Σai=n*sum(i)-sum2(i);

```c++
POJ3468
/****************************************
  *Author:  Mai
  *Contact:
  *Description:
*****************************************/
#include <bits/stdc++.h>
#define syncIO ios::sync_with_stdio(false),cin.tie(0),cout.tie(0)
#define int long long
#define sc scanf
#define ptf printf
#define mem(a,b) memset(a,b,sizeof(b))
#define lcm(x,y) (x)*(y)/(__gcd((x),(y)))
using namespace std;
typedef long long ll;
const int maxn=1e5+10;
int c[maxn],c2[maxn];
int lowbit(int x){return x&(-x);}
void add(int x,int k){
    int n=x-1;
    for(;x<maxn;x+= lowbit(x)){
        c[x]+=k;
        c2[x]+=n*k;
    }
}
void add(int x,int y,int k){
    add(x,k),add(y+1,-k);
}
int sum(int x){
    int res=0,n=x;
    for(;x>0;x-=lowbit(x)){
        res+=(n*c[x]-c2[x]);
    }
    return res;
}
int sum(int x,int y){
    return sum(y)-sum(x-1);
}

void solve(){
    int N,Q,a=0,b,k;
    sc("%lld%lld",&N,&Q);
    for(int i=1;i<=N;i++){
        sc("%lld",&b);
        add(i,b-a);
        a=b;
    }
    char ch;
    while(Q--){
        sc(" %c%lld%lld",&ch,&a,&b);
        if(ch=='Q'){
            ptf("%lld\n",sum(a,b));
        }else{
            sc("%lld",&k);
            add(a,b,k);
        }
    }
}

signed main() {
    syncIO;
    solve();
}
```

#### [最值]维护区间最值

```c++
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const int Maxn=1e5+10;
ll Trie[Maxn],dp[Maxn],diff[Maxn],a[Maxn],cnt;
int lowbit(int x){return x&(-x);}
void add(int x,ll k){
    for(;x<Maxn;x+= lowbit(x))Trie[x]=max(k,Trie[x]);
}
ll query(int x){
    ll res=0;
    for(;x>0;x-= lowbit(x))res=max(res,Trie[x]);
    return res;
}
int get_id(ll x){
    return lower_bound(diff,diff+cnt,x)-diff+1;
}
int main(){
    int n;cin>>n;
    for(int i=1;i<=n;i++){
        cin>>a[i];
        diff[i-1]=a[i];
    }
    sort(diff,diff+n);
    cnt=unique(diff,diff+n)-diff;
    ll ans=0;
    for(int i=1;i<=n;i++){
        a[i]= get_id(a[i]);
        dp[i]=diff[a[i]-1]+ query(a[i]-1);
        ans=max(ans, dp[i]);
        add(a[i],dp[i]);
    }
    cout<<ans;
    return 0;
}
```



### 二维树状数组

```c++
void add(int x,int y,int k){
    for(int i=x;i<=N;i++){
        for(int j=x;j<=N;j++){
            c[i][j]+=k;
        }
    }
}
int sum(int x,int y){
	int res=0;
	for(int i=x;i>0;i-=lowbit(i)){
		for(int j=y;j>0;j-=lowbit(j)){
			res+=c[i][j];
		}
	}
    return res;
}
int sum(int x1,int y1,int x2,int y2){
    return sum(x2,y2)-sum(x1-1,y2)-sum(x2,y1-1)+sum(x1-1,y1-1);
}
```

#### 差分变形

`b[i][j]=a[i][j]-a[i-1][j]-a[i][j-1]+a[i-1][j-1]`

单点查询

```c++
cin>>x;
sum(x);
```

区间修改

<img src="../.vuepress/assets/%E4%BA%8C%E7%BB%B4%E5%B7%AE%E5%88%86%E6%95%B0%E7%BB%84.png" style="zoom:50%;float:left" />

```c++
void add(int a,int b,int x,int y,int k){
    add(a,b,k);
    add(x+1,b,-k),add(a,y+1,-k);
    add(x+1,y+1,k);
}
```



## 字典树

### 经典字典树

<img src="../.vuepress/assets/%E5%AD%97%E5%85%B8%E6%A0%91.png" style="zoom:50%;" />

字符串大小为M，数量为N，字典树的大小一般要开M*N

数组写法

```c++
const int maxn=1e6+10;
int Trie[maxn][27],e[maxn],tot,ids;
string key[maxn];
void insert(string s,int id){
    int row=0;
    for(int i=0;i<s.size();i++){
        int ch-s[i]-'a';
        if(!Trie[row][ch]){
            Trie[row][ch]=++tot;
        }
        row=Trie[row][ch];
    }
    e[row]=id;
}
int search(string s){
    int row=0;
    for(int i=0;i<s.size();i++){
        if(!Trie[row][s[i]-'a'])return 0;
        row=Trie[row][s[i]-'a'];
    }
    return e[row];
}
```



ICPC杭州站 K题

使用字典树预处理公共前缀后第一个字符的对数数量，从而求出逆序字符串

```c++
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const int maxn=1e5;
const int N=26;
ll f[N][N],add;//某个公共前缀之后的字母对数
ll Trie[maxn*N][N],cnt[maxn*N],tot;

void insert(string s){
    int row=0;
    for(int i=0;i<s.size();i++){
        int ch=s[i]-'a';
        //寻找本层早于该字母ch出现的字母
        for(int j=0;j<N;j++){
            if(ch!=j&&Trie[row][j]){
                f[ch][j]+=cnt[Trie[row][j]];
            }
        }
        if(!Trie[row][ch]){
            Trie[row][ch]=++tot;
        }
        row=Trie[row][ch];
        cnt[row]++;
    }
    //真前缀情况
    for(int i=0;i<N;i++){
        if(Trie[row][i])add+=cnt[Trie[row][i]];
    }
}

int main(){
    int n,q;cin>>n>>q;
    for(int i=0;i<n;i++){
        string s;cin>>s;
        insert(s);
    }
    while(q--){
        string s;
        cin>>s;
        ll ans=add;
        for(int i=0;i<N;i++){
            for(int j=i+1;j<N;j++){
                ans+=f[s[i]-'a'][s[j]-'a'];
            }
        }
        cout<<ans<<endl;
    }
}
```



### 01字典树

```c++
#include<bits/stdc++.h>
using namespace std;
#define int long long
const int Maxn=3e5+10;
int Trie[33*Maxn][2],cnt[33*Maxn],tot;
int s[Maxn];
void insert(int x,int d){
    int row=0;
    for(int i=30;i>=0;i--){
        int c=(x>>i)&1;
        if(!Trie[row][c])Trie[row][c]=++tot;
        row=Trie[row][c];
        cnt[row]+=d;
    }
}

int query(int x){
    int row=0,res=0;
    for(int i=30;i>=0;i--){
        int c=(x>>i)&1;
        if(cnt[Trie[row][c]]){
            res=(res<<1);
            row=Trie[row][c];
        }else{
            res=(res<<1)+1;
            row=Trie[row][c^1];
        }
    }
    return res;
}

signed main(){
    int N,x;cin>>N;
    for(int i=1;i<=N;i++)cin>>s[i];
    for(int i=1;i<=N;i++){
        cin>>x;
        insert(x,1);
    }
    for(int i=1;i<=N;i++){
        x= query(s[i]);
        cout<<x<<" ";
        insert(x^s[i],-1);
    }
    return 0;
}
```







## 可持久化线段树

### 普通可持久化线段树

可持久化线段树的思想，是每次修改都新增一个根节点root[i],需要回溯版本时，从该root[i]进入，修改时需要维护两个指针，一个指向上一版本pre，一个指向当前版本cur,当前版本需要先拷贝上一版本的数据，在此基础上进行修改，从root[i]进入时，会走到cur节点而不会走到pre节点

```c++
#include<bits/stdc++.h>
using namespace std;
#define lc(x) T[x].lc
#define rc(x) T[x].rc
#define tr(x) T[x]
#define val(x) T[x].val
#define lazy(x) T[x].lazy
#define ios ios::sync_with_stdio(false),cin.tie(nullptr),cout.tie(nullptr)
typedef long long ll;
const int Maxn=1e5+10;

struct Node{
    ll val,lazy;
    int lc,rc;
}T[Maxn*32];
int root[Maxn],cnt=0;

void build(int &now,int l,int r){
    now=++cnt;
    if(l==r){
        cin>>val(now);
        return;
    }
    int mid=(l+r)>>1;
    build(lc(now),l,mid);
    build(rc(now),mid+1,r);
    val(now)=val(lc(now))+val(rc(now));
}

void modify(int pre,int &now,ll d,int cl,int cr,int l,int r){
    now=++cnt,tr(now)=tr(pre);
    if(l<=cl && cr<=r){
        lazy(now)+=d;
    }else{
        int mid=(cl+cr)>>1;
        if(l<=mid)modify(lc(pre),lc(now),d,cl,mid,l,r);
        if(mid<r)modify(rc(pre),rc(now),d,mid+1,cr,l,r);
    }

    //目标区间[1,4],当前区间[2,6],有效更新区间为[2,4],更新值为(4-2+1)*d;
    val(now)=val(pre)+(min(r,cr)-max(l,cl)+1)*d;
}

ll query(int now,int cl,int cr,int l,int r,ll lazy){
    if(l<=cl && cr<=r)return val(now)+lazy*(cr-cl+1);
    int mid=(cl+cr)>>1;
    ll res=0;
    lazy+=lazy(now);
    if(l<=mid)res+= query(lc(now),cl,mid,l,r,lazy);
    if(mid<r)res+= query(rc(now),mid+1,cr,l,r,lazy);
    return res;
}

signed main(){
    ios;
    int N,M;
    while(cin>>N>>M){
        int t=0;
        cnt=0;
        build(root[t],1,N);
        while(M--){
            char op;cin>>op;
            if(op=='C'){
                int l,r,d;cin>>l>>r>>d;
                t++;
                modify(root[t-1],root[t],d,1,N,l,r);
            }else if(op=='Q'){
                int l,r;cin>>l>>r;
                cout<<query(root[t],1,N,l,r,0)<<endl;
            }else if(op=='H'){
                int l,r,ti;cin>>l>>r>>ti;
                cout<<query(root[ti],1,N,l,r,0)<<endl;
            }else cin>>t;
        }
        cout<<endl;
    }
    return 0;
}
```





### 可持久化权值线段树(主席树)

![43583016786686502](../.vuepress/assets/43583016786686502.png)

![82706116786694272](../.vuepress/assets/82706116786694272-16786722086762.png)

![131612716786696782](../.vuepress/assets/131612716786696782-16786722124343.png)

![212769416786718922](../.vuepress/assets/212769416786718922-16786722163984.png)



主席树利用了权值线段树和可持久化线段树的思想，在动态开店



对于权值线段树，区间[l,r]的最大值，可以通过子节点数量来判断，如果lc(x)的数量>k,那么第k大值就在左子树中

`tr(lc(x)).s>=k`

转换成主席树 `tr(lc(y))-tr(lc(x))`,x代表第l-1棵主席树，y代表第r棵主席树

```c++
#include<bits/stdc++.h>
using namespace std;
#define lc(x) tr[x].ch[0]
#define rc(x) tr[x].ch[1]
typedef long long ll;
const int Maxn=2e5+10;
vector<int> ve;
int a[Maxn],root[Maxn],idx;
struct Node{
    int ch[2];
    int s;
}tr[Maxn*22];

void build(int& x,int l,int r){
    x=++idx;
    if(l==r)return;
    int mid=(l+r)>>1;
    build(lc(x),l,mid);
    build(rc(x),mid+1,r);
}

void insert(int x,int& y,int l,int r,int v){
    y=++idx;tr[y]=tr[x];tr[y].s++;
    if(l==r)return;
    int mid=(l+r)>>1;
    if(v<=mid)insert(lc(x),lc(y),l,mid,v);
    else insert(rc(x),rc(y),mid+1,r,v);
}

int query(int x,int y,int l,int r,int k){
    if(l==r)return l;
    int mid=(l+r)>>1;
    int s=tr[lc(y)].s-tr[lc(x)].s;
    if(k<=s)return query(lc(x),lc(y),l,mid,k);
    else return query(rc(x),rc(y),mid+1,r,k-s);
}

int getId(int x){
    return lower_bound(ve.begin(),ve.end(),x)-ve.begin()+1;
}

int main(){
    int n,m;cin>>n>>m;
    for(int i=1;i<=n;i++){
        cin>>a[i];
        ve.push_back(a[i]);
    }
    sort(ve.begin(),ve.end());
    ve.erase(unique(ve.begin(),ve.end()),ve.end());
    for(int i=1;i<=n;i++){
        insert(root[i-1],root[i],1,ve.size(), getId(a[i]));
    }
    int l,r,k;
    while(m--){
        cin>>l>>r>>k;
        int id= query(root[l-1],root[r],1,ve.size(),k)-1;
        cout<<ve[id]<<endl;
    }
    return 0;
}
```





# 动态规划

## 背包问题

### 01背包

f[l]由f[l-w]推导，所以得从后往前

```c++
for (int i = 1; i <= n; i++)
  for (int l = W; l >= w[i]; l--)
    f[l] = max(f[l], f[l - w[i]] + v[i]);
```



### 完全背包

因为$dp[i][j]=max(dp[i-1][j],dp[i-1][j-v[i]]+w[i],dp[i-1][j-2\times v[i]+2\times w[i],...)$

并且$dp[i][j-v]=max(dp[i-1][j-v],dp[i-1][j-v[i]]+w[i],dp[i-1][j-2\times v[i]+2\times w[i],...)$

所以$dp[i][j]=max(dp[i-1][j],dp[i][j-v]+w)$

再优化成一维 dp[i]=max(dp[i],dp[i-v]+w);

dp[i]是最优解的前提是dp[i-v]已是最优解,所以推导应从前往后

```c++
#include<bits/stdc++.h>
using namespace std;
const int N=1010;
int dp[N][N];
int main(){
    int n,m;cin>>n>>m;
    for(int i=1;i<=n;i++){
        int v,w;cin>>v>>w;
        for(int j=1;j<=m;j++){
            dp[i][j]=dp[i-1][j];
            if(j>=v)dp[i][j]=max(dp[i][j],dp[i][j-v]+w);
        }
    }
    cout<<dp[n][m];
}
```

### 多重背包

```c++
#include<bits/stdc++.h>
using namespace std;
const int N=110;
int dp[N][N];
int main(){
    int n,m;cin>>n>>m;
    for(int i=1;i<=n;i++){
        int s,v,w;cin>>v>>w>>s;
        for(int j=1;j<=m;j++){
            for(int k=0;k<=s&&k<=j/v;k++){
                dp[i][j]=max(dp[i][j],dp[i-1][j-k*v]+k*w);
            }
        }
    }
    cout<<dp[n][m];
}
```

二进制优化多重背包

```c++
//w[i]存储拆分后的价值
//v[i]存储拆分后的体积
int k=0;
for(int i=0;i<n;i++){
    int w,v,k;cin>>w>>v>>t;
    int res=1;
    if(!t)t=9999999;//对完全背包的特殊处理
    while(t){
        w[++k]=res*w;
        v[k]=res*v;
        t-=res;
        res<<=1;
        if(t<res){
            w[++k]=w*t,v[k]=v*t;
            break;
        }
    }
}
```

### 混合背包

当每个物品都可能存在无限个或有限个数量时，朴素做法是根据类型套板子

依据多重背包的二进制优化思想，把每个物品都根据二进制拆分

特别的，无限个物品可以设为一个很大的值，比如1e6

这样每个物品都有有限个数量，之后便是多重背包的做法

```c++
	//依次放入物品
	for(int i=1;i<=k;i++){
        for(int j=maxV;j>=V[i];j--){
            dp[j]=max(dp[j],dp[j-V[i]]+W[i]);
        }
    }
```

完整代码

```c++
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const int Maxn=1e6+10;

int dp[10010];
int W[Maxn],V[Maxn];
int main(){
    int h1,h2,m1,m2,n,maxV;
    scanf("%d:%d %d:%d %d",&h1,&m1,&h2,&m2,&n);
    maxV=(h2-h1-1)*60+(m2-m1+60);
    int k=0;
    for(int i=0;i<n;i++){
        int w,v,t;
        scanf("%d%d%d",&v,&w,&t);
        int res=1;
        if(!t)t=Maxn;
        while(t){
            W[++k]=res*w;
            V[k]=res*v;
            t-=res;
            res<<=1;
            if(t<res){
                W[++k]=w*t,V[k]=v*t;
                break;
            }
        }
    }

    for(int i=1;i<=k;i++){
        for(int j=maxV;j>=V[i];j--){
            dp[j]=max(dp[j],dp[j-V[i]]+W[i]);
        }
    }
    cout<<dp[maxV]<<endl;
    return 0;
}
```

### 二维背包dp

有n个任务需要完成，完成第i个任务需要花费ti分钟，产生ci元的开支。

现在有T分钟时间,W元钱来处理这些任务，求最多能完成多少任务。

```c++
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const int Maxn=1e5+10;
int dp[210][210];
int main(){
    int n,m,t;cin>>n>>m>>t;

    for(int k=0;k<n;k++){
        int mi,ti;cin>>mi>>ti;
        for(int i=m;i>=mi;i--){
            for(int j=t;j>=ti;j--){
                dp[i][j]=max(dp[i][j],dp[i-mi][j-ti]+1);
            }
        }
    }
    cout<<dp[m][t]<<endl;
    return 0;
}
```

### 分组背包

每一组只能选一个，求最大价值即可

```c++
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef pair<int,int> PII;
const int Maxn=1e5+10;
vector<PII> bb[105];
int dp[Maxn];
int main(){
    int n,m;cin>>n>>m;
    for(int i=0;i<m;i++){
        int a,b,c;cin>>a>>b>>c;
        bb[c].push_back({a,b});
    }

    for(int i=0;i<105;i++){
        //循环每组
        for(int j=n;j>0;j--){
            //循环容量
            for(int k=0;k<bb[i].size();k++){
                int v=bb[i][k].first,w=bb[i][k].second;
                if(j>=v)dp[j]=max(dp[j],dp[j-v]+w);
            }
        }
    }
    cout<<dp[n];
    return 0;
}
```



### 依赖背包

01背包升级版，如果物品a的附加品是b,c

那么需要考虑的拿法就是：

1、什么都不拿 2、只拿a 3、拿ab 4、拿ac 5、拿abc

```c++
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const int Maxn=1e5+10;

struct Node{
    ll v,w,id;
}bb[65];

vector<Node> annex[65];
ll dp[Maxn];
int cnt;//主键数量
int main(){
    int n,m;cin>>n>>m;
    for(int i=1;i<=m;i++){
        int v,p,q;cin>>v>>p>>q;
        if(!q){
            //是主件的情况
            bb[++cnt]={v,v*p,i};
        }else{
            annex[q].push_back({v,v*p,i});
        }
    }

    for(int i=1;i<=cnt;i++){
        int ids=bb[i].id,w=bb[i].w,v=bb[i].v;
        //枚举所有的主件
        for(int j=n;j>=v;j--){
            //只选择主件
            dp[j]=max(dp[j],dp[j-v]+w);
            //选择产品1
            if(annex[ids].size()>=1){
                int anx_v=annex[ids][0].v+v,anx_w=annex[ids][0].w+w;
                if(anx_v<=j)dp[j]=max(dp[j],dp[j-anx_v]+anx_w);
            }
            if(annex[ids].size()>1){
                //选择产品2
                int anx_v=annex[ids][1].v+v,anx_w=annex[ids][1].w+w;
                if(anx_v<=j)dp[j]=max(dp[j],dp[j-anx_v]+anx_w);
                //都选
                anx_v=annex[ids][0].v+annex[ids][1].v+v,anx_w=annex[ids][0].w+annex[ids][1].w+w;
                if(anx_v<=j)dp[j]=max(dp[j],dp[j-anx_v]+anx_w);
            }
        }
    }
    cout<<dp[n]<<endl;
    return 0;
}
```



## 树型dp

```c++
#include<bits/stdc++.h>
using namespace std;
const int Maxn=6010;
int fat[Maxn];
struct Node{
    int to,next;
}edge[Maxn*Maxn];
int w[Maxn];
int head[Maxn],tot;
void add(int u,int v){
    edge[++tot].to=v;
    edge[tot].next=head[u];
    head[u]=tot;
}
//以u为根,选/不选 的状态能获得的最大价值
int dp[Maxn][2];
void dfs(int u){
    dp[u][1]=w[u];
    for(int i=head[u];i;i=edge[i].next){
        int v=edge[i].to;
        dfs(v);
        dp[u][0]+=max(dp[v][1],dp[v][0]);
        dp[u][1]+=dp[v][0];
    }
}

int main(){
    // int n;cin>>n;
    int n;scanf("%d",&n);
    for(int i=1;i<=n;i++)scanf("%d",&w[i]);
    for(int i=1;i<n;i++){
        int L,K;scanf("%d%d",&L,&K);
        fat[L]=1;
        add(K,L);
    }
    int ans=0;
    for(int i=1;i<=n;i++){
        if(!fat[i]){
            dfs(i);
            printf("%d",max(dp[i][0],dp[i][1]));
            break;
        }
    }   
}
```



## 数位DP

### [至少有 1 位重复的数字](https://leetcode.cn/problems/numbers-with-repeated-digits/description/)

`dp[i][j]`记录前i位在没有限制的情况下的有效数量。

有限制与无限制的区别在于，同j的情况下，**无限制的(i,j)所能得到的情况多于有限制的(i,j)**,所以有限制时不能记忆化



f(i,used,isLimit,isNum)代表前i位中使用的数字集合为used

isLimit代表是否存在限制，用于限制数字的枚举的上限

isNum代表前面是否有填过数字

```c++
class Solution {
public:
    int numDupDigitsAtMostN(int n) {
        string s=to_string(n);
        int m=s.size(),dp[m+1][1<<10];
        memset(dp,-1,sizeof(dp));
        function<int(int,int,bool,bool)> f= [&](int i,int used,bool isLimit,bool isNum) ->int{
            //如果前面填了数字，代表有效枚举
            if(i==m)return isNum;
            //如果前面枚举了数字 且 状态已经存在
            if(!isLimit &&isNum && dp[i][used]!=-1){
                return dp[i][used];
            }
            int res=0;
            //如果前面没有填数字，这一位也可以选择不填
            if(!isNum)res=f(i+1,used,false,isNum);
            //如果存在限制，那么最多枚举到s[i]
            int up=isLimit?s[i]-'0':9;
            
            //如果前面没有填过数字，则最少从1开始，反之从0 开始
            for(int d=1-isNum;d<=up;d++){
                //如果数字d被使用过了
                if((used>>d)&1)continue;
                res+=f(i+1,used|(1<<d),isLimit&&d==up,true);
            }
            //限制状态只会出现一次，所以不用记忆化
            if(!isLimit && isNum)dp[i][used]=res;
            return res;
        };
        return n-f(0,0,true,false);
    }
};
```

python中使用@cache装饰器可以替代记忆化数组

```python
class Solution:
    def numberOfBeautifulIntegers(self, low: int, high: int, k: int) -> int:
        def dp(n):
            s=str(n)
            m=len(s)
            @cache
            def f(pos:int,odd:int,even:int,y,isLimit:bool) ->int:
                if pos==m:
                    return odd==even and y==0
                res=0
                if odd==0 and even==0:
                    res+=f(pos+1,odd,even,0,False)
                    
                up = int(s[pos]) if isLimit else 9
                low = 0 if (odd>0 or even>0) else 1
                
                for d in range(low,up+1):
                    res+=f(pos+1,odd+(d&1),even+(1-d&1),(y*10+d)%k,isLimit and d==up)
                
                return res
                
            return f(0,0,0,0,True)
        return dp(high)-dp(low-1)
```


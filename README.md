# 前端必备算法  
1、快速排序 平均时间复杂度：O(nlogn) quickSort.js  
>1)先从数列中取出一个数作为“基准”  
>2)分区过程：将比“基准”大的数全放在“基准”的右边，小于或等于基准的全放到“基准”左边  
再对左右区间重复第二步，直到各区间只有一个数  

2、选择排序 平均时间复杂度：O(n^2)  selectionSort.js  
>1)在未排序序列中找到最小（大）元素，存放到排序序列的起始位置  
>2)在剩余未排序序列中继续寻找最小（大）元素，然后放到已排序序列的末尾  
>3)重复第二步直到所有元素均排序完毕  

3、希尔排序  
>先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录基本有序时，再对全体记录进行依次直接插入排序  
# 前端优化
1、雪碧图，减少http请求  

2、真实项目中，把css或者js文件合并压缩  
>1)css合并成一个，js最好也合成一个  
>2)webpack 压缩成xxx.min.js  减少文件大小  
>3)服务器开启资源文件的GZIP压缩  
>...  
>自动化构建模式，前端工程化开发  

3、减少对Dom的操作  
>[操作DOM弊端]  
>1)监听机制  
>2)触发回流跟重绘  
>...   

4、图片懒加载技术，在页面开始加载的时候不请求真实的图片地址，用默认图占位，当页面加载完成后，再根据相关的条件依次加载真实图片（减少页面首次加载HTTP请求的次数）  
>第一屏幕中可以看见的图片进行加载，随着页面滚动，再把下面的图片进行加载  
>1)首屏数据或前两屏的数据从服务器端进行请求  
>2)下拉加载，滚动到哪个区域，再请求  
>3)下拉到一定距离后，再请求第二页数据，数据分页技术，懒加载，减少http请求大小和次数  

5、更多使用异步编程  
>1)ajax请求处理异步编程，基于promise设计模式对ajax进行处理（fetch,vue axios)  

6、真实项目中尽可能避免一次性循环过多数据，循环是同步任务，避免while导致的死循环  

7、css选择器优化  
>1)少使用标签选择器  
>2)减少ID选择器，多用样式选择器  
>3)减少选择器前面的前缀，例如：.headerBox .nav .left a{}(选择器是从右向左查找的) 改成.header-nav-left a   

8、避免使用css表达式  
```css
.box{
  background-color:expression((new Date()).getHours()%2?'red':'blue')
}  
```  
9、css放在head中，js放在body尾部，先呈现页面，再给用户提供操作 .

10、服务器缓存，304，localstorage 存不经常改变的css和js  

11、尽量减少闭包  
>1)闭包会形成一个不销毁的栈内存，过多的栈内存累积会影响页面性能  
>2)还会容易导致内存泄漏  
>  
>闭包也有自己的优势：保存和保护，我们只能尽量减少，但无可避免  

12、Dom事件绑定的时候，事件委托，代理  

13、字体图标代替位图，类似于雪碧图  

14、尽量使用css动画代替js动画，因为css3的动画或者变形都开启了硬件加速，性能比js动画好  

15、编写代码时，尽可能使用设计模式来构建体系，方便后期维护，也提高了扩充性  

16、采用CDN（地域分布式）  
...
20、音视频资源播放的时候再加载，减少页面首次加载http请求的次数  
>preload=auto  
>preload=metadata 只把音视频资源的头部进行加载  
###关于页面的SEO优化技巧  
1、杜绝404页面，错误引导  
>preload=metadata 只把音视频资源的头部进行加载  
2、避免浏览器中异常输出  
>1)尽可能避免代码出错  
>2)使用trycatch做异常信息捕获  
3、增加页面关键词优化



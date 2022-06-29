## 如何做一个数据可视化的页面？

> 其实要解决的问题大方向上有两个：1 数据如何获取 2 数据如何展示

## 数据如何获取

1. 爬虫 + nodjs 提供 API ,前端访问 API 的方式。（前提是后台提供的 API 要部署在服务器上） 没有服务器的情况不考虑这种实现。
2. chrome 控制台查看 leetcode 获取数据的方式，发现是 graphql, 所以可以通过 graphql 的方式（client Server 的模式 查询的一方被认为是前端），按照对应的规则， 获取到用户的提交信息。 输入是 graphql 查询参数（用户 id ），输出是要使用的数据 ，JSON 格式。

## QA

> 如何同步其他人提交的最新数据？

- github actions 定时任务 。可以指定任务执行的时间，将数据通过 graphql 的方式取回来，写入本地的对应的文件中。

## 数据如何展示

> 原生 or 框架？ 命令式和声明式的区别， 命令式就是要你亲力亲为。 声明式你只要结果， 过程框架或者库帮你实现了。所以这里选用 声明式编程的方式 （Vue React 都是这样的方式） 这里以 Vue 为例（Vue3 里面可以向下兼容， 所以你不写 vue3 setup 的方式 定义数据， 使用 vue2 data 的方式也是可以的）

Vue 是一个渐进式框架， 怎么理解渐进式？ 可以页面部分使用它， 可以 cdn 的方式引入，直接使用， 也可以多人的时候，使用脚手架（cli）的方式，初始化项目。再经过打包的流程使用， 如果需要尝鲜或者快速尝试 ，可以使用 cdn 的方式。

## 项目探秘

1. 使用了原生还是框架？

- vue3 cdn 的方式引入

2. 是否组件化开发？

- 否 短平快导致的，前期要快速看到效果

3. 如何获取数据？

- axios（封装了 ajax 的库) 请求本地之前（数据怎么获取）得到的 json 数据。

4. 如何复制？

- clipboard.js

5. 如何点击截图？

- dom-to-image.js

6. 如何处理日期？

- day.js

7. markdown-it 的使用

- 将文件内的 md 文件 读取出来并渲染
  md.render

```js
  <!-- 导入 Vue 3 -->
  <script src="https://lib.baomitu.com/vue/3.2.31/vue.global.prod.min.js"></script>
  <!-- dayjs -->
  <script src="https://lib.baomitu.com/dayjs/1.11.0/dayjs.min.js"></script>
  <script src="https://lib.baomitu.com/dayjs/1.11.0/plugin/isoWeek.min.js"></script>
  <!-- 导入组件库 -->
  <script src="https://lib.baomitu.com/element-plus/2.1.4/index.full.min.js"></script>
  <!-- markdown-it -->
  <script src="https://lib.baomitu.com/markdown-it/12.0.3/markdown-it.min.js"></script>
  <!-- crypto-js -->
  <script src="https://lib.baomitu.com/crypto-js/3.3.0/crypto-js.min.js"></script>
  <!-- 复制 -->
  <script src="https://lib.baomitu.com/clipboard.js/2.0.10/clipboard.min.js"></script>
  <!-- 生成图片 -->
  <script src="https://lib.baomitu.com/dom-to-image/2.6.0/dom-to-image.min.js"></script>
```

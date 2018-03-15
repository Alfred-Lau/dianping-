# dianping-

[![Build Status](https://travis-ci.org/Alfred-Lau/dianping-.svg?branch=master)](https://travis-ci.org/Alfred-Lau/dianping-)

## --history-api-fallback 的使用

> 问题描述
在React + React-router实现的SPA(单页面应用)项目中，当我们路由模式采用browserHistory时，点击每个导航都可以显示正确的页面，一旦浏览器刷新，页面就显示Cannot GET（404）。

如当我们点击List链接，进入List页面之后，正常显示List页面内容，这时如果我们刷新页面，页面将会出错，返回Cannot GET /list。

> 问题分析
当刷新页面时，浏览器会向服务器请求example.com/list，服务器实际会去找根目录下list.html这个文件，发现找不到，因为实际上我们的服务器并没有这样的 物理路径/文件 或没有配置处理这个路由，所有内容都是通过React-Router去渲染React组件，自然会报404错误。这种情况我们可以通过配置Nginx或通过自建Node服务器来解决。

[问题链接](https://www.thinktxt.com/react/2017/02/26/react-router-browserHistory-refresh-404-solution.html)

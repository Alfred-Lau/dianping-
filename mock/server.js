var koa = require('koa');
var Router = require('koa-router');

var app = new koa();
var router = new Router();

router.get('/', (ctx, next)=> {
    ctx.body = 'hello koa !';
});

router.get('/api', (ctx, next)=> {
    ctx.body = 'test data';
});

// 首页 —— 广告（超值特惠）
var homeAdData = require('./home/ad.js');
router.get('/api/homead', (ctx, next)=> {
    console.log('首页 —— 广告（超值特惠）');

    ctx.body = homeAdData;
});

// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./home/list.js');
router.get('/api/homelist/:city/:page', (ctx, next)=> {
    console.log('首页 —— 推荐列表（猜你喜欢）');

    // 参数
    const params = ctx.params;
    const paramsCity = params.city;
    const paramsPage = params.page;

    console.log('当前城市：' + paramsCity);
    console.log('当前页数：' + paramsPage);

    ctx.body = homeListData;
});

// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./search/list.js');
router.get('/api/search/:page/:city/:category/:keyword', (ctx, next)=> {
    console.log('搜索结果页 - 搜索结果 ------------------------------');

    // 参数
    const params = ctx.params;
    const paramsPage = params.page;
    const paramsCity = params.city;
    const paramsCategory = params.category;
    const paramsKeyword = params.keyword;

    console.log('当前页数：' + paramsPage);
    console.log('当前城市：' + paramsCity);
    console.log('当前类别：' + paramsCategory);
    console.log('关键字：' + paramsKeyword);

    if (paramsPage == 5) {
        searchListData.hasMore = false;
    } else {
        searchListData.hasMore = true;
    }

    ctx.body = searchListData;
});
// 搜索结果页 - 搜索结果 - 两个参数
router.get('/api/search/:page/:city/:category', (ctx, next)=> {
    console.log('搜索结果页 - 搜索结果');

    // 参数
    const params = ctx.params;
    const paramsPage = params.page;
    const paramsCity = params.city;
    const paramsCategory = params.category;

    console.log('当前页数：' + paramsPage);
    console.log('当前城市：' + paramsCity);
    console.log('当前类别：' + paramsCategory);

    ctx.body = searchListData;
});

// 详情页 - 商户信息
const detailInfo = require('./detail/info.js');
router.get('/api/detail/info/:id', (ctx, next)=> {
    console.log('详情页 - 商户信息');

    const params = ctx.params;
    const id = params.id;

    console.log('商户id: ' + id);

    ctx.body = detailInfo;
});
// 详情页 - 用户评论
const detailComment = require('./detail/comment.js');
router.get('/api/detail/comment/:page/:id', (ctx, next)=> {
    console.log('详情页 - 用户点评');

    const params = ctx.params;
    const page = params.page;
    const id = params.id;

    console.log('商户id: ' + id);
    console.log('当前页数: ' + page);

    ctx.body = detailComment;
});

// 订单列表
const orderList = require('./orderlist/orderList.js');
router.get('/api/orderlist/:username', (ctx, next)=> {
    console.log('订单列表');

    const params = ctx.params;
    const username = params.username;
    console.log('用户名：' + username);

    ctx.body = orderList;
});

// 提交评论
router.post('/api/submitComment', (ctx, next)=> {
    console.log('提交评论');

    // 获取参数

    ctx.body = {
        errno: 0,
        msg: 'ok'
    };
});

// 开始服务并生成路由
app.use(router.routes())
    .use(router.allowedMethods());

console.log('start listening at 3000');
app.listen(3000);

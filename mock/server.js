const koa = require('koa');
const Router = require('koa-router');
// const koaBody = require('koa-body');

const app = new koa();
const router = new Router();

router.get('/api/test', (ctx, next)=>{
    ctx.body = {
        a: 1,
        b: 2,
    };
});

router.get('/api', (ctx, next) => {
    ctx.body = 'welcome to koa api server'; 
});


app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const rest = require('./middleware/rest');
const controller = require('./middleware/controller');

const app = new Koa();

// 输出请求日志
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

// 用于解析body
app.use(bodyParser());

app.use(rest.restify());

app.use(controller());

app.listen(8001);
console.log('app started at port 8001...');
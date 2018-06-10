const APIError = require('../../middleware/rest').APIError;

const model = require('../../middleware/model');

const User = model.user;

module.exports = {
    'POST /api/oauth/register': async (ctx, next) => {
        const username = ctx.request.body.username;
        const password = ctx.request.body.password;
        const email = ctx.request.body.email;
        if (username && password && email) {
            var user = await User.create({
                username: username,
                email: email,
                password: password
            });
            ctx.response.body = {data: user};
        } else {
            throw new APIError('invalid_data', 'invalid title');
        }
    },
    'POST /api/oauth/login': async (ctx, next) => {
        const username = ctx.request.body.username;
        const password = ctx.request.body.password;
        if (username && password) {
            var user = await User.find({
                where: {
                    username: username,
                    password: password
                }
            });
            ctx.response.body = {data: user};
        } else {
            throw new APIError('invalid_data', 'invalid title');
        }
    }
}
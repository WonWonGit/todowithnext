import getConfig from "next/config";

const expressJwt = require('express-jwt');
const util = require('util');
const { serverRuntimeConfig } = getConfig();

const JwtMiddleware = (req:any, res:any) => {
    const middleware = expressJwt({secret:serverRuntimeConfig.secret , algorithms: ['HS256']})
        .unless({
            path: [
                '/api/users/authenticate'
            ]
        });

    //프로미스로 생성됨
    return util.promisify(middleware)(req,res);
}

export default JwtMiddleware;
import getConfig from "next/config";
import ApiHandler from "@/pages/api/ApiHandler";

const jwt = require('jsonwebtoken');
const {serverRuntimeConfig} = getConfig();

const users = require('fake-server/user.json');

export default ApiHandler(handler);

function handler(req:any, res:any){
    switch (req.method){
        case 'POST' :
            return authenticate();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    function authenticate(){
        const {username, password} = req.body;
        const user = users.fine((u:any) => u.username === username && u.password === password);

        if(!user) throw  'Username of password is incorrect';

        const token = jwt.sign({sub: user.id}, serverRuntimeConfig.secret, { expiresIn: '7d' });

        return res.status(200).json({
            id: user.id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token
        });
    }
}
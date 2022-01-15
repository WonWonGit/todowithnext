

// users in JSON file for simplicity, store in a db for production applications
import apiHandler from "@/pages/api/ApiHandler";

const users = require('fake-server/users.json');

export default apiHandler(handler);

function handler(req:any, res:any) {
    switch (req.method) {
        case 'GET':
            return getUsers();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function getUsers() {
        // return users without passwords in the response
        const response = users.map((user:any) => {
            const { password, ...userWithoutPassword } = user;
            return userWithoutPassword;
        });
        return res.status(200).json(response);
    }
}
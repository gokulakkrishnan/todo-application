const handle = require('../handler/handler.js')
const check = {
    method: 'GET',
    path: '/',
    handler:handle.checkhost,
    options:{
        tags: ['api']
    }
    
    
};
const status = {
    method: 'GET',
    path: '/status',
    handler:handle.checkstatus,
    options:{
        tags: ['api']
    }
    
};
const register = {
    method: 'POST',
    path: '/api/todo/signUp',
    handler: handle.signUpNewUser,
    options:{
        tags: ['api']
    },
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    }
    
};
const login = {
    method: 'POST',
    path: '/api/todo/login',
    handler: handle.signInUser,
    options:{
        tags: ['api']
    },
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    }
    
    
};
const getUserById = {
    method: 'GET',
    path: '/api/todo',
    handler: handle.getUserById,
    options:{
        tags: ['api']
    },
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    }
    
};
const createNewUser = {
    method: 'POST',
    path: '/api/todo',
    handler: handle.createUserTask,
    options:{
        tags: ['api']
    },
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    }
};
const updateUserItem = {
    method: 'PUT',
    path: '/api/todo',
    handler: handle.updateUserItem,
    options:{
        tags: ['api']
    },
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    }
};
const deletelistbyid = {
    method: 'DELETE',
    path: '/api/todo',
    handler: handle.deleteUserTaskById,
    options:{
        tags: ['api']
    },
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    }
};
module.exports = {
    updateUserItem,
    getUserById,
    createNewUser,
    deletelistbyid,
    register,
    login,check,status
};
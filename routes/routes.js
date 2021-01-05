const handle = require('../handler/handler.js')
const check = {
    method: 'GET',
    path: '/',
    handler: handle.checkHost,
    options: {
        tags: ['api']
    }
};
const status = {
    method: 'GET',
    path: '/status',
    handler: handle.checkStatus,
    options: {
        tags: ['api']
    }
};
const register = {
    method: 'POST',
    path: '/api/todo/signUp',
    handler: handle.signUpNewUser,
    config: {
        tags: ['api'],
        cors: true
    }
};
const login = {
    method: 'POST',
    path: '/api/todo/login',
    handler: handle.signInUser,
    config: {
        tags: ['api'],
        cors: true
    }
};
const createNewUser = {
    method: 'POST',
    path: '/api/todo',
    handler: handle.createUserTask,
    options: {
        tags: ['api'],
        cors: true
    }
};
const getUserById = {
    method: 'GET',
    path: '/api/todo',
    handler: handle.getUserById,
    options: {
        tags: ['api'],
        cors: true
    }
};
const updateUserItem = {
    method: 'PUT',
    path: '/api/todo',
    handler: handle.updateUserItem,
    options: {
        tags: ['api'],
        cors: true
    }
};
const deletelistbyid = {
    method: 'DELETE',
    path: '/api/todo',
    handler: handle.deleteUserTaskById,
    options: {
        tags: ['api'],
        cors: true
    }
};
module.exports = {
    updateUserItem,
    getUserById,
    createNewUser,
    deletelistbyid,
    register,
    login, check, status
};
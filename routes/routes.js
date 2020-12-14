const handle = require('../handler/handler.js')
const check = {
    method: 'GET',
    path: '/',
    handler:handle.checkhost,
    tags: ['api']
};
const status = {
    method: 'GET',
    path: '/status',
    handler:handle.checkstatus,
    tags: ['api']
};
const register = {
    method: 'POST',
    path: '/api/todo/signUp',
    handler: handle.signUpNewUser,
    tags: ['api']
};
const login = {
    method: 'POST',
    path: '/api/todo/login',
    handler: handle.signInUser,
    tags: ['api']
};
const getUserById = {
    method: 'GET',
    path: '/api/todo',
    handler: handle.getUserById,
    tags: ['api']
};
const createNewUser = {
    method: 'POST',
    path: '/api/todo',
    handler: handle.createUserTask,
    tags: ['api']
};
const updateUserItem = {
    method: 'PUT',
    path: '/api/todo',
    handler: handle.updateUserItem,
    tags: ['api']
};
const deletelistbyid = {
    method: 'DELETE',
    path: '/api/todo',
    handler: handle.deleteUserTaskById,
    tags: ['api']
};
module.exports = {
    updateUserItem,
    getUserById,
    createNewUser,
    deletelistbyid,
    register,
    login,check,status
};
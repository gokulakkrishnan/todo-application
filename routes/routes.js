const handle = require('../handler/handler.js')
const check = {
    method: 'POST',
    path: '/',
    handler:handle.checkhost
};
const status = {
    method: 'POST',
    path: '/status',
    handler:handle.checkstatus
};
const register = {
    method: 'POST',
    path: '/api/todo/signUp',
    handler: handle.signUpNewUser
};
const login = {
    method: 'POST',
    path: '/api/todo/login',
    handler: handle.signInUser
};
const getUserById = {
    method: 'GET',
    path: '/api/todo',
    handler: handle.getUserById
};
const createNewUser = {
    method: 'POST',
    path: '/api/todo',
    handler: handle.createUserTask
};
const updateUserItem = {
    method: 'PUT',
    path: '/api/todo',
    handler: handle.updateUserItem
};
const deletelistbyid = {
    method: 'DELETE',
    path: '/api/todo',
    handler: handle.deleteUserTaskById
};
module.exports = {
    updateUserItem,
    getUserById,
    createNewUser,
    deletelistbyid,
    register,
    login,check,status
};
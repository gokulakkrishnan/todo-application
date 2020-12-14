const handle = require('../handler/handler.js')
const check = {
    method: 'GET',
    path: '/home',
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
    }
    
};
const login = {
    method: 'POST',
    path: '/api/todo/login',
    handler: handle.signInUser,
    options:{
        tags: ['api']
    }
    
    
};
const getUserById = {
    method: 'GET',
    path: '/api/todo',
    handler: handle.getUserById,
    options:{
        tags: ['api']
    }
    
};
const createNewUser = {
    method: 'POST',
    path: '/api/todo',
    handler: handle.createUserTask,
    options:{
        tags: ['api']
    }
};
const updateUserItem = {
    method: 'PUT',
    path: '/api/todo',
    handler: handle.updateUserItem,
    options:{
        tags: ['api']
    }
};
const deletelistbyid = {
    method: 'DELETE',
    path: '/api/todo',
    handler: handle.deleteUserTaskById,
    options:{
        tags: ['api']
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
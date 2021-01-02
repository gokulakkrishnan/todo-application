const handle = require('../handler/handler.js')
const joi = require('@hapi/joi');
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
        tags: ['api'],
        cors: {
            maxAge: 60,
            credentials: true
        }
    }
    
};

const login = {
    method: 'POST',
    path: '/api/todo/login',
    handler: handle.signInUser,
    config:{
        tags: ['api'],
        cors: {
            maxAge: 60,
            credentials: true
        },
        validate: {
            payload: joi.object({
                emailId : joi.string().lowercase().email().required(),
                password : joi.string().min(2).required(),
            })
        }
    }
};
const getUserById = {
    method: 'GET',
    path: '/api/todo',
    handler: handle.getUserById,
    options:{
        tags: ['api'],
        cors: {
            maxAge: 60,
            credentials: true
        }
    }
    
};
const createNewUser = {
    method: 'POST',
    path: '/api/todo',
    handler: handle.createUserTask,
    options:{
        tags: ['api'],
        cors: {
            maxAge: 60,
            credentials: true
        }
    }
};
const updateUserItem = {
    method: 'PUT',
    path: '/api/todo',
    handler: handle.updateUserItem,
    options:{
        tags: ['api'],
        cors: {
            maxAge: 60,
            credentials: true
        }
    }
};
const deletelistbyid = {
    method: 'DELETE',
    path: '/api/todo',
    handler: handle.deleteUserTaskById,
    options:{
        tags: ['api'],
        cors: {
            maxAge: 60,
            credentials: true
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
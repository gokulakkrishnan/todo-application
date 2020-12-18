const joi = require('@hapi/joi');
const signUpSchema = joi.object({
    emailId : joi.string().lowercase().email().required(),
    password : joi.string().min(2).required(),
    mobileNo : joi.number().min(10).required()
});
const loginSchema = joi.object({
    emailId : joi.string().lowercase().email().required(),
    password : joi.string().min(2).required()
});
const taskSchema = joi.object({
    taskName : joi.string().lowercase().required(),
    taskStatus : joi.string().max(15).required()
});
const updateSchema = joi.object({
    taskId : joi.string().uuid().required(),
    taskName : joi.string().max(20),
    taskStatus : joi.string().max(15)
});
const deleteSchema = joi.object({
    taskId : joi.string().uuid().required()
});
module.exports ={
    signUpSchema,loginSchema,taskSchema,updateSchema,deleteSchema
}
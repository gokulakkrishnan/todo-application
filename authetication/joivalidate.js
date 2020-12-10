const joi = require('@hapi/joi');
const authSchema = joi.object({
    emailId : joi.string().lowercase().email().required(),
    password : joi.string().min(2).required(),
});
const taskSchema = joi.object({
    taskName : joi.string().lowercase().required(),
    dueDate : joi.number().required(),
    taskStatus : joi.string().max(15).required()
});
const updateSchema = joi.object({
    taskId : joi.string().uuid().required(),
    taskName : joi.string().max(20),
    dueDate : joi.number(),
    taskStatus : joi.string().max(15)
});
const deleteSchema = joi.object({
    taskId : joi.string().uuid().required()
});
module.exports ={
    authSchema,taskSchema,updateSchema,deleteSchema
}
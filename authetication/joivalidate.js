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
const updateSchema = joi.object({
    taskId : joi.string().uuid().required(),
    taskName : joi.string().max(20),
    taskStatus : joi.string().max(15)
});
const deleteSchema = joi.object({
    taskId : joi.string().uuid().required()
});
const taskSchema = joi.object({
    taskName : joi.string().lowercase().required(),
    taskStatus : joi.string().max(15).required()
});
const responseItemSchema = joi.object({
    createdDate : joi.number(),
    taskId : joi.string().uuid(),
    taskName : joi.string().required(),
    taskStatus : joi.string().required,
    userId : joi.string().uuid()
})
module.exports ={
    signUpSchema,loginSchema,taskSchema,updateSchema,deleteSchema,responseItemSchema
}
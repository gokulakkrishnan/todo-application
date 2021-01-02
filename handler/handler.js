const fs = require('fs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const db = require('../db.js')
const bcrypt = require('bcrypt');
const { authSchema , taskSchema , updateSchema,deleteSchema,signUpSchema,loginSchema} = require('../authetication/joivalidate');
const Boom = require('@hapi/boom')
require('dotenv').config();
function checkhost(params) {
    return "Hello Welcome to Todo Application";
    
}
function checkstatus(params) {
    return "ok";
    
}
async function signUpNewUser(req, res) {

    const authResult = await signUpSchema.validate(req.payload);
    if (!authResult.error) {
        var checkparams = {
            TableName: "userInfo",
            KeyConditionExpression: "#emailId = :id",
            ExpressionAttributeNames: {
                "#emailId": "emailId"
            },
            ExpressionAttributeValues: {
                ":id": req.payload.emailId
            }
        };
       
        return db.query(checkparams).then(async (userexist) => {
            if (userexist.Items.length) throw Boom.conflict("This is Email is already Regietered");
            let id = uuid.v4();
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.payload.password, salt)
            var newparams = {
                TableName: "userInfo",
                Item: {
                    "emailId": req.payload.emailId,
                    "password": hashedPassword,
                    "mobileNo":req.payload.mobileNo,
                    "userId": id
                }
               
            }
            console.log(`user created successfully and userId : ${id}`)
            const result = await db.put(newparams)
            console.log(result);
            return `New user created successfully`;

        });
    }
    else {
        console.log(authResult.error.details[0]);
        return Boom.badRequest(authResult.error.details[0].message);
    }

};
async function signInUser(req, res) {
    //const authResult = await loginSchema.validate(req.payload);
   // if (!authResult.error) {
        var checkparams = {
            TableName: "userInfo",
            KeyConditionExpression: "#emailId = :id",
            ExpressionAttributeNames: {
                "#emailId": "emailId"
            },
            ExpressionAttributeValues: {
                ":id": req.payload.emailId
            }
        };
       
        return db.query(checkparams).then(async (userexist) => {
            
            if (!userexist.Items.length) throw Boom.notFound(" User not registered");
            const isMatch = await bcrypt.compare(req.password, userexist.Items[0].password)
            if (!isMatch) throw Boom.notAcceptable("Email and Password are not valid");
            if (!authResult.error) {
        var checkparams = {
            TableName: "userInfo",
            KeyConditionExpression: "#emailId = :id",
            ExpressionAttributeNames: {
                "#emailId": "emailId"
            },
            ExpressionAttributeValues: {
                ":id": req.payload.emailId
            }
        };
        return db.query(checkparams).then(async (userexist) => {
            console.log(userexist)
            if (!userexist.Items.length) throw Boom.notFound(" User not registered");
            const isMatch = await bcrypt.compare(req.payload.password, userexist.Items[0].password)
            if (!isMatch) throw Boom.notAcceptable("Email and Password are not valid");
            
            const userId = {
                userId: userexist.Items[0].userId
            };
            
            const accessToken = await generateAccessToken(userId);
            return `${accessToken}`
        });

    }
    else {
        console.log(authResult.error.details[0]);
        return Boom.badRequest(authResult.error.details[0].message);
    }
            const userId = {
                userId: userexist.Items[0].userId
            };
            
            const accessToken = await generateAccessToken(userId);
            return `${accessToken}`
        });

    //}
    // else {
    //     console.log(authResult.error.details[0]);
    //     return Boom.badRequest(authResult.error.details[0].message);
    // }

};
async function getUserById(req, res) {
    const validateToken = await authToken(req, res);
    if (validateToken.userId) {
        var getparams = {
            TableName: "TodoTable1",
            KeyConditionExpression: "#userId = :id",
            ExpressionAttributeNames: {
                "#userId": "userId"
            },
            ExpressionAttributeValues: {
                ":id": validateToken.userId
            }
        };
        const getItems = await db.query(getparams);
        console.log(JSON.stringify(getItems.Items, null, 2));
        return JSON.stringify(getItems.Items, null, 2);

    }
    else {
        return validateToken;
    }
}

async function createUserTask(req, res) {
    const validateToken = await authToken(req, res);
    const schemaResult = await taskSchema.validate(req.payload);
    if(!schemaResult.error)
    {
        if (validateToken.userId) {
            var postparams = {
                TableName: "TodoTable1",
    
                Item: {
                    "userId": `${validateToken.userId}`,
                    "createdDate": `${Date.now()}`,
                    "taskId": uuid.v4(),
                    "taskName": req.payload.taskName,
                    "taskStatus": req.payload.taskStatus
                },
    
            };
            const newUserDetails = db.put(postparams);
            return "User Item Added Successfully";
        }
        else
        {
            return validateToken;
        }
    }
    else
    {
        console.log(schemaResult.error.details[0]);
        return Boom.badRequest(schemaResult.error.details[0].message);
    }
    
}
async function updateUserItem(req, res) {
    const validateToken = await authToken(req, res);
    const schemaResult = await updateSchema.validate(req.payload);
    if(!schemaResult.error)
    {
        if (validateToken.userId) {
    
                var updateparams = {
                    TableName: "TodoTable1",
                    Key: {
                        "userId": validateToken.userId,
                        "taskId": req.payload.taskId
                    },
                    UpdateExpression: "set taskName = :n , taskStatus = :t",
                    ExpressionAttributeValues: {
                        ":n": req.payload.taskName,
                        ":t": req.payload.taskStatus
                    },
                    ReturnValues: "UPDATED_NEW"
    
                };
                const updatedItem = db.update(updateparams);
                return `Updated Successfully`;
            
    
        }
        else 
        {
            return validateToken;
        }
    }
    else
    {
        console.log(schemaResult.error.details[0]);
        return Boom.badRequest(schemaResult.error.details[0].message);
    }
    
}
async function deleteUserTaskById(req, res) {
    const validateToken = await authToken(req, res);
    const schemaResult = await deleteSchema.validate(req.payload);
    if(!schemaResult.error)
    {
        if (validateToken.userId) {
            
            if (req.payload.taskId != null) {
                var deleteparams = {
                    TableName: "TodoTable1",
                    Key: {
                        "userId": validateToken.userId,
                        "taskId": req.payload.taskId
                    },
                    ConditionExpression: "taskId = :t",
                    ExpressionAttributeValues: {
                        ":t": req.payload.taskId
                    }
                };
                console.log("Attempting a conditional delete...");
                const deleteItem = db.delete(deleteparams);
                return `Delete Successfully`;
            }
            else {
                return Boom.notFound("Enter valid taskId")
            }
    
        }
        else {
            return validateToken;
        }
    
    }
    else
    {
        console.log(schemaResult.error.details[0]);
        return Boom.badRequest(schemaResult.error.details[0].message);
    }
    

}
function generateAccessToken(userId) {
    return jwt.sign(userId, process.env.ACC_TOKEN_SECRET, { expiresIn: '1y' })
}
async function authToken(req, res) {
    try {
        const authHeader = await req.headers['authorization']
        const token = await authHeader && authHeader.split(' ')[1];
        if (!token) throw Boom.unauthorized("Enter Token");
        await jwt.verify(token, process.env.ACC_TOKEN_SECRET, (err, user) => {
            if (err) throw Boom.badRequest("Enter valid Token");
            req.user = user
        });
        return req.user;
    }
    catch (err) {
        return err;
    }

}

module.exports = {
    updateUserItem,
    getUserById,
    createUserTask,
    deleteUserTaskById,
    signUpNewUser,
    signInUser,checkhost,checkstatus
}


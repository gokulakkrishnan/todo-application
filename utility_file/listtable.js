const aws = require('aws-sdk');
const fs = require('fs');
aws.config.update({
    region :"ap-south-1",
    endpoint : "http://localhost:8000"
});
const dynamodb=new aws.DynamoDB();

dynamodb.describeTable({
    TableName:'TodoTable'
},(err,data)=>{
    if(err)
    {
        console.error("ERROR ", JSON.stringify(err, null, 2));
    }
    else
    {
        console.log("Table Name Are ",data);
    }
});

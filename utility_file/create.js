const aws = require('aws-sdk');
aws.config.update({
    region: "ap-south-1",
    endpoint: "http://localhost:8000"
});
const dynamodb = new aws.DynamoDB();
const params = {
    TableName: "userInfo",
    KeySchema: [
        { AttributeName: "emailId", KeyType: "HASH" },
        { AttributeName: "password", KeyType: "RANGE" }
    ],
    AttributeDefinitions: [
        { AttributeName: "emailId", AttributeType: "S" },
        { AttributeName: "password", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};
dynamodb.createTable(params, (err, data) => {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    }
    else {
        console.log("Table Created Successfully", JSON.stringify(data, null, 2));
    }
});

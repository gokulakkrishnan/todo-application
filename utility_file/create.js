const aws = require('aws-sdk');
aws.config.update({
    region: "ap-south-1",
    endpoint: "http://localhost:8000"
});
const dynamodb = new aws.DynamoDB();
const params = {
    TableName: "TodoTable1",
    KeySchema: [
        { AttributeName: "userId", KeyType: "HASH" },
        { AttributeName: "taskId", KeyType: "RANGE" }
    ],
    AttributeDefinitions: [
        { AttributeName: "userId", AttributeType: "S" },
        { AttributeName: "taskId", AttributeType: "S" }
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

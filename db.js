const aws = require('aws-sdk');

aws.config.update({
    accessKeyId: "fakeMyKeyId",
    secretAccessKey: "fakeSecretAccessKey",
    region: "ap-south-1",
    endpoint: "http://localhost:8000"
});
const dynamodb = new aws.DynamoDB.DocumentClient();

module.exports = {
    put: function (params) {
        return new Promise((resolve, reject) => {
            dynamodb.put(params, (err, data) => {
                if (err) {
                    console.error("Unable to add ", JSON.stringify(err, null, 2));
                    return reject(err);
                }
                else {
                    console.log("Table updated successfully");
                    return resolve(data);
                }
            });
        });
    },
    query: function (params) {
        return new Promise((resolve, reject) => {
            dynamodb.query(params, (err, data) => {
                if (err) {
                    console.error("Unable to query the list", JSON.stringify(err, null, 2));
                   return reject(err);
                }
                else {
                    console.log("Queried data successfully");
                    return resolve(data);

                }
            });
        });
    },
    delete: function (params) {
        return new Promise((resolve, reject) => {
            dynamodb.delete(params, (err, data) => {
                if (err) {
                    console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
                   return reject(err);
                } else {
                    console.log("DeleteItem succeeded");
                   return resolve(data);
                }
            });
        });
    },
    update: function (params) {
        return new Promise((resolve, reject) => {
            dynamodb.update(params, function (err, data) {
                if (err) {
                    console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
                   return reject(err);
                } else {
                    console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
                   return resolve(data);
                }
            });
        });
    },
    scan: function (params) {
        return new Promise((resolve, reject) => {
            dynamodb.scan(params, function (err, data) {
                if (err) {
                    console.error("Unable to scan item. Error JSON:", JSON.stringify(err, null, 2));
                    return reject(err);
                } else {
                    console.log("scanItem succeeded:", JSON.stringify(data, null, 2));
                   return resolve(data);
                }
            });
        });
    }
}

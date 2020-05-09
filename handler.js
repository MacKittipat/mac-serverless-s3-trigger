const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.trigger = async (event) => {
    console.log("Event =", JSON.stringify(event));
    const bucketName = event.Records[0].s3.bucket.name;
    const bucketKey = event.Records[0].s3.object.key;

    const params = {
        Bucket: bucketName,
        Key: bucketKey
    };
    var file = await s3.getObject(params).promise();
    console.log("File content=", file.Body.toString("UTF-8"));
};

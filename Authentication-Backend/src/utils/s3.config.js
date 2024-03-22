const AWS = require('aws-sdk');


if (!process.env.NODE_ENV) {
    AWS.config.update({
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION
    });
}

const s3Client = new AWS.S3({});

module.exports = s3Client;
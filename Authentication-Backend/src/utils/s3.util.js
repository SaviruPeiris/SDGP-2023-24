const s3Client = require('../utils/s3.config');
var config = require('config');
const logger = require('../utils/log4jsutil');

exports.generateProfileImagePresignedURL = async function (imageName, expiryTime=3600) {
    let downloadURL = "";
    let params = {
        Bucket: process.env.S3_BUCKET_NAME + config.get('S3Config.ProfileImages'),
        Key: imageName,
        ResponseContentDisposition: `attachment; filename="${imageName}"`,
        Expires: expiryTime
    }
    try {
        await s3Client.headObject({
            Bucket: params.Bucket,
            Key: params.Key
        }).promise(); // to determine if the key present in bucket
        downloadURL = s3Client.getSignedUrl('getObject', params);
    } catch (err) {
        logger.error("[s3Util] :: generateProfileImagePresignedURL() : " + err);
        throw err;
    }
    return downloadURL;

}

exports.generateOrganizationImagePresignedURL = async function (imageName, expiryTime=3600) {
    let downloadURL = "";
    let params = {
        Bucket: process.env.S3_BUCKET_NAME + config.get('S3Config.OrganizationImages'),
        Key: imageName,
        ResponseContentDisposition: `attachment; filename="${imageName}"`,
        Expires: expiryTime
    }
    try {
        await s3Client.headObject({
            Bucket: params.Bucket,
            Key: params.Key
        }).promise(); // to determine if the key present in bucket
        downloadURL = s3Client.getSignedUrl('getObject', params);
    } catch (err) {
        logger.error("[s3Util] :: generateOrganizationImagePresignedURL() : " + err);
        throw err;
    }
    return downloadURL;

}
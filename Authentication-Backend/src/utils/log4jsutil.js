var log4js = require('log4js');

// Logger configuration
log4js.configure('./src/utils/log4jsconf.json');
var logger = log4js.getLogger();


logger.level = "TRACE";

module.exports = logger;

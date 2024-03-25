const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode ? err.statusCode : 500
 // Set the HTTP status code of the response
    res.status(statusCode)
 // Send JSON response with error message and stack trace (in development mode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}


module.exports = {
    errorHandler
}
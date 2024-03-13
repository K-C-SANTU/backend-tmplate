class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}
const Response =(res,message,status_code,data)=>{
    return res.status(status_code).send({
      status_code: status_code,
      message: message,
      data: data || [],
    });

}

module.exports = { ErrorHandler, Response };

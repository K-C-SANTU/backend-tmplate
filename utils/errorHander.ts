import { Response } from "express";

class ErrorHandler extends Error {
    statusCode:number
  constructor(message:any, statusCode:number) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}
const Response =(res:Response,message:any,status_code:number,data:any)=>{
    return res.status(status_code).send({
      status_code: status_code,
      message: message,
      data: data || [],
    });

}

module.exports = { ErrorHandler, Response };

import { Response } from "express";

exports.Response = (res:Response, message:any, status_code:number, data:any) => {
  return res.status(status_code).send({
    status_code: status_code,
    message: message,
    data: data || [],
  });
};


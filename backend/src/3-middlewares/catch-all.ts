import { NextFunction, Request, Response } from "express";
import logger from "../2-utils/logger";

function catchAll(err: any, request: Request, response: Response, next: NextFunction) {
    console.log(err)
    logger(err)
    response.status(err.status).send(err.msg)    
}

export default catchAll
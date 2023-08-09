import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class NinjaMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        if(!req.headers["x-auth-token"]){
            return res.status(404).json('User not Authenticated')
        }
        
        next()
    }
}
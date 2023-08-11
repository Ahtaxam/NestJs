import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { Types } from "mongoose";

@Injectable()
export class validateId implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        const validId = Types.ObjectId.isValid(value);

        if(!validId){
            throw Error("Invalid ObjectID")
        }
        return value
    }
}
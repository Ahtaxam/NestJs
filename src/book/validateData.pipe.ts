import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class validateUpdateData implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if(value.name === "") return "name is required";
        if(value.title === "") return "title is required"
        return value
    }
}
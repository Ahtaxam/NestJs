import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common";


@Injectable()
export class ValidationInputPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        console.log("Custom Pipe is called");
        console.log(metadata);

        return +value
    }
}
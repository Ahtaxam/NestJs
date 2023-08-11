import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type BookDocument = Book & Document;

@Schema()
export class Book {
    @Prop({ required: true})
    name: string;

    @Prop({
        type:String,
        required:true
    })
    author: string;

    @Prop()
    title: string;

    @Prop()
    tags: string[]
}


const bookSchema = SchemaFactory.createForClass(Book);
export { bookSchema };
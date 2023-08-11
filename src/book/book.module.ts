import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { bookSchema } from './schema/Book';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'Book', schema: bookSchema }])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}

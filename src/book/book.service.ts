import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDocument } from './schema/Book';

@Injectable()
export class BookService {
  constructor(@InjectModel("Book") private bookModel:Model<BookDocument>) {}
  async createBook(createBookDto: CreateBookDto) {
    // const createdBook = await this.bookModel.create(createBookDto);
    // console.log("createdBook: ", createdBook);
    // return createdBook;

    const {name, author, title, tags} = createBookDto;
    const newBook = new this.bookModel({
      name,
      author,
      title,
      tags
    })

    const result = await newBook.save();
    return result
  }

  async findAll() {
    const data = await this.bookModel.find({});    
    return data
  }

  findOne(id: string, ) {
    return this.bookModel.findById(id)
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}

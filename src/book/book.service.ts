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

  async findOne(id: string, ) {
    const result =  await this.bookModel.findById(id);
    if(!result) return "Book not found";
    return result
  }

  async updateBook(id: string, updateBookDto: UpdateBookDto) {
    const {name, author, title, tags} = updateBookDto;
    
    const result = await this.bookModel.findByIdAndUpdate(id,{
      name,
      author,
      title,
      tags
    } )
    
    return result
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}

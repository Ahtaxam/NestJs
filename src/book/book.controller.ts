import { Controller, Get, Post, Body, Put, Param, Delete, ValidationPipe, NotFoundException } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { validateId } from './validation.pipe';
import { validateUpdateData } from './validateData.pipe';


@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body(new ValidationPipe()) createBookDto: CreateBookDto) {
    return this.bookService.createBook(createBookDto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new validateId()) id: string) {
    try {
      return this.bookService.findOne(id)
    }
    catch(ex){
      throw new NotFoundException
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body(new validateUpdateData()) updateBookDto: UpdateBookDto) {
    return this.bookService.updateBook(id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}

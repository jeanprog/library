import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { BookRepository } from './repositories/books.repository';

@Injectable()
export class BooksService {

  constructor(private readonly bookRepository: BookRepository) { }


  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    return this.bookRepository.createBook(createBookDto);
  }

  findAll() {
    return this.bookRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.bookRepository.updateBook(id, updateBookDto);
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}

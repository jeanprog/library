import { Injectable, NotFoundException } from '@nestjs/common';
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
  async booksOfAuthor(authorId: number): Promise<Book[]> {
    return this.bookRepository.booksOfAuthor(authorId);
  }
  async findBookById(id: number): Promise<Book> {
    const book = await this.bookRepository.findOne(id);
    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    return book;
  }
  async updateBook(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    await this.findBookById(id); // Verifica se o livro existe
    return this.bookRepository.updateBook(id, updateBookDto);
  }
  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}

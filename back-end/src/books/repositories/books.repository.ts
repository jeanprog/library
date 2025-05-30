import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../entities/book.entity';
import { CreateBookDto } from '../dto/create-book.dto';
import { UpdateBookDto } from '../dto/update-book.dto';

@Injectable()
export class BookRepository {
    constructor(
        @InjectRepository(Book)
        private readonly repository: Repository<Book>,
    ) { }


    async booksOfAuthor(authorId: number): Promise<Book[]> {
        return this.repository.find({ where: { author: { id: authorId } }, relations: ['author'] });
    }

    async createBook(createBookDto: CreateBookDto): Promise<Book> {
        const book = this.repository.create(createBookDto);
        return this.repository.save(book);
    }
    async updateBook(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
        await this.repository.update(id, updateBookDto);
        return this.findOne(id);
    }
    async findOne(id: number): Promise<Book> {
        return this.repository.findOne({ where: { id }, relations: ['author'] });
    }

    async findAll(): Promise<Book[]> {
        return this.repository.find({ relations: ['author'] });
    }

    async deleteBook(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}

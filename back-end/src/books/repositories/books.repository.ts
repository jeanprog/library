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

    async createBook(createBookDto: CreateBookDto): Promise<Book> {
        const book = this.repository.create(createBookDto);
        return this.repository.save(book);
    }

    async updateBook(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
        // 1. Recupera o livro existente
        const book = await this.repository.findOne({ where: { id } });
        if (!book) {
            throw new Error('Book not found');
        }

        // 2. Atualiza as propriedades do livro
        Object.assign(book, updateBookDto);

        // 3. Salva as alterações no banco de dados
        return this.repository.save(book); // Isso faz um UPDATE no banco
    }


    async findAll(): Promise<Book[]> {
        return this.repository.find({ relations: ['author'] }); // Retorna todos os livros com os autores
    }

    async deleteBook(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}

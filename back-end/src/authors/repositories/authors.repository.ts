import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from '../entities/author.entity';
import { CreateAuthorDto } from '../dto/create-author.dto';
import { Book } from 'src/books/entities/book.entity';
import { UpdateAuthorDto } from '../dto/update-author.dto';

@Injectable()
export class AuthorRepository {
  constructor(
    @InjectRepository(Author)
    private readonly repository: Repository<Author>,
  ) {}

  async createAuthor(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const author = this.repository.create(createAuthorDto);
    return this.repository.save(author);
  }

  async findAll(): Promise<Author[]> {
    return this.repository.find(); // Retorna todos os autores
  }
  async findOne(id: number): Promise<Author> {
    return this.repository.findOne({ where: { id } });
  }

  async update(id: number, updateAuthor: UpdateAuthorDto): Promise<Author> {
    this.repository.update(id, updateAuthor);
    return this.repository.findOne({ where: { id } });
  }
  async deleteAuthor(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

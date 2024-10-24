import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { AuthorRepository } from './repositories/authors.repository';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {
  constructor(private readonly authorRepository: AuthorRepository) {}
  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorRepository.createAuthor(createAuthorDto);
  }

  findAll() {
    return this.authorRepository.findAll();
  }
  async findAuthorById(id: number): Promise<Author> {
    const book = await this.authorRepository.findOne(id);
    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    return book;
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    await this.findAuthorById(id);
    return this.authorRepository.update(id, updateAuthorDto);
  }

  remove(id: number) {
    return this.authorRepository.deleteAuthor(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from '../entities/author.entity';
import { CreateAuthorDto } from '../dto/create-author.dto';


@Injectable()
export class AuthorRepository {
    constructor(
        @InjectRepository(Author)
        private readonly repository: Repository<Author>,
    ) { }

    async createAuthor(createAuthorDto: CreateAuthorDto): Promise<Author> {
        const author = this.repository.create(createAuthorDto);
        return this.repository.save(author);
    }

    async deleteAuthor(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}

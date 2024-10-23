import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { AuthorRepository } from './repositories/authors.repository';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {
  constructor(private readonly authorRepository: AuthorRepository) { }
  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorRepository.createAuthor(createAuthorDto);
  }

  findAll() {
    return `This action returns all authors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}

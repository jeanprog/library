import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './authors/entities/author.entity'
import { Book } from './books/entities/book.entity';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'library.db',
      entities: [Author, Book],
      synchronize: true,
    }),
    AuthorsModule,
    BooksModule,
  ],
})
export class AppModule { }

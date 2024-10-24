import { Author } from './author';

export class Book {
  constructor(
    public id: Number,
    public title: string,
    public publicationDate: string,
    public author: Author
  ) {}
}

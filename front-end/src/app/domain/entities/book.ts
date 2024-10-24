import { Author } from './author';

export class Book {
  constructor(
    public id: string,
    public title: string,
    public publicationDate: string,
    public author: Author
  ) {}
}

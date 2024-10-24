import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Book } from '../../books/entities/book.entity';

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    birthDate: Date;

    @OneToMany(() => Book, (book: Book) => book.author)
    books: Book[];
}


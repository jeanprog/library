
import { IsNotEmpty, IsString, IsDateString, IsInt } from 'class-validator';

export class CreateBookDto {

    title: string;
    publicationDate: Date;

    @IsInt()
    @IsNotEmpty()
    authorId: number;

}

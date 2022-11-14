import { ApiProperty } from '@nestjs/swagger';

export class BookDTO {
    @ApiProperty()
    readonly title: string;

    @ApiProperty({required: false})
    readonly author: string;
    
    @ApiProperty({required: false})
    readonly date: number;

    @ApiProperty({required: false})
    readonly contentReview: string;

    @ApiProperty()
    readonly description: string;

    @ApiProperty({type:'string', format: 'binary'})
    readonly file: Express.Multer.File;
}
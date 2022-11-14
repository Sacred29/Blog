import { Controller, Get, Param, Post, Body, UseInterceptors, UploadedFile, Res, StreamableFile, } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiParam, ApiTags, ApiConsumes } from '@nestjs/swagger';
import { type } from 'os';
import { BookService } from './book.service';
import { BookDTO } from './dtos/book.dto';


@ApiTags("Book Reviews")
@Controller('book')
export class BookController {
    constructor(
        private readonly bookService: BookService,
    ) {}


    @Get('/getAll')
    async getAllBooks(){
        return this.bookService.getAll();
    }

    @Get('/getBook/:title')
    @ApiParam({name: 'title'})
    async getByTitle(@Param() {title}){
        return this.bookService.findByTitle(title);
    }

    @Post('/addBook')
    @ApiBody( {type: BookDTO} )
    @UseInterceptors(FileInterceptor('file'))
    @ApiConsumes('multipart/form-data')
    async (@Body() bookDto,  @UploadedFile() file: Express.Multer.File){
        return this.bookService.uploadBook(bookDto, file)
    }

    @Get('/getImage/:title')
    @ApiParam({name: 'title'})
    async getImageByTitle(@Param() {title}, @Res() res) {
        return this.bookService.findImage(title);
    }


}

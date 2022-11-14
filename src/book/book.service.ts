import { Injectable, ConflictException, } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { readFileSync } from 'fs';
import { Model } from 'mongoose';
import { BookDTO } from './dtos/book.dto';



@Injectable()
export class BookService {
    constructor(
        @InjectModel("Book") private readonly bookModel: Model<any>,

    ) { }


    async getAll() {
        return this.bookModel.find();
    }

    async findByTitle(Title: String) {

        console.log("title", Title)
        return this.bookModel.findOne({ title: Title });
    }

    async uploadBook(bookDto: BookDTO, file:Express.Multer.File) {
        //const exists =false

        const exists = await this.bookModel.findOne({ title: bookDto.title }).exec();

        if (exists) {
            //throw error

            throw new ConflictException("Book already exists")
        }
        else {
            let bookfile = {
                ...bookDto,
                file
            }
            const book = new this.bookModel(bookfile);
            
            return await book.save();
        }
    }

    async findImage(Title) {
        console.log("title", Title)
        const image = await this.bookModel.findOne({ title: Title }, {file:1});
        return image.buffer
    }
    
} 

import { CronExpression } from '@nestjs/schedule';
import * as mongoose from 'mongoose';
import { Express } from 'express';

export const BookSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    date: {
        type: Number
    },
    contentReview: {
        type: String
    },
    description: {
        type: String
    },
    file: {
        type: Object
    },

});

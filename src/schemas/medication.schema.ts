import * as mongoose from 'mongoose';

export const MedciationSchema = new mongoose.Schema({
  genericName: {
    type: String
  },
  brandName: {
    type: Array
  },
  sideEffect: {
    type: Array
  }
});

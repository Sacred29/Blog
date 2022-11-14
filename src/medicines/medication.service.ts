import { Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MedicationDTO } from './dto/medication.dto';

@Injectable()
export class MedicationService {
    constructor(
        @InjectModel('Medicine') private readonly medModel: Model<any>,
    ) { }


    async add(medDTO: MedicationDTO) {
        const exist = this.medModel.findOne({ brandName: medDTO.genericName });
        if (exist) {
            //throw error
            throw new ConflictException('Medication already exists')
            
        }
        else {
            const med = new this.medModel(medDTO);
            await med.save();
            console.log('2')
        }


        
    }

}

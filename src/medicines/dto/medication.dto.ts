import { ApiProperty } from '@nestjs/swagger';
import { type } from 'os';

export class MedicationDTO {
    @ApiProperty()
    readonly genericName: string;

    @ApiProperty(
        {
            type: 'array',
            items:{
                type: 'string',
                description: 'List of Brand Names'        
            }
        }
    )
    readonly brandName: string;

    @ApiProperty(
        {
            type:'array',
            items: {
                type: 'number',
                description: 'reference number of side effect'
            }
        }
    )
    readonly sideEffect: number;
}
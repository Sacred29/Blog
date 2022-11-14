import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { TokenService } from 'src/token/token.service';
import { MedicationDTO } from './dto/medication.dto';
import { MedicationService } from './medication.service';

@ApiTags('Medication')
@Controller('medication')
export class MedicationController {
    constructor(
        private readonly tokenService: TokenService,
        private readonly authService: AuthService,
        private readonly medService: MedicationService,
    ) {}

    // @UseGuards(AuthGuard('api'))
    @Post('/add')
    @ApiBody({ type: MedicationDTO })
    // @ApiBearerAuth()
    async (@Body() medicationDTO: MedicationDTO) {
        try {
            return this.medService.add(medicationDTO)    
        } catch (error) {
            return error
        }
        
    }
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { TokenModule } from 'src/token/token.module';
import { UserModule } from 'src/user/user.module';
import { MedicationController } from './medication.controller';
import { MedicationService } from './medication.service';
import { MedciationSchema } from 'src/schemas/medication.schema';

@Module({
  imports: [
    TokenModule,
    AuthModule,
    UserModule,
    MongooseModule.forFeature([{name: 'Medicine', schema: MedciationSchema}])
  ],
  controllers: [MedicationController],
  providers: [MedicationService],
  exports: [MedicationService]
})
export class MedicationModule {}

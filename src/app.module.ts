import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MedicationModule } from './medicines/medication.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { ConfigModule } from '@nestjs/config';
// import { ScheduleModule } from '@nestjs/schedule';
// import { TerminusModule } from '@nestjs/terminus';
// import { TerminusOptionsService } from './terminus-options.service';
import { AuthModule } from './auth/auth.module';
import { TokenController } from './token/token.controller';
import { TokenModule } from './token/token.module';
import { BookModule } from './book/book.module';


@Module({
  imports: [ConfigModule.forRoot(),
    // MongooseModule.forRoot(`mongodb+srv://daniel:pw1234@dass.7s4l02a.mongodb.net/?retryWrites=true&w=majority`,),
    MongooseModule.forRoot( process.env.MONGO_URL || "mongodb+srv://daniel:pw1234@dass.7s4l02a.mongodb.net/?retryWrites=true&w=majority" ),

  UserModule, MedicationModule, AuthModule, TokenModule, BookModule,],
  controllers: [AppController, TokenController],
  providers: [AppService,],
})
export class AppModule {}

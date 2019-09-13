import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthRepository } from './auth.repository';

@Module({
  imports: [
    TypegooseModule.forFeature([AuthRepository])
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}

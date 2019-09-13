// import { ApplyMixin }  from '../helpers/apply.mixins';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthRepository } from './auth.repository';
import { Auth } from './auth.model';

@Module({
  imports: [
    TypegooseModule.forFeature([Auth])
  ],
  controllers: [AuthController],
  providers: [AuthService,AuthRepository],
  exports: [AuthService]
})
export class AuthModule {}

import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(AuthRepository) private authRepository: AuthRepository){}

    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>{
        return this.authRepository.signUp(authCredentialsDto);
    }

}
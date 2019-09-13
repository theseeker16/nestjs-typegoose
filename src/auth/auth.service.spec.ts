import { Auth } from './auth.model';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthRepository } from './auth.repository';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypegooseModule.forFeature([Auth])],
      providers: [AuthService,AuthRepository],
    }).compile();
    console.log("SJDFLKDSJFKL;ASJFKL;DSJFKL;")
    console.log(module)
    service =  module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

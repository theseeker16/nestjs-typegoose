import { EntityRepository, Repository } from "typeorm";
import { Auth } from "./auth.model";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";

@EntityRepository(Auth)
export class AuthRepository extends Repository<Auth> {

    async signUp(authCredentialsDto:AuthCredentialsDto): Promise<void> {
        const {username,password} = authCredentialsDto;
        try{
            const user = new Auth();
            user.username = username;
            user.password = password;
            await user.save();
        }catch(error){
            console.log(error)
        }
    }
}
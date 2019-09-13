import { EntityRepository, Repository } from "typeorm";
import { Auth } from "./auth.model";

@EntityRepository(Auth)
export class AuthRepository extends Repository<Auth> {

}
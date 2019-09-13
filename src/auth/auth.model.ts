import { Entity, BaseEntity } from 'typeorm'
import { Typegoose } from '@hasezoey/typegoose';
import  ApplyMixin  from '../helpers/apply.mixins';
import { isString } from 'typegoose/lib/utils';

@Entity()
export class Auth {
}

export interface Auth extends Typegoose,BaseEntity {}
ApplyMixin.applyMixins(Auth,[Typegoose,BaseEntity]);
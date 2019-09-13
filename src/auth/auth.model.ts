import { Entity, BaseEntity } from 'typeorm'
import { Typegoose } from '@hasezoey/typegoose';
import { ApplyMixin }  from '../helpers/apply.mixins';
import { isString } from 'typegoose/lib/utils';
import { prop } from 'typegoose';

const mixin = new ApplyMixin();

@Entity()
export class Auth {
    @prop({unique:true,index:true})
    id: string;

    @prop()
    username:string;

    @prop()
    password:string
}

export interface Auth extends Typegoose,BaseEntity {}
mixin.applyMixins(Auth,[Typegoose,BaseEntity]);

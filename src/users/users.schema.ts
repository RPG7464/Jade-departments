import { IsString, IsStrongPassword } from 'class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {

  @Prop({ nullable: false, unique: true })
  @IsString()
  username: string;

  @Prop({ nullable: false })
  @IsStrongPassword()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class Category {
  @Prop()
  name: string;

  @Prop()
  last_name: string;

  @Prop({ type: Types.ObjectId, ref: 'Department' })
  department: Types.ObjectId;
}
export const CategorySchema = SchemaFactory.createForClass(Category);

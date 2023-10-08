import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema()
export class Department {
  @Prop()
  name: string;
}
export const DepartmentSchema = SchemaFactory.createForClass(Department);

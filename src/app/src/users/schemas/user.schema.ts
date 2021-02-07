import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

export default UserSchema;

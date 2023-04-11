import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ItemDocument = HydratedDocument<Item>;

@Schema()
export class Item {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  quantity: number;

  @Prop()
  itemSizes: [string];

  @Prop()
  description: string;

  @Prop()
  urls: [string];
}

export const ItemSchema = SchemaFactory.createForClass(Item);

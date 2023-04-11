import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Item, ItemSchema } from './item.schema';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop({ type: [ItemSchema] })
  items: Item[];

  @Prop()
  itemSize: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  telephone: string;

  @Prop({ required: true })
  shippingAddress: string;

  @Prop()
  isPaid: boolean;

  @Prop()
  isDelivered: boolean;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

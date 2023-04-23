import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
// import { AddItemDto } from './dto/add-item.dto';
// import { UpdateItemDto } from './dto/update-item.dto';
import { Order, OrderDocument } from '../schemas/order.schema';
import { Item, ItemDocument } from '../schemas/item.schema';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    @InjectModel(Item.name) private itemModel: Model<ItemDocument>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const item = await this.itemModel.findById(createOrderDto.itemId).exec();
    const { itemId, ...order } = createOrderDto;
    const createdOrder = await new this.orderModel(order).save();
    const orderWithItem = await this.addItem(createdOrder.id, item);
    return orderWithItem;
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async findOne(id: string): Promise<Order> {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateOrderDto: UpdateOrderDto): Promise<Order> {
    return this.orderModel
      .findByIdAndUpdate(id, updateOrderDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Order> {
    return this.orderModel.findByIdAndRemove(id).exec();
  }

  async addItem(id: string, item: Item): Promise<Order> {
    const order = await this.orderModel.findById(id).exec();
    order.items.push(item);
    return order.save();
  }
  //
  // async updateItem(orderId: string, itemId: string, updateItemDto: UpdateItemDto): Promise<Order> {
  //   const order = await this.orderModel.findById(orderId).exec();
  //   const item = order.items.find(item => item._id.toString() === itemId);
  //   Object.assign(item, updateItemDto);
  //   return order.save();
  // }
  //
  // async removeItem(orderId: string, itemId: string): Promise<Order> {
  //   const order = await this.orderModel.findById(orderId).exec();
  //   order.items.pull(itemId);
  //   return order.save();
  // }
}

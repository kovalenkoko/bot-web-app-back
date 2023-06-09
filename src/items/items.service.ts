import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item, ItemDocument } from '../schemas/item.schema';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}
  async findAll(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }
  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findById(id).exec();
  }
  async create(createItemDto: CreateItemDto): Promise<Item> {
    const createdItem = new this.itemModel(createItemDto);
    return await createdItem.save();
  }
}

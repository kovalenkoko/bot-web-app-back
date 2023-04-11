import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
// import { AddItemDto } from './dto/add-item.dto';
// import { UpdateItemDto } from './dto/update-item.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(id);
  }

  // @Post(':orderId/items')
  // addItem(@Param('orderId') id: string, @Body() addItemDto: AddItemDto) {
  //   return this.ordersService.addItem(id, addItemDto);
  // }
  //
  // @Put(':orderId/items/:itemId')
  // updateItem(
  //   @Param('orderId') orderId: string,
  //   @Param('itemId') itemId: string,
  //   @Body() updateItemDto: UpdateItemDto,
  // ) {
  //   return this.ordersService.updateItem(orderId, itemId, updateItemDto);
  // }
  //
  // @Delete(':orderId/items/:itemId')
  // removeItem(@Param('orderId') orderId: string, @Param('itemId') itemId: string) {
  //   return this.ordersService.removeItem(orderId, itemId);
  // }
}

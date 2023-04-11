import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from '../image/image.service';

@Controller('items')
export class ItemsController {
  constructor(
    private itemsService: ItemsService,
    private imageService: ImageService,
  ) {}

  @Get('/')
  getAllItems() {
    return this.itemsService.findAll();
  }
  @Get('/:id')
  getItemById(@Param('id') id: string) {
    return this.itemsService.findOne(id);
  }

  @Post('/create')
  @UseInterceptors(FileInterceptor('file'))
  async createItem(
    @UploadedFile() file,
    @Req() req,
    @Body() itemData: CreateItemDto,
  ) {
    const urlsArr: string[] = [];
    const image = await this.imageService.create(file);
    const newImage = image.toObject();

    const host = req.get('host');
    const url = `http://${host}/image/${newImage._id}`;
    urlsArr.push(url);
    itemData.urls = urlsArr;
    return await this.itemsService.create(itemData);
  }
}

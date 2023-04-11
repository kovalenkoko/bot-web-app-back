import { HttpException, HttpStatus, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemSchema } from '../schemas/item.schema';
import { Image, ImageSchema } from '../schemas/image.schema';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { ImageService } from '../image/image.service';
import { extname } from 'path';
import { MulterModule } from '@nestjs/platform-express';

const imageFilter = function (req, file, cb) {
  // accept image only
  if (!file.originalname.match(/.(jpg|jpeg.webp|png)$/)) {
    cb(
      new HttpException(
        `Unsupported file type ${extname(file.originalname)}`,
        HttpStatus.BAD_REQUEST,
      ),
      false,
    );
  }
  cb(null, true);
};

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }]),
    MongooseModule.forFeature([{ name: Image.name, schema: ImageSchema }]),
    NestjsFormDataModule,
    MulterModule.registerAsync({
      useFactory: () => ({
        fileFilter: imageFilter,
      }),
    }),
  ],
  controllers: [ItemsController],
  providers: [ItemsService, ImageService],
})
export class ItemsModule {}

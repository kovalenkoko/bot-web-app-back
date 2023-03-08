import { Module, HttpException, HttpStatus } from '@nestjs/common';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';
import { MulterModule } from '@nestjs/platform-express';
import { extname } from 'path';
import {MongooseModule} from "@nestjs/mongoose";
import {Image, ImageSchema} from "../schemas/image.schema";

const imageFilter = function (req, file, cb) {
    // accept image only
    if (!file.originalname.match(/.(jpg|jpeg.webp)$/)) {
        cb(new HttpException(`Unsupported file type ${extname(file.originalname)}`, HttpStatus.BAD_REQUEST), false);
    }
    cb(null, true);
};

@Module({
    controllers: [ImageController],
    providers: [ImageService],
    imports: [
        MongooseModule.forFeature([{name: Image.name, schema: ImageSchema}]),
        MulterModule.registerAsync({
            useFactory: () => ({
                fileFilter: imageFilter
            }),
        }),
    ]
})
export class ImageModule { }
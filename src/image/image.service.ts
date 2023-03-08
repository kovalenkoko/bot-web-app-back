import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import {Image, ImageDocument} from "../schemas/image.schema";
import {Model} from "mongoose";
import {CreateImageDto} from "./dto/create-image.dto";

@Injectable()
export class ImageService {
    constructor(
        @InjectModel(Image.name) private readonly imageModel: Model<ImageDocument>
    ) { }

    async create(file) {
        const newImage = await new this.imageModel(new CreateImageDto);
        newImage.image_file.data = file.buffer;
        newImage.image_file.contentType = file.mimetype;
        return newImage.save();
    }

    async findAll(): Promise<Image[]> {
        return await this.imageModel.find({}, { image_file: 0 }).lean().exec();
    }

    async getById(id): Promise<Image> {
        return await this.imageModel.findById(id).exec();
    }

    async removeImage(id): Promise<Image> {
        return this.imageModel.findByIdAndDelete(id);
    }
}
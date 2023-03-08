import {Prop, Schema, SchemaFactory, raw} from "@nestjs/mongoose";
import {HydratedDocument, Document} from "mongoose";
import { Schema as SchemaTypes } from "mongoose"

export type ImageDocument = HydratedDocument<Image>

@Schema()
class ImageData{
    @Prop()
    data: Buffer;

    @Prop()
    contentType: string;
}

@Schema()
export class Image{
    readonly _id: SchemaTypes.Types.ObjectId;

    @Prop(raw({
        data: { type: Buffer },
        contentType: { type: String }
    }))
    image_file: ImageData

    @Prop()
    url: string
}

export const ImageSchema = SchemaFactory.createForClass(Image)
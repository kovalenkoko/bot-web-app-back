import { IsNotEmpty } from 'class-validator';

export class CreateImageDto {
    @IsNotEmpty()
    image_file: {
        data: Buffer;
        contentType: string;
    };
}
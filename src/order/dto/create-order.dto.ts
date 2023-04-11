import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateOrderDto {
  @IsOptional()
  itemSize: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  telephone: string;

  @IsNotEmpty()
  shippingAddress: string;
}

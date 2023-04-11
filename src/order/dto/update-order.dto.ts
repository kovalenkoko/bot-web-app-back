import { IsOptional } from 'class-validator';

export class UpdateOrderDto {
  @IsOptional()
  itemSize: string;

  @IsOptional()
  price: number;

  @IsOptional()
  firstName: string;

  @IsOptional()
  lastName: string;

  @IsOptional()
  telephone: string;

  @IsOptional()
  shippingAddress: string;
}

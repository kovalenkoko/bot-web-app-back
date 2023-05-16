import { IsOptional } from 'class-validator';

export class UpdateOrderDto {
  @IsOptional()
  shippingAddress: string;

  @IsOptional()
  isPaid: boolean;

  @IsOptional()
  isDelivered: boolean;
}

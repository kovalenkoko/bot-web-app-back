import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';
import { Default } from '../../decorators/default';

export class CreateOrderDto {
  @IsNotEmpty()
  itemId: string;

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

  isPaid = false;

  isDelivered = false;
}

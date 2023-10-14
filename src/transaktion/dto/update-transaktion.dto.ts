import { PartialType } from '@nestjs/mapped-types';
import { CreateTransaktionDto } from './create-transaktion.dto';

export class UpdateTransaktionDto extends PartialType(CreateTransaktionDto) {}

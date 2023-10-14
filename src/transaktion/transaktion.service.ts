import { Injectable } from '@nestjs/common';
import { CreateTransaktionDto } from './dto/create-transaktion.dto';
import { UpdateTransaktionDto } from './dto/update-transaktion.dto';

@Injectable()
export class TransaktionService {
  create(createTransaktionDto: CreateTransaktionDto) {
    return 'This action adds a new transaktion';
  }

  findAll() {
    return `This action returns all transaktion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaktion`;
  }

  update(id: number, updateTransaktionDto: UpdateTransaktionDto) {
    return `This action updates a #${id} transaktion`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaktion`;
  }
}

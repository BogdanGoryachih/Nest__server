import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransaktionService } from './transaktion.service';
import { CreateTransaktionDto } from './dto/create-transaktion.dto';
import { UpdateTransaktionDto } from './dto/update-transaktion.dto';

@Controller('transaktion')
export class TransaktionController {
  constructor(private readonly transaktionService: TransaktionService) {}

  @Post()
  create(@Body() createTransaktionDto: CreateTransaktionDto) {
    return this.transaktionService.create(createTransaktionDto);
  }

  @Get()
  findAll() {
    return this.transaktionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transaktionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransaktionDto: UpdateTransaktionDto) {
    return this.transaktionService.update(+id, updateTransaktionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transaktionService.remove(+id);
  }
}

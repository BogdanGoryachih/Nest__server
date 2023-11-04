import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { TransaktionService } from './transaktion.service';
import { CreateTransaktionDto } from './dto/create-transaktion.dto';
import { UpdateTransaktionDto } from './dto/update-transaktion.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('transactions')
export class TransaktionController {
  constructor(private readonly transaktionService: TransaktionService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())

  create(@Body() createTransaktionDto: CreateTransaktionDto,@Req()req) {
    return this.transaktionService.create(createTransaktionDto, +req.user.id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req) {
    return this.transaktionService.findAll(+req.user.id);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.transaktionService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateTransaktionDto: UpdateTransaktionDto) {
    return this.transaktionService.update(+id, updateTransaktionDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.transaktionService.remove(+id);
  }
}

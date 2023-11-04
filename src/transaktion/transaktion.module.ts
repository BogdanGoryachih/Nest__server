import { Module } from '@nestjs/common';
import { TransaktionService } from './transaktion.service';
import { TransaktionController } from './transaktion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaktion } from './entities/transaktion.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Transaktion])],
  controllers: [TransaktionController],
  providers: [TransaktionService]
})
export class TransaktionModule {}

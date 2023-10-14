import { Module } from '@nestjs/common';
import { TransaktionService } from './transaktion.service';
import { TransaktionController } from './transaktion.controller';

@Module({
  controllers: [TransaktionController],
  providers: [TransaktionService]
})
export class TransaktionModule {}

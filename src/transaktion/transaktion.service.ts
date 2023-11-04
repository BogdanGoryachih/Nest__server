import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransaktionDto } from './dto/create-transaktion.dto';
import { UpdateTransaktionDto } from './dto/update-transaktion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaktion } from './entities/transaktion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransaktionService {
  constructor(
    @InjectRepository(Transaktion) 
    private readonly trasaktionRepository: Repository<Transaktion>
  ){}
 async create(createTransaktionDto: CreateTransaktionDto , id:number) {
    const newTransaction = {
      title:createTransaktionDto.title,
      amount: createTransaktionDto.amount,
      type: createTransaktionDto.type,
      category:{id:+createTransaktionDto.category},
      user:{id},

    }
    
    if(!newTransaction) throw new BadRequestException('someting went wrong ...')
    return await this.trasaktionRepository.save(newTransaction)
  }

  async findAll(id:number) {
    const transaktions = await this.trasaktionRepository.find({
      where:{
        user: {id},
      },
      order:{
        createdAT: 'DESC',
      }
    })
    return transaktions
  }

  async findOne(id: number) {
    const transactions = await this.trasaktionRepository.findOne({
      where:{
        id,
      },
      relations:{
        user:true,
        category: true
      }
    })  
    if(!transactions) throw new NotFoundException('transacktion not found ')
    return transactions
  }

 async update(id: number, updateTransaktionDto: UpdateTransaktionDto) {
  const transacktion = await this.trasaktionRepository.findOne({
    where:{id},
  })
  if(!transacktion) throw new NotFoundException('transaction not found ')
    return await this.trasaktionRepository.update(id, updateTransaktionDto)
  }

 async remove(id: number) {
    const transacktion = await this.trasaktionRepository.findOne({
      where:{id}
    })
    if(!transacktion) throw new NotFoundException('transction not found')
    return await this.trasaktionRepository.delete(id)
  }
  async findAllWithPagination (id:number, page:number, limit:number){
    const transacktion = await this.trasaktionRepository.find({
      where:{
        user:{id},

      },
      relations:{
        category: true,
        user: true
      },
      order:{
        createdAT: 'DESC'
      },
      take:limit,
      skip: (page -1) * limit,
    })
    return transacktion
  }
}

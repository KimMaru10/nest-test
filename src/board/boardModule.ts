import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardController } from './boardController';
import { BoardService } from './boardService';
import { BoardEntity } from './boardEntity';

@Module({
  imports: [TypeOrmModule.forFeature([BoardEntity])],

  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}

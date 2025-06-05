import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardController } from './boardController';
import { BoardService } from './boardService';

@Module({
    imports: [
    ],
    controllers: [BoardController],
    providers: [BoardService],
})
export class BoardModule { }

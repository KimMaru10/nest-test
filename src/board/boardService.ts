import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BoardEntity } from "./boardEntity";

//Suny code
// import { RequestCreateDto } from "./dto/requestBoardDto";
// import { ResponseGetDto } from "./dto/responseBoardDto";
import { Injectable,NotFoundException } from "@nestjs/common";
import { Board, BoardStatus } from "./boardModel";
import {v1 as uuid} from "uuid";
import { CreateBoardDto } from "./dto/requestBoardDto";


@Injectable()
export class BoardService {
    private boards: Board[] = [];

    constructor(
        @InjectRepository(BoardEntity)
        private readonly boardRepo: Repository<BoardEntity>
    ) { }

    //Suny code
    // async createBoard(requestCreateDto: RequestCreateDto): Promise<ResponseGetDto> {
    //     const createdEntity = requestCreateDto.toEntity()
    //     const saved = await this.boardRepo.save(createdEntity);
    //     return new ResponseGetDto(saved)
    // }

    getAllBoard():Board[]{
        return this.boards;
    }

    createBoard(createBoardDto: CreateBoardDto){
        const {title,description} = createBoardDto;
        const board:Board = {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC
        }
        this.boards.push(board)
        return board;
    }

    getBoardById(id:string):Board {
        const board =  this.boards.find((board)=> board.id===id);
        if(!board){
            throw new NotFoundException(`Board with ID "${id}" not found`);
        }else{
            return board;
        }
    }

    deleteBoard(id:string):void{
        this.boards = this.boards.filter((board)=>board.id != id)
    }

    updateBoardStatus(id:string, status: BoardStatus):Board{
        const board = this.getBoardById(id)
        board.status = status
        return board
    }
}
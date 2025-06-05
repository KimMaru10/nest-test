import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BoardEntity } from "./boardEntity";
import { RequestCreateDto } from "./dto/requestBoardDto";
import { ResponseGetDto } from "./dto/responseBoardDto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BoardService {

    constructor(
        @InjectRepository(BoardEntity)
        private readonly boardRepo: Repository<BoardEntity>
    ) { }

    async createBoard(requestCreateDto: RequestCreateDto): Promise<ResponseGetDto> {
        const createdEntity = requestCreateDto.toEntity()
        const saved = await this.boardRepo.save(createdEntity);
        return new ResponseGetDto(saved)
    }

}
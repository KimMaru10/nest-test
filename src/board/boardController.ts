import { Body, Controller, Post } from "@nestjs/common";
import { ResponseGetDto } from "./dto/responseBoardDto";
import { BoardService } from "./boardService";
import { RequestCreateDto } from "./dto/requestBoardDto";

@Controller("api/board")
export class BoardController {

    //생성자 주입
    constructor(private readonly boardService: BoardService) { }

    @Post()
    async createBoard(@Body() requestCreateDto: RequestCreateDto): Promise<ResponseGetDto> {
        return await this.boardService.createBoard(requestCreateDto)
    }


}
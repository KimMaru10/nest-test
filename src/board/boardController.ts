import { Body, Controller, Post, Get, Param, Delete, Patch } from "@nestjs/common";
import { BoardService } from "./boardService";
import { title } from "process";
import { Board, BoardStatus } from "./boardModel";
import { CreateBoardDto } from "./dto/requestBoardDto";

//suny code
// import { ResponseGetDto } from "./dto/responseBoardDto";
// import { RequestCreateDto } from "./dto/requestBoardDto";

@Controller("api/board")
export class BoardController {

    //생성자 주입
    constructor(private readonly boardService: BoardService) { }

    //suny code
    // @Post()
    // async createBoard(@Body() requestCreateDto: RequestCreateDto): Promise<ResponseGetDto> {
    //     return await this.boardService.createBoard(requestCreateDto)
    // }

    @Get()
    getAllBoard(){
        return this.boardService.getAllBoard()
    }

    @Post()
    createBoard(@Body() createBoardDto : CreateBoardDto):Board{
        return this.boardService.createBoard(createBoardDto)
    }

    @Get("/:id")
    getBoardById(@Param("id")id :string) : Board{
        return this.boardService.getBoardById(id);
    }

    @Delete("/:id")
    deleteBoard(@Param("id")id :string):void{
        this.boardService.deleteBoard(id);
    }

    @Patch("/:id/status")
    updateBoardStatus(
        @Param("id") id: string,
        @Body("status") status: BoardStatus,
    ){
        return this.boardService.updateBoardStatus(id,status)
    }
}
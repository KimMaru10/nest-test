import { BoardEntity } from "../boardEntity";

//suny code
// export class RequestCreateDto {

//     title: String;

//     content: String;

//     toEntity(): BoardEntity {
//         const entity = new BoardEntity();
//         entity.title = this.title;
//         entity.content = this.content;
//         return entity;
//     }
// }


//suny code
// export class RequestUpdateDto {

//     title: String;

//     content: String;

//     toEntity(id: number): BoardEntity {
//         const entity = new BoardEntity();
//         entity.id = id;
//         entity.title = this.title;
//         entity.content = this.content;
//         return entity;
//     }
// }

export class CreateBoardDto {
    title: string;
    description: string;
}
import { BoardEntity } from "../boardEntity";

export class ResponseGetDto {

    id: number;

    title: String;

    content: String;

    constructor(entity: BoardEntity) {
        this.id = entity.id;
        this.title = entity.title;
        this.content = entity.content;
    }

}
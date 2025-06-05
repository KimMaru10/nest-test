import { BoardEntity } from "../boardEntity";

export class RequestCreateDto {

    title: String;

    content: String;

    toEntity(): BoardEntity {
        const entity = new BoardEntity();
        entity.title = this.title;
        entity.content = this.content;
        return entity;
    }
}


export class RequestUpdateDto {

    title: String;

    content: String;

    toEntity(id: number): BoardEntity {
        const entity = new BoardEntity();
        entity.id = id;
        entity.title = this.title;
        entity.content = this.content;
        return entity;
    }
}


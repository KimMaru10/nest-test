import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("board")
export class BoardEntity {

    @PrimaryGeneratedColumn({ comment: "Board ID" })
    id: number;

    @Column({ type: "varchar", comment: "제목" })
    title: String;

    @Column({ type: "varchar", comment: "내용" })
    content: String;

}
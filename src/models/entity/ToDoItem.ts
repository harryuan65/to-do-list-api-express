import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { ToDoItemStatus } from "../../types/ToDoItem"

@Entity()
export class ToDoItem {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    title!: string

    @Column()
    status!: ToDoItemStatus
}

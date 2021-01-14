import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class TodoEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    title: string;

    @ApiProperty()
    @Column()
    description: string

    @ApiProperty()
    @Column({
        type: 'boolean',
        default: false
    })
    is_done: boolean

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

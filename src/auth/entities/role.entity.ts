import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryColumn, Unique } from "typeorm";
import { User } from "./user.entity";
@Entity()
@Unique(['role'])
export class Role extends BaseEntity {
    @PrimaryColumn()
    @ApiProperty()
    role: string;

    @ApiProperty()
    @Column({ default: true })
    status: boolean;

}

import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, PrimaryColumn, Unique } from "typeorm";

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

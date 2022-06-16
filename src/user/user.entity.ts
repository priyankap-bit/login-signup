/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    uuid: number;

    @Column()
    acc_type: string; 

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    phone: number;

    @Column()
    country: string;

    @Column()
    dob: string;

    @Column({select: true})
    password: string;

    @CreateDateColumn()
    created_at: Date;
    
}
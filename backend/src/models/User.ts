import { Entity, PrimaryGeneratedColumn ,Column, OneToMany } from "typeorm";
import { Order } from "./Order";

export type UserRole = 'CUSTOMER' | 'EMPLOYEE' | 'ADMIN';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar', unique: true })
    email: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({type: 'varchar', default: 'CUSTOMER'})
    role: UserRole;

    @OneToMany(() => Order, (order) => order.user)
    orders: Order[];
}
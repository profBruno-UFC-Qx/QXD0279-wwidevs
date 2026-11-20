import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { User } from "./User";
import { OrderItem } from "./Orderitem";

export type OrderStatus = 'PENDING' | 'PREPARING' | 'READY' | 'COMPLETED' | 'CANCELLED';

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', name: 'user_id' })
    userId: number;

    @Column({ type: 'varchar', default: 'PENDING' })
    status: OrderStatus;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    total: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @ManyToOne(() => User, (user) => user.orders)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @OneToMany(() => OrderItem, (item) => item.order, { cascade: true })
    items: OrderItem[];
}
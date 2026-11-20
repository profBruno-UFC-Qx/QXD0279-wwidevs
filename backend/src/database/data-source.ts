import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from '../models/User'
import { Category } from '../models/Category'
import { Product } from '../models/Product'
import { Order } from '../models/Order'
import { OrderItem } from '../models/Orderitem'

export const AppDataSource = new DataSource({
    type: "better-sqlite3",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [User, Category, Product, Order, OrderItem],
})
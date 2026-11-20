import { Request, Response } from "express";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

import { AppDataSource } from "../database/data-source";
import { User } from "../models/User";

const userRepository = AppDataSource.getRepository(User);

export class AuthController {
    async register(req: Request, res: Response) {
        const { name, email, password, role } = req.body;

        try {
            if (!name || !email || !password) {
                return res.status(400).json({message: 'Nome, email e senha são obrigatórios.'});
            }

            const existingUser = await userRepository.findOneBy({ email });
            if (existingUser) {
                return res.status(409).json({message: 'Este email já está cadastrado.'});
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = userRepository.create({
                name,
                email,
                password: hashedPassword,
                role: role || "CUSTOMER"
            })

            await userRepository.save(user);

            // tira a senha do objeto antes de mandar pro front
            const { password: _, ...userWithoutPassword } = user;

            return res.status(201).json(userWithoutPassword);
        } catch (error) {
            console.error(error);
            return res.status(500).json({message: 'Erro ao registrar usuário.'});
        }   
    }

    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            if (!email || !password) {
                return res.status(400).json({message: 'Email e senha são obrigatórios.'});
            }

            const user = await userRepository.findOneBy({ email });
            if (!user) {
                return res.status(404).json({message: 'Email ou senha incorretos.'});
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({message: 'Email ou senha incorretos.'});
            }

            const secret = process.env.JWT_SECRET || 'default_secret';
            const token = jwt.sign({ id: user.id, role: user.role }, secret, { expiresIn: '1h' });

            
            // tira a senha do objeto antes de mandar pro front
            const { password: _, ...userWithoutPassword } = user;


            return res.json({ token, user: userWithoutPassword });
            
        } catch (error) {
            console.error(error);
            return res.status(500).json({message: 'Erro ao fazer login.'});
        }
    }
}
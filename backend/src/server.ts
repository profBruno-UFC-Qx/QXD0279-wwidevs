import 'reflect-metadata';
import 'dotenv/config';
import { app } from './app';
import { AppDataSource } from './database/data-source';

const PORT = process.env.PORT || 3333;

AppDataSource.initialize()
    .then(() => {
        console.log('Banco de dados conectado');
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        })
    })
    .catch((error) => {
        console.error('Erro ao conectar ao banco de dados', error);
    });
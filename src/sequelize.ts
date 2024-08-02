import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'task_manager',
    port: 13716,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'mysql-3d7f6b08-govardhanmeena701-9b83.e.aivencloud.com',
    username: 'avnadmin',
    password: 'AVNS_4juL_3ItoUCj-zGkEeZ',
    database: 'task_manager',
    port: 13716,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
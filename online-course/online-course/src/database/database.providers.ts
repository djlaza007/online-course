import { async, from } from "rxjs";
import {Sequelize} from 'sequelize-typescript';
import { Tutor } from "src/tutors/tutor.model";
import { databaseConfig} from './database.config';

export const databaseProvider=[{
    provide: 'SEQUELIZE',
    useFactory: async ()=>{
        //hradcoded for test, should be change
        const sequelize=new Sequelize({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'lazarncoded',
            database: 'online-course',
        });
        sequelize.addModels([Tutor]); //should be add all models
        await sequelize.sync();
        return sequelize;
    },
},
];
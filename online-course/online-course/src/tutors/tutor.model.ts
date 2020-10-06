import {Column, DataType, Model, Table} from 'sequelize-typescript';

@Table
export class Tutor extends Model<Tutor> {
    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    firstName:string;

    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    lastName:string;

    @Column({
        type: DataType.STRING,
        unique:true,
        allowNull:false,
    })
    username:string;

    @Column({
        type: DataType.STRING,
        unique:true,
        allowNull:false,
    })
    email:string;


    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    password:string;
}
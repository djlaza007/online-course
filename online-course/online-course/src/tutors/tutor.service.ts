import { Inject, Injectable } from "@nestjs/common";
import { Tutor } from "./tutor.model";
import {TutorDto} from './dto/tutor.dto'


@Injectable()
export class TutorService{
    constructor(
        @Inject('TUTORS_REPOSITORY') private tutorsRepository: typeof Tutor){

    }

}
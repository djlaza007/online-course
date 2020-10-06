import { Controller } from "@nestjs/common";
import { TutorService } from "./tutor.service";

@Controller()
export class TutorController{
    constructor(private readonly tutorService:TutorService){

    }

    //rest api methods
}
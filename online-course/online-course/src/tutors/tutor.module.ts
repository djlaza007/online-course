import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { TutorController } from "./tutor.controllers";
import { tutorsProviders } from "./tutor.providers";
import { TutorService } from "./tutor.service";

@Module({
    imports:[DatabaseModule],
    controllers:[TutorController],
    providers:[TutorService,...tutorsProviders],
    exports:[TutorService]
})
export class TutorModule{

}
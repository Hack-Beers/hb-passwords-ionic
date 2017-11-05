import { NgModule } from "@angular/core";
import { FolderService } from "./folder.service";
import { HttpModule } from "@angular/http";

@NgModule({
    providers:[
        FolderService
    ],
    imports:[
        HttpModule
    ]
})
export class RequestsModule {}
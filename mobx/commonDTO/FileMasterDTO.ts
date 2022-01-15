import FileDTO from "@/mobx/commonDTO/FileDTO";
import {makeObservable, observable} from "mobx";

export class FileMasterDTO{
    id=0;
    file:FileDTO[] = [];
    url='';
    constructor() {
        makeObservable(this,{
            id:observable,
            file:observable,
            url:observable,
        })
    }
}
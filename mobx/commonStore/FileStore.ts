import {FileMasterDTO} from "@/mobx/commonDTO/FileMasterDTO";
import {action, makeObservable, observable} from "mobx";
import FileDTO from "@/mobx/commonDTO/FileDTO";

export default class FileStore{
    fileList:FileMasterDTO[] = [];
    previewFile:any[] = [];
    id=0;
    constructor() {
        makeObservable(this,{
            fileList: observable,
            previewFile: observable,
            setFileList:action,
        });
    }

    setFileList = (file:any) => {
        this.previewFile.push({
            id:this.id++,
            url: file.url,
            name: file.name,
            type: file.type
        });
        console.log(this.previewFile,"Store");
    }
}
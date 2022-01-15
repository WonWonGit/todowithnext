import {makeObservable, observable} from "mobx";

export default class FileDTO{
    id=0;
    url='';
    type='';
    name='';

    constructor() {
        makeObservable(this,{
            id:observable,
            url:observable,
            type:observable,
            name:observable
        })
    }

}
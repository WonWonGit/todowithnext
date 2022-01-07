import {makeObservable, observable} from "mobx";

export default class TodoDTO{
    id = 0;
    todo = '';
    done = 'N';

    constructor() {
        makeObservable(this,{
            id:observable,
            todo:observable,
            done:observable,
        })
    }
}
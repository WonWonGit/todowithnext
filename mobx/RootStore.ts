import TodoStore from "@/mobx/commonStore/TodoStore";
import FileStore from "@/mobx/commonStore/FileStore";

export default class RootStore{
    rootStore: RootStore;
    todoStore: TodoStore;
    fileStore: FileStore;

    constructor() {
        this.rootStore = this;
        this.todoStore = new TodoStore();
        this.fileStore = new FileStore();
    }
}
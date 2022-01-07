import TodoStore from "@/mobx/commonStore/TodoStore";

export default class RootStore{
    rootStore: RootStore;
    todoStore: TodoStore;

    constructor() {
        this.rootStore = this;
        this.todoStore = new TodoStore();
    }
}
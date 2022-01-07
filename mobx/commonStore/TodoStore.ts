import TodoDTO from "@/mobx/commonDTO/TodoDTO";
import lodash from "lodash";
import {action, makeObservable, observable} from "mobx";
import TodoRepository from "@/mobx/commonRepository/TodoRepository";

export default class TodoStore{
    todoDTOList : TodoDTO[] = [];
    todoDTOListDone :TodoDTO[] = [];
    constructor() {
        makeObservable(this,{
            todoDTOList:observable,
            todoDTOListDone:observable,
            setTodoDTOList:action,
        });
    }

    setTodoDTOList = (todoList: TodoDTO[]) => {
        this.todoDTOList = [];
        this.todoDTOListDone = [];
        todoList.filter((todoDTO:TodoDTO) => {
            if(todoDTO.done === 'N'){
                const exist = this.todoDTOList.find((todoDTOList:TodoDTO) => (todoDTOList.id === todoDTO.id))
                if(!exist){
                    this.todoDTOList.push(todoDTO);
                }
            }else{
                const exist = this.todoDTOListDone.find((todoDTODone:TodoDTO) => (todoDTODone.id === todoDTO.id))
                if(!exist){
                    this.todoDTOListDone.push(todoDTO);
                }
            }
        });



        // todoDTOList.filter((todoDTO:TodoDTO) => {
        //     const exist = this.todoDTOList.find((todoDTOIncomplete:TodoDTO) => (todoDTOIncomplete.id === todoDTO.id))
        //     if(!exist){
        //         this.todoDTOList.push(exist);
        //     }
        //
        //
        //     if(todoDTO.done === 'N'){
        //         if(!exist){
        //             this.todoDTOList.push(todoDTO);
        //         }else{
        //             this.todoDTOList.pop();
        //         }
        //     }else{
        //         const exist = this.todoDTOListDone.find((todoDTODone:TodoDTO) => (todoDTODone.id === todoDTO.id))
        //         if(!exist){
        //             this.todoDTOListDone.push(todoDTO);
        //         }else{
        //             this.todoDTOListDone.pop();
        //         }
        //     }
        // });
    }

    getTodoDTOList = () => {
        return TodoRepository.getTodoDTOList()
            .then((result:any) => {
                if(result.status == 200){
                    console.log(result.data);
                    const todoDTOList: TodoDTO[] = result.data;
                    this.setTodoDTOList(todoDTOList);
                    return this.todoDTOList;
                }
            });
    }

    postTodoDTO = (todoInput:{id:number, todo:string, done:string}) => {
        return TodoRepository.postTodoDTO(todoInput)
            .then((result:any)=>{
                if(result.status == 201){
                    console.log(result);
                    return "success";
                }else{
                    return "fail";
                }
            });
    }

    deleteTodoDTO = (id:any) => {
        return TodoRepository.deleteTodoDTO(id)
            .then((result:any) => {
                if(result.status == 200){
                    return "success";
                }else{
                    return "fail";
                }
            });
    }

    updateTodoDTO = (todoDTO:TodoDTO) => {
        console.log(todoDTO);
        return TodoRepository.updateTodoDTO(todoDTO)
            .then((result:any) => {
                if(result.status == 200){
                    return "success";
                }else{
                    return "fail";
                }
            });
    }


}
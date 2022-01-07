import CommonAxios from "@/custom/axios/CommonAxios";
import TodoDTO from "@/mobx/commonDTO/TodoDTO";
import {data} from "browserslist";

class TodoRepository{
    URL = 'todo';

    getTodoDTOList = () => {
        return CommonAxios.instance().get(`${this.URL}`);
    }

    postTodoDTO = (todoDTO:TodoDTO) => {
        return CommonAxios.instance().post(`${this.URL}`,todoDTO);
    }

    deleteTodoDTO = (id:number) => {
        return CommonAxios.instance().delete(`${this.URL}/${id}`);
    }

    updateTodoDTO = (todoDTO:TodoDTO) => {
        return CommonAxios.instance().put(`${this.URL}/${todoDTO.id}`,todoDTO);
    }
}

export default new TodoRepository();
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {inject, observer} from "mobx-react";
import RootStore from "@/mobx/RootStore";
import TodoStore from "@/mobx/commonStore/TodoStore";
import TodoDTO from "@/mobx/commonDTO/TodoDTO";
import React, {useEffect, useState} from "react";
import {any, string} from "prop-types";

const Home: NextPage = (props:any) => {

  const rootStore : RootStore = props.rootStore;
  const todoStore : TodoStore = rootStore.todoStore;

  const[todoInput, setTodoInput] = useState({id:0, todo:'', done:'N'});
  const[hide, setHide] = useState('N');
  const[hideInput, setHideInput] = useState('');
  const {todo} = todoInput;


  const getTodoDTOList = async () => {
     const axiosDTO = await todoStore.getTodoDTOList();
  }

  const buttonClick = async (status:any,todoDTO:any) => {
    let result:string = '';
    switch (status){
      case 'post':
        result = await todoStore.postTodoDTO(todoInput);
        break;
      case 'delete':
        result = await todoStore.deleteTodoDTO(todoDTO.id);
        break;
      case 'updateDone':
        todoDTO.done = "Y";
        result = await todoStore.updateTodoDTO(todoDTO);
        break;
      case 'update':
        todoDTO.todo = hideInput;
        result = await todoStore.updateTodoDTO(todoDTO);
        break;
    }

    if(result == "success"){
      getTodoDTOList();
      setTodoInput({id:0, todo:'', done:'N'});

    }else {
      alert("요청 실패");
    }

  }

  const handleHide = (hide:string,todo:any) => {
    setHide(hide);
    setHideInput(todo);
  }

  const empty = (e:any) => {
    setHideInput('');
  }

  const hideInputChange = (e:any) => {
    setHideInput(e.target.value);
  }

  useEffect(()=>{
    getTodoDTOList();
  },[]);

  const change = (e:any) => {
    const set = {
      ...todoInput,
      [e.target.name] : e.target.value
    }
    setTodoInput(set);
  }


      return (
      <div
          className="container"
          // className={styles.container}
      >
        <div className="row">
        <div className="col">
          <div className="input-group">
          <input className="form-control col-xs-3" name="todo" value={todo} onChange={change}/>
          <button onClick={()=>{buttonClick('post',0)}} className="btn btn-sm btn-outline-secondary">저장</button>
          </div>
          <ul>
            {todoStore.todoDTOList != null && todoStore.todoDTOList.map((todoDTO:TodoDTO) => (
                <li key={todoDTO.id}>{todoDTO.todo}<button className="btn btn-sm" onClick={()=>{buttonClick('updateDone',todoDTO)}}>완료</button>
                  { hide == 'N' ?
                      <button className="btn" onClick={()=>{handleHide('Y',todoDTO.todo)}}>수정</button> :
                      <div>
                        <input className="updateInput"  onFocus={empty} key={todoDTO.id} value={hideInput} onChange={hideInputChange}/>
                        <button className="btn btn-sm" onClick={()=>{handleHide('N',''); buttonClick('update',todoDTO)}}>수정완료</button>
                      </div>
                  }
                </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h3>완료</h3>
          <ul>
            {todoStore.todoDTOListDone != null && todoStore.todoDTOListDone.map((todoDTO:TodoDTO) => (
                <li key={todoDTO.id}>{todoDTO.todo}<button className="btn" onClick={()=>{buttonClick('delete',todoDTO)}}>X</button></li>
            ))}
          </ul>
        </div>
        </div>
      </div>
      )
      }

      export default inject('rootStore')(observer(Home));



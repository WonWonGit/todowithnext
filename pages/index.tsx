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
import Header from "@/components/Header";
import Wrap from "@/components/Wrap";
import {reset} from "@/styles/reset";
import {admin} from "@/styles/admin";
import {AdminContent} from "@/components/AdminContent";

const Home: NextPage = (props:any) => {

  const rootStore : RootStore = props.rootStore;
  const todoStore : TodoStore = rootStore.todoStore;

  const[todoInput, setTodoInput] = useState({id:0, todo:'', done:'N'});
  const[hides, setHides] = useState({id:0, hide:'N'});
  const[hideInput, setHideInput] = useState('');
  const {todo} = todoInput;
  const {id, hide} = hides;


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
    const setHide = {
      ...hides,
      id:todo.id,
      hide:hide
    }
    setHides(setHide)
    setHideInput(todo.todo);
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
          <>
          <AdminContent />
          </>

      // <div
      //     className="container-fluid w-100"
      //     style={{ background: "#f2f1eb" }}
      // >
      //   <div className="row vh-100">
      //   <div className="col  mt-5">
      //     <div className="card shadow p-3 mb-5 bg-body rounded">
      //       <div className="card-header">
      //         <h3>TODO LIST</h3>
      //     <div className="input-group">
      //     <input className="form-control col-xs-3" name="todo" value={todo} onChange={change}/>
      //     <button onClick={()=>{buttonClick('post',0)}} className="btn btn-sm btn-outline-secondary">SAVE</button>
      //     </div>
      //       </div>
      //     <ul className="list-group  list-group-flush">
      //       {todoStore.todoDTOList != null && todoStore.todoDTOList.map((todoDTO:TodoDTO) => (
      //           <li className="list-group-item d-flex justify-content-between" key={todoDTO.id}>
      //             <div className="w-100">
      //               {todoDTO.todo}
      //             </div>
      //             { hide == 'N'?
      //                 <div className="badge">
      //                 <button className="btn btn-sm" onClick={()=>{buttonClick('updateDone',todoDTO)}}>
      //                   <i className="bi bi-check-circle"></i>
      //                 </button>
      //                 <button className="btn btn-sm" onClick={()=>{handleHide('Y',todoDTO)}}>
      //                   <i className="bi bi-pencil-square"></i>
      //                 </button>
      //                 </div>
      //                 : id===todoDTO.id?
      //                 <div className="w-100">
      //                   <input className="updateInput"  key={todoDTO.id} value={hideInput} onChange={hideInputChange}/>
      //                   <button className="btn btn-sm" onClick={()=>{handleHide('N',todoDTO); buttonClick('update',todoDTO)}}>
      //                     <i className="bi bi-file-check"></i>
      //                   </button>
      //                   <button className="btn btn-sm" onClick={()=>{handleHide('N',todoDTO);}}>
      //                     <i className="bi bi-x-circle-fill"></i>
      //                   </button>
      //                 </div> : null }
      //           </li>
      //       ))}
      //     </ul>
      //     </div>
      //   </div>
      //
      //   <div className="col mt-5">
      //     <div className="card shadow p-3 mb-5 bg-body rounded">
      //     <div className="card-header">
      //       <h3>DONE</h3>
      //     </div>
      //     <ul className="list-group  list-group-flush">
      //       {todoStore.todoDTOListDone != null && todoStore.todoDTOListDone.map((todoDTO:TodoDTO) => (
      //           <li className="list-group-item d-flex justify-content-between" key={todoDTO.id}>
      //             <div className="text-muted text-decoration-line-through">
      //               {todoDTO.todo}
      //             </div>
      //             <div className="badge">
      //               <button className="btn btn-sm" onClick={()=>{buttonClick('delete',todoDTO)}}>
      //                 <i className="bi bi-trash"></i>
      //               </button>
      //             </div>
      //           </li>
      //       ))}
      //     </ul>
      //     </div>
      //   </div>
      //   </div>
      // </div>
      )
      }

      export default inject('rootStore')(observer(Home));



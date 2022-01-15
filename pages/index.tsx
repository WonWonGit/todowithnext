import type { NextPage } from 'next'
import {inject, observer} from "mobx-react";
import RootStore from "@/mobx/RootStore";
import TodoStore from "@/mobx/commonStore/TodoStore";
import TodoDTO from "@/mobx/commonDTO/TodoDTO";
import React, {useEffect, useState} from "react";
import FileStore from "@/mobx/commonStore/FileStore";
import FileDTO from "@/mobx/commonDTO/FileDTO";

const Home: NextPage = (props:any) => {

  const rootStore : RootStore = props.rootStore;
  const todoStore : TodoStore = rootStore.todoStore;
  const fileStore : FileStore = rootStore.fileStore;

  // const[todoInput, setTodoInput] = useState({id:0, todo:'', done:'N'});
  // const[hides, setHides] = useState({id:0, hide:'N'});
  // const[hideInput, setHideInput] = useState('');
  // const {todo} = todoInput;
  // const {id, hide} = hides;
  //
  //
  // const getTodoDTOList = async () => {
  //    const axiosDTO = await todoStore.getTodoDTOList();
  // }
  //
  // const buttonClick = async (status:any,todoDTO:any) => {
  //   let result:string = '';
  //   switch (status){
  //     case 'post':
  //       result = await todoStore.postTodoDTO(todoInput);
  //       break;
  //     case 'delete':
  //       result = await todoStore.deleteTodoDTO(todoDTO.id);
  //       break;
  //     case 'updateDone':
  //       todoDTO.done = "Y";
  //       result = await todoStore.updateTodoDTO(todoDTO);
  //       break;
  //     case 'update':
  //       todoDTO.todo = hideInput;
  //       result = await todoStore.updateTodoDTO(todoDTO);
  //       break;
  //   }
  //
  //   if(result == "success"){
  //     getTodoDTOList();
  //     setTodoInput({id:0, todo:'', done:'N'});
  //
  //   }else {
  //     alert("요청 실패");
  //   }
  //
  // }
  //
  // const handleHide = (hide:string,todo:any) => {
  //   const setHide = {
  //     ...hides,
  //     id:todo.id,
  //     hide:hide
  //   }
  //   setHides(setHide)
  //   setHideInput(todo.todo);
  // }
  //
  // const hideInputChange = (e:any) => {
  //   setHideInput(e.target.value);
  // }
  //
  // useEffect(()=>{
  //   getTodoDTOList();
  // },[]);
  //
  // const change = (e:any) => {
  //   const set = {
  //     ...todoInput,
  //     [e.target.name] : e.target.value
  //   }
  //   setTodoInput(set);
  //
  const [imgBase64, setImgBase64] = useState({url:'',name:'',type:''});
  const [imgBase, setImgBase] = useState([] as any);
  const [files, setFiles] = useState();
  const [img, setImg] = useState([]);

  const handleUpload = (e:any) => {
      for(var i=0;i<e.target.files.length;i++){
          if(e.target.files[i]){
              console.log(e.target.files[i]);
              if(e.target.files[i].type.match(`image/*`)){

                  let reader = new FileReader();
                  reader.readAsDataURL(e.target.files[i]);

                  reader.onloadend = () => {
                      const base64= reader.result;
                      // console.log(reader.result);

                      if(base64){
                          var base64Sub = base64.toString();
                          // setImgBase({
                          //     id: imgBase64.id++,
                          //     url:base64Sub
                          // });
                          fileStore.setFileList({
                              url: base64Sub,
                              name: e.target.files[i].name,
                              type: e.target.files[i].type
                          });
                      }else{
                          reader.readAsDataURL(e.target.files[i]);
                      }

                  }
              }else{
                  console.log('이미지 아님');
                  fileStore.setFileList({
                      url: '',
                      name: e.target.files[i].name,
                      type: e.target.files[i].type
                  });
              }

          }
      }

  }

  const removeImg = (id:number) => {
      imgBase.filter((item:any)=>{
          if(item.id===id){
              imgBase.pop();

          }
      })
  }


  const writeBoard = async (e:any)=>{
      e.preventDefault();
      const form = new FormData();
      form.append("file",img[0]);

      console.log(form);

      // await axios.post('http://localhost:3001/file',
      //     {
      //         "file": form
      //     },{
      //     headers:{
      //         "Content-Type": `multipart/form-data;`,
      //     }
      // }).then(()=>{
      //     console.log('성공');
      // }
      // )

  }




      return (
          <>
            <form
                encType="multipart/form-data"
                // onSubmit={handleSubmit}
            >
              <input type="file" id="file" accept="image/*, application/pdf"
                     multiple={true}
               onChange={handleUpload}
              />
              <button onClick={writeBoard}></button>
            </form>
              <ul>
              {fileStore.previewFile!=null &&
                  fileStore.previewFile
                      .map((previewFile:any) => {
                          if(previewFile.type.includes('image/')){
                              return (<img src={previewFile.url} key={previewFile.id} width={100} height={100} />)
                          }else{
                              return (<div key={previewFile.id} style={{width:100, height:100, backgroundColor:"gray"}}>{previewFile.name}</div>)
                          }
                      })
                  // fileStore.previewFile.map((img:any)=>(
                  // <img src={img.url} key={img.id} width={100} height={100} />
              // ))
              }
              </ul>
              {/*// map((file:FileDTO)=>(*/}
              {/*//    <img src={file.url} key={file.id} alt="img" width={100} height={100} />*/}
              {/*// ))*/}
              {/*}*/}
                {/*<ul>*/}
                {/*{imgBase64 && imgBase.map((item:any)=>(*/}
                {/*    console.log(item,"INDEX")*/}
                {/*    // <li key={item.id}>{item.url}</li>*/}
                {/*))*/}
                {/*}*/}
                {/*</ul>*/}
                {/*{imgBase64 && imgBase.map((item:any)=>(*/}
                {/*    <div key={item.id}>*/}
                {/*    <img src={item.url} key={item.id} height={200} width={200}/>*/}
                {/*    <button onClick={()=>removeImg(item.id)}>삭제</button>*/}
                {/*    </div>*/}
                {/*    ))*/}
                {/*}*/}
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



import React, { useState,useEffect } from 'react'
import './todos.css'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import { TiTick } from "react-icons/ti";
import { edit, Todolist,delets } from '../redux/Counter/Slice';
import { useDispatch, useSelector } from 'react-redux';
const Todo = () => {

const task =useSelector( state => state.counter.task)
const [Redux, setRedux] = useState("");
const [Change, setChange] = useState(true);
const editing =useSelector( state => state.counter.editing)

const [Completed, setCompleted] = useState([]);

console.log(editing)
console.log(task)
const dispatc=useDispatch()

console.log(Redux)



// function handle(param="") {
//    if (param === 'add') {

//     dispatc(Todolist(Redux))
// setRedux("")
// }
// if (param === 'edit') {
  
// }
//    }
// const EditFunc=(id)=>{
//   dispatc(edit(id))
// }


  const [Todo, setTodo] = useState(
    {
      id: 0,
      name: " ",
des:""
    });


    const locals = "store"
  const [Form, setForm] = useState(()=>{
    const raw=localStorage.getItem(locals)

    if (!raw) return [];
  return JSON.parse(raw)
  });

  const [Edit, setEdit] = useState(true);

   console.log(Form)


  function edit(is) {
    setEdit(false)
    const todolist = [...Form]
    console.log(todolist)
    const index = todolist.findIndex((x, ads) => ads === is)
    console.log(index)


    if (index !== -1) {
      const get = todolist[index].name
          const des = todolist[index].des
      setTodo({ id: is, name: get ,des:des})

    }


    console.log("edit")
  }

  localStorage.setItem(locals, JSON.stringify(Form));


function clear() {
  setForm([])
}
  
  function delet(id) {
    const todolist = [...Form]
    const fil = todolist.filter((s, i) => i !== id)
    console.log(fil)
    setForm(fil)


    console.log("delete")
  }



  function onclicked(param = "") {

    setEdit(true)
    const list = [...Form]
    if (!Edit) {
      const indexs = list.findIndex((x, adds) => adds === Todo.id)
      console.log(indexs)


      if (indexs !== -1) {
        if (param === 'edit') {
          list[indexs].name = Todo.name
            list[indexs].des = Todo.des
          setForm(list)
          setTodo({id:Todo.id,name:" ",des:""})

        }
      }
    }

    if (param === 'add') {
      const toobj = {
        name: Todo.name,
        des:Todo.des
      }
      list.push(toobj)
      setForm(list)
      setTodo({ name: "", des:"",id: "0" })
    }
  }
  console.log([...Form]   )
  console.log({...Todo})
  function hand(e) {
    setTodo({
      ...Todo,
     [e.target.name]: e.target.value
    })
  }


function complete(comId) {
 const listtt = [...Form]
console.log(listtt)

console.log(comId)

const getting=   listtt.findIndex((f,i)=>  i == comId)

     const name=  listtt[getting].name
       
      const content= listtt[getting].des
      console.log( content ,name)

setCompleted((prev) => [...prev, { title: name, des: content }])
console.log(getting)

   
  setForm(listtt.filter((_, idsss) => idsss !== comId));

}

function clean(idClean) {
  setCompleted((prev) => prev.filter((_, idx) => idx !== idClean));
}


// useEffect(() => {
//   if (editing) {
//     setRedux(editing)
//     setChange(false)
//   }
// }, [editing]);


console.log(Completed)
  return (
    <>



  <h1 className='text-white uppercase text-4xl'> TOdo list app    </h1>

<span className='text-white uppercase  '>Create by abdullah furqan</span>
      <div className='bg-gray-700 w-full h-fit my-5 py-5 rounded-2xl'>

        <div className='pt-6  grid sm:grid-cols-2'>
          <div>

<span className='text-white'>Title</span>
        <input className='text-white sm:w-70 ' placeholder=' Write your Title' type="text" name='name' onChange={hand} value={Todo.name} />
   
   </div>
   <div className='my-4 sm:my-0'>
    <span htmlFor="" className='text-white '>Description</span>
<input type="text" className=' text-white sm:w-50' placeholder=' Write your Desciption' name='des' onChange={hand} value={Todo.des} />

        {Edit ?
          <button className=' bg-cyan-600 text-white uppercase cursor-pointer' onClick={() => onclicked("add")} >Add</button>
          :
          <button className=' bg-cyan-600 uppercase cursor-pointer' onClick={() => onclicked("edit")} >Edit </button>

        }</div>
      </div>
      <div className='w-80 my-5 '>                        
<button  className={`px-4 py-2 cursor-pointer  ${
      Change ? "bg-cyan-600 text-white" : "bg-white text-black"
    }`}  onClick={()=> setChange(true)}>Todo</button>
<button  className={`px-4 py-2 cursor-pointer  ${
      !Change ? "bg-cyan-600 text-white" : "bg-white text-black"
    }`}  onClick={()=> setChange(false)}>Completed</button>
</div>
{Change ? <div className='grid grid-cols-1 sm:grid-cols-2 gap-5  '>
       
        {Form.map((lis, idds) => {
          return (

            <>
            
            <div className='flex flex-col justify-between border-2  border-amber-50 rounded-2xl p-4 mx-4 bg-gray-800' >
            
            
                  <h1 className='text-3xl uppercase text-cyan-500 pt-3 overflow-hidden  '>{lis.name}</h1>
            <p className='py-5 text-gray-300  overflow-hidden  '>{lis.des}</p> 

             <div>
        
             

</div>
<div className=' flex gap-4 mt-4 justify-end'>
              <button    className='text-3xl hover:text-cyan-300 cursor-pointer '   onClick={() => edit(idds)}><FaEdit />  </button>
            
              <button className='text-3xl hover:text-red-700 cursor-pointer text-white' onClick={() => delet(idds)}><MdDelete /></button>
                <button  className='text-4xl text-green-400 cursor-pointer '  onClick={() => complete(idds)}><TiTick /></button>
</div>
           </div>
         
            </>
          )
        })}

      </div>
 :<div  className='grid grid-cols-1 sm:grid-cols-2 gap-5 mx-4' >
 {Completed.map((item, cleanId) => {
          return (

            <>
            <div className='flex flex-col justify-between border-2 border-amber-50 rounded-2xl p-4 bg-gray-800'>
            <div className='my-4 ' >
             
              <h1 className='text-3xl uppercase  text-cyan-500 '>{item.title}</h1>
            
             
<p className='py-5 text-gray-300   '>{item.des}</p> </div>
<div className=' flex  justify-center '> 
<button  className="text-3xl hover:text-red-700 cursor-pointer" onClick={() => clean(cleanId)}><MdDelete />
</button>
      </div>     
         </div>   </>
          )
        })}
</div>
       }



</div>
<button className='bg-white cursor-pointer'  onClick={clear}>CLEAR ALL</button>




{/* 

<input type="text" required onChange={(e)=> setRedux(e.target.value)} value={Redux} />

{Change  ? 
<button type="submit"  onClick={ ()=> handle("add")}>Add</button>
:
<button type="submit" onClick={()=> handle('edit')}>Edit</button>
 }




{task.map((saads,id)=>{
    console.log(saads.id)
  
  return(
  
    <>
<p>{saads.text}</p>

<button onClick={()=> EditFunc(saads.id)}>Edit</button>
<button  onClick={()=> dispatc(delets(saads.id))}>Delte</button>
</>
  )
}
)} */}






    </>
  )
}

export default Todo

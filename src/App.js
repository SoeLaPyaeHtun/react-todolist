import axios from "axios";
import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { api } from "./api/api";
import Form from "./components/Form";
import List from "./components/List";
import ReactLoading from 'react-loading';
import './loading.css'

function App() {

  const [ tasks , setTasks] = useState([])
  const [loading, setloading] = useState(false)



  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );


  const fetchTasks = async() => {

    setloading(true)
   // await delay(1000);
    const res = await api.get('todolist/')
    setTasks(res.data)
    setloading(false)


  }



  const addNewTask = async (task) => {
    const newTask = {
      id: uuid(),
      task: task,
      complete: false
    }

   const res = await api.post("/todolist", newTask)

   setTasks([
    ...tasks,
    newTask
   ])


  }


  const deleteTask = async (id) => {
    const res = await api.delete(`/todolist/${id}`)

    if(res.statusText == "OK"){
      setTasks(tasks.filter(task => task.id !== id))
    }
  }


  const completeTask = async (id, complete) => {
    const res = await api.patch(`/todolist/${id}`, {
      complete
    })

    setTasks(tasks.map(task => {
      if(task.id == id){
        return{
          id: task.id,
          task : task.task, 
          complete: !task.complete
        }
      }
      return task
    }))

  }
 
useEffect(()=>{
  fetchTasks()
},[])

  return (
   <>
   <div className="w-full h-screen bg-white flex flex-col gap-y-12 justify-center items-center">
    <h1 className="text-4xl text-center text-gray-900 font-bold">TOdo List</h1>
    <Form addNewTask={addNewTask}/>

    {
      loading ? <div class="loadingio-spinner-spin-lbhposzjuyg"><div class="ldio-tvojyoj1hld">
      <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
      </div></div> :  <List tasks={tasks} deleteTask = {deleteTask} completeTask = {completeTask}/>
    }
   </div>
   </>
  );
}

export default App;

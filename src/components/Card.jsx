import React from 'react'
import { BiXCircle, BiUndo } from "react-icons/bi";

const Card = ({tasks, deleteTask, completeTask}) => {


  return (
   <>
   {
    tasks.map((task) => (
        <li onClick={() => completeTask(task.id, !task.complete)} key={task.id} className={task.complete ? 'bg-red-600 text-red-200 px-3 text-lg py-4 w-full rounded-lg flex justify-between items-center':'bg-slate-200 text-gray-200 px-3 text-xl py-4 w-full rounded-lg flex justify-between items-center border-y-2 transition duration-200 hover:bg-slate-300 border-cyan-200'}>
        <p className={task.complete ? "line-through text-black" : " text-black" }>{task.task}</p>
        {
            <BiXCircle onClick={() => deleteTask(task.id)} className='text-2xl text-gray-900'/>
        }
      </li>
    ))
   }
   </>
  )
}

export default Card
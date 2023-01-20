import React from 'react'

import Card from './Card';


const List = ({tasks, deleteTask, completeTask}) => {
  return (
    <ul className='list-none w-full md:w-1/3 flex flex-col gap-y-3'>
     
<Card tasks = {tasks} deleteTask={deleteTask} completeTask={completeTask} />

    </ul>
  )
}

export default List
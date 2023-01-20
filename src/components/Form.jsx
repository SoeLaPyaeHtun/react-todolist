import React from 'react'
import { useState } from 'react'

const Form = ({addNewTask}) => {

const[value, setValue] = useState('')


const handlerSubmit = e => {
    e.preventDefault()

    if(value !== ''){
    addNewTask(value)
    }

    setValue('')
}


  return (
    <form onSubmit={handlerSubmit} className='block w-full md:w-1/3'>
    <div className='flex gap-4'>
        <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='add todo' className=' bg-gray-200 text-gray-900 py-2 px-3 rounded-lg w-3/4 text-xl'/>
        <button type='submit' className='bg-cyan-200 text-light w-1/4 text-xl rounded-lg'>Add</button>
    </div>
    </form>
  )
}

export default Form 
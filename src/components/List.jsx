import React from 'react'
import { BiXCircle, BiUndo } from "react-icons/bi";


const List = () => {
  return (
    <ul className='list-none w-full md:w-1/3 flex flex-col gap-y-3'>
      <li className='bg-gray-600 text-gray-200 px-3 text-xl py-4 w-full rounded-lg flex justify-between items-center transition duration-200 hover:bg-slate-800'>
        <p>React Item</p>
        <BiXCircle />
      </li>


      <li className='bg-gray-600 text-gray-200 px-3 text-xl py-4 w-full rounded-lg flex justify-between items-center transition duration-200 hover:bg-slate-800'>
        <p>React Item</p>
        <BiXCircle />
      </li>


      <li className='bg-red-600 text-gray-200 px-3 text-xl py-4 w-full rounded-lg flex justify-between items-center transition duration-200 hover:bg-slate-800'>
        <p className='line-through'>React Item</p>
        <BiUndo />
      </li>


    </ul>
  )
}

export default List
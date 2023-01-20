import React from 'react'

const Form = () => {
  return (

    <form className='block w-full md:w-1/3'>
    <div className='flex gap-4'>
        <input type="text" placeholder='add todo' className=' bg-gray-700 text-grey-800 py-2 px-3 rounded-lg w-3/4 text-xl'/>
        <button type='submit' className='bg-amber-600 text-light w-1/4 text-xl rounded-lg'>Add</button>
    </div>
    </form>
  )
}

export default Form 
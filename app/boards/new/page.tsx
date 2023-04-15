import React from 'react'
import BoardForm from './BoardForm'

const NewBoardPage = () => {
  return (
    <div className='flex flex-col gap-10'>
        <h1 className='text-2xl'>Create a new Board</h1>
        <BoardForm />
    </div>
  )
}

export default NewBoardPage

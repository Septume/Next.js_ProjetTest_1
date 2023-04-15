import React from 'react'
import { Button } from '~/src/components/form/Bouton'
import { Input } from '~/src/components/form/Input'

const BoardForm = () => {
  return (
    <form className='flex flex-col gap-2'>
      <Input label='Title' name='title' />
      <Button type='submit'>Create board</Button>
    </form>
  )
}

export default BoardForm

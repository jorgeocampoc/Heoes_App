import React from 'react'
import { HeroeList } from '../components/HeroeList'

export const Marvel = () => {
  return (
    <>
    <h1 className='text-center'>Marvel Comics</h1>
        <hr />
    <HeroeList publisher = 'Marvel Comics'/>
    </>

  )
}

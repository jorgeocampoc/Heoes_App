import React from 'react'
import { HeroeList } from '../components/HeroeList'

export const Dc = (  ) => {
  return (
    <>
        <h1 className='text-center'>DC Comics</h1>
        <hr />
        <HeroeList publisher = 'DC Comics'/>
    </>
  )
}

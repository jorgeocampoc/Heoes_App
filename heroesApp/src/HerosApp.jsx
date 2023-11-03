import React from 'react'

import { AppRouter } from './Router/AppRouter'
import { UserProvider } from './context/UserProvider'
export const HerosApp = () => {
  return (
    <>
    <UserProvider>
       <AppRouter/>
    </UserProvider>
      
        
    </>

  )
}

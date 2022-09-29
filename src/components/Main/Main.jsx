import React from 'react'
import { MainStyled } from './style'

export const Main =({children}) => {
  return (
    <MainStyled>
      {children}
    </MainStyled>
  )
}

export default Main

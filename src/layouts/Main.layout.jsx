import React from 'react'

import styled from 'styled-components'

import Header from '../containers/Header.container'
import Body from './Body.layout'

function MainLayout () {

  return (
    <TodosWrapper>
      <Header />
      <Body />
    </TodosWrapper>
  )
}

const TodosWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default MainLayout

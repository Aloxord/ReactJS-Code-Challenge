import React from 'react'

import styled from 'styled-components'

import Header from '../containers/Header.container'
import Tasks from '../containers/Tasks.container'

function MainLayout () {

  return (
    <TodosWrapper>
      <Header />
      <Tasks />
    </TodosWrapper>
  )
}

const TodosWrapper = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
`

export default MainLayout

import React from 'react'

import styled from 'styled-components'

import useTodos from './useTodos'
import TodoContext from './TodoContext'

import MainLayout from './layouts/Main.layout'

function App () {

  const { list, createTodo, toggleComplete } = useTodos()

  return (
    <TodoContext.Provider value={{ list, createTodo, toggleComplete }}>
      <Wrapper>
        <MainLayout />  
      </Wrapper>
    </TodoContext.Provider>
  )
}

const Wrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
`

export default App

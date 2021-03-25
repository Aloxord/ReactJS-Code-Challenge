import React from 'react'

import styled from 'styled-components'

import useTodos from './useTodos'
import TodoContext from './TodoContext'

import MainLayout from './layouts/Main.layout'

function App () {

  const { 
    activeList,
    lists,
    createList, 
    createTodo, 
    toggleComplete,
    changeActive
  } = useTodos()

  return (
    <TodoContext.Provider value={{ 
      activeList,
      lists, 
      createList, 
      createTodo, 
      toggleComplete,
      changeActive
    }}>
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
  padding-top: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 24px;
  color: white;
`

export default App

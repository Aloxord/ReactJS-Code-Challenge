import React,{ useContext } from 'react'

import styled from 'styled-components'

import TodoContext from '../TodoContext'

import AddTodo from '../components/AddTodo'

const HeaderContainer = ()=>{

  const { activeList, createTodo } = useContext(TodoContext);

  return (
    <Wrapper>
      <AddTodo list={activeList} onAddTodo={createTodo} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export default HeaderContainer

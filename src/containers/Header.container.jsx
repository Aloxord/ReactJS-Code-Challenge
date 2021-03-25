import React,{ useContext } from 'react'

import styled from 'styled-components'

import TodoContext from '../TodoContext'

import AddTodo from '../components/AddTodo'

const HeaderContainer = ()=>{

  const { createTodo } = useContext(TodoContext);

  return (
    <Wrapper>
      <AddTodo onAddTodo={createTodo} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

export default HeaderContainer

import React from 'react'

import styled from 'styled-components'

import useTodos from '../useTodos'

import AddTodo from '../components/AddTodo'

const HeaderContainer = ()=>{

  const { createTodo } = useTodos();

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

import React,{ useContext } from 'react'

import styled from 'styled-components'

import TodoContext from '../TodoContext'

const FiltersContainer = () =>{

  const { changeFilter } = useContext(TodoContext)

  return (
    <Wrapper>
    <Title>Filters</Title>
    <Button
      onClick={()=>{
        changeFilter(0)
      }}
    >All</Button>
    <Button
      onClick={()=>{
        changeFilter(1)
      }}
    >active</Button>
    <Button
      onClick={()=>{
        changeFilter(2)
      }}
    >Completed</Button>
    </Wrapper>
  )
}

const Title = styled.p`
  font-size: 24px;
`

const Wrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Button = styled.button`
  width: 100%;
`

export default FiltersContainer

import React,{ useEffect, useContext } from 'react'

import styled from 'styled-components'

import TodoContext from '../TodoContext'

import TodoItem from '../components/TodoItem'

const Tasks = () =>{ 

  const { list, toggleComplete } = useContext(TodoContext)

  return (
    <Wrapper>
      {list.map(item => {
        const onComplete = e => {
          toggleComplete(item.id)
        }
        console.log(item)
        return <TodoItem key={item.id} {...item} onComplete={onComplete} />
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default Tasks

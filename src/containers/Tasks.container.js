import React,{ useEffect } from 'react'

import styled from 'styled-components'

import useTodos from '../useTodos'

import TodoItem from '../components/TodoItem'

const Tasks = () =>{ 

  const { list, toggleComplete } = useTodos()

  useEffect(()=>console.log(list),[list])

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

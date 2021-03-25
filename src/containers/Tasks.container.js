import React,{ useContext } from 'react'

import styled from 'styled-components'

import TodoContext from '../TodoContext'

import TodoItem from '../components/TodoItem'

const Tasks = () =>{ 

  const { activeList, lists, toggleComplete } = useContext(TodoContext)

  return (
    <Wrapper>
      {lists[activeList].items.map(item => {
        const onComplete = e => {
          toggleComplete(activeList,item.id)
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
  width: 500px;
  max-height: 400px;
  overflow: auto;
`

export default Tasks

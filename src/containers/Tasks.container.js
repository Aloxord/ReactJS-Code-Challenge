import React,{ useContext } from 'react'

import styled from 'styled-components'

import TodoContext from '../TodoContext'

import TodoItem from '../components/TodoItem'

const Tasks = () =>{ 

  const { activeList, filter, lists, toggleComplete } = useContext(TodoContext)

  const mustBe = filter === 1 ? false : filter === 2 ? true : null

  return (
    <Wrapper>
      {lists[activeList].items
        .filter(item => {
          if(mustBe === null) return item

          return item.completed === mustBe
        })
        .map(item => {
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

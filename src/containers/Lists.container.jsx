import React,{ useContext } from 'react'

import styled from 'styled-components'

import TodoContext from '../TodoContext'

import ListItem from '../components/ListItem.component'
import AddList from '../components/AddList.component'

const ListsContainer = () =>{ 

  const { 
    activeList, 
    lists, 
    createList, 
    changeActive 
  } = useContext(TodoContext)

  return (
    <Wrapper>
      <AddList onAddList={createList}/>
      {Object.entries(lists).map(list => {

        return <ListItem 
          key={list[0]} 
          id={list[0]} 
          isActive={activeList === list[0]}
          name={list[1].name} 
          editList={changeActive}
          />
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;;
  width: 200px;
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
`

export default ListsContainer

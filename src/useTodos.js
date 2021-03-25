import { useEffect, useReducer } from 'react'

const initialState = {
  activeList: '1',
  filter:0,
  lists: {
    '1': {
      name: 'First list',
      items: [
        {
          id: 1,
          completed: false,
          text: 'Read README'
        },
        {
          id: 2,
          completed: false,
        text: 'Add one todo'
        },
        {
          id: 3,
          completed: false,
          text: 'Add filters'
        },
        {
          id: 4,
          completed: false,
          text: 'Add multiple lists'
        },
        {
          id: 5,
          completed: false,
          text: 'Optional: add tests'
        }
      ]
    }
  }
}

function syncStorage (state) {
  if (window && window.localStorage) {
    window.localStorage.setItem('appState', JSON.stringify(state))
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'read_storage':
      if (window && window.localStorage) {
        const state = window.localStorage.getItem('appState')
        if (state && state !== 'undefined') {
          return JSON.parse(state)
        }
      }

      return initialState

    case 'toggle_complete':
        const { idList, idItem } = action.payload
        const pos = idItem - 1;

        return {
          ...state,
          lists:{
            ...state.lists,
            [idList]:{
              ...state.lists[idList],
              items:[
                ...state.lists[idList].items.map((e,idx) => {
                  if(idx === pos) e.completed = !e.completed

                  return e
                })
              ]
            }
          }
        }

    case 'create_list':
      const { name } = action
      const id = Object.keys(state.lists).length + 1
      const list = {
        name,
        items:[]
      }

      return {
        ...state,
        lists:{
          ...state.lists,
          [id]: list
        }
      }
   
    case 'change_filter':
      const { newFilter } = action

      return {
        ...state,
        filter: newFilter
      }

    case 'create_todo':
      const { listId,text } = action.payload
      const item = {
        completed: false,
        text,
        id: state.lists[listId].items.length + 1
      }

      return {
        ...state,
        lists:{
          ...state.lists,
          [listId]:{
            ...state.lists[listId],
            items:[
              ...state.lists[listId].items,
              item
            ]
          }
        }
      }

    case 'change_active':
      const { newActive } = action

      return {
        ...state,
        activeList: newActive
      }
    
    default:
      throw new Error('Unknown type: ' + action.type);
  }
}

function useTodos() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { activeList, lists, filter } = state

  useEffect(() => {
    dispatch({type: 'read_storage' })
  }, [dispatch])

  useEffect(() => {
    syncStorage({activeList, lists })
  }, [lists,activeList])

  const createList = (name) => dispatch({ type: 'create_list', name})
  const changeActive = (newActive) => dispatch({ type: 'change_active', newActive})
  const changeFilter = (newFilter) => dispatch({ type: 'change_filter', newFilter})
  const createTodo = (listId,text) => dispatch({ 
    type: 'create_todo',
    payload:{ listId,text } 
  })
  const toggleComplete = (idList,idItem) => dispatch({
    type: 'toggle_complete',
    payload:{ idList,idItem }
  })

  return { 
    activeList,
    filter,
    lists,
    createList,
    createTodo,
    toggleComplete,
    changeActive,
    changeFilter
  }
}

export default useTodos

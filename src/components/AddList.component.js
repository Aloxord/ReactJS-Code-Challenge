import React from 'react'

import styled from 'styled-components'

const AddList = ({ onAddList }) => {
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      onAddList(e.target.value)
    }
  }

  return (
    <Input
      type='text'
      onKeyPress={handleKeyPress}
      placeholder='Add new list...'
    />
  )
}

const Input = styled.input`
  background: #3b4049;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 18px;
  font-size: 18px;
  height: 20px;
  width: 200px;
  margin-bottom: 8px;

  &::placeholder {
    color: #8d96a8;
  }
`

export default AddList

import React from 'react'

import styled from 'styled-components'

const ListItem = ({ id, name, editList, isActive}) => (
  <Wrapper onClick={e=>{
    editList(id)
  }}>
    <code>
      {(isActive ? '>>' : '>')+' '+name}
    </code>
  </Wrapper>
)

const Wrapper = styled.p`
  font-size: 18px;
  cursor: pointer;
`

export default ListItem

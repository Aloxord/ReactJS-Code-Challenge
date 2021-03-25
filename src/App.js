import React from 'react'

import styled from 'styled-components'

import MainLayout from './layouts/Main.layout'

function App () {

  return (
      <Wrapper>
        <MainLayout />  
      </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
`

export default App

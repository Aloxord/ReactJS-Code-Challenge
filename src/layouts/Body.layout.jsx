import React from 'react'

import styled from 'styled-components'

import Filters from '../containers/Filters.container'
import Tasks from '../containers/Tasks.container'
import Lists from '../containers/Lists.container'

function BodyLayout () {

  return (
    <BodyWrapper>
      <Filters />
      <Tasks />
      <Lists />
    </BodyWrapper>
  )
}

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`

export default BodyLayout

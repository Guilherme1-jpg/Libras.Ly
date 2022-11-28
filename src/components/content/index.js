import { Container } from '@mui/material'
import React from 'react'
import Banner from '../banner'
import InfoAreaScreen from '../infoarea'
import CardArea from '../card'
import CreatorsDetails from '../creators'

const Content = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Banner />
        <InfoAreaScreen />
        <CardArea />
        <CreatorsDetails />
      </Container>
    </>
  )
}

export default Content

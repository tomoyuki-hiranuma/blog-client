import React, { VFC } from 'react'
import { Container } from '@chakra-ui/react'

export const CopyRight: VFC = () => {
  return(
    <>
      <Container textColor={'#FFFFFF'} textAlign={'right'} fontSize={'sm'} pt={`4`}>
        &copy;2021 Hiranuma, Tomoyuki
      </Container>
    </>
  )
}
import React, { VFC } from 'react'
import { Box, Text } from '@chakra-ui/react'

export const Title: VFC = () => {
  return(
    <Box display='flex' alignItems='center' pl={10}>
      <Text fontSize='2xl' fontFamily='-moz-initial' textColor='#666A71'>Numa.blog</Text>
    </Box>
  )
}
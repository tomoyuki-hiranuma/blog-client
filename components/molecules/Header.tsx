import React, { VFC } from 'react';
import { css } from '@emotion/react';
import { Flex, Text, Box } from '@chakra-ui/react';

const header = css`
  height: 64px;
  box-shadow: 0px 4px 4px rgba(96, 134, 156, 0.25);
`

export const Header: VFC = () => {
  return(
    <>
      <Flex css={header}>
        <Box display='flex' alignItems='center' pl={10}>
          <Text fontSize='2xl' fontFamily='-moz-initial'>Numa.blog</Text>
        </Box>
      </Flex>
    </>
  )
}
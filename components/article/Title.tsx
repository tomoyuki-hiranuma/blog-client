import React, { VFC } from 'react';
import { css } from '@emotion/react';
import { Text, Flex, Box } from '@chakra-ui/react';

export const Title: VFC = () => {
  return(
    <>
      <Flex align={`center`} minWidth={`280px`} gap={4}>
        <Box border={`0.5px`} borderStyle={`solid`} w={{ base: `40px`, md: `80px` }} />
        <Text fontSize={{ base: `2xl`, md: `4xl` }}>記事</Text>
        <Box border={`0.5px`} borderStyle={`solid`} w={{ base: `40px`, md: `80px` }} />
      </Flex>
    </>
  );
};
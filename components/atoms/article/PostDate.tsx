import React, { VFC } from 'react';
import { Box, Text } from '@chakra-ui/react';

export const PostDate: VFC = () => {
  return(
    <>
      <Box>
        <Text fontSize={`xs`}>投稿日: 2021-12-12</Text>
      </Box>
    </>
  );
};
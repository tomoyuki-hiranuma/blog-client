import React, { VFC } from 'react';
import { Box, Text } from '@chakra-ui/react';

interface Props {
  date: string;
}

export const PostDate: VFC<Props> = ({ date }) => {
  return(
    <>
      <Box>
        <Text fontSize={`xs`}>投稿日: {date}</Text>
      </Box>
    </>
  );
};
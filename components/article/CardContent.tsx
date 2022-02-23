import React, { VFC } from 'react';
import { Text } from '@chakra-ui/react';

interface Props {
  content: string;
}

export const CardContent: VFC<Props> = ({ content }) => {
  return(
    <>
      <Text mb={`16px`} h={{ base: `60px`, md: `48px` }}>
        {content}
      </Text>
    </>
  );
};
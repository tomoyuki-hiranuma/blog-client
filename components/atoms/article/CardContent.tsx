import React, { VFC } from 'react';
import { Text } from '@chakra-ui/react';

export const CardContent: VFC = () => {
  return(
    <>
      <Text mb={`16px`}>
        本文，一部切り抜き(先頭100文字とか)ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ...
      </Text>
    </>
  );
};
import React, { VFC } from 'react';
import { css } from '@emotion/react';
import { Text, Flex } from '@chakra-ui/react';

const line = css`
  width: 80px;
  height: 0;
  border: 0.5px solid;
`;

export const Title: VFC = () => {
  return(
    <>
      <Flex align={`center`} minWidth={`280px`} gap={4}>
        <div css={line} />
        <Text fontSize={`4xl`}>記事</Text>
        <div css={line} />
      </Flex>
    </>
  );
};
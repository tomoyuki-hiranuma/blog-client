import React, { VFC } from 'react';
import { css } from '@emotion/react'; 
import { Box, Text, Spacer } from '@chakra-ui/react';
import { theme } from '../../styles/base/theme';

const card = css`
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ArticleCard: VFC = () => {
  return (
    <>
      <Box css={card} w={`1000px`} h={`160px`} pt={`24px`} px={`32px`} pb={`8px`}>
        <Text fontSize={`3xl`} fontWeight={`bold`}>タイトル</Text>
        <Text mb={`16px`}>本文，一部切り抜き(先頭100文字とか)ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ...</Text>
        
        <Box display={`flex`}>
          <Box display={`flex`} gap={`8px`} alignItems={`center`}>
            <Box bgColor={theme.colors.gray}>
              <Text fontSize={`xs`} px={`6px`}>タグ1</Text>
            </Box>
            <Box bgColor={theme.colors.gray}>
              <Text fontSize={`xs`} px={`6px`}>タグ2</Text>
            </Box>
            <Box bgColor={theme.colors.gray}>
              <Text fontSize={`xs`} px={`6px`}>タグ3</Text>
            </Box>
          </Box>
          <Spacer />
          <Box h={`14px`}>
            <Text fontSize={`xs`}>投稿日: 2021-12-12</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};
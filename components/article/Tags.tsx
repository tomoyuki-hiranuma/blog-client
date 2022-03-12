import React, { VFC } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { theme } from '../../styles/base/theme';

interface Props {
  tags: string[];
}

export const Tags: VFC<Props> = ({ tags }) => {
  return(
    <>
      <Flex gap={`8px`} alignItems={`center`}>
        {tags.map((tag) => (
          // Memo:bgColorの文字と背景の色のコントラスト比が近すぎる．
          <Box key={tag} bgColor={theme.colors.white} border={`1px`} borderColor={`gray.600`}> 
            <Text fontSize={`xs`} px={`6px`} color={`gray.600`}>{tag}</Text>
          </Box>
        ))}
      </Flex>
    </>
  );
};
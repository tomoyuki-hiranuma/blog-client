import React, { VFC } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { theme } from '../../../styles/base/theme';


export const Tags: VFC = () => {
  return(
    <>
      <Flex gap={`8px`} alignItems={`center`}>
        <Box bgColor={theme.colors.gray}>
          <Text fontSize={`xs`} px={`6px`}>タグ1</Text>
        </Box>
        <Box bgColor={theme.colors.gray}>
          <Text fontSize={`xs`} px={`6px`}>タグ2</Text>
        </Box>
        <Box bgColor={theme.colors.gray}>
          <Text fontSize={`xs`} px={`6px`}>タグ3</Text>
        </Box>
      </Flex>
    </>
  );
};
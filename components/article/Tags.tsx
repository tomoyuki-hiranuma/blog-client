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
          <Box key={tag} bgColor={theme.colors.white} border={`1px`} borderColor={`gray.600`} rounded={`md`} > 
            <Text fontSize={`14px`} px={`8px`} color={`gray.600`}>{tag}</Text>
          </Box>
        ))}
      </Flex>
    </>
  );
};
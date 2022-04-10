import React, { VFC } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { theme } from '../../styles/base/theme';
import Link from 'next/link';

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

export const LinkTags: VFC<Props> = ({ tags }) => {
  return(
    <>
      <Flex gap={`8px`} alignItems={`center`}>
        {tags.map((tag) => (
          <Link href={`/tags/${tag}`} passHref key={tag}>
            <Box bgColor={theme.colors.white} border={`1px`} borderColor={`gray.600`} rounded={`md`} cursor={`pointer`} _hover={{ backgroundColor: `gray.100` }}> 
              <a href='#'>
                <Text fontSize={`14px`} px={`8px`} color={`gray.600`}>{tag}</Text>
              </a>
            </Box>
          </Link>
        ))}
      </Flex>
    </>
  );
};
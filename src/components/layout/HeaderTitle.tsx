import React, { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const HeaderTitle: FC = () => {
  return(
    <Flex alignItems='center'>
      <Text fontSize={`2xl`} fontFamily={`cursive`}  pl={10} cursor={`pointer`}>
        <Link href={`/`} passHref>
          Numa.blog
        </Link>
      </Text>
    </Flex>
  );
};
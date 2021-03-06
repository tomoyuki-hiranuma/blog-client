import React, { VFC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const HeaderTitle: VFC = () => {
  return(
    <>
      <Link href={`/`} passHref>
        <Box display={`flex`} alignItems={`center`} pl={10} cursor={`pointer`}>
          <a href="#">
            <Text fontSize={`2xl`} fontFamily={`cursive`}>
                Numa.blog
            </Text>
          </a>
        </Box>
      </Link>
    </>
  );
};
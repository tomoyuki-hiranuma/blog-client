import React, { VFC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const HeaderTitle: VFC = () => {
  return(
    <>
      <Link href={`/`}>
        <Box display='flex' alignItems='center' pl={10} cursor={'pointer'}>
          <a>
            <Text fontSize='2xl' fontFamily='-moz-initial' textColor='#666A71'>
                Numa.blog
            </Text>
          </a>
        </Box>
      </Link>
    </>
  );
};
import React, { VFC } from 'react';
import { useRouter } from 'next/router';
import { Text, Flex, Box } from '@chakra-ui/react';

export const Title: VFC = () => {
  const router = useRouter();
  const { id } = router.query;
  
  return(
    <>
      <Flex align={`center`} minWidth={`280px`} gap={4}>
        <Box border={`0.5px`} borderStyle={`solid`} w={{ base: `40px`, md: `80px` }} />
        <Text fontSize={{ base: `2xl`, md: `4xl` }}>記事</Text>
        <Box border={`0.5px`} borderStyle={`solid`} w={{ base: `40px`, md: `80px` }} />
        <Text fontSize={{ base: `xl`, md: `2xl` }}>{`${!!id ? `${id}編` : null}`}</Text>
      </Flex>
    </>
  );
};
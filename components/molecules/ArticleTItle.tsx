import React, { VFC } from 'react';
import { SearchBar } from '../atoms/article/SearchBar';
import { SelectBar } from '../atoms/article/SelectBar';
import { Title } from '../atoms/article/Title';
import { Box, Flex, Spacer } from '@chakra-ui/react';

const selectData = [
  {
    value: "asc",
    name: "新しい順"
  },
  {
    value: "desc",
    name: "古い順"
  },
  {
    value: "favs",
    name: "人気順"
  },
];

export const ArticleTitle: VFC = () => {
  return(
    <Flex w={`1000px`} alignItems='center' mt={`64px`} mb={`8px`}>
      <Box>
        <Title />
      </Box>
      <Spacer />
      <Box>
        <Flex>
          <SearchBar />
          <SelectBar
            selects={selectData}
          />
        </Flex>
      </Box>
    </Flex>
  );
};
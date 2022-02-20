import React, { VFC } from 'react';
import { SearchBar } from './article/SearchBar';
import { SelectBar } from './article/SelectBar';
import { Title } from './article/Title';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import { useAppSelector } from '../hooks';

const selectData = [
  {
    value: "asc",
    name: "新しい順"
  },
  {
    value: "desc",
    name: "古い順"
  },
  // {
  //   value: "favs",
  //   name: "人気順"
  // },
];

export const ArticleTitle: VFC = () => {
  const contents = useAppSelector(state => state.posts.contents);
  
  return(
    <Flex w={`1000px`} alignItems='center' mt={`64px`} mb={`8px`}>
      <Box>
        <Title />
      </Box>
      <Spacer />
      <Box>
        <Flex gap={`40px`}>
          {
            contents.length !== 0 ? (
              // <SearchBar />
              <SelectBar
                selects={selectData}
              />
            ) : (
              null
            )
          }
          
        </Flex>
      </Box>
    </Flex>
  );
};
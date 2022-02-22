import React, { VFC, ChangeEvent } from 'react';
import { SearchBar } from './article/SearchBar';
import { SelectBar } from './article/SelectBar';
import { Title } from './article/Title';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { setContents } from '../actions/postActions';
import { sortData } from '../utils/sortData';

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
  const dispatch = useAppDispatch();

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const order = e.target.value;
    const data = sortData(contents, order);
    dispatch(setContents(data, order)); // これがだめ
  };
  
  return(
    <Flex w={`1000px`} alignItems='center' mt={`64px`} mb={`8px`}>
      <Box>
        <Title />
      </Box>
      <Spacer />
      <Box>
        <Flex gap={`40px`}>
          {
            !!contents && contents.length !== 0 ? (
              // <SearchBar />
              <SelectBar
                selects={selectData}
                handleChange={handleSelectChange}
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
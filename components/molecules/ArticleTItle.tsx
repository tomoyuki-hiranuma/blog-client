import React, { Dispatch, SetStateAction, VFC } from 'react';
import { SearchBar } from '../atoms/article/SearchBar';
import { SelectBar } from '../atoms/article/SelectBar';
import { Title } from '../atoms/article/Title';
import { Box, Flex, Spacer } from '@chakra-ui/react';

interface Select {
  value: string;
  name: string;
}

interface Props {
  selectData: Select[],
  setSelect: Dispatch<SetStateAction<Select>>;
}

export const ArticleTitle: VFC<Props> = ({ selectData, setSelect }) => {
  return(
    <Flex w={`1000px`} alignItems='center' mt={`64px`} mb={`8px`}>
      <Box>
        <Title />
      </Box>
      <Spacer />
      <Box>
        <Flex gap={`40px`}>
          {/* <SearchBar /> */}
          <SelectBar
            selects={selectData}
            setSelect={setSelect}
          />
        </Flex>
      </Box>
    </Flex>
  );
};
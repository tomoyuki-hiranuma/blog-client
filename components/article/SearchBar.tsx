import React, { VFC } from 'react';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const SearchBar: VFC = () => {
  return(
    <>
      <InputGroup maxWidth={`250px`} width={`auto`}>
        <Input />
        <InputRightElement>
          <FontAwesomeIcon icon={faSearch} height={`18px`} />
        </InputRightElement>
      </InputGroup>
    </>
  );
};
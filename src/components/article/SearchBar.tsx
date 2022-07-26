import React, { VFC } from 'react';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch as IconDefinition);

export const SearchBar: VFC = () => {
  return(
    <>
      <InputGroup maxWidth={`250px`} width={`auto`}>
        <Input />
        <InputRightElement>
          <FontAwesomeIcon icon={faSearch as IconDefinition} height={`18px`} />
        </InputRightElement>
      </InputGroup>
    </>
  );
};
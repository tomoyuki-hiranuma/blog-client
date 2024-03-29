import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { HeaderTitle } from './HeaderTitle';


export const Header: FC = () => {
  return(
    <Flex h={`64px`} boxShadow={`0px 4px 4px rgba(96, 134, 156, 0.25)`}>
      <HeaderTitle />
    </Flex>
  );
};
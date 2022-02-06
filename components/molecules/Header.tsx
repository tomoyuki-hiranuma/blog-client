import React, { VFC } from 'react';
import { css } from '@emotion/react';
import { Flex } from '@chakra-ui/react';
import { Title } from '../atoms/layout/Title';

const header = css`
  height: 64px;
  box-shadow: 0px 4px 4px rgba(96, 134, 156, 0.25);
`;

export const Header: VFC = () => {
  return(
    <>
      <Flex css={header}>
        <Title />
      </Flex>
    </>
  );
};
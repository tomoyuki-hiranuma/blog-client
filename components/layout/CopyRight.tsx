import React, { VFC } from 'react';
import { Container } from '@chakra-ui/react';
import { theme } from '../../styles/base/theme';

export const CopyRight: VFC = () => {
  return(
    <>
      <Container textColor={theme.colors.white} textAlign={`right`} fontSize={`sm`} pt={4}>
        &copy;2021 Hiranuma, Tomoyuki
      </Container>
    </>
  );
};
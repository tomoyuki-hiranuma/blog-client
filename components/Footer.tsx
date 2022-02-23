import React, { VFC } from 'react';
import { css } from '@emotion/react';
import { Flex, VStack, Spacer } from '@chakra-ui/react';
import { CopyRight } from './layout/CopyRight';
import { FooterLink } from './layout/FooterLink';
import { theme } from '../styles/base/theme';

const footer = css`
  height: 137px;
  background-color: ${theme.colors.primary};
  width: 100%;
  position: absolute;
  bottom: 0;
`;

type Data = {
  name: string;
  url: string;
}

interface Props {
  data: Data[]
}
// Memo：背景と文字の色のコントラストが近いので適切にする．
export const Footer: VFC<Props> = ({ data }) => {
  return(
    <>
      <footer css={footer}>
        <Flex w={{ base: `auto`, md: `700px`, lg:`900px`}} m={`auto`} pt={'4'}>
          <Spacer />
          <VStack spacing={`0`}>
            {data.map((link) => (
              <FooterLink
                key={link.name}
                name={link.name}
                url={link.url}
              />
            ))}
            <CopyRight />
          </VStack>
        </Flex>
      </footer>
    </>
  );
};
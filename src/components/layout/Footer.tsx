import React, { VFC } from 'react';
import { Flex, VStack, Spacer, Box } from '@chakra-ui/react';
import { CopyRight } from './CopyRight';
import { FooterLink } from './FooterLink';
import { theme } from '../../styles/base/theme';

type Data = {
  name: string;
  url: string;
}

interface Props {
  data: Data[]
}

export const Footer: VFC<Props> = ({ data }) => {
  return(
    <>
      <footer>
        <Box h={`137px`} bgColor={`${theme.colors.primary}`} w={`100%`} marginTop={`40px`}>
          <Flex w={{ base: `300px`, md: `700px`, lg:`900px`}} m={`auto`} pt={'4'}>
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
        </Box>
      </footer>
    </>
  );
};
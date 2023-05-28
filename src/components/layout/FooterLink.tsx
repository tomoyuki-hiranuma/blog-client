import React, { VFC } from 'react';
import Link from 'next/link';
import { Container } from '@chakra-ui/react';
import { theme } from '../../styles/base/theme';

interface Props {
  name: string;
  url: string;
}

export const FooterLink: VFC<Props> = ({ name, url }) => {
  return(
    <>
      <Container textColor={theme.colors.white} textAlign={`right`} cursor={`pointer`}>
        <Link href={url} passHref={true} target='_black'>
          {name}
        </Link>
      </Container>

    </>
  );
};
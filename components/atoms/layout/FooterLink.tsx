import React, { VFC } from 'react';
import Link from 'next/link';
import { Container } from '@chakra-ui/react';

interface Props {
  name: string;
  url: string;
}

export const FooterLink: VFC<Props> = ({ name, url }) => {
  return(
    <>
      <Link href={url} passHref={true}>
        <Container textColor={'#FFFFFF'} textAlign={'right'} cursor={'pointer'}>
          <a target="_blank" rel="noopener noreferrer">
            {/* Todo: 別タブで開く */}
            {name}
          </a>
        </Container>
      </Link>
    </>
  );
};
import React, { VFC, ReactNode } from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Box } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
  tagName?: string;
}

type Data = {
  name: string;
  url: string;
}
// ダミーデータ(今後SSGで取得しておく)
const data: Data[] = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/__N_u_m_a'
  },
  {
    name: 'Github',
    url: 'https://github.com/tomoyuki-hiranuma'
  },
  {
    name: 'About Me',
    url: 'https://numa-web.netlify.app/'
  },
];

export const Layout = ({ children }: Props) => {
  return(
    <>
      <Header />
      <Box minH={`100vh`}>
        <main>
          {children}
        </main>
      </Box>
      <Footer
        data={data}
      />
    </>
  );
};
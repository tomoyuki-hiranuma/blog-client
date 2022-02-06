import React, { VFC, ReactNode } from 'react';
import Head from 'next/head';
import { css } from '@emotion/react';
import { Header } from '../molecules/Header';
import { Footer } from '../molecules/Footer';

// Todo: min-heightは後で変える
const main = css`
  min-height: 800px;
`;

interface Props {
  children: ReactNode;
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

export const Layout: VFC<Props> = ({ children }) => {
  return(
    <>
      <Head>
        <title>Numa.blog</title>
        <meta name="description" content="ぬまのメモ用ブログ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main css={main}>
        {children}
      </main>
      <Footer
        data={data}
      />
    </>
  );
};
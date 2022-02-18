import React, { VFC, ReactNode } from 'react';
import Head from 'next/head';
import { css } from '@emotion/react';
import { Header } from './Header';
import { Footer } from './Footer';

// Todo: min-heightは後で変える
const main = css`
  min-height: 100vh;
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
        <title>ぬまの備忘録</title>
        <meta name="description" content="ぬまのメモ用ブログ" />
        <link rel="icon" href="/icon.png" />
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
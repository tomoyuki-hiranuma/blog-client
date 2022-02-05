import React, { VFC, ReactNode, useState, useEffect, Dispatch, SetStateAction } from 'react'
import Head from 'next/head'
import { css } from '@emotion/react'
import { Header } from '../molecules/Header'
import { Footer } from '../molecules/Footer'

// Todo: min-heightは後で変える
const main = css`
  min-height: 800px;
`

interface Props {
  children: ReactNode;
}

type Data = {
  name: string;
  url: string;
}

const fetchData = async (setData: Dispatch<SetStateAction<Data[]>>) => {
  const res = await fetch("http://localhost:3000/api/layout");
  const data = await res.json()
  setData(data)
}

export const Layout: VFC<Props> = ({ children }) => {
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    fetchData(setData);
  }, [])
  
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
  )
}
import React, { VFC, ReactNode } from 'react'
import Head from 'next/head'

interface Props {
  children: ReactNode
}

export const Layout: VFC<Props> = ({children}) => {
  return(
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>

      </header>
      <main>
      {children}
      </main>
      <footer>

      </footer>
    </>
  )
}
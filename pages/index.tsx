import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArticleCard } from '../components/ArticleCard';
import { VStack, Center } from '@chakra-ui/react';
import { getAllPosts } from '../utils/getAllPosts';
import { Post } from '../types/type';
import { Layout } from '../components/Layout';
import { ArticleTitle } from '../components/ArticleTItle';

interface Props {
  contents: Post[]
}

const selectData = [
  {
    value: "asc",
    name: "新しい順"
  },
  {
    value: "desc",
    name: "古い順"
  },
  // {
  //   value: "favs",
  //   name: "人気順"
  // },
];

const Home: NextPage<Props> = ({ contents }) => {
  const [select, setSelect] = useState(selectData[0]);
  if(!!contents && contents.length !== 0 && select.value === 'asc') {
    contents.sort((a, b) => {
      const date = new Date(a?.data.date);
      const date1 = new Date(b?.data.date);
      
      return date1.getTime() - date.getTime();
    });
  } else if(!!contents && contents.length !== 0 && select.value === 'desc') {
    contents.sort((a, b) => {
      const date = new Date(a?.data.date);
      const date1 = new Date(b?.data.date);
      
      return date.getTime() - date1.getTime();
    });
  }

  return (
    <Layout>
      <VStack>
        <ArticleTitle
          selectData={selectData}
          setSelect={setSelect}
        />
        <VStack gap={`16px`}>
          {
            !!contents && contents.length !== 0 ? (
              contents
                .filter(post => !post.data.draft)
                .map((post) => (
                  <Link href={`/posts/${post.data.slug}`} key={post.data.slug}>
                    <a>
                      <ArticleCard
                        {...post}
                      />
                    </a>
                  </Link>
                ))
            ) : (
              <Center h={20} fontSize={`xl`}>投稿済み記事がありません</Center>
            )
          }
        </VStack>
      </VStack>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const path = "./posts/";
  const contents = getAllPosts(path);
  
  return {
    props: {
      contents,
    }
  };
};

export default Home;

import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import React, { useEffect } from 'react';
import { VStack, Center, Box } from '@chakra-ui/react';
import { getAllPosts } from '../services/post.service';
import { Post } from '../types/type';
import { Layout } from '../components/common/Layout';
import { ArticleTitle } from '../components/ArticleTItle';
import { Contents } from '../components/Contents';


interface Props {
  contents: Post[]
}

const Home: NextPage<Props> = ({ contents }) => {
  return (
    <Layout>
      <VStack w={{ base: `300px`, md: `700px`, lg:`900px`}} margin={`auto`}>
        <ArticleTitle />
        <Contents contents={contents} />
      </VStack>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const path = "./posts/";
  const contents = getAllPosts(path);

  if(!contents) return {
    props: {
      contents,
    }
  };

  return {
    props: {
      contents,
    }
  };
};

export default Home;

import React, { VFC } from 'react';
import { ArticleCard } from '../molecules/ArticleCard';
import { ArticleTitle } from '../molecules/ArticleTItle';
import { Layout } from '../organisms/Layout';
import { VStack } from '@chakra-ui/react';

export const IndexPage: VFC = () => {
  return (
    <Layout>
      <VStack>
        <ArticleTitle />
        <ArticleCard />
      </VStack>
    </Layout>
  );
};



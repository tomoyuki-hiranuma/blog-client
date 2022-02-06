import React, { VFC } from 'react';
import { ArticleCard } from '../molecules/ArticleCard';
import { ArticleTitle } from '../molecules/ArticleTItle';
import { Layout } from '../organisms/Layout';


export const IndexPage: VFC = () => {
  return (
    <Layout>
      <ArticleTitle />
      <ArticleCard />
    </Layout>
  );
};



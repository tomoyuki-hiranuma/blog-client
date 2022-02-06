import React, { VFC } from 'react';
import { ArticleCard } from '../molecules/ArticleCard';
import { Layout } from '../organisms/Layout';

export const IndexPage: VFC = () => {
  return (
    <Layout>
      <ArticleCard />
    </Layout>
  );
};



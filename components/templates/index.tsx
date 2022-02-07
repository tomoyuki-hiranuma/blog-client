import React, { VFC } from 'react';
import { ArticleCard } from '../molecules/ArticleCard';
import { ArticleTitle } from '../molecules/ArticleTItle';
import { Layout } from '../organisms/Layout';
import { VStack } from '@chakra-ui/react';
import { Post } from '../../types/type';

interface Props {
  contents: Post[]
}

export const IndexPage: VFC<Props> = ({ contents }) => {
  return (
    <Layout>
      <VStack>
        <ArticleTitle />
        <VStack gap={`16px`}>
          {
            contents
              .filter(post => !post.data.draft)
              .map((post) => (
                <ArticleCard
                  key={post.data.slug}
                  {...post}
                />
              ))
          }
        </VStack>
      </VStack>
    </Layout>
  );
};



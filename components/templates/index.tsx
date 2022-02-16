import React, { VFC } from 'react';
import Link from 'next/link';
import { ArticleCard } from '../molecules/ArticleCard';
import { ArticleTitle } from '../molecules/ArticleTItle';
import { Layout } from '../organisms/Layout';
import { VStack, Center } from '@chakra-ui/react';
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
            !!contents ? (
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



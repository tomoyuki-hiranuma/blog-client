import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArticleCard } from '../components/ArticleCard';
import { VStack, Center } from '@chakra-ui/react';
import { getAllPosts } from '../utils/getAllPosts';
import { Post } from '../types/type';
import { Layout } from '../components/Layout';
import { ArticleTitle } from '../components/ArticleTItle';
import { setInitialContents } from '../actions/postActions';
import { useAppDispatch, useAppSelector } from '../hooks';

interface Props {
  contents: Post[]
}

const Home: NextPage<Props> = ({ contents }) => {
  const dispatch = useAppDispatch();
  const currentContents: Post[] = useAppSelector(state => state.posts.contents);

  useEffect(() => {
    dispatch(setInitialContents(contents));
  }, []);

  return (
    <Layout>
      <VStack>
        <ArticleTitle
        />
        <VStack gap={`16px`}>
          {
            !!currentContents && currentContents.length !== 0 ? (
              currentContents
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

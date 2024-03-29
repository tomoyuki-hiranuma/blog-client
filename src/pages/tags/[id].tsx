import React from 'react';
import type { NextPage } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import { ArticleCard } from '../../components/ArticleCard';
import { VStack, Center, Box } from '@chakra-ui/react';
import { getPostsByTag } from '../../services/post.service';
import { Post } from '../../types/type';
import { Layout } from '../../components/common/Layout';
import { ArticleTitle } from '../../components/ArticleTItle';
import { useRouter } from 'next/router';

interface Props {
  contents: Post[]
  tagName: string
}

const TagsArticlePage: NextPage<Props> = ({ contents }) => {
  const router = useRouter();

  const onClick = (href: string) => {
    router.push(href);
  };
  
  return (
    <Layout>
      <VStack w={{ base: `300px`, md: `700px`, lg:`900px`}} margin={`auto`}>
        <ArticleTitle />
        <VStack gap={`16px`}>
          {
            !!contents && contents.length !== 0 ? (
              contents
                .filter(post => !post.data.draft)
                .map((post) => (
                  <Box as='button' onClick={() => onClick(`/posts/${post.data.slug}`)} key={post.data.slug}>
                    <ArticleCard
                      {...post}
                    />
                  </Box>
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

export default TagsArticlePage;

export const getStaticProps: GetStaticProps = ({ params }) => {
  const path = "./posts/";
  const tagId = params?.id;
  const contents = getPostsByTag(path, tagId as string);

  return {
    props: {
      contents,
    }
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const path = "./posts/";
  if(!fs.existsSync(path)) return { paths: [], fallback: false };
  const tags = fs.readdirSync(path).map((fileName) => {
    const file = fs.readFileSync(path + fileName, "utf-8");
    const content = matter(file);
    
    return content.data.tags;
  });
  // マークダウンのHeadのtagsだけ抜き取る
  const paths = Array.from(new Set(tags.flat()))
    .map(tag => {
      return { params: { id: tag } };
    });
  
  return {
    paths: paths,
    fallback: false
  };
};
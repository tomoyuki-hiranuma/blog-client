import React, { VFC, useState } from 'react';
import Link from 'next/link';
import { ArticleCard } from '../molecules/ArticleCard';
import { ArticleTitle } from '../molecules/ArticleTItle';
import { Layout } from '../organisms/Layout';
import { VStack, Center } from '@chakra-ui/react';
import { Post } from '../../types/type';

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

export const IndexPage: VFC<Props> = ({ contents }) => {
  const [select, setSelect] = useState(selectData[0]);
  if(select.value === 'asc') {
    contents.sort((a, b) => {
      const date = new Date(a?.data.date);
      const date1 = new Date(b?.data.date);
      
      return date1.getTime() - date.getTime();
    });
  } else if(select.value === 'desc') {
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



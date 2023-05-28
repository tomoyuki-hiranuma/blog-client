import { ArticleCard } from '../components/ArticleCard';
import { Box, Center, VStack } from "@chakra-ui/react";
import { setInitialContents } from '../actions/postActions';
import { useAppDispatch, useAppSelector } from '../hooks';
import { Post } from '../types/type';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
  contents: Post[]
}

export const Contents = ({contents}: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const currentContents: Post[] = useAppSelector(state => state.posts.contents);

  useEffect(() => {
    dispatch(setInitialContents(contents));
  }, [dispatch, contents]);



  return (
    <VStack gap={`16px`}>
      {
        !!currentContents && currentContents.length !== 0 ? (
          currentContents
            .filter(post => !post.data.draft)
            .map((post) => (
              <Link href={`/posts/${post.data.slug}`} key={post.data.slug} passHref>
                <ArticleCard
                  {...post}
                />
              </Link>
            ))
        ) : (
          <Center h={20} fontSize={`xl`}>投稿済み記事がありません</Center>
        )
      }
    </VStack>
  );
};
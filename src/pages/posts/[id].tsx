import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { GetStaticPropsContext, GetStaticPaths } from 'next';
import { Box, Center, Text, Flex, Spacer, Container } from '@chakra-ui/react';
import { getPostById } from '../../services/post.service';
import fs from 'fs';
import { Post } from '../../types/type';
import { Layout } from '../../components/common/Layout';
import { LinkTags } from '../../components/article/Tags';
import { PostDate } from '../../components/article/PostDate';
import { toHTML } from '../../utils/htmlParser';
import { useAppDispatch } from '../../hooks';
import { setContent } from '../../actions/postActions';

const PostsArticlePage: NextPage<Post> = (blog) => {
  const dispatch = useAppDispatch();
  const { content, data } = blog;
  
  useEffect(() => {
    dispatch(setContent(blog));
  }, [dispatch, blog]);
  
  return(
    <>
      <Layout>
        <Container paddingTop={`14`} w={{ base: `300px`, md: `700px`, lg:`900px`}}>
          <Text fontSize={{ base: `3xl`, md: `6xl` }}>{data.title}</Text>
          <Flex>
            <LinkTags
              tags={data.tags}
            />
            <Spacer />
            <PostDate
              date={data.date}
            />
          </Flex>
          <Center>
            <Box paddingTop={`20`} w={`4xl`}>
              <Box dangerouslySetInnerHTML={{ __html: content }} />
            </Box>
          </Center>
        </Container>
      </Layout>
    </>
  );
};

export default PostsArticlePage;

export const getStaticProps = (context: GetStaticPropsContext) => {
  if (!context.params || typeof context.params.id !== "string") return { props: null };
  const path = "./posts/";
  const content = getPostById(path, context.params.id);
  const html = toHTML(content.content);
  const blog = {
    ...content,
    content: html,
    orig: "",
  };
  
  return {
    props: blog,
  };
};

const baseName = (str: string) => {
  const base = new String(str).substring(str.lastIndexOf('/') + 1);
  if (base.lastIndexOf(".") != -1)
    return base.substring(0, base.lastIndexOf("."));
  
  return base;
};

export const getStaticPaths: GetStaticPaths = () => {
  const path = "./posts/";
  if(!fs.existsSync(path)) return { paths: [], fallback: false };

  const files = fs.readdirSync(path);
  const paths = files
    .map(fileName => {
      return { params: { id: baseName(fileName) } };
    });
  
  return {
    paths: paths,
    fallback: false
  };
};

import React from 'react';
import type { NextPage } from 'next';
import { GetStaticPropsContext, GetStaticPaths } from 'next';
import { Box, Center, Text, Flex, Spacer, Container } from '@chakra-ui/react';
import { getPostById } from '../../utils/getPostById';
import fs from 'fs';
import { Post } from '../../types/type';
import { Layout } from '../../components/Layout';
import { Tags } from '../../components/article/Tags';
import { PostDate } from '../../components/article/PostDate';

const Article: NextPage<Post> = ({ content, data }) => {
  return(
    <>
      <Layout>
        <Container paddingTop={`14`}>
          <Text fontSize={`6xl`}>{data.title}</Text>
          <Flex>
            <Tags
              tags={data.tags}
            />
            <Spacer />
            <PostDate
              date={data.date}
            />
          </Flex>
          <Center>
            <Box paddingTop={`20`} w={`4xl`}>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </Box>
          </Center>
        </Container>
      </Layout>
    </>
  );
};

export default Article;

export const getStaticProps = (context: GetStaticPropsContext) => {
  if (!context.params || typeof context.params.id !== "string") return { props: null };
  const path = "./posts/";
  const { content, html } = getPostById(path, context.params.id);
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

import React from 'react';
import type { NextPage } from 'next';
import { GetStaticPropsContext, GetStaticProps, GetStaticPaths } from 'next';
import { ArticlePage } from '../../components/templates/article';
import { getPostById } from '../../utils/getPostById';
import fs from 'fs';
import { Post } from '../../types/type';

const Article: NextPage<Post> = ({ content }) => {
  return(
    <>
      <ArticlePage
        content={content}
      />
    </>
  );
};

export default Article;

export const getStaticProps: GetStaticProps = (context: GetStaticPropsContext) => {
  if (!context.params || typeof context.params.id !== "string") return;
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

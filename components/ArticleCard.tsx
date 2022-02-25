import React, { VFC } from 'react';
import { css } from '@emotion/react'; 
import { Box, Text, Spacer, Flex } from '@chakra-ui/react';
import { Tags } from './article/Tags';
import { PostDate } from './article/PostDate';
import { CardContent } from './article/CardContent';
import { Post } from '../types/type';
import { parseHtml } from '../utils/htmlParser';

const card = css`
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ArticleCard: VFC<Post> = ({ data, content }) => {
  const parsedContent = parseHtml(content);
  let trimedContent = parsedContent.replace(/<li>/g,'・');
  // base, mdによってsliceする数を変更
  trimedContent = trimedContent.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'').slice(0, 50) + "...";
  
  return (
    <>
      <Box css={card} w={{ base: `300px`, md: `700px`, lg:`900px`}} h={`max-content`}  pt={{ base: `8px`, md: `24px`}} px={{ base: `16px`, md: `32px` }} pb={`8px`}>
        <Text fontSize={{ base: `xl`,md: `3xl`}} fontWeight={`bold`}>{data.title}</Text>
        <CardContent
          content={trimedContent}
        />        
        <Flex>
          <Tags
            tags={data.tags}
          />
          <Spacer />
          <PostDate
            date={data.date}
          />
        </Flex>
      </Box>
    </>
  );
};
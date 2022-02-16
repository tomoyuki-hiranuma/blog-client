import React, { VFC } from 'react';
import { css } from '@emotion/react'; 
import { Box, Text, Spacer, Flex } from '@chakra-ui/react';
import { Tags } from '../atoms/article/Tags';
import { PostDate } from '../atoms/article/PostDate';
import { CardContent } from '../atoms/article/CardContent';
import { Post } from '../../types/type';

const card = css`
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;


export const ArticleCard: VFC<Post> = ({ data, content }) => {
  const trimedContent = content.substring(0, 100);
  
  return (
    <>
      <Box css={card} w={`1000px`} h={`160px`} pt={`24px`} px={`32px`} pb={`8px`}>
        <Text fontSize={`3xl`} fontWeight={`bold`}>{data.title}</Text>
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
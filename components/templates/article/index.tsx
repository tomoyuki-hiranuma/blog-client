import React, { VFC } from 'react';
import { Box, Center } from '@chakra-ui/react';
import { Layout } from '../../organisms/Layout';

interface Props {
  content: string;
}

export const ArticlePage: VFC<Props> = ({ content }) => {
  return(
    <>
      <Layout>
        <Center>
          <Box paddingTop={`20`} w={`4xl`}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Box>
        </Center>
      </Layout>
    </>
  );
};
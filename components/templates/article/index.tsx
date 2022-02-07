import React, { VFC } from 'react';
import { Box } from '@chakra-ui/react';
import { Layout } from '../../organisms/Layout';

interface Props {
  content: string;
}

export const ArticlePage: VFC<Props> = ({ content }) => {
  return(
    <>
      <Layout>
        <Box>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Box>
      </Layout>
    </>
  );
};
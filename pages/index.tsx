import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { IndexPage } from '../components/templates';
import { getAllPosts } from '../utils/getAllPosts';
import { Post } from '../types/type';

interface Props {
  contents: Post[]
}

const Home: NextPage<Props> = ({ contents }) => {
  return (
    <IndexPage
      contents={contents}
    />
  );
};

export const getStaticProps: GetStaticProps =  () => {
  const path = "./posts/";
  const contents = getAllPosts(path);
  
  return {
    props: {
      contents,
    }
  };
};

export default Home;

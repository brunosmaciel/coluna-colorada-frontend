import { GetStaticProps } from 'next';
import { getAllPosts } from '../services/posts/get-all-posts';
import { PostData } from '../domain/posts/post';
import HomePage from '../containers/HomePage';

export type PostsProps = {
  posts: PostData[];
};

export default function Posts({ posts }: PostsProps) {
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: { posts },
    revalidate: 30,
  };
};

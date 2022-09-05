import { GetStaticProps } from 'next';
import PostPage from '../../containers/Post';
import { PostData } from '../../domain/posts/post';
import { getAllPosts } from '../../services/posts/get-all-posts';
import { getSinglePost } from '../../services/posts/get-one-post';

export type SinglePostProps = {
  post: PostData;
};

export default function SinglePost({ post }: SinglePostProps) {
  return <PostPage post={post} />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const post = await getSinglePost(context.params.slug);
  return {
    props: { post },
    revalidate: 30,
  };
};
export async function getStaticPaths() {
  const posts: PostData[] = await getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
    fallback: false, // can also be true or 'blocking'
  };
}

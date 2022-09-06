import { GetStaticProps } from 'next';
import PostPage from '../../containers/Post';
import { SingleAuthor } from '../../domain/author/authors';
import { PostData } from '../../domain/posts/post';
import { getAuthor } from '../../services/get-author';
import { getAllPosts } from '../../services/posts/get-all-posts';
import { getSinglePost } from '../../services/posts/get-one-post';

export type SinglePostProps = {
  post: PostData;
  author: SingleAuthor
};

export default function SinglePost({ ...props }: SinglePostProps) {
  return <PostPage {...props} />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const post = await getSinglePost(context.params.slug);
  const author = await getAuthor(post.attributes.author.data.id)
  return {
    props: {
      post,
      author
    },
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

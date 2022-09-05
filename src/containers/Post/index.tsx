import Footer from '../../components/Footer';
import 'tailwindcss/tailwind.css';

import Header from '../../components/Header';
import { PostData } from '../../domain/posts/post';
import { AuthorContainer, Container } from './styles';

export type SinglePostProps = {
  post: PostData;
};

export default function PostPage({ post }: SinglePostProps) {
  return (
    <>
      <Header />
      <h1>{post.attributes.createdAt}</h1>
      <Container
        dangerouslySetInnerHTML={{ __html: post.attributes.content }}
      ></Container>
      <AuthorContainer className="bg-red-800">
        {post.attributes.author.data.attributes.name}
      </AuthorContainer>
      <Footer />
    </>
  );
}

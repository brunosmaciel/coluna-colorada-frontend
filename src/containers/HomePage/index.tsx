import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { PostData } from '../../domain/posts/post';
import toUpperCase from '../../services/to-upper-case';
import {
  Container,
  PostCategory,
  PostContainer,
  PostCover,
  PostTitle,
} from './styles';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  const router = useRouter();
  const handleClick = (post: PostData) => {
    router.push(`/post/${post.attributes.slug}`);
  };
  return (
    <>
      <Header />
      <Container>
        {posts.map((post) => (
          <>
            <PostContainer onClick={() => handleClick(post)} className="div1">
              <PostCover src={post.attributes.cover.data.attributes.url} />
              <PostCategory>
                {toUpperCase(post.attributes.category.data.attributes.name)}
              </PostCategory>
              <PostTitle>{post.attributes.title}</PostTitle>
            </PostContainer>
          </>
        ))}
      </Container>
      <Footer />
    </>
  );
}

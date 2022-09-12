import Head from 'next/head';
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
      <Head>
        <title>Coluna Colorada</title>
        <meta
          name="description"
          content="Um blog de uma estudante de jornalismo apaixonado pelo Sport Club Internacional"
        />
        <link
          type="image/png"
          sizes="16x16"
          rel="icon"
          href="https://res.cloudinary.com/blog-strapi-curso-js/image/upload/v1662984757/favicon_2_sh8jja.png"
        />
      </Head>
      <Header />
      <Container>
        {posts.map((post) => (
          <>
            <PostContainer
              onClick={() => handleClick(post)}
              className=".roll-in-left"
              key={post.attributes.slug}
            >
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

import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { PostData } from '../../domain/posts/post';
import { Container, LastPostHeader, PostGrid } from './styles';
import LastPost from '../../components/LastPost';
import { FAVICON_URL } from '../../config/app-config';
import Post from '../../components/HomePost';

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
        <link type="image/png" sizes="16x16" rel="icon" href={FAVICON_URL} />
      </Head>
      <Header />
      <Container>
        <LastPostHeader>
          <span>Última coluna</span>
        </LastPostHeader>
        <PostGrid>
          <LastPost lastPost={posts[0]} handleClick={handleClick} />

          {/* Blog posts map to render in the home page grid */}

          {posts.slice(1, posts.length).map((post) => (
            <Post
              post={post}
              handleClick={handleClick}
              key={post.attributes.slug}
            />
          ))}
        </PostGrid>
      </Container>
      <Footer />
    </>
  );
}

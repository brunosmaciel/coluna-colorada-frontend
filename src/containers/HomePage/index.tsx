import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { PostData } from '../../domain/posts/post';
// import toUpperCase from '../../services/to-upper-case';
import {
  Container,
  LastPostContainer,
  LastPostHeader,
  LastPostMainContent,
  PostGrid,
  PostsContainer,
  PostsMainContent,
} from './styles';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  const router = useRouter();
  const handleClick = (post: PostData) => {
    router.push(`/post/${post.attributes.slug}`);
  };
  const lastPost = posts[0];
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
        <LastPostHeader>
          <span>Última coluna</span>
        </LastPostHeader>
        <PostGrid>
          <LastPostContainer className="last-post">
            <LastPostMainContent
              style={{
                backgroundImage: `url(${lastPost.attributes.cover.data.attributes.url})`,
              }}
              className="zoom-in"
            >
              <span>{lastPost.attributes.title}</span>
            </LastPostMainContent>
          </LastPostContainer>
          {posts.slice(1, posts.length).map((post) => (
            <PostsContainer key={post.attributes.slug}>
              <PostsMainContent
                style={{
                  backgroundImage: `url(${post.attributes.cover.data.attributes.url})`,
                }}
              >
                <span>{post.attributes.title}</span>
              </PostsMainContent>
            </PostsContainer>
          ))}
        </PostGrid>
      </Container>
      <Footer />
    </>
  );
}

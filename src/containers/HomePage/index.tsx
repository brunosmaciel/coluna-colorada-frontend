import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { PostData } from '../../domain/posts/post';
import toLocaleTimeString from '../../services/to-local-timeString';
import { theme } from '../../styles/theme';
import { BiTimeFive } from 'react-icons/bi';
// import toUpperCase from '../../services/to-upper-case';
import {
  Container,
  LastPostContainer,
  LastPostHeader,
  LastPostMainContent,
  PostCategory,
  PostGrid,
  PostPublishDate,
  PostsContainer,
  PostsMainContent,
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
          <LastPostContainer
            className="last-post"
            onClick={() => handleClick(lastPost)}
          >
            <LastPostMainContent
              style={{
                backgroundImage: `url(${lastPost.attributes.cover.data.attributes.url})`,
              }}
              className="zoom-in"
            >
              <PostTitle fontSize={theme.font.sizes.superLarge}>
                {lastPost.attributes.title}
              </PostTitle>
              <PostCategory fontSize={theme.font.sizes.medium}>
                {lastPost.attributes.category.data.attributes.name}
              </PostCategory>
              <PostPublishDate fontSize={theme.font.sizes.medium}>
                <BiTimeFive size={theme.font.sizes.medium} />
                {toLocaleTimeString(lastPost.attributes.createdAt)}
              </PostPublishDate>
            </LastPostMainContent>
          </LastPostContainer>
          {/* Blog posts map to render in the home page grid */}
          {posts.slice(1, posts.length).map((post) => (
            <PostsContainer
              key={post.attributes.slug}
              onClick={() => handleClick(lastPost)}
            >
              <PostsMainContent
                style={{
                  backgroundImage: `url(${post.attributes.cover.data.attributes.url})`,
                }}
              >
                <PostTitle fontSize={theme.font.sizes.large}>
                  {post.attributes.title}
                </PostTitle>
                <PostCategory fontSize={theme.font.sizes.small}>
                  {post.attributes.category.data.attributes.name}
                </PostCategory>
                <PostPublishDate fontSize={theme.font.sizes.small}>
                  <span>
                    <BiTimeFive size={theme.font.sizes.small} />
                  </span>
                  {toLocaleTimeString(post.attributes.createdAt)}
                </PostPublishDate>
              </PostsMainContent>
            </PostsContainer>
          ))}
        </PostGrid>
      </Container>
      <Footer />
    </>
  );
}

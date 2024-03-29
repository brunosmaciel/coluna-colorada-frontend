import Footer from '../../components/Footer';

import Header from '../../components/Header';
import { PostData } from '../../domain/posts/post';
import toLocaleTimeString from '../../services/to-local-timeString';
import {
  AuthorContainer,
  AuthorDetails,
  AuthorImage,
  Container,
  PostContainer,
  PostDate,
  PostTitle,
} from './styles';
import { GrBlog } from 'react-icons/gr';
import { SingleAuthor } from '../../domain/author/authors';
import Head from 'next/head';

import { Comments } from '../../components/Comments';
import { FAVICON_URL } from '../../config/app-config';

export type SinglePostProps = {
  post: PostData;
  author: SingleAuthor;
};

export default function PostPage({ ...props }: SinglePostProps) {
  const { post } = props;
  const { author } = props;

  return (
    <>
      <Head>
        <title>{`${post.attributes.title} - Coluna Colorada`}</title>
        <meta name="description" content={post.attributes.slug} />
        <meta property="og:url" content={`/post/${post.attributes.slug}`} />
        <meta property="og:type" content="blog" />
        <meta property="og:title" content={post.attributes.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          content={post.attributes.cover.data.attributes.url}
        />
        <link type="image/png" sizes="16x16" rel="icon" href={FAVICON_URL} />
      </Head>
      <Header />
      <Container>
        <PostTitle>{post.attributes.title}</PostTitle>
        <PostDate>
          <span>
            <GrBlog size={18} />
          </span>
          <span>Em</span>
          {toLocaleTimeString(post.attributes.createdAt)}
          <span>por {author.attributes.name}</span>
        </PostDate>
        <PostContainer
          dangerouslySetInnerHTML={{ __html: post.attributes.content }}
        />
        <AuthorContainer>
          <AuthorImage
            src={author.attributes.photo.data.attributes.formats.thumbnail.url}
            alt=""
          />
          <AuthorDetails className="wrapper">
            <h1>{author.attributes.name}</h1>
            <p>{author.attributes.biography}</p>
          </AuthorDetails>
        </AuthorContainer>
      </Container>
      <Comments
        id={String(post.id)}
        title={post.attributes.title}
        slug={post.attributes.slug}
      />
      <Footer />
    </>
  );
}

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
} from './styles';
import { GrBlog } from 'react-icons/gr';
import { SingleAuthor } from '../../domain/author/authors';

export type SinglePostProps = {
  post: PostData;
  author: SingleAuthor;
};

export default function PostPage({ ...props }: SinglePostProps) {
  const { post } = props;
  const { author } = props;
  return (
    <>
      <Header />
      <Container>
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

      <Footer />
    </>
  );
}

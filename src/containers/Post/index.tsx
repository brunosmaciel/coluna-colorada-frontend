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
import { MdDateRange } from 'react-icons/md';
import { SingleAuthor } from '../../domain/author/authors';

export type SinglePostProps = {
  post: PostData;
  author: SingleAuthor;
};

export default function PostPage({ ...props }: SinglePostProps) {
  const { post } = props;
  const { author } = props;
  console.log(author);
  return (
    <>
      <Header />
      <Container>
        <PostContainer
          dangerouslySetInnerHTML={{ __html: post.attributes.content }}
        />
        <PostDate>
          <span>Publicado em</span>
          <span>
            <MdDateRange size={18} />
          </span>
          {toLocaleTimeString(post.attributes.createdAt)}
        </PostDate>
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

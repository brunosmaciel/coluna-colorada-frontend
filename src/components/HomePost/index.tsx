import { BiTimeFive } from 'react-icons/bi';
import { PostData } from '../../domain/posts/post';
import toLocaleTimeString from '../../services/to-local-timeString';
import { theme } from '../../styles/theme';
import {
  Container,
  MainContent,
  PostCategory,
  PostDetailsContainer,
  PostPublishDate,
  PostTitle,
} from './styled';
type HandleClick = (post: PostData) => void;

export type HomePostProps = {
  post: PostData;
  handleClick: HandleClick;
};
export default function Post({ post, handleClick }: HomePostProps) {
  return (
    <Container key={post.attributes.slug} onClick={() => handleClick(post)}>
      <MainContent
        style={{
          backgroundImage: `url(${post.attributes.cover.data.attributes.url})`,
        }}
      >
        <PostDetailsContainer>
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
        </PostDetailsContainer>
      </MainContent>
    </Container>
  );
}

import { BiTimeFive } from 'react-icons/bi';
import { PostData } from '../../domain/posts/post';
import toLocaleTimeString from '../../services/to-local-timeString';
import { theme } from '../../styles/theme';
import {
  Container,
  MainContent,
  PostCategory,
  PostPublishDate,
  PostTitle,
} from './styled';
type HandleClick = (post: PostData) => void;
export type LastPostProps = {
  lastPost: PostData;
  handleClick: HandleClick;
};
export default function LastPost({ lastPost, handleClick }: LastPostProps) {
  return (
    <Container className="last-post" onClick={() => handleClick(lastPost)}>
      <MainContent
        style={{
          backgroundImage: `url(${lastPost.attributes.cover.data.attributes.url})`,
        }}
      >
        <PostTitle fontSize={theme.font.sizes.superLarge}>
          {lastPost.attributes.title}
        </PostTitle>
        <PostCategory fontSize={theme.font.sizes.medium}>
          {lastPost.attributes.category.data.attributes.name}
        </PostCategory>
        <PostPublishDate fontSize={theme.font.sizes.medium}>
          <span>
            <BiTimeFive size={theme.font.sizes.medium} />
          </span>
          {toLocaleTimeString(lastPost.attributes.createdAt)}
        </PostPublishDate>
      </MainContent>
    </Container>
  );
}

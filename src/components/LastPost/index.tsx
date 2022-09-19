import { PostData } from '../../domain/posts/post';
import toLocaleTimeString from '../../services/to-local-timeString';
import {
  Clock,
  Container,
  MainContent,
  PostCategory,
  PostDetailsContainer,
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
        <PostDetailsContainer>
          <PostTitle>{lastPost.attributes.title}</PostTitle>
          <PostCategory>
            {lastPost.attributes.category.data.attributes.name}
          </PostCategory>
          <PostPublishDate>
            <Clock />
            {toLocaleTimeString(lastPost.attributes.createdAt)}
          </PostPublishDate>
        </PostDetailsContainer>
      </MainContent>
    </Container>
  );
}

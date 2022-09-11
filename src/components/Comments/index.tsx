import { Container, Disqus } from './styled';

export type CommentsProps = {
  id: string;
  title: string;
  slug: string;
};
export const Comments = ({ id, title, slug }: CommentsProps) => {
  return (
    <Container>
      <Disqus
        shortname="colunacolorada"
        config={{
          url: `http://vcap.me:3000/post/${slug}`,
          identifier: String(id),
          title: title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
};

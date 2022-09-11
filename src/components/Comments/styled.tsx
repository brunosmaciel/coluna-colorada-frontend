import { DiscussionEmbed } from 'disqus-react';
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 0.5rem 3rem;
  max-width: 86rem;
  margin: 0 auto;
`;

export const Disqus = styled(DiscussionEmbed)`
  .reactions__container {
    background-color: purple;
  }
`;

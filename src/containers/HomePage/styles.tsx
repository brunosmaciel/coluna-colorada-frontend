import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacings.large};

  max-width: 100rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacings.medium};
`;

export const PostContainer = styled.div`
  height: 30rem;
  transition: all 300ms ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
export const PostTitle = styled.h1`
  align-self: flex-start;
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: normal;
`;
export const PostCategory = styled.p`
  align-self: flex-start;
  font-style: italic;
  font-size: ${({ theme }) => theme.font.sizes.small};
`;
export const PostCover = styled.img`
  width: 100%;
  height: 85%;
`;

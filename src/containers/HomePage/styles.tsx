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
  overflow: hidden;
  &:hover :nth-child(1) {
    transform: rotate(1deg) scale(1.02);
  }
  &:hover :nth-child(2) {
    opacity: 0.7;
  }
  &:hover :nth-child(3) {
    opacity: 0.7;
  }
`;
export const PostTitle = styled.h1`
  align-self: flex-start;
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: normal;
  max-width: 30rem;
  transition: all 300ms ease-in-out;
`;
export const PostCategory = styled.p`
  align-self: flex-start;
  max-width: 30rem;
  font-style: italic;
  font-size: ${({ theme }) => theme.font.sizes.small};
  transition: all 300ms ease-in-out;
  margin-top: ${({ theme }) => theme.spacings.small};
`;
export const PostCover = styled.img`
  width: 100%;
  height: 85%;
  max-width: 45rem;
  transition: all 300ms ease-in-out;
`;

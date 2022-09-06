import styled, { css } from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 0.5rem 3rem;
  max-width: 96rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PostContainer = styled.article`
  width: 100%;
  min-height: calc(100vh - 8.8rem);
  text-align: center;
  h1 {
    font-size: ${({ theme }) => theme.font.sizes.superLarge};
  }

  p {
    font-size: ${({ theme }) => theme.font.sizes.medium};
    display: block;
    text-align: center;
    margin-top: ${({ theme }) => theme.spacings.large};
    line-break: strict;
  }
  figure {
    display: flex;
    flex-direction: column;
    margin-top: ${({ theme }) => theme.spacings.medium};
    max-width: 100%;
  }

  figcaption {
    font-style: italic;
    margin-top: ${({ theme }) => theme.spacings.small};
    align-self: center;
  }
  .image-style-side {
    float: right;
    margin: ${({ theme }) => theme.spacings.large};
  }
`;

export const PostDate = styled.div`
  ${({ theme }) => css`
    align-self: flex-start;
    opacity: 0.7;
    font-size: ${theme.font.sizes.small};
    margin: ${theme.spacings.large} 0 0 0;
    display: flex;
    align-items: center;
    span {
      margin: 0 0.5rem;
    }
  `}
`;
export const AuthorContainer = styled.div`
  ${({ theme }) => css`
    border: 1px solid rgba(194, 12, 24, 0.5);
    border-radius: 0.5rem;
    margin: 9rem 0 7rem 0;
    padding: ${theme.spacings.medium};
    align-self: flex-start;
    display: flex;
    justify-content: space-around;
  `}
`;
export const AuthorImage = styled.img`
  min-width: 10rem;
  height: 10rem;
`;
export const AuthorDetails = styled.div`
  ${({ theme }) => css`
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${theme.spacings.medium};
    h1 {
      font-size: ${theme.font.sizes.large};
    }
    p {
      font-size: ${theme.font.sizes.small};
      font-style: italic;
    }
  `}
`;

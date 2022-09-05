import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 0.5rem;
  height: 100%;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: ${({ theme }) => theme.font.sizes.superLarge};
  }
  p {
    font-size: ${({ theme }) => theme.font.sizes.medium};
    display: block;
    width: auto;
    max-width: 70%;
    margin: ${({ theme }) => theme.spacings.small};
  }
  figure {
    display: flex;
    flex-direction: column;
    max-width: 70%;
    margin-top: ${({ theme }) => theme.spacings.medium};
  }

  figcaption {
    font-style: italic;
    margin-top: ${({ theme }) => theme.spacings.small};
    align-self: center;
  }
`;

export const AuthorContainer = styled.div`
  max-width: 70%;
  height: 5rem;
  margin: ${({ theme }) => theme.spacings.large} auto;
`;

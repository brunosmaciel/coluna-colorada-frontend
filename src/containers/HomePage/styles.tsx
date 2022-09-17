import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    /* min-height: calc(100vh - 8.8rem); */
    padding: ${theme.spacings.small} ${theme.spacings.large};
    max-width: 120rem;
    margin: 0 auto;

    @media (max-width: 369px) {
      padding: ${theme.spacings.small} ${theme.spacings.small};
    }
  `}
`;
export const LastPostHeader = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    height: 0;
    padding: ${theme.spacings.medium};
    color: ${theme.colors.secondary};
    max-width: 66.2%;
    display: flex;
    align-items: center;
    span {
      font-size: ${theme.font.sizes.medium};
    }
    @media (max-width: 919px) {
      max-width: 100%;
    }
    @media (max-width: 720px) {
      max-width: 49%;
    }
    @media (max-width: 629px) {
      max-width: 100%;
    } ;
  `}
`;

export const PostGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: 28rem;
  gap: ${({ theme }) => theme.spacings.small};
  margin: ${({ theme }) => theme.spacings.small} 0;

  @media (max-width: 629px) {
    max-width: 100%;
  } ;
`;

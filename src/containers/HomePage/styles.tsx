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
export const LastPostContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    /* margin: ${theme.spacings.small} 0; */
    overflow: hidden;
    transition: all 0.5s;
    grid-row: 1 / 3;
    grid-column: 1 / 3;

    @media (max-width: 919px) {
      grid-row: 1 / 3;
      grid-column: 1 / 3;
    }

    @media (max-width: 720px) {
      grid-row: 1 / 1;
      grid-column: 1 / 1;
    } ;
  `}
`;
export const LastPostMainContent = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #000;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;

  &:focus,
  &:hover {
    &:after {
      transform: scale(1.1);
    }
  }

  span {
    position: relative;
    z-index: 2;
    font-size: 40px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    background-size: cover;
    transform-origin: center;
    transition: all 0.5s;
  }
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

export const PostsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 28rem;
    /* margin: ${theme.spacings.small} 0; */
    overflow: hidden;
    transition: all 0.5s;
  `}
`;
export const PostsMainContent = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #000;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  width: 100%;
  height: 100%;

  &:focus,
  &:hover {
    &:after {
      transform: scale(1.1);
    }
  }

  span {
    position: relative;
    z-index: 2;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    background-size: cover;
    transform-origin: center;
    transition: all 0.5s;
  }
`;

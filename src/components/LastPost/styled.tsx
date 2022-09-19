import styled, { css } from 'styled-components';
import { BiTimeFive } from 'react-icons/bi';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    /* margin: ${theme.spacings.small} 0; */
    overflow: hidden;
    transition: all 0.5s;
    grid-row: 1 / 3;
    grid-column: 1 / 3;
    cursor: pointer;

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
export const MainContent = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #000;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacings.medium};

  &:focus,
  &:hover {
    &:after {
      transform: scale(1.1);
    }
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

export const PostDetailsContainer = styled.span`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const PostTitle = styled.span`
  ${({ theme }) => css`
    color: white;
    font-size: ${theme.font.sizes.superLarge};
    position: relative;
    z-index: 2;
    text-shadow: 1px 1px 1px black;
    margin-bottom: 0.5rem;

    @media (max-width: 720px) {
      font-size: ${theme.font.sizes.medium};
    } ;
  `}
`;
export const PostCategory = styled.span`
  ${({ theme }) => css`
    color: white;
    font-size: ${theme.font.sizes.medium};
    position: relative;
    z-index: 2;
    margin-bottom: 0.5rem;

    @media (max-width: 720px) {
      font-size: ${theme.font.sizes.small};
    } ;
  `}
`;
export const PostPublishDate = styled.div`
  ${({ theme }) => css`
    color: white;
    font-size: ${theme.font.sizes.medium};
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    @media (max-width: 720px) {
      font-size: ${theme.font.sizes.small};
    } ;
  `}
`;
export const Clock = styled(BiTimeFive)`
  align-self: baseline;
  margin-right: 0.5rem;
  font-size: ${({ theme }) => theme.font.sizes.large};

  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.font.sizes.small};
  } ;
`;

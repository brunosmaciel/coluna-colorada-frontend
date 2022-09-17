import styled, { css } from 'styled-components';

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
  padding: ${({ theme }) => theme.spacings.large};

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
export const PostTitle = styled.span<{ fontSize: string }>`
  color: white;
  font-size: ${({ fontSize }) => fontSize};
  position: relative;
  z-index: 2;
  text-shadow: 1px 1px 1px black;
`;
export const PostCategory = styled.span<{ fontSize: string }>`
  ${(props) => css`
    color: white;
    font-size: ${props.fontSize};
    position: relative;
    z-index: 2;
  `}
`;
export const PostPublishDate = styled.span<{ fontSize: string }>`
  color: white;
  font-size: ${(props) => props.fontSize};
  position: relative;
  z-index: 2;
  display: flex;
  /* align-items: baseline; */

  span {
    margin-right: 0.3rem;
    align-self: baseline;
  }
`;

import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 28rem;
    /* margin: ${theme.spacings.small} 0; */
    overflow: hidden;
    transition: all 0.5s;
    cursor: pointer;
  `}
`;
export const MainContent = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #000;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacings.medium};

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

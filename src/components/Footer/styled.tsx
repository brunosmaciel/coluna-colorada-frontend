import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  height: 1.5rem;
  div {
    height: 100%;
    max-width: 80%;
    background-color: transparent;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.font.sizes.small};
  }
`;

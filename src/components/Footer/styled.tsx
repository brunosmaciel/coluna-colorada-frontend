import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.small};
    text-align: center;
  `}
  a {
    color: ${({ theme }) => theme.colors.primary};
  }
  a:hover {
    opacity: 0.9;
  }
`;

import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.medium};
    text-align: center;
    box-shadow: 1px 4px 15px 3px rgba(0, 0, 0, 0.2);
  `}
  a {
    color: ${({ theme }) => theme.colors.secondary};
  }
  a:hover {
    opacity: 0.9;
  }
`;

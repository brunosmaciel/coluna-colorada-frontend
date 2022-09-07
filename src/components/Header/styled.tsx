import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.medium};
    text-align: center;
    box-shadow: 0px 0.4px 5.3px rgba(0, 0, 0, 0.008),
      0px 1.3px 17.9px rgba(0, 0, 0, 0.012), 0px 6px 80px rgba(0, 0, 0, 0.02);
  `}
  a {
    color: ${({ theme }) => theme.colors.secondary};
  }
  a:hover {
    opacity: 0.9;
  }
`;

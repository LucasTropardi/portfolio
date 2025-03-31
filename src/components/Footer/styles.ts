import styled from 'styled-components';

export const FooterContainer = styled.footer`
  margin-top: 3rem;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  border-top: 1px solid ${({ theme }) => theme.text};
`;

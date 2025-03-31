import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.text};
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    font-weight: bold;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    gap: 0.75rem;
    font-size: 0.9rem;
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

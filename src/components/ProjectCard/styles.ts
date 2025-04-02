import styled from 'styled-components';

export const Card = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    max-height: 160px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }

  &:hover {
    transform: translateY(-5px);
  }

  a {
  display: inline-block;
  margin-top: 1rem;
  color: ${({ theme }) => theme.text};
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
}

`;

export const TechList = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;

  span {
    background-color: #ccc;
    color: #000;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    font-size: 0.75rem;
  }
`;

import styled from 'styled-components';

export const HomeContainer = styled.section`
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Intro = styled.div`
  max-width: 700px;
  line-height: 1.6;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

export const Highlight = styled.span`
  color: #007bff;
`;

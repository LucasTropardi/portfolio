import styled from 'styled-components';

export const AboutContainer = styled.section`
  padding: 3rem 1rem;
  max-width: 900px;
  margin: 0 auto;
`;

export const Section = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    background-color: #ccc;
    color: #000;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    font-size: 0.9rem;
  }
`;

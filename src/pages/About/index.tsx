import { AboutContainer, Section, SkillList } from './styles';
import { useNaming } from '../../naming/NamingContext';

export function About() {
  const { getInfo } = useNaming();

  return (
    <AboutContainer>
      <Section>
        <h2>{getInfo('aboutTitle')}</h2>
        <p>{getInfo('aboutIntro')}</p>
        <p>{getInfo('aboutCurrentJob')}</p>
        <p>{getInfo('aboutTech')}</p>
      </Section>

      <Section>
        <h2>{getInfo('aboutSkillsTitle')}</h2>
        <SkillList>
          <span>Spring Boot</span>
          <span>Java</span>
          <span>React</span>
          <span>TypeScript</span>
          <span>NestJS</span>
          <span>Next.js</span>
          <span>SQL</span>
          <span>JavaScript</span>
          <span>PHP</span>
          <span>Laravel</span>
          <span>Docker</span>
        </SkillList>
      </Section>
    </AboutContainer>
  );
}

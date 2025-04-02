import { useNaming } from '../../naming/NamingContext';
import { useState } from 'react';
import projectsData from '../../data/projects.json';
import { ProjectCard } from '../../components/ProjectCard';
import { ProjectsWrapper } from './styles';

export function Projects() {
  const [projects] = useState(projectsData);
  const { lang, getField } = useNaming();

  return (
    <>
      <h1>{getField('projetos')}</h1>
      <ProjectsWrapper>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title[lang]}
            description={project.description[lang]}
            image={project.image}
            technologies={project.technologies}
            repo={project.repo}
          />
        ))}
      </ProjectsWrapper>
    </>
  );
}

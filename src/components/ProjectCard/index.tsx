import { Card, TechList } from './styles';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  repo?: string;
}

export function ProjectCard({ title, description, image, technologies, repo }: ProjectProps) {
  return (
    <Card>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <TechList>
        {technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </TechList>
      {repo && (
        <a href={repo} target="_blank" rel="noopener noreferrer">
          🔗 Ver no GitHub
        </a>
      )}
    </Card>
  );
}
import { useNaming } from "../../naming/NamingContext";

export function About() {
  const { getField } = useNaming();

  return (
    <div>
      <h1>{getField('sobre')}</h1>
      <p>Esta é a página sobre.</p>
    </div>
  );
}
import { useNaming } from "../../naming/NamingContext";

export function Contact() {
  const { getField } = useNaming();

  return (
    <div>
      <h1>{getField('contato')}</h1>
      <p>Esta é a página de contato.</p>
    </div>
  );
}
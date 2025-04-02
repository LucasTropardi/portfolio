import { useNaming } from "../../naming/NamingContext";

export function Home() {
  const { getField } = useNaming();
  return (
    <div>
      <h1>{getField('inicio')}</h1>
      <p>Welcome to the Home page!</p>
    </div>
  );
}
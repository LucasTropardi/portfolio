import { HomeContainer, Intro, Highlight } from './styles';
import { useNaming } from '../../naming/NamingContext';

export function Home() {
  const { getInfo } = useNaming();

  return (
    <HomeContainer>
      <Intro>
        <h1>
          {getInfo('homeGreeting')} <Highlight>Lucas Tropardi</Highlight>
        </h1>
        <p>{getInfo('homeDescription')}</p>
        <p>{getInfo('homeStack')}</p>
      </Intro>
    </HomeContainer>
  );
}

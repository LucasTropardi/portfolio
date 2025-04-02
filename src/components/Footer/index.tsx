import { FooterContainer } from './styles';
import { useNaming } from '../../naming/NamingContext';

export function Footer() {
  const { getMessage } = useNaming();

  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} Lucas Tropardi. {getMessage('direitos-reservados')}.</p>
    </FooterContainer>
  );
}

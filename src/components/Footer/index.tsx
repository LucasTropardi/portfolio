import { FooterContainer } from './styles';

export function Footer() {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} Lucas Tropardi. Todos os direitos reservados.</p>
    </FooterContainer>
  );
}

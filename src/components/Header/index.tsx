import { HeaderContainer, NavLinks, ToggleButton } from './styles';
import { useTheme } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <h1>Meu Portfólio</h1>
      <NavLinks>
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/contato">Contato</Link>
      </NavLinks>
      <ToggleButton onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </ToggleButton>
    </HeaderContainer>
  );
}

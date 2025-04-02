import { HeaderContainer, NavLinks, ToggleButton } from './styles';
import { useTheme } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import { useNaming } from '../../naming/NamingContext';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { getField } = useNaming();

  return (
    <HeaderContainer>
      <h1>{getField('title-portfolio')}</h1>
      <NavLinks>
        <Link to="/">{getField('inicio')}</Link>
        <Link to="/sobre">{getField('sobre')}</Link>
        <Link to="/projetos">{getField('projetos')}</Link>
        <Link to="/contato">{getField('contato')}</Link>
      </NavLinks>
      <ToggleButton onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </ToggleButton>
    </HeaderContainer>
  );
}

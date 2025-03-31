import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Container } from './components/Container';

import { Home } from './pages/Home'; 
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact'; 

export function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

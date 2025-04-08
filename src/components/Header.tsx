import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Header.css';

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm fixed-top">
      <Container>
        <Navbar.Brand 
          href="/" 
          className="d-flex align-items-center"
          style={{ cursor: 'pointer' }}
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
        >
          <span className="fw-bold text-primary">Gwan</span>
          <span className="text-dark">Company</span>
        </Navbar.Brand>
        
        <div className="d-flex align-items-center">
          <div className="language-toggle me-3">
            <Button 
              variant={language === 'pt' ? 'primary' : 'outline-secondary'}
              className="language-btn"
              onClick={() => setLanguage('pt')}
            >
              PT
            </Button>
            <Button 
              variant={language === 'en' ? 'primary' : 'outline-secondary'}
              className="language-btn"
              onClick={() => setLanguage('en')}
            >
              EN
            </Button>
          </div>
          <Button 
            variant="primary" 
            href="https://webhook.gwan.com.br/form/98bcf216-c30d-4bc1-88b1-e4de524efd99"
          >
            {language === 'en' ? "Let's Connect" : "Vamos Conectar"}
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header; 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import Chat from './Chat';
import { chatbots } from '../data/chatbots';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const getEmojiIcon = (chatbotId: string) => {
  switch (chatbotId) {
    case 'Jaiminho':
      return '🏥';
    case 'Empresário':
      return '📅';
    case 'Gwan':
      return '📚';
    default:
      return '🤖';
  }
};

const HomePage: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const t = translations[language];
  const [chatKey, setChatKey] = useState(Date.now());

  const handleTryNow = (chatbotId: string) => {
    setChatKey(Date.now());
    navigate(`/chat/${chatbotId}`);
  };

  return (
    <div className="homepage">
      <LanguageSwitcher />
      
      <section className="hero py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-4 fw-bold mb-4">{t.hero.title}</h1>
              <h2 className="h3 mb-4 text-light">{t.hero.subtitle}</h2>
              <p className="lead mb-5">{t.hero.description}</p>
              <Button 
                variant="primary" 
                size="lg" 
                href="https://webhook.gwan.com.br/form/98bcf216-c30d-4bc1-88b1-e4de524efd99"
                className="px-4"
              >
                {t.hero.cta}
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="products py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">{t.products.title}</h2>
          <Row className="g-4">
            {chatbots.map((chatbot) => (
              <Col key={chatbot.id} md={4}>
                <Card className="h-100 shadow-soft rounded-xl">
                  <Card.Body className="d-flex flex-column text-center">
                    <div className="display-1 mb-4">{getEmojiIcon(chatbot.id)}</div>
                    <Card.Title as="h3" className="mb-3">
                      {chatbot.title[language]}
                    </Card.Title>
                    <Card.Text className="mb-4">
                      {chatbot.description[language]}
                    </Card.Text>
                    <Button 
                      variant="primary" 
                      onClick={() => handleTryNow(chatbot.id)}
                      className="mt-auto"
                    >
                      {t.products.tryNow}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="features py-5">
        <Container>
          <h2 className="text-center mb-5">{t.features.title}</h2>
          <Row className="g-4">
            {t.features.items.map((feature, index) => (
              <Col key={index} md={3}>
                <Card className="h-100 shadow-soft rounded-xl feature-card">
                  <Card.Body className="text-center">
                    <div className="display-4 mb-3">{feature.icon}</div>
                    <Card.Title as="h3" className="h4 mb-3">
                      {feature.title}
                    </Card.Title>
                    <Card.Text>
                      {feature.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Approach Section */}
      <section className="approach py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="display-5 fw-bold mb-4">{t.approach.title}</h2>
              <p className="lead text-muted mb-5">{t.approach.description}</p>
              <Row className="g-4 mt-4">
                <Col md={4}>
                  <Card className="h-100 border-0 shadow-soft rounded-xl">
                    <Card.Body className="text-center">
                      <div className="display-4 mb-3">🎯</div>
                      <Card.Title as="h3" className="h5 mb-3">Foco no Cliente</Card.Title>
                      <Card.Text>Entendemos suas necessidades e entregamos soluções personalizadas.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100 border-0 shadow-soft rounded-xl">
                    <Card.Body className="text-center">
                      <div className="display-4 mb-3">⚡</div>
                      <Card.Title as="h3" className="h5 mb-3">Desenvolvimento Ágil</Card.Title>
                      <Card.Text>Metodologias modernas para entregas rápidas e eficientes.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100 border-0 shadow-soft rounded-xl">
                    <Card.Body className="text-center">
                      <div className="display-4 mb-3">💡</div>
                      <Card.Title as="h3" className="h5 mb-3">Inovação Constante</Card.Title>
                      <Card.Text>Sempre buscando as melhores tecnologias e práticas.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta py-5" style={{ background: 'linear-gradient(135deg, #1a365d 0%, #2d3748 100%)' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="display-5 fw-bold text-white mb-4">{t.cta.title}</h2>
              <p className="lead text-light mb-5">{t.cta.description}</p>
              <Button 
                variant="light" 
                size="lg" 
                href="https://webhook.gwan.com.br/form/98bcf216-c30d-4bc1-88b1-e4de524efd99"
                className="px-5 py-3 rounded-pill"
              >
                {t.cta.button}
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Chat Widget */}
      <Chat />
    </div>
  );
};

export default HomePage; 
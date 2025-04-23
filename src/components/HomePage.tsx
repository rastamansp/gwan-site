import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './HomePage.css';

const getEmojiIcon = (chatbotId: string) => {
  switch (chatbotId) {
    case 'Jaiminho':
      return '🌿';
    case 'Marley':
      return '🎭';
    case 'Gwan':
      return '🏢';
    default:
      return '🤖';
  }
};

const HomePage: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleTryNow = (chatbotId: string) => {
    navigate(`/chat/${chatbotId}`);
  };

  const chatbots = [
    {
      id: 'Jaiminho',
      title: language === 'en' ? 'Jaiminho' : 'Jaiminho',
      description: language === 'en' 
        ? 'Your naturopathic doctor, providing information about causes, symptoms, and natural treatments for 21st century diseases.'
        : 'Seu médico naturopata, fornecendo informações sobre causas, sintomas e tratamentos naturais para doenças do século XXI.'
    },
    {
      id: 'Marley',
      title: language === 'en' ? 'Marley' : 'Marley',
      description: language === 'en'
        ? 'Get information about Junior Dread\'s career, shows, tours, technical rider, upcoming dates, booking information, and partnership opportunities.'
        : 'Obtenha informações sobre a carreira do Junior Dread, shows, turnês, rider técnico, próximas datas, informações para contratação e oportunidades de parceria.'
    },
    {
      id: 'Gwan',
      title: language === 'en' ? 'Gwan' : 'Gwan',
      description: language === 'en'
        ? 'Our institutional chatbot, providing information about our company, contact details, partnerships, and our AI chatbot development and technological innovation services.'
        : 'Nosso chatbot institucional, fornecendo informações sobre a empresa, detalhes de contato, parcerias e serviços de desenvolvimento de Chatbot de IA e inovação tecnológica.'
    }
  ];

  return (
    <div className="homepage">
      <section className="hero py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-4 fw-bold mb-4">
                {language === 'en' ? 'Choose Your AI Assistant' : 'Escolha Seu Assistente de IA'}
              </h1>
              <h2 className="h3 mb-4 text-light">
                {language === 'en' 
                  ? 'Select the chatbot that best fits your needs'
                  : 'Selecione o chatbot que melhor atende às suas necessidades'}
              </h2>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="products py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">
            {language === 'en' ? 'Our Products' : 'Nossos Produtos'}
          </h2>
          <Row className="g-4">
            {chatbots.map((chatbot) => (
              <Col key={chatbot.id} xs={12} md={4}>
                <Card className="h-100 product-card">
                  <Card.Body className="d-flex flex-column text-center">
                    <div className="display-1 mb-4">{getEmojiIcon(chatbot.id)}</div>
                    <Card.Title className="mb-3">{chatbot.title}</Card.Title>
                    <Card.Text className="flex-grow-1">{chatbot.description}</Card.Text>
                    <Button 
                      variant="primary" 
                      className="mt-auto"
                      onClick={() => handleTryNow(chatbot.id)}
                    >
                      {language === 'en' ? 'Try Now' : 'Experimentar'}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Choose Gwan Section */}
      <section className="features py-5">
        <Container>
          <h2 className="text-center mb-5">
            {language === 'en' ? 'Why Choose Gwan?' : 'Por que Escolher a Gwan?'}
          </h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 feature-card">
                <Card.Body className="text-center">
                  <div className="display-4 mb-3">🤖</div>
                  <Card.Title className="h4 mb-3">
                    {language === 'en' ? 'Advanced AI Technology' : 'Tecnologia de IA Avançada'}
                  </Card.Title>
                  <Card.Text>
                    {language === 'en' 
                      ? 'State-of-the-art AI models for natural and engaging conversations.'
                      : 'Modelos de IA de última geração para conversas naturais e envolventes.'}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 feature-card">
                <Card.Body className="text-center">
                  <div className="display-4 mb-3">⚡</div>
                  <Card.Title className="h4 mb-3">
                    {language === 'en' ? 'Fast Implementation' : 'Implementação Rápida'}
                  </Card.Title>
                  <Card.Text>
                    {language === 'en' 
                      ? 'Quick deployment and easy integration with your existing systems.'
                      : 'Implantação rápida e fácil integração com seus sistemas existentes.'}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 feature-card">
                <Card.Body className="text-center">
                  <div className="display-4 mb-3">🛡️</div>
                  <Card.Title className="h4 mb-3">
                    {language === 'en' ? 'Secure & Reliable' : 'Seguro e Confiável'}
                  </Card.Title>
                  <Card.Text>
                    {language === 'en' 
                      ? 'Enterprise-grade security and 24/7 monitoring for your peace of mind.'
                      : 'Segurança de nível empresarial e monitoramento 24/7 para sua tranquilidade.'}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Approach Section */}
      <section className="approach py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="display-5 fw-bold mb-4">
                {language === 'en' ? 'Our Approach' : 'Nossa Abordagem'}
              </h2>
              <p className="lead text-muted mb-5">
                {language === 'en' 
                  ? 'We combine cutting-edge technology with a deep understanding of your business needs.'
                  : 'Combinamos tecnologia de ponta com um profundo entendimento das necessidades do seu negócio.'}
              </p>
              <Row className="g-4 mt-4">
                <Col md={4}>
                  <Card className="h-100 border-0 shadow-soft rounded-xl">
                    <Card.Body className="text-center">
                      <div className="display-4 mb-3">🎯</div>
                      <Card.Title className="h5 mb-3">
                        {language === 'en' ? 'Customer Focus' : 'Foco no Cliente'}
                      </Card.Title>
                      <Card.Text>
                        {language === 'en' 
                          ? 'Understanding your needs and delivering personalized solutions.'
                          : 'Entendemos suas necessidades e entregamos soluções personalizadas.'}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100 border-0 shadow-soft rounded-xl">
                    <Card.Body className="text-center">
                      <div className="display-4 mb-3">⚡</div>
                      <Card.Title className="h5 mb-3">
                        {language === 'en' ? 'Agile Development' : 'Desenvolvimento Ágil'}
                      </Card.Title>
                      <Card.Text>
                        {language === 'en' 
                          ? 'Modern methodologies for quick and efficient deliveries.'
                          : 'Metodologias modernas para entregas rápidas e eficientes.'}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100 border-0 shadow-soft rounded-xl">
                    <Card.Body className="text-center">
                      <div className="display-4 mb-3">💡</div>
                      <Card.Title className="h5 mb-3">
                        {language === 'en' ? 'Constant Innovation' : 'Inovação Constante'}
                      </Card.Title>
                      <Card.Text>
                        {language === 'en' 
                          ? 'Always seeking the best technologies and practices.'
                          : 'Sempre buscando as melhores tecnologias e práticas.'}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Ready to Start Section */}
      <section className="cta py-5" style={{ background: 'linear-gradient(135deg, #1a365d 0%, #2d3748 100%)' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="display-5 fw-bold text-white mb-4">
                {language === 'en' ? 'Ready to Start?' : 'Pronto para Começar?'}
              </h2>
              <p className="lead text-light mb-5">
                {language === 'en' 
                  ? 'Transform your business with our AI solutions. Get in touch today!'
                  : 'Transforme seu negócio com nossas soluções de IA. Entre em contato hoje!'}
              </p>
              <Button 
                variant="light" 
                size="lg" 
                href="https://n8n.gwan.com.br/form/9d3d8b70-1781-44e7-b8b3-0fef87752d33"
                className="px-5 py-3 rounded-pill"
              >
                {language === 'en' ? "Let's Connect" : "Vamos Conectar"}
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage; 
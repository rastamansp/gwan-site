import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import './ChatPage.css';

const ChatPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const products = t.products.items.map(item => ({
    id: item.id,
    title: item.title,
    description: item.description,
    link: `/chat/${item.id}`
  }));

  const faqExamples = {
    Jaiminho: [
      {
        question: language === 'en' ? 'What are the common symptoms of a cold?' : 'Quais são os sintomas comuns de um resfriado?',
        answer: language === 'en' ? 'Common cold symptoms include runny nose, sore throat, cough, and mild fever.' : 'Os sintomas comuns do resfriado incluem coriza, dor de garganta, tosse e febre leve.'
      },
      {
        question: language === 'en' ? 'How can I prevent the flu?' : 'Como posso prevenir a gripe?',
        answer: language === 'en' ? 'To prevent the flu, get vaccinated annually, wash hands frequently, and maintain good hygiene.' : 'Para prevenir a gripe, tome a vacina anualmente, lave as mãos com frequência e mantenha boa higiene.'
      }
    ],
    Empresário: [
      {
        question: language === 'en' ? 'How do I schedule a meeting?' : 'Como agendo uma reunião?',
        answer: language === 'en' ? 'You can schedule a meeting by providing the date, time, and participants.' : 'Você pode agendar uma reunião fornecendo a data, horário e participantes.'
      },
      {
        question: language === 'en' ? 'Can I reschedule an appointment?' : 'Posso reagendar um compromisso?',
        answer: language === 'en' ? 'Yes, you can reschedule by providing the new date and time.' : 'Sim, você pode reagendar fornecendo a nova data e horário.'
      }
    ],
    Gwan: [
      {
        question: language === 'en' ? 'What is API integration?' : 'O que é integração de API?',
        answer: language === 'en' ? 'API integration is the process of connecting different software applications through their APIs to share data and functionality.' : 'Integração de API é o processo de conectar diferentes aplicações de software através de suas APIs para compartilhar dados e funcionalidades.'
      },
      {
        question: language === 'en' ? 'How can I improve my API performance?' : 'Como posso melhorar o desempenho da minha API?',
        answer: language === 'en' ? 'To improve API performance, implement caching, optimize database queries, and use efficient data structures.' : 'Para melhorar o desempenho da API, implemente cache, otimize consultas ao banco de dados e use estruturas de dados eficientes.'
      }
    ]
  };

  return (
    <div className="chat-page">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h1 className="display-4 fw-bold mb-3">{t.chat.title}</h1>
            <p className="lead text-muted">{t.chat.subtitle}</p>
          </Col>
        </Row>
        
        <Row className="g-4 mb-5">
          {products.map(product => (
            <Col key={product.id} xs={12} md={6} lg={4}>
              <Card className="h-100 product-card">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h3 mb-3">{product.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{product.description}</Card.Text>
                  <Button 
                    variant="primary" 
                    href={product.link}
                    className="mt-auto align-self-start"
                  >
                    {t.products.tryNow}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="justify-content-center mb-5">
          <Col lg={8}>
            <h2 className="text-center mb-4">
              {language === 'en' ? 'Frequently Asked Questions' : 'Perguntas Frequentes'}
            </h2>
            <Accordion>
              {products.map((product, index) => (
                <Accordion.Item key={product.id} eventKey={index.toString()}>
                  <Accordion.Header>{product.title}</Accordion.Header>
                  <Accordion.Body>
                    <div className="faq-examples">
                      {faqExamples[product.id as keyof typeof faqExamples].map((faq, faqIndex) => (
                        <div key={faqIndex} className="mb-4">
                          <h5 className="text-primary">{faq.question}</h5>
                          <p className="text-muted">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChatPage; 
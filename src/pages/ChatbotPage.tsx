import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { chatbots } from '../data/chatbots';
import Chat from '../components/Chat';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ChatbotPage.css';

const ChatbotPage: React.FC = () => {
  const { language } = useLanguage();
  const { chatbotId } = useParams<{ chatbotId: string }>();
  const navigate = useNavigate();
  const [chatKey, setChatKey] = useState(Date.now());
  const [isOpen, setIsOpen] = useState(false);

  const handleChatbotChange = (newChatbotId: string) => {
    setIsOpen(false);
    navigate(`/chat/${newChatbotId}`);
    setChatKey(Date.now());
  };

  const chatbot = chatbots.find(c => c.id === chatbotId);

  if (!chatbot) {
    return <div className="chatbot-page">Chatbot not found</div>;
  }

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
    Marley: [
      {
        question: language === 'en' ? 'How can I book Junior Dread for a show?' : 'Como posso contratar o Junior Dread para um show?',
        answer: language === 'en' ? 'To book Junior Dread, please provide details about your event including date, venue, and expected audience size.' : 'Para contratar o Junior Dread, por favor forneça detalhes sobre seu evento incluindo data, local e tamanho esperado do público.'
      },
      {
        question: language === 'en' ? 'What is included in the technical rider?' : 'O que está incluído no rider técnico?',
        answer: language === 'en' ? 'The technical rider includes sound system requirements, stage setup, lighting needs, and other technical specifications for the performance.' : 'O rider técnico inclui requisitos de sistema de som, configuração do palco, necessidades de iluminação e outras especificações técnicas para a apresentação.'
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
    <div className="chatbot-page">
      <Container>
        <div className="chatbot-header">
          <button className="back-button" onClick={() => navigate('/')}>
            ← {language === 'en' ? 'Back' : 'Voltar'}
          </button>
          <div className="chatbot-selector">
            <select 
              value={chatbotId} 
              onChange={(e) => handleChatbotChange(e.target.value)}
              className="chatbot-dropdown"
            >
              {chatbots.map((bot) => (
                <option key={bot.id} value={bot.id}>
                  {bot.id}
                </option>
              ))}
            </select>
          </div>
          <h1>{chatbot.title[language]}</h1>
          <p className="subtitle">{chatbot.description[language]}</p>
        </div>
        
        <Row className="g-4">
          <Col lg={6}>
            <Card className="chatbot-info">
              <Card.Body>
                <h2>{language === 'en' ? 'About this Chatbot' : 'Sobre este Chatbot'}</h2>
                <p>{language === 'en' 
                  ? 'This chatbot is designed to help you with the following tasks:' 
                  : 'Este chatbot foi projetado para ajudá-lo com as seguintes tarefas:'}</p>
                <ul>
                  {chatbot.features.map((feature, index) => (
                    <li key={index}>{feature[language]}</li>
                  ))}
                </ul>
                <p className="mt-4">
                  {language === 'en'
                    ? 'Please note: This chatbot provides general information and guidance. For specific medical advice, please consult a healthcare professional.'
                    : 'Observação: Este chatbot fornece informações e orientações gerais. Para aconselhamento médico específico, consulte um profissional de saúde.'}
                </p>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={6}>
            <Card className="cta-section">
              <Card.Body>
                <h2 className="mb-4">
                  {language === 'en' 
                    ? 'Try it now!' 
                    : 'Experimente agora!'}
                </h2>
                <p className="mb-4">
                  {language === 'en'
                    ? 'Start a conversation with our chatbot to get instant help.'
                    : 'Inicie uma conversa com nosso chatbot para obter ajuda instantânea.'}
                </p>
                <div className="d-flex justify-content-center">
                  <Button 
                    variant="primary" 
                    size="lg"
                    onClick={() => setIsOpen(true)}
                    className="px-4"
                  >
                    {language === 'en' ? 'Start Chat' : 'Iniciar Chat'}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Card className="faq-section">
              <Card.Body>
                <h2>{language === 'en' ? 'Frequently Asked Questions' : 'Perguntas Frequentes'}</h2>
                <div className="faq-examples">
                  {faqExamples[chatbotId as keyof typeof faqExamples].map((faq, index) => (
                    <div key={index} className="mb-4">
                      <h5 className="text-primary">{faq.question}</h5>
                      <p className="text-muted">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Chat Component */}
        <Chat key={chatKey} chatbotId={chatbotId} isOpen={isOpen} />
      </Container>
    </div>
  );
};

export default ChatbotPage; 
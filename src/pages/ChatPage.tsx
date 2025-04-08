import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { chatbots } from '../data/chatbots';
import Chat from '../components/Chat';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ChatPage.css';

const ChatPage: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [selectedChatbot, setSelectedChatbot] = useState('Jaiminho');
  const [isOpen, setIsOpen] = useState(false);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChatbotChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedChatbot(event.target.value);
    setIsOpen(false);
  };

  const chatbot = chatbots.find(c => c.id === selectedChatbot);

  if (!chatbot) {
    return <div>Chatbot not found</div>;
  }

  return (
    <div className="chat-page">
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="shadow-soft rounded-xl">
              <Card.Body className="text-center">
                <h1 className="display-4 mb-4">
                  {language === 'en' ? 'Chat with our AI' : 'Converse com nossa IA'}
                </h1>
                <p className="lead text-muted mb-4">
                  {language === 'en'
                    ? 'Select a chatbot to start a conversation'
                    : 'Selecione um chatbot para iniciar uma conversa'}
                </p>
                
                <select
                  className="form-select mb-4"
                  value={selectedChatbot}
                  onChange={handleChatbotChange}
                >
                  {chatbots.map((chatbot) => (
                    <option key={chatbot.id} value={chatbot.id}>
                      {chatbot.title[language]}
                    </option>
                  ))}
                </select>

                <div className="d-flex justify-content-center gap-3">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => setIsOpen(true)}
                  >
                    {language === 'en' ? 'Start Chat' : 'Iniciar Chat'}
                  </Button>
                  <Button
                    variant="outline-primary"
                    size="lg"
                    onClick={() => navigate('/')}
                  >
                    {language === 'en' ? 'Back to Home' : 'Voltar para Home'}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Chat chatbotId={selectedChatbot} isOpen={isOpen} />
    </div>
  );
};

export default ChatPage; 
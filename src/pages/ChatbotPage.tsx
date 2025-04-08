import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { chatbots } from '../data/chatbots';
import Chat from '../components/Chat';
import './ChatbotPage.css';

const ChatbotPage: React.FC = () => {
  const { language } = useLanguage();
  const { chatbotId } = useParams<{ chatbotId: string }>();
  const navigate = useNavigate();
  const [chatKey, setChatKey] = useState(Date.now());

  const handleChatbotChange = (newChatbotId: string) => {
    navigate(`/chat/${newChatbotId}`);
    setChatKey(Date.now()); // Força a remontagem do Chat
  };

  // Get the specific chatbot data based on the URL parameter
  const chatbot = chatbots.find(c => c.id === chatbotId);

  if (!chatbot) {
    return <div className="chatbot-page">Chatbot not found</div>;
  }

  return (
    <div className="chatbot-page">
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
                {bot.title[language]}
              </option>
            ))}
          </select>
        </div>
        <h1>{chatbot.title[language]}</h1>
        <p className="subtitle">{chatbot.description[language]}</p>
      </div>
      
      <div className="chatbot-content">
        <div className="chatbot-info">
          <h2>{language === 'en' ? 'About this Chatbot' : 'Sobre este Chatbot'}</h2>
          <p>{language === 'en' ? 'This chatbot is designed to help you with:' : 'Este chatbot foi projetado para ajudá-lo com:'}</p>
          <ul>
            {chatbot.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p>{chatbot.disclaimer[language]}</p>
        </div>
        
        <div className="chat-container">
          <Chat key={chatKey} chatbotId={chatbotId} />
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage; 
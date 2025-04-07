import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import Chat from '../components/Chat';
import './ChatbotPage.css';

interface ChatbotData {
  title: string;
  description: string;
  features: string[];
  disclaimer: string;
}

const ChatbotPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const { chatbotId } = useParams<{ chatbotId: string }>();
  const navigate = useNavigate();

  const chatbotFeatures = {
    chatbot1: {
      features: [
        'General health information',
        'Wellness tips',
        'Healthy lifestyle recommendations',
        'Basic medical guidance'
      ],
      disclaimer: 'Please note that this chatbot is for informational purposes only and should not replace professional medical advice.'
    },
    chatbot2: {
      features: [
        'Scheduling appointments',
        'Managing bookings',
        'Rescheduling or canceling appointments',
        'Providing availability information',
        'Setting up reminders'
      ],
      disclaimer: 'This chatbot integrates with popular calendar systems to provide seamless booking experiences.'
    },
    chatbot3: {
      features: [
        'Answering general knowledge questions',
        'Providing educational content',
        'Explaining complex topics',
        'Offering learning resources',
        'Supporting research and study'
      ],
      disclaimer: 'This chatbot is designed to enhance your learning experience and provide accurate information.'
    }
  };

  // Get the specific chatbot data based on the URL parameter
  const getChatbotData = (): ChatbotData | null => {
    if (!chatbotId) return null;
    
    const chatbot = t.products.items.find(item => item.id === chatbotId);
    if (!chatbot) return null;

    const features = chatbotFeatures[chatbotId as keyof typeof chatbotFeatures];
    if (!features) return null;

    return {
      title: chatbot.title,
      description: chatbot.description,
      features: features.features,
      disclaimer: features.disclaimer
    };
  };

  const chatbotData = getChatbotData();

  if (!chatbotData) {
    return <div className="chatbot-page">Chatbot not found</div>;
  }

  return (
    <div className="chatbot-page">
      <div className="chatbot-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ← {language === 'en' ? 'Back' : 'Voltar'}
        </button>
        <h1>{chatbotData.title}</h1>
        <p className="subtitle">{chatbotData.description}</p>
      </div>
      
      <div className="chatbot-content">
        <div className="chatbot-info">
          <h2>About this Chatbot</h2>
          <p>This chatbot is designed to help you with:</p>
          <ul>
            {chatbotData.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p>{chatbotData.disclaimer}</p>
        </div>
        
        <div className="chat-container">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage; 
import React from 'react';
import { useParams } from 'react-router-dom';
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

  // Get the specific chatbot data based on the URL parameter
  const getChatbotData = (): ChatbotData | null => {
    switch (chatbotId) {
      case 'chatbot1':
        return {
          title: t.products.chatbot1.title,
          description: t.products.chatbot1.description,
          features: [
            'General health information',
            'Wellness tips',
            'Healthy lifestyle recommendations',
            'Basic medical guidance'
          ],
          disclaimer: 'Please note that this chatbot is for informational purposes only and should not replace professional medical advice.'
        };
      case 'chatbot2':
        return {
          title: t.products.chatbot2.title,
          description: t.products.chatbot2.description,
          features: [
            'Scheduling appointments',
            'Managing bookings',
            'Rescheduling or canceling appointments',
            'Providing availability information',
            'Setting up reminders'
          ],
          disclaimer: 'This chatbot integrates with popular calendar systems to provide seamless booking experiences.'
        };
      case 'chatbot3':
        return {
          title: t.products.chatbot3.title,
          description: t.products.chatbot3.description,
          features: [
            'Answering general knowledge questions',
            'Providing educational content',
            'Explaining complex topics',
            'Offering learning resources',
            'Supporting research and study'
          ],
          disclaimer: 'This chatbot is designed to enhance your learning experience and provide accurate information.'
        };
      default:
        return null;
    }
  };

  const chatbotData = getChatbotData();

  if (!chatbotData) {
    return <div className="chatbot-page">Chatbot not found</div>;
  }

  return (
    <div className="chatbot-page">
      <div className="chatbot-header">
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
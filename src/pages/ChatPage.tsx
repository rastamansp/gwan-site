import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import './ChatPage.css';

const ChatPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const products = [
    {
      id: 'chatbot1',
      title: t.products.chatbot1.title,
      description: t.products.chatbot1.description,
      link: '/chat/chatbot1'
    },
    {
      id: 'chatbot2',
      title: t.products.chatbot2.title,
      description: t.products.chatbot2.description,
      link: '/chat/chatbot2'
    },
    {
      id: 'chatbot3',
      title: t.products.chatbot3.title,
      description: t.products.chatbot3.description,
      link: '/chat/chatbot3'
    }
  ];

  return (
    <div className="chat-page">
      <h1>{t.chat.title}</h1>
      <p className="subtitle">{t.chat.subtitle}</p>
      
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <a href={product.link} className="product-link">
              {t.products.tryNow}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatPage; 
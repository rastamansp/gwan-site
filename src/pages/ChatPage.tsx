import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
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
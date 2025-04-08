import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import Chat from './Chat';
import { chatbots } from '../data/chatbots';

// Ícones como componentes SVG para melhor performance e qualidade
const HealthIcon = () => (
  <svg className="product-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h4v2h-4v4h-2v-4H7v-2h4V7z" />
  </svg>
);

const BookerIcon = () => (
  <svg className="product-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5zm2 4h10v2H7v-2zm0 4h7v2H7v-2z" />
  </svg>
);

const KnowledgeIcon = () => (
  <svg className="product-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const getIconComponent = (chatbotId: string) => {
  switch (chatbotId) {
    case 'Jaiminho':
      return <HealthIcon />;
    case 'Empresário':
      return <BookerIcon />;
    case 'Gwan':
      return <KnowledgeIcon />;
    default:
      return null;
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
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>{t.hero.title}</h1>
          <h2>{t.hero.subtitle}</h2>
          <p>{t.hero.description}</p>
          <button className="cta-button" onClick={() => handleTryNow('Jaiminho')}>
            {t.hero.cta}
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="products">
        <h2>{t.products.title}</h2>
        <div className="product-grid">
          {chatbots.map((chatbot) => (
            <div key={chatbot.id} className="product-card">
              <div className="product-header">
                {getIconComponent(chatbot.id)}
                <h3>{chatbot.title[language]}</h3>
              </div>
              <p>{chatbot.description[language]}</p>
              <button 
                className="try-now-button"
                onClick={() => handleTryNow(chatbot.id)}
              >
                {t.products.tryNow}
                <svg className="button-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>{t.features.title}</h2>
        <div className="features-grid">
          {t.features.items.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section className="approach">
        <div className="approach-content">
          <h2>{t.approach.title}</h2>
          <p className="approach-description">{t.approach.description}</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>{t.cta.title}</h2>
        <p>{t.cta.description}</p>
        <button className="cta-button" onClick={() => handleTryNow('Jaiminho')}>
          {t.cta.button}
        </button>
      </section>

      {/* Chat Widget */}
      <Chat />
    </div>
  );
};

export default HomePage; 
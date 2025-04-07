import React from 'react';
import './HomePage.css';
import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import Chat from './Chat';

const HomePage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="homepage">
      <LanguageSwitcher />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>{t.hero.title}</h1>
          <h2>{t.hero.subtitle}</h2>
          <p>{t.hero.description}</p>
          <button className="cta-button">{t.hero.cta}</button>
        </div>
      </section>

      {/* Products Section */}
      <section className="products">
        <h2>{t.products.title}</h2>
        <div className="products-grid">
          {t.products.items.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <a href={`/chat/${product.id}`} className="product-link">{t.products.tryNow}</a>
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
        <h2>{t.approach.title}</h2>
        <p>{t.approach.description}</p>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>{t.cta.title}</h2>
        <p>{t.cta.description}</p>
        <button className="cta-button">{t.cta.button}</button>
      </section>

      {/* Chat Widget */}
      <Chat />
    </div>
  );
};

export default HomePage; 
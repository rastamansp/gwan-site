import React from 'react';
import './HomePage.css';
import { translations } from '../translations';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

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
          {t.products.items.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-icon">{product.icon}</div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
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

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>{t.approach.title}</h2>
        <div className="steps">
          {t.approach.steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>{t.cta.title}</h2>
        <p>{t.cta.description}</p>
        <button className="cta-button">{t.cta.button}</button>
      </section>
    </div>
  );
};

export default HomePage; 
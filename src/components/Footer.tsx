import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import './Footer.css';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{t.footer.copyright}</p>
        <p className="version">v{process.env.REACT_APP_VERSION || '0.1.1'}</p>
      </div>
    </footer>
  );
};

export default Footer; 
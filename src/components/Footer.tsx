import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import packageJson from '../../package.json';
import './Footer.css';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const version = packageJson.version;

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          {t.footer.copyright}
        </p>
        <p className="footer-version">
          v{version}
        </p>
      </div>
    </footer>
  );
};

export default Footer; 
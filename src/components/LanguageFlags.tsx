import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageFlags: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-flags">
      <button
        className={`flag-button ${language === 'pt' ? 'active' : ''}`}
        onClick={() => setLanguage('pt')}
        title="Português"
      >
        <img 
          src="https://flagcdn.com/w20/br.png" 
          alt="Português" 
          width="20" 
          height="15"
        />
      </button>
      <button
        className={`flag-button ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        title="English"
      >
        <img 
          src="https://flagcdn.com/w20/us.png" 
          alt="English" 
          width="20" 
          height="15"
        />
      </button>
    </div>
  );
};

export default LanguageFlags; 
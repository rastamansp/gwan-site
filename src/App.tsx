import React from 'react';
import HomePage from './components/HomePage';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <HomePage />
      </div>
    </LanguageProvider>
  );
}

export default App;

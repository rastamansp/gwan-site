import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { chatbots } from '../data/chatbots';
import './Chat.css';

interface ChatProps {
  chatbotId?: string;
  isOpen?: boolean;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Handle preflight requests
const originalFetch = window.fetch;
window.fetch = async function(input: RequestInfo | URL, init?: RequestInit) {
  if (init?.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400'
      }
    });
  }
  return originalFetch(input, init);
};

const Chat: React.FC<ChatProps> = ({ chatbotId = 'Jaiminho', isOpen = false }) => {
  const { language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(isOpen);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sessionId = useRef(`session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);

  // Get chatbot data
  const chatbot = chatbots.find(c => c.id === chatbotId);

  // Reset session ID and messages when chatbot changes
  useEffect(() => {
    sessionId.current = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setMessages([]);
  }, [chatbotId]);

  // Add welcome messages when messages array is empty
  useEffect(() => {
    if (messages.length === 0 && chatbot) {
      const welcomeMessages: Message[] = [
        {
          id: '1',
          text: chatbot.messages.welcome[language],
          sender: 'bot' as const,
          timestamp: new Date()
        },
        {
          id: '2',
          text: chatbot.messages.initial[language],
          sender: 'bot' as const,
          timestamp: new Date()
        }
      ];
      setMessages(welcomeMessages);
    }
  }, [language, messages.length, chatbot]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Update isChatOpen when isOpen prop changes
  useEffect(() => {
    setIsChatOpen(isOpen);
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || !chatbot) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch(chatbot.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify({
          chatInput: inputValue,
          sessionId: sessionId.current
        }),
        mode: 'cors'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      const botMessage: Message = {
        id: Date.now().toString(),
        text: data.output || 'Sorry, I could not process your request.',
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: 'Sorry, there was an error processing your message.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`chat-container ${isChatOpen ? 'open' : ''}`}>
      <button className="chat-toggle" onClick={() => setIsChatOpen(!isChatOpen)}>
        {isChatOpen ? '×' : (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="#4a90e2"/>
          </svg>
        )}
      </button>
      
      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>{chatbot?.title[language]}</h3>
            <p>{chatbot?.description[language]}</p>
          </div>
          
          <div className="chat-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="message-content">
                  <p>...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="chat-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={language === 'en' ? 'Type your message...' : 'Digite sua mensagem...'}
              disabled={isLoading}
            />
            <button 
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
            >
              {isLoading ? '...' : '→'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat; 
export interface Chatbot {
  id: string;
  title: {
    en: string;
    pt: string;
  };
  description: {
    en: string;
    pt: string;
  };
  features: {
    en: string;
    pt: string;
  }[];
  disclaimer: {
    en: string;
    pt: string;
  };
  url: string;
  messages: {
    welcome: {
      en: string;
      pt: string;
    };
    initial: {
      en: string;
      pt: string;
    };
  };
}

export const chatbots: Chatbot[] = [
  {
    id: 'Jaiminho',
    title: {
      en: 'Health Chatbot',
      pt: 'Chatbot de Saúde'
    },
    description: {
      en: 'Get instant health information and wellness tips from our AI-powered health assistant.',
      pt: 'Obtenha informações de saúde instantâneas e dicas de bem-estar do nosso assistente de saúde com IA.'
    },
    features: [
      {
        en: 'General health information',
        pt: 'Informações gerais de saúde'
      },
      {
        en: 'Wellness tips',
        pt: 'Dicas de bem-estar'
      },
      {
        en: 'Healthy lifestyle recommendations',
        pt: 'Recomendações de estilo de vida saudável'
      },
      {
        en: 'Basic medical guidance',
        pt: 'Orientação médica básica'
      }
    ],
    disclaimer: {
      en: 'Please note that this chatbot is for informational purposes only and should not replace professional medical advice.',
      pt: 'Por favor, note que este chatbot é apenas para fins informativos e não deve substituir o aconselhamento médico profissional.'
    },
    url: 'https://n8n.gwan.com.br/webhook/f6d287e6-1429-4da2-9dee-decb0bf17a60/chat',
    messages: {
      welcome: {
        en: 'Hello! I am Jaiminho, your health assistant. How can I help you today?',
        pt: 'Olá! Eu sou o Jaiminho, seu assistente de saúde. Como posso ajudar você hoje?'
      },
      initial: {
        en: 'I can provide information about health topics, wellness tips, and general medical guidance. What would you like to know?',
        pt: 'Posso fornecer informações sobre tópicos de saúde, dicas de bem-estar e orientações médicas gerais. O que você gostaria de saber?'
      }
    }
  },
  {
    id: 'Marley',
    title: {
      en: 'Artist Manager Chatbot',
      pt: 'Chatbot do Empresário'
    },
    description: {
      en: 'Get information about Junior Dread\'s career, shows, tours, technical rider, upcoming dates, booking information, and partnership opportunities.',
      pt: 'Obtenha informações sobre a carreira do Junior Dread, shows, turnês, rider técnico, próximas datas, informações para contratação e oportunidades de parceria.'
    },
    features: [
      {
        en: 'Career information and updates',
        pt: 'Informações e atualizações da carreira'
      },
      {
        en: 'Show and tour schedules',
        pt: 'Agenda de shows e turnês'
      },
      {
        en: 'Technical rider details',
        pt: 'Detalhes do rider técnico'
      },
      {
        en: 'Booking and partnership inquiries',
        pt: 'Consultas sobre contratação e parcerias'
      },
      {
        en: 'Upcoming performance dates',
        pt: 'Próximas datas de apresentações'
      }
    ],
    disclaimer: {
      en: 'This chatbot provides information about Junior Dread\'s professional activities and booking opportunities.',
      pt: 'Este chatbot fornece informações sobre as atividades profissionais do Junior Dread e oportunidades de contratação.'
    },
    url: 'https://n8n.gwan.com.br/webhook/ba654a7d-bbd1-4a88-b341-32d57c8007bc/chat',
    messages: {
      welcome: {
        en: 'Hello! I am Marley, Junior Dread\'s manager. How can I help you with booking or partnership inquiries today?',
        pt: 'Olá! Eu sou o Marley, empresário do Junior Dread. Como posso ajudar você com informações sobre contratação ou parcerias hoje?'
      },
      initial: {
        en: 'I can provide information about Junior Dread\'s career, upcoming shows, technical requirements, booking details, and partnership opportunities. What would you like to know?',
        pt: 'Posso fornecer informações sobre a carreira do Junior Dread, próximos shows, requisitos técnicos, detalhes de contratação e oportunidades de parceria. O que você gostaria de saber?'
      }
    }
  },
  {
    id: 'Gwan',
    title: {
      en: 'Knowledge Chatbot',
      pt: 'Chatbot de Conhecimento'
    },
    description: {
      en: 'Access a wealth of information and learn new things with our knowledgeable AI assistant.',
      pt: 'Acesse uma riqueza de informações e aprenda coisas novas com nosso assistente de IA experiente.'
    },
    features: [
      {
        en: 'Answering general knowledge questions',
        pt: 'Respondendo perguntas de conhecimento geral'
      },
      {
        en: 'Providing educational content',
        pt: 'Fornecendo conteúdo educacional'
      },
      {
        en: 'Explaining complex topics',
        pt: 'Explicando tópicos complexos'
      },
      {
        en: 'Offering learning resources',
        pt: 'Oferecendo recursos de aprendizado'
      },
      {
        en: 'Supporting research and study',
        pt: 'Apoiando pesquisa e estudo'
      }
    ],
    disclaimer: {
      en: 'This chatbot is designed to enhance your learning experience and provide accurate information.',
      pt: 'Este chatbot foi projetado para melhorar sua experiência de aprendizado e fornecer informações precisas.'
    },
    url: 'https://n8n.gwan.com.br/webhook/020db69f-901b-4f90-aa26-1162cb551315/chat',
    messages: {
      welcome: {
        en: 'Hello! I am Gwan, your knowledge assistant. What would you like to learn about today?',
        pt: 'Olá! Eu sou o Gwan, seu assistente de conhecimento. Sobre o que você gostaria de aprender hoje?'
      },
      initial: {
        en: 'I can help you with general knowledge questions, explain complex topics, and provide educational resources. What would you like to know?',
        pt: 'Posso ajudar você com perguntas de conhecimento geral, explicar tópicos complexos e fornecer recursos educacionais. O que você gostaria de saber?'
      }
    }
  }
]; 
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
    url: 'https://webhook.gwan.com.br/webhook/5d6d187b-74aa-4321-8dc6-71990695272f/chat',
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
    id: 'Empresário',
    title: {
      en: 'Booker Chatbot',
      pt: 'Chatbot de Agendamento'
    },
    description: {
      en: 'Efficiently manage your appointments and bookings with our smart scheduling assistant.',
      pt: 'Gerencie eficientemente seus compromissos e agendamentos com nosso assistente de agendamento inteligente.'
    },
    features: [
      {
        en: 'Scheduling appointments',
        pt: 'Agendamento de compromissos'
      },
      {
        en: 'Managing bookings',
        pt: 'Gerenciamento de reservas'
      },
      {
        en: 'Rescheduling or canceling appointments',
        pt: 'Reagendamento ou cancelamento de compromissos'
      },
      {
        en: 'Providing availability information',
        pt: 'Fornecimento de informações de disponibilidade'
      },
      {
        en: 'Setting up reminders',
        pt: 'Configuração de lembretes'
      }
    ],
    disclaimer: {
      en: 'This chatbot integrates with popular calendar systems to provide seamless booking experiences.',
      pt: 'Este chatbot se integra com sistemas de calendário populares para fornecer experiências de agendamento perfeitas.'
    },
    url: 'https://webhook.gwan.com.br/webhook/0b6945c4-c7bb-4a42-bd25-08278eb43fcb/chat',
    messages: {
      welcome: {
        en: 'Hello! I am Empresário, your scheduling assistant. How can I help you with your appointments today?',
        pt: 'Olá! Eu sou o Empresário, seu assistente de agendamento. Como posso ajudar você com seus compromissos hoje?'
      },
      initial: {
        en: 'I can help you schedule, reschedule, or cancel appointments, check availability, and set up reminders. What would you like to do?',
        pt: 'Posso ajudar você a agendar, reagendar ou cancelar compromissos, verificar disponibilidade e configurar lembretes. O que você gostaria de fazer?'
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
    url: 'https://webhook.gwan.com.br/webhook/42fda7c2-4ae4-447f-9f2e-49ca9dec0a98/chat',
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
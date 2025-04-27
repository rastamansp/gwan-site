# Evolution Service

Este serviço configura a API Evolution para processamento de documentos e integração com WhatsApp.

## Configuração

- **Imagem:** atendai/evolution-api:v2.2.3
- **Container:** evolution_api_v2_data
- **Rede:** gwan (externa)
- **Volumes:**
  - evolution_api_v2_data: Dados das instâncias
  - redis_data: Cache Redis

## Acesso

O Evolution está disponível em:
- URL: https://evolution.gwan.com.br
- API Key: pazdeDeus@2025

## Configurações Específicas

### Serviços
- **Evolution API:** API principal
- **Redis:** Cache e filas

### Variáveis de Ambiente
- SERVER_URL: https://evolution.gwan.com.br
- DATABASE_PROVIDER: postgresql
- DATABASE_CONNECTION_URI: postgresql://root:pazdeDeus%402025@postgres:5432/evolution2
- AUTHENTICATION_API_KEY: pazdeDeus@2025
- CACHE_REDIS_URI: redis://redis:6379/6
- CACHE_REDIS_PREFIX_KEY: evolution_api_v2

### Integrações
- OpenAI: Habilitada
- Dify: Habilitada
- Typebot: Habilitada
- Chatwoot: Habilitada
- WhatsApp Business: Configurado

### Traefik
- Rota: evolution.gwan.com.br
- Porta: 8080
- TLS: Habilitado (Let's Encrypt)
- PassHostHeader: Habilitado

## Rede
- gwan: Rede externa compartilhada com outros serviços

## Notas
- O serviço é reiniciado automaticamente em caso de falha
- Usa PostgreSQL para armazenamento
- Redis para cache
- Integração com WhatsApp Business
- Suporte a webhooks
- Integração com Chatwoot
- Suporte a OpenAI
- Suporte a Dify
- Suporte a Typebot
- Cache configurável (Redis/Local)
- Autenticação via API Key 
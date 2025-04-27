# Firecrawl Service

Este serviço configura a API de web scraping Firecrawl.

## Configuração

- **Imagem:** Custom build
- **Container:** firecrawl-api
- **Rede:** gwan (externa) e backend (interna)
- **Serviços:**
  - API
  - Worker
  - Playwright Service
  - Redis

## Acesso

O Firecrawl está disponível em:
- URL: https://firecrawl.gwan.com.br

## Configurações Específicas

### Serviços
- **API:** Interface principal
- **Worker:** Processamento assíncrono
- **Playwright Service:** Web scraping
- **Redis:** Cache e filas

### Variáveis de Ambiente
- REDIS_URL: redis://redis:6379
- PLAYWRIGHT_MICROSERVICE_URL: http://playwright-service:3000/scrape
- OPENAI_API_KEY: Chave da API OpenAI
- MODEL_NAME: Nome do modelo
- MODEL_EMBEDDING_NAME: Nome do modelo de embeddings
- OLLAMA_BASE_URL: URL base do Ollama
- SLACK_WEBHOOK_URL: Webhook do Slack
- BULL_AUTH_KEY: Chave de autenticação Bull
- TEST_API_KEY: Chave de teste
- POSTHOG_API_KEY: Chave da API PostHog
- POSTHOG_HOST: Host do PostHog
- SUPABASE_ANON_TOKEN: Token anônimo Supabase
- SUPABASE_URL: URL do Supabase
- SUPABASE_SERVICE_TOKEN: Token de serviço Supabase
- SELF_HOSTED_WEBHOOK_URL: URL do webhook self-hosted
- SERPER_API_KEY: Chave da API Serper
- SEARCHAPI_API_KEY: Chave da API SearchAPI
- LOGGING_LEVEL: Nível de log
- PROXY_SERVER: Servidor proxy
- PROXY_USERNAME: Usuário do proxy
- PROXY_PASSWORD: Senha do proxy
- SEARXNG_ENDPOINT: Endpoint SearXNG
- SEARXNG_ENGINES: Engines SearXNG
- SEARXNG_CATEGORIES: Categorias SearXNG

### Traefik
- Rota: firecrawl.gwan.com.br
- Porta: 3002
- TLS: Habilitado (Let's Encrypt)

## Rede
- gwan: Rede externa compartilhada com outros serviços
- backend: Rede interna para comunicação entre serviços

## Notas
- O serviço é reiniciado automaticamente em caso de falha
- Usa Playwright para web scraping
- Redis para cache e filas
- Worker para processamento assíncrono
- Integração com OpenAI e outros serviços
- Suporte a proxy
- Logging configurável
- Integração com PostHog para analytics
- Integração com Supabase para banco de dados
- Integração com SearXNG para busca 
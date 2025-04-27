# Chatwoot Service

Este serviço configura a plataforma de atendimento ao cliente Chatwoot.

## Configuração

- **Imagem:** chatwoot/chatwoot:latest
- **Container:** chatwoot-rails
- **Rede:** gwan (externa)
- **Volumes:**
  - chatwoot_storage: Armazenamento de arquivos
  - chatwoot_postgres: Banco de dados
  - chatwoot_redis: Cache

## Acesso

O Chatwoot está disponível em:
- URL: https://chatwoot.gwan.com.br

## Configurações Específicas

### Serviços
- **Rails:** Aplicação principal
- **Sidekiq:** Processamento de jobs
- **PostgreSQL:** Banco de dados
- **Redis:** Cache e filas

### Variáveis de Ambiente
- REDIS_URL: redis://:SuaSenhaRedis@redis:6379
- REDIS_PASSWORD: SuaSenhaRedis
- POSTGRES_PASSWORD: SuaSenhaPostgres
- POSTGRES_HOST: postgres
- POSTGRES_USER: postgres
- POSTGRES_DB: chatwoot
- RAILS_ENV: production
- SECRET_KEY_BASE: SuaChaveGeradaComRake
- RAILS_LOG_TO_STDOUT: true
- LOG_LEVEL: info

### Traefik
- Rota: chatwoot.gwan.com.br
- Porta: 3000
- TLS: Habilitado

## Rede
- gwan: Rede externa compartilhada com outros serviços

## Notas
- O serviço é reiniciado automaticamente em caso de falha
- Usa PostgreSQL com pgvector para busca semântica
- Redis para cache e filas
- Sidekiq para processamento assíncrono
- Integração com WhatsApp e outros canais
- Armazenamento de arquivos em volume persistente 
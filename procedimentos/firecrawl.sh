#!/bin/bash

# CONFIGURAÇÕES
APP_DIR="/opt/firecrawl"
FIRECRAWL_PORT=3002
OPENAI_API_KEY="SUA_CHAVE_OPENAI_AQUI"
BULL_AUTH_KEY="evolution-key"
REDIS_URI="redis://default:6F568C8244526D2BF51EF6BF5465E@criadordigital_redis:6379/5"
POSTGRES_URI="postgres://postgres:BB31A1C64882367B9DF6FCA8F5C5B@criadordigital_postgres:5432/evolution-app"


# Clona o projeto
rm -rf "$APP_DIR"
git clone git@github.com:mendableai/firecrawl.git "$APP_DIR"
cd "$APP_DIR" || exit 1

# Cria o .env com suas configurações personalizadas
cat <<EOF > .env
PORT=${FIRECRAW_LPORT}
HOST=0.0.0.0
USE_DB_AUTHENTICATION=false
OPENAI_API_KEY=${OPENAI_API_KEY}
REDIS_URL=${REDIS_URI}
REDIS_RATE_LIMIT_URL=${REDIS_URI}
POSTGRES_URL=${POSTGRES_URI}
MODEL_NAME=gpt-4
MODEL_EMBEDDING_NAME=text-embedding-ada-002
BULL_AUTH_KEY=${BULL_AUTH_KEY}
EOF

# Build e execução
docker compose build || { echo "❌ Erro no build"; exit 1; }
docker compose up -d || { echo "❌ Erro ao subir Firecrawl"; exit 1; }

echo "✅ Firecrawl rodando em http://SEU_IP:${FIRECRAWL_PORT}"
echo "➡️  Admin UI: http://SEU_IP:${FIRECRAWL_PORT}/admin/${BULL_AUTH_KEY}/queues"

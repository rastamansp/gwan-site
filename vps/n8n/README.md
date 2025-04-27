# N8N Service

Este serviço configura a plataforma de automação de fluxos de trabalho N8N.

## Configuração

- **Imagem:** docker.n8n.io/n8nio/n8n
- **Container:** n8n
- **Rede:** gwan (externa)
- **Volume:** n8n_data (interno)

## Acesso

O N8N está disponível em:
- URL: https://n8n.gwan.com.br

## Configurações Específicas

### Variáveis de Ambiente
- N8N_HOST: n8n.gwan.com.br
- N8N_PORT: 5678
- N8N_PROTOCOL: https
- NODE_ENV: production
- WEBHOOK_URL: https://n8n.gwan.com.br/
- GENERIC_TIMEZONE: America/Sao_Paulo

### Portas
- 5678: Interface web (apenas localhost)

### Volumes
- n8n_data: Dados do N8N
- ./local-files:/files: Arquivos locais

### Traefik
- Rota: n8n.gwan.com.br
- TLS: Habilitado (Let's Encrypt)
- Headers de Segurança:
  - SSL Redirect
  - HSTS
  - XSS Filter
  - Content Type Nosniff
  - Force STS Header

## Rede
- gwan: Rede externa compartilhada com outros serviços

## Notas
- O serviço é reiniciado automaticamente em caso de falha
- Configurado para produção
- Fuso horário: America/Sao_Paulo
- Headers de segurança configurados
- Acesso apenas via HTTPS
- Integração com outros serviços via webhooks 
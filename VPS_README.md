# Documentação de Configuração e Componentes da VPS

Este documento fornece informações detalhadas sobre a configuração da VPS e seus componentes para a infraestrutura da Gwan Company.

## Visão Geral

A infraestrutura da VPS é composta por vários microsserviços, cada um rodando em seu próprio container Docker. Os serviços são orquestrados usando Docker Compose e são acessíveis através de um proxy reverso Traefik.

## Componentes

### 1. Traefik (Proxy Reverso)
- **Propósito**: Gerencia roteamento e terminação SSL
- **Configuração**: `vps/traefik/traefik.yml`
- **Portas**: 80 (HTTP), 443 (HTTPS)
- **Recursos**:
  - Gerenciamento automático de certificados SSL
  - Balanceamento de carga
  - Roteamento de requisições

### 2. Gwan Site (Site Principal)
- **Propósito**: Site da empresa
- **Configuração**: `vps/gwan-site/docker-compose.yml`
- **Implantação**: `vps/gwan-site/deploy-gwan-site.ssh`
- **Recursos**:
  - Frontend baseado em React
  - Suporte bilíngue (PT/EN)
  - Integração com CI/CD

### 3. MongoDB
- **Propósito**: Serviço de banco de dados
- **Configuração**: `vps/mongodb/docker-compose.yml`
- **Portas**: 27017 (interna)
- **Recursos**:
  - Armazenamento persistente de dados
  - Autenticação habilitada
  - Configuração de backup

### 4. MinIO
- **Propósito**: Serviço de armazenamento de objetos
- **Configuração**: `vps/minio/docker-compose.yml`
- **Portas**: 9000 (API), 9001 (Console)
- **Recursos**:
  - Armazenamento compatível com S3
  - Console web para gerenciamento
  - Armazenamento persistente

### 5. N8N
- **Propósito**: Automação de fluxos de trabalho
- **Configuração**: `vps/n8n/docker-compose.yml`
- **Portas**: 5678 (Interface Web)
- **Recursos**:
  - Automação de fluxos de trabalho
  - Integração com outros serviços
  - Suporte a nós personalizados

### 6. Chatwoot
- **Propósito**: Plataforma de suporte ao cliente
- **Configuração**: `vps/chatwoot/docker-compose.yml`
- **Portas**: 3000 (Interface Web)
- **Recursos**:
  - Chat ao vivo
  - Gerenciamento de tickets
  - Comunicação com clientes

### 7. Evolution API
- **Propósito**: Integração com WhatsApp
- **Configuração**: `vps/evolution/docker-compose.yml`
- **Portas**: 8080 (API)
- **Recursos**:
  - Integração com WhatsApp Business
  - Automação de mensagens
  - Suporte a múltiplos dispositivos

### 8. Firecrawl
- **Propósito**: Serviço de web crawling
- **Configuração**: `vps/firecrawl/docker-compose.yml`
- **Portas**: 8081 (API)
- **Recursos**:
  - Capacidades de web scraping
  - Extração de dados
  - Regras personalizadas de crawling

## Configuração de Rede

Todos os serviços estão conectados através de uma rede Docker chamada `gwan`. O proxy reverso Traefik gerencia o acesso externo aos serviços.

## Considerações de Segurança

1. **SSL/TLS**: Todo o tráfego externo é criptografado usando certificados Let's Encrypt
2. **Autenticação**: Serviços que requerem autenticação a têm habilitada
3. **Isolamento de Rede**: Serviços estão isolados em redes Docker
4. **Backup**: Backups regulares estão configurados para serviços críticos

## Manutenção

### Procedimentos de Backup
- MongoDB: Backups automáticos diários
- MinIO: Replicação regular de dados
- Arquivos de configuração: Controlados por versão no Git

### Monitoramento
- Verificações de saúde dos containers
- Monitoramento de uso de recursos
- Registro de erros

## Implantação

Cada serviço possui seu próprio script de implantação e configuração Docker Compose. O processo principal de implantação é automatizado através do GitHub Actions.

## Solução de Problemas

Problemas comuns e suas soluções:
1. **Serviço não inicia**: Verifique os logs usando `docker-compose logs`
2. **Problemas de rede**: Verifique a configuração do Traefik
3. **Problemas de armazenamento**: Verifique os montes de volume e permissões

## Melhorias Futuras

1. Implementar logging centralizado
2. Adicionar dashboard de monitoramento
3. Aprimorar estratégias de backup
4. Implementar descoberta de serviços 
# Gwan Site Infrastructure

Este repositório contém a configuração da infraestrutura do site da Gwan Company.

## Serviços

### [Traefik](vps/traefik/README.md)
- Proxy reverso
- Gerenciamento de certificados SSL
- Dashboard: https://traefik.gwan.com.br

### [RabbitMQ](vps/rabbitmq/README.md)
- Servidor de mensageria
- Interface de gerenciamento: https://rabbitmq.gwan.com.br
- Usuário: root
- Senha: pazdeDeus2025

### [Gwan Site](vps/gwan-site/README.md)
- Site principal
- URL: https://gwan.com.br

### [MongoDB](vps/mongodb/README.md)
- Banco de dados NoSQL
- Usado por vários serviços

### [MinIO](vps/minio/README.md)
- Armazenamento de objetos
- Compatível com S3

### [Chatwoot](vps/chatwoot/README.md)
- Plataforma de atendimento ao cliente
- Integração com WhatsApp

### [N8N](vps/n8n/README.md)
- Automação de fluxos de trabalho
- Integração entre serviços

### [Firecrawl](vps/firecrawl/README.md)
- API de web scraping
- Processamento de dados

### [Evolution](vps/evolution/README.md)
- API de processamento de documentos
- Conversão de PDF para Markdown

## Rede

Todos os serviços compartilham a rede Docker `gwan`, permitindo comunicação segura entre eles.

## Volumes

Cada serviço mantém seus dados em volumes Docker específicos, garantindo persistência e isolamento.

## Segurança

- Todos os serviços são protegidos por TLS via Let's Encrypt
- Autenticação básica onde necessário
- Rede Docker isolada
- Volumes persistentes

## Implantação

1. Clone o repositório
2. Configure as variáveis de ambiente necessárias
3. Inicie os serviços usando Docker Compose
4. Acesse os serviços através dos domínios configurados

## Manutenção

- Logs disponíveis via Docker logs
- Monitoramento via Traefik dashboard
- Backup regular dos volumes
- Atualizações de segurança periódicas

## Deploy em Produção

Após realizar alterações no projeto, para atualizar a versão em produção:

1. Acesse a VPS:
```bash
ssh root@69.62.99.103
```

2. Navegue até o diretório de deploy:
```bash
cd /opt/
```

3. Execute o script de deploy:
```bash
./deploy-gwan-site.ssh
```

Este processo irá atualizar a versão do site em produção com as últimas alterações do repositório.

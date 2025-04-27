# Gwan Site Service

Este serviço configura o site principal da Gwan Company.

## Configuração

- **Imagem:** node:20-bullseye
- **Container:** gwan-site
- **Rede:** gwan (externa)
- **Volume:** /opt/gwan-site:/app

## Acesso

O site está disponível em:
- URL: https://gwan.com.br

## Configurações Específicas

### Comandos
- Instalação global do serve
- Servindo o build na porta 3000

### Volumes
- /opt/gwan-site:/app: Código fonte do site

### Traefik
- Rota: gwan.com.br
- Porta: 3000
- TLS: Habilitado (Let's Encrypt)

## Rede
- gwan: Rede externa compartilhada com outros serviços

## Notas
- O serviço é reiniciado automaticamente em caso de falha
- Usa Node.js 20 com Debian Bullseye
- Serve o build estático do site
- Protegido por TLS via Let's Encrypt 
# Traefik Service

Este serviço configura o Traefik como proxy reverso e gerenciador de certificados SSL.

## Configuração

- **Imagem:** traefik:v3.0
- **Container:** traefik
- **Rede:** gwan (externa)
- **Volumes:**
  - traefik_config: Configurações do Traefik
  - traefik_letsencrypt: Certificados SSL
  - /opt/traefik/tcp: Configurações TCP

## Acesso

O dashboard do Traefik está disponível em:
- URL: https://traefik.gwan.com.br

## Configurações Específicas

### Portas
- 80: HTTP
- 443: HTTPS

### Comandos
- Habilitado provider Docker
- Desabilitado exposição automática de serviços
- Habilitado dashboard
- Log level: DEBUG

### Volumes
- /var/run/docker.sock: Acesso ao Docker
- traefik_config: Configurações
- traefik_letsencrypt: Certificados
- /opt/traefik/tcp: Configurações TCP

## Rede
- gwan: Rede externa compartilhada com outros serviços

## Notas
- O serviço é reiniciado automaticamente em caso de falha
- Gerencia certificados SSL via Let's Encrypt
- Dashboard protegido por TLS
- Suporte a configurações TCP via arquivos 
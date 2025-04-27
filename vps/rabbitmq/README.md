# RabbitMQ Service

Este serviço configura um servidor RabbitMQ com interface de gerenciamento web.

## Configuração

- **Imagem:** rabbitmq:3-management
- **Container:** gwan_rabbitmq
- **Rede:** gwan (externa)

## Acesso

A interface de gerenciamento está disponível em:
- URL: https://rabbitmq.gwan.com.br
- Usuário: root
- Senha: pazdeDeus2025

## Configurações Específicas

### Variáveis de Ambiente
- RABBITMQ_DEFAULT_USER: root
- RABBITMQ_DEFAULT_PASS: pazdeDeus2025

### Comandos
- rabbitmq-server --log-level info

### Traefik
- Rota: rabbitmq.gwan.com.br
- Porta: 15672
- TLS: Habilitado (Let's Encrypt)

## Rede
- gwan: Rede externa compartilhada com outros serviços

## Notas
- O serviço é reiniciado automaticamente em caso de falha
- Log level configurado para info
- Acesso protegido por TLS
- Interface de gerenciamento web incluída

## Uso por Outras Aplicações

Para outras aplicações usarem o RabbitMQ, configure as variáveis de ambiente:

```bash
RABBITMQ_HOST=rabbitmq
RABBITMQ_PORT=5672
RABBITMQ_USER=root
RABBITMQ_PASSWORD=pazdeDeus2025
```

## Monitoramento

A interface web oferece:
- Visão geral do sistema
- Monitoramento de filas
- Estatísticas de processamento
- Gerenciamento de conexões
- Configuração de exchanges e bindings 
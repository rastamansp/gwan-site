# MongoDB Service

Este serviço configura um servidor MongoDB para armazenamento de dados.

## Configuração

- **Imagem:** mongo:latest
- **Container:** mongodb
- **Rede:** gwan (externa)
- **Volume:** mongo_data (externo)

## Acesso

O MongoDB está disponível em:
- Porta: 27017
- Usuário: gwan
- Senha: pazdeDeus2025
- Banco: admin

## Configurações Específicas

### Variáveis de Ambiente
- MONGO_INITDB_ROOT_USERNAME: gwan
- MONGO_INITDB_ROOT_PASSWORD: pazdeDeus2025
- MONGO_INITDB_DATABASE: admin

### Portas
- 27017: MongoDB

### Volumes
- mongo_data: Dados do MongoDB

## Rede
- gwan: Rede externa compartilhada com outros serviços

## Notas
- O serviço é reiniciado automaticamente em caso de falha
- Dados são persistidos em volume externo
- Acesso protegido por autenticação
- Usado por vários serviços da infraestrutura 
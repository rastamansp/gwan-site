# MinIO Service

Este serviço configura um servidor MinIO para armazenamento de objetos compatível com S3.

## Configuração

- **Imagem:** minio/minio:latest
- **Container:** minio
- **Rede:** gwan (externa)
- **Volume:** minio_data (externo)

## Acesso

O MinIO está disponível em:
- API S3: https://minio.gwan.com.br
- Console Web: https://console.minio.gwan.com.br
- Usuário: admin
- Senha: pazdeDeus@2025

## Configurações Específicas

### Variáveis de Ambiente
- MINIO_ROOT_USER: admin
- MINIO_ROOT_PASSWORD: pazdeDeus@2025

### Portas
- 9000: API S3
- 9001: Console Web

### Volumes
- minio_data: Dados do MinIO

### Traefik
- API S3: minio.gwan.com.br
- Console Web: console.minio.gwan.com.br
- TLS: Habilitado (Let's Encrypt)
- Redirecionamento automático da API para o Console

## Rede
- gwan: Rede externa compartilhada com outros serviços

## Notas
- O serviço é reiniciado automaticamente em caso de falha
- Dados são persistidos em volume externo
- Acesso protegido por autenticação
- Compatível com API S3
- Console web para gerenciamento
- Redirecionamento automático da API para o Console 
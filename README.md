# Site da Gwan Company

Um site moderno e bilíngue (PT/EN) para a Gwan Company, construído com React e TypeScript.

## Recursos

- 🌐 Suporte bilíngue (Português/Inglês)
- 🎨 Design moderno e responsivo
- 🚀 Otimizado para produção
- 🔄 Pipeline de CI/CD automatizado
- 🐳 Suporte a Docker para fácil implantação

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start
```

## Implantação com Docker

### Pré-requisitos
- Docker instalado no seu sistema
- Git (para clonar o repositório)

### Início Rápido com Docker

1. Clone o repositório:
```bash
git clone https://github.com/rastamansp/gwan-site.git
cd gwan-site
```

2. Construa a imagem Docker:
```bash
docker build -t gwan-site .
```

3. Execute o container:
```bash
docker run -d -p 80:80 --name gwan-site gwan-site
```

4. Acesse o site:
- Abra http://localhost no seu navegador

### Referência de Comandos Docker

```bash
# Parar o container
docker stop gwan-site

# Iniciar o container
docker start gwan-site

# Ver logs do container
docker logs gwan-site

# Remover o container
docker rm gwan-site

# Remover a imagem
docker rmi gwan-site
```

## Implantação na VPS

Para informações detalhadas sobre a configuração da VPS, componentes e configuração, consulte a [Documentação da VPS](VPS_README.md).

### Pré-requisitos

1. Uma VPS com:
   - Docker instalado
   - Git instalado
   - Acesso SSH configurado

2. Secrets do repositório GitHub:
   - `SSH_PRIVATE_KEY`: Sua chave privada SSH para acesso à VPS
   - `VPS_HOST`: Seu hostname ou IP da VPS
   - `VPS_USER`: Nome de usuário SSH para sua VPS

### Configuração Inicial da VPS

1. Conecte-se à VPS via SSH
2. Crie o diretório de implantação:
   ```bash
   mkdir -p /var/www/gwan-site
   cd /var/www/gwan-site
   ```
3. Clone o repositório:
   ```bash
   git clone https://github.com/rastamansp/gwan-site.git .
   ```
4. Torne o script de implantação executável:
   ```bash
   chmod +x deploy.sh
   ```
5. Execute a implantação inicial:
   ```bash
   ./deploy.sh
   ```

### Configuração do CI/CD

1. Vá para as configurações do seu repositório GitHub
2. Navegue até "Secrets and variables" > "Actions"
3. Adicione os seguintes secrets:
   - `SSH_PRIVATE_KEY`: Sua chave privada SSH
   - `VPS_HOST`: Seu hostname ou IP da VPS
   - `VPS_USER`: Nome de usuário SSH para sua VPS

O pipeline de CI/CD irá automaticamente:
- Implantar a cada push para a branch main
- Atualizar as alterações
- Reconstruir e reiniciar o container

## Implantação Manual

Se precisar implantar manualmente:

```bash
# Conecte-se à VPS via SSH
ssh usuario@sua-vps

# Navegue até o diretório do projeto
cd /var/www/gwan-site

# Atualize as alterações
git pull origin main

# Execute o script de implantação
./deploy.sh
```

## Licença

MIT

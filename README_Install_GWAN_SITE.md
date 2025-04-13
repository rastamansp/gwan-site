# 🚀 Stack: gwan-site (React + Bootstrap)

Este documento descreve os passos seguidos para subir a aplicação `gwan-site` hospedada via Portainer com suporte a HTTPS (via Traefik) e gerenciamento de processo com PM2.

## 🔧 Tecnologias Utilizadas

- **Portainer** (gestão de containers via UI)
- **Docker Compose**
- **Traefik v3** (proxy reverso com HTTPS automático via Let's Encrypt)
- **PM2** (gerenciador de processos para produção)
- **Node.js 20 Alpine**
- **React + Bootstrap**

---

## 🌐 Domínio

- **gwan.com.br** apontado para IP da VPS (A Record)
- HTTPS automático configurado via Traefik e Let's Encrypt

---

## 📁 Estrutura do Repositório

Repositório: [https://github.com/rastamansp/gwan-site](https://github.com/rastamansp/gwan-site)

> Certifique-se de que ele contenha o `package.json` com `npm run build` configurado corretamente para build de produção React.

---

## ⚙️ Composição da Stack

### 🧱 Rede utilizada

Antes de criar a stack, foi criada a rede Docker externa:
```bash
docker network create gwan
```

## 📦 Passos no Portainer
### 🔧 Como criar a stack no Portainer

- 🖥️ Acesse o painel do Portainer em http://<IP_DA_VPS>:9000

- No menu lateral, clique em "Stacks"

- Clique no botão “+ Add Stack”

- Em Name, digite: gwan-site

- No campo Web editor, cole o conteúdo do docker-compose.yml acima

- Clique no botão Deploy the stack no final da página

- Acompanhe a criação do container na aba Containers

## 🧪 Verificação
Acesse no navegador:

Após o deploy, abra o navegador e acesse:

🌐 https://gwan.com.br

✅ A página inicial da aplicação React deverá ser carregada com HTTPS válido (certificado Let’s Encrypt via Traefik).



## 📌 Observações Futuras
-P ara melhorar o desempenho e reduzir a imagem final, pode-se implementar um Dockerfile multi-stage com nginx

- PM2 pode ser configurado para logs persistentes

- Monitoramento com pm2 monit e healthcheck Docker podem ser incluídos em versões futuras
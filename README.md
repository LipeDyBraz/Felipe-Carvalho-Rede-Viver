# Rede Viver Bem



Site institucional da ONG Rede Viver Bem, desenvolvido para a Atividade 1 do Projeto Integrador Extensionista II.



## Tecnologias



- Vite + JavaScript Vanilla
- 
- Node.js e Express
- 
- Proxy `/api` configurado no Vite
- 


## Como executar



```bash

npm install

```



Em um terminal, inicie a API:



```bash

npm run api

```



Em outro terminal, inicie o frontend:



```bash

npm run dev

```



Abra http://localhost:5173. A página consulta `GET /api/health` e exibe o status com data e hora.



## Rota da API



`GET /api/health`



Resposta: `{ "status": "ok", "timestamp": "..." }`



## Variáveis de ambiente



O arquivo `.env` é usado localmente e não é versionado. Consulte `.env.example`.



## Build



```bash

npm run build

npm run preview

```





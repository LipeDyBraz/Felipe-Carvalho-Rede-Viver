import express from 'express'

const app = express()
const port = Number(process.env.API_PORT || 3001)

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(port, () => {
  console.log(`API da Rede Viver Bem em http://localhost:${port}`)
})

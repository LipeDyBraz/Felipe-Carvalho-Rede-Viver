import './style.css'



const app = document.querySelector('#app')



app.innerHTML = `

  <div class="page-shell">
  
    <header class="topbar"><div class="brand"><span class="brand-mark">✦</span><span>Rede Viver Bem</span></div><a href="#projetos">Nossos projetos ↗</a></header>
    
    <main>
    
      <section class="hero"><div><span class="eyebrow">ONG • Ação comunitária</span><h1>Cuidar é uma forma de transformar.</h1><p>Construímos pontes para que pessoas, territórios e oportunidades floresçam juntos — começando pelo que está perto.</p></div><div class="hero-art" aria-hidden="true"></div></section>
      
      <section class="content" id="projetos"><div class="intro"><h2>Pequenas ações.<br />Mudanças reais.</h2><p>Atuamos lado a lado com as comunidades para criar soluções simples, duradouras e feitas para a vida real.</p></div><div class="cards"><article class="card"><span class="card-number">01 / EDUCAÇÃO</span><h3>Aprender para crescer</h3><p>Oficinas e apoio escolar para abrir novos caminhos.</p></article><article class="card"><span class="card-number">02 / CUIDADO</span><h3>Saúde que acolhe</h3><p>Informação, escuta e redes de cuidado acessíveis.</p></article><article class="card"><span class="card-number">03 / FUTURO</span><h3>Renda e autonomia</h3><p>Capacitação para transformar talentos em possibilidades.</p></article></div></section>
      
      <section class="status-panel" aria-live="polite"><div><p class="status-title">Conexão com a API</p><p class="status-subtitle" id="status-detail">Consultando o serviço...</p></div><div class="status-value"><span class="status-dot" id="status-dot"></span><span id="status-text">Carregando</span></div></section>
      
    </main><footer><span>Rede Viver Bem © 2026</span><span>Feito com presença e propósito.</span></footer>
    
  </div>`



async function loadApiStatus() {
  
  const text = document.querySelector('#status-text'), detail = document.querySelector('#status-detail'), dot = document.querySelector('#status-dot')
  
  try { const response = await fetch('/api/health'); if (!response.ok) throw new Error('API indisponível'); const data = await response.json(); text.textContent = `Status da API: ${data.status}`; detail.textContent = `Última verificação: ${new Date(data.timestamp).toLocaleString('pt-BR')}` } catch { text.textContent = 'Status da API: erro'; detail.textContent = 'Não foi possível consultar o serviço.'; dot.classList.add('error') }
  
}

loadApiStatus()












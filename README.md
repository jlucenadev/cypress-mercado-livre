# 🧪 Projeto QA Automatizado: Mercado Livre

## 📌 Nome do Projeto
**Mercado Livre – Automação de Testes com Cypress**

---

## 📌 Descrição do Projeto
Projeto de **automação de testes** utilizando **Cypress**, focado no ponto de vista do usuário final.  
O objetivo é validar funcionalidades críticas do Mercado Livre, incluindo login, cadastro, busca, carrinho, checkout, interface e performance, de forma **profissional, organizada e escalável**.

O projeto inclui:  
- Estrutura organizada de pastas para **scripts Cypress**.  
- Casos de teste automatizados e independentes.  
- Checklist funcional e plano de teste em PDF e planilhas.  
- Registro de evidências (prints e vídeos) gerados pelo Cypress.  
- Relatórios de bugs documentados com evidências.  

---

## 🎯 Objetivos do Projeto
- Automatizar os casos de teste mais importantes do ponto de vista do usuário.  
- Demonstrar habilidades com Cypress em **QA de front-end**.  
- Validar interações, mensagens, alertas e resultados esperados.  
- Gerar evidências visuais e relatórios de execução.  
- Produzir um projeto organizado e profissional para portfólio.

---
---
## 📁 Estrutura do Projeto
mercado-livre-cypress-qa/
├── README.md
├── package.json
├── cypress.config.js
├── planos/
│ └── plano_de_teste.pdf
├── relatorios/
│ └── relatorio_de_bugs.pdf
├── casos_de_teste.xlsx
├── checklist_funcional.xlsx
├── cypress/
│ ├── e2e/
│ │ ├── login.cy.js
│ │ ├── cadastro.cy.js
│ │ ├── busca.cy.js
│ │ ├── carrinho.cy.js
│ │ ├── checkout.cy.js
│ │ └── ui_performance.cy.js
│ ├── fixtures/
│ │ └── usuarios.json
│ ├── support/
│ │ └── commands.js
│ └── screenshots/
└── evidencias/
├── login/
├── cadastro/
├── busca/
├── carrinho/
├── checkout/
└── ui_performance/

---

---

## 🧩 Funcionalidades Automatizadas
1. **Login e autenticação:**  
   - Login válido  
   - Login inválido (senha incorreta ou e-mail inválido)  

2. **Cadastro de usuário:**  
   - Cadastro com dados válidos  
   - Validação de campos obrigatórios  

3. **Busca de produtos:**  
   - Produto existente  
   - Produto inexistente  

4. **Página de produto:**  
   - Abertura de detalhes  
   - Validação de informações do produto  

5. **Carrinho de compras:**  
   - Adicionar produtos  
   - Remover produtos  
   - Atualizar quantidade  

6. **Checkout:**  
   - Fluxo completo de compra  
   - Tentativa de compra sem login  

7. **UI/UX e Performance:**  
   - Responsividade da página  
   - Tempo de carregamento da home  

---

## 🛠 Tecnologias e Ferramentas
- **Cypress** (automação de testes)  
- **Node.js / npm** (gerenciamento de pacotes)  
- **Excel** (casos de teste e checklist funcional)  
- **PDF** (plano de teste e relatório de bugs)  
- **Snipping Tool / PrintScreen** (para evidências)  
- **Chrome / Edge** (execução dos testes)  

---

## 📂 Organização dos Scripts Cypress
- **login.cy.js:** valida login válido, login inválido e mensagens de erro.  
- **cadastro.cy.js:** valida criação de usuário e alertas de campos obrigatórios.  
- **busca.cy.js:** valida busca de produtos existentes e inexistentes.  
- **carrinho.cy.js:** adiciona, remove e atualiza produtos no carrinho.  
- **checkout.cy.js:** valida fluxo de compra completo e tentativa sem login.  
- **ui_performance.cy.js:** valida responsividade e tempo de carregamento da página inicial.  

> Todos os scripts possuem **asserts claros**, **descrições objetivas** e seguem **boas práticas de automação**.

---

## 📊 Casos de Teste
Os casos de teste automatizados seguem a mesma lógica dos casos manuais, estruturados em **planilhas Excel**:  
- ID do teste  
- Funcionalidade  
- Pré-condições  
- Passos  
- Resultado esperado  
- Tipo de teste (Funcional, UI/UX, Performance)  
- Status (Pass/Fail)  
- Evidências (prints ou vídeos do Cypress)

---

## 📄 Checklist Funcional
- Elementos da interface  
- Navegação entre páginas  
- Links e botões  
- Mensagens de erro e sucesso  
- Responsividade  

---

## 🐞 Relatório de Bugs
- Bugs identificados durante a execução dos testes são documentados em PDF.  
- Cada bug inclui:
  - Título do bug  
  - Severidade e prioridade  
  - Passos para reprodução  
  - Resultado esperado e obtido  
  - Prints ou vídeos de evidência  

---

## 📬 Contato
Para mais informações sobre meus projetos de QA:  

**📧 E-mail:** josuelucena2019@gmail.com  
**🔗 LinkedIn:** [Seu LinkedIn aqui]
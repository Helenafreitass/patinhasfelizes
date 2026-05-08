# 🐾 Patinhas Felizes — Pet Shop

Landing page funcional e responsiva desenvolvida como solução para o **Desafio Extra** do curso **Introdução à Programação Front-End e Back-End (IP 20h A)** — programa SCTEC / LAB365 SENAI/SC.

---

## 📋 Identificação do Projeto

- **Nome do projeto:** Patinhas Felizes — Pet Shop
- **Tipo:** Landing page comercial (one-page)
- **Curso:** Introdução à Programação Front-End e Back-End — IP 20h A
- **Programa:** SCTEC — Carreira Tech, Ciclo 2
- **Tecnologias:** HTML5, CSS3 e JavaScript (Vanilla)

---

## 🎯 Sobre o projeto

A **Patinhas Felizes** é uma marca fictícia de pet shop, criada como contexto para o desenvolvimento desta atividade. A landing page foi pensada como um **cartão de visitas digital** da marca, apresentando seus serviços, diferenciais, indicadores de desempenho e canais de contato com objetivo claro de conversão de novos clientes.

A identidade visual escolhida transmite acolhimento e confiança, com paleta em tons de laranja/coral (calor e amizade), verde-azulado (saúde e tranquilidade) e creme suave de fundo. A tipografia combina **Fredoka** (títulos arredondados e amigáveis) com **Nunito** (texto corrido legível).

---

## 🧱 Estrutura de pastas

```
patinhas-felizes/
├── index.html              # Página principal com estrutura semântica
├── css/
│   └── style.css           # Estilização completa e responsividade
├── js/
│   └── script.js           # Interatividade e validações
├── img/                    # Pasta para imagens (vazia — pet em SVG inline)
└── README.md               # Esta documentação
```

---

## 🛠️ Etapas de desenvolvimento

### 1. Planejamento e identidade visual
Definição da marca fictícia, escolha de paleta de cores, tipografia (via Google Fonts) e arquitetura de seções da página, seguindo todos os requisitos do desafio.

### 2. Estruturação semântica (HTML)
Construção do `index.html` utilizando tags semânticas como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>`. Inclusão de meta tags para SEO, atributos de acessibilidade (`aria-label`, `aria-hidden`, `role`) e link para fontes externas e biblioteca de ícones (Font Awesome).

### 3. Estilização e layout (CSS)
Desenvolvimento do `style.css` com:
- Variáveis CSS (`:root`) para cores, tipografia, espaçamentos e sombras;
- Layout com **Flexbox** e **CSS Grid**;
- Uso de `position: relative/absolute` na seção de destaque para sobreposição de elementos (cards flutuantes e ilustração);
- Aplicação de `aspect-ratio` nos cards de serviços;
- Animações suaves (`@keyframes` e `transition`);
- Design **mobile-first** com media queries em três breakpoints (968px, 720px e 480px).

### 4. Interatividade (JavaScript / DOM)
Implementação do `script.js` em JavaScript puro, contemplando:
- **Menu mobile** com toggle hamburguer animado;
- **Header dinâmico** que ganha sombra ao rolar a página;
- **Animações de fade-in** com `IntersectionObserver`;
- **Contadores animados** dos indicadores na seção Sobre (com easing);
- **Validação de formulário** em tempo real (campos obrigatórios, formato de e-mail via regex, formato de telefone, tamanho mínimo de nome e mensagem);
- **Máscara automática** de telefone no padrão brasileiro `(00) 00000-0000`;
- **Mensagens de feedback** de sucesso e erro;
- **Rolagem suave** para links âncora considerando a altura do header fixo;
- **Atualização automática do ano** no rodapé.

### 5. Testes e ajustes finais
Verificação da responsividade em diferentes tamanhos de tela, ajustes de espaçamento, validação manual do funcionamento do formulário e revisão geral do código.

---

## ✅ Seções da página

1. **Cabeçalho fixo** — logo, navegação principal e menu mobile.
2. **Seção de Destaque (Hero)** — chamada principal, CTAs (Agendar / Conhecer serviços), ilustração de pet sobreposta com cards flutuantes.
3. **Sobre** — apresentação da marca + grid de indicadores animados (12.000 pets atendidos, 12 anos de experiência, 15 profissionais, 98% de satisfação).
4. **Serviços** — 6 cards visuais com ícones, descrições e preços (Banho & Tosa, Consultas Veterinárias, Loja Pet, Tosa Higiênica, Vacinação, Tele-Entrega).
5. **Contato** — informações da loja + formulário funcional com validações + redes sociais.
6. **Rodapé** — navegação resumida, contatos e crédito.
7. **Botão flutuante de WhatsApp** sempre visível.

---

## 🚀 Como executar o projeto localmente

Não há necessidade de instalar nenhuma dependência ou ferramenta de build. O projeto utiliza apenas HTML, CSS e JavaScript puro.

### Opção 1 — Abrir diretamente no navegador
1. Faça o download/descompactação do arquivo `.zip` do projeto;
2. Abra a pasta `patinhas-felizes`;
3. Dê duplo clique no arquivo `index.html`;
4. A página será aberta no navegador padrão do seu sistema.

### Opção 2 — Usar um servidor local (recomendado)
Para garantir o funcionamento perfeito de fontes e ícones externos, é recomendado servir os arquivos por um servidor local:

**Com a extensão Live Server (VS Code):**
1. Abra a pasta no VS Code;
2. Instale a extensão **Live Server** (Ritwick Dey);
3. Clique com o botão direito no `index.html` → **Open with Live Server**.

---

## 🎨 Identidade visual

| Cor | Uso | Hex |
|---|---|---|
| Laranja amigável | Cor primária / CTAs | `#f4a261` |
| Coral | Destaques e hover | `#e76f51` |
| Verde-azulado | Cor secundária | `#2a9d8f` |
| Amarelo suave | Acento | `#e9c46a` |
| Azul-petróleo | Cor escura / textos | `#264653` |
| Creme | Fundo principal | `#fffaf3` |

**Fontes:** Fredoka (títulos) + Nunito (corpo do texto), ambas via Google Fonts.

---


## 📄 Licença

Projeto de uso educacional, desenvolvido exclusivamente para fins de avaliação no programa SCTEC.

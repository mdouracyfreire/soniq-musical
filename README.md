# 🎵 SONIQ — Plataforma de Streaming Musical

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Web Components](https://img.shields.io/badge/Web%20Components-Custom%20Elements-6E40C9)
![API](https://img.shields.io/badge/API-iTunes-blue)
![Responsivo](https://img.shields.io/badge/Responsivo-Sim-blue)
![Status](https://img.shields.io/badge/status-concluído-brightgreen)
![Deploy-GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?logo=github&logoColor=white)

O **SONIQ** é uma plataforma fictícia de streaming musical desenvolvida como atividade prática do **Bootcamp Dev Full Stack +PraTi**. O projeto foi criado com foco na construção de uma aplicação front-end moderna utilizando apenas **HTML5, CSS3 e JavaScript puro**, explorando conceitos de componentização, renderização dinâmica, arquitetura modular e consumo de APIs.

Mais do que reproduzir uma interface, o objetivo foi aplicar boas práticas de desenvolvimento, organização de código e reutilização de componentes para criar uma experiência fluida e responsiva.

Durante o desenvolvimento foram trabalhados conceitos como:

✅ Estrutura semântica com HTML5  
✅ Estilização responsiva utilizando CSS3 moderno  
✅ Web Components (Custom Elements)  
✅ ES Modules (JavaScript Modular)  
✅ Renderização dinâmica de conteúdo  
✅ Consumo de API REST (iTunes Search API)  
✅ Componentização da interface  
✅ Arquitetura organizada em camadas (Components, Behaviors, Render, Data, API e Utils)

🔗 **Acesse o projeto online:**  
> https://mdouracyfreire.github.io/soniq-musical/

---

# 🎥 Demonstração

| Versão | Preview |
|--------|---------|
| Desktop | <img alt="Image" src="https://github.com/user-attachments/assets/1bd357a0-3225-42bb-8e83-d2bef6f36a57" /> |
| Mobile | <img alt="Image" src="https://github.com/user-attachments/assets/bdce70ee-2901-42ed-a0d5-fff636e54970" /> |

---

# 🧭 Funcionalidades

## Home

A página inicial apresenta a identidade da plataforma e reúne os principais destaques do serviço.

- Hero Section com animações
- Sobre a plataforma
- Artistas em destaque
- Playlists em destaque
- Benefícios da assinatura
- Carrossel de depoimentos
- Chamada para ação (CTA)

---

## Artistas

Página dedicada aos artistas disponíveis na plataforma.

### Recursos

- Busca por nome
- Filtro por gênero
- Renderização dinâmica dos cards
- Web Component reutilizável

---

## Playlists

Apresentação das playlists editoriais da plataforma.

### Recursos

- Cards dinâmicos
- Categorias musicais
- Tempo de duração
- Quantidade de músicas

---

## Músicas

Integração com a **iTunes Search API** para pesquisa de músicas em tempo real.

### Recursos

- Busca por artista ou música
- Exibição dinâmica dos resultados
- Reprodução de prévia (30 segundos)
- Informações do álbum
- Capa em alta resolução
- Data de lançamento

---

## Contato

Formulário de contato com validação em JavaScript.

### Recursos

- Validação dos campos
- Mensagens de erro
- Toast de confirmação
- Feedback visual para o usuário

---

# 📂 Arquitetura do Projeto

O projeto foi organizado seguindo uma arquitetura modular, separando responsabilidades entre dados, componentes, renderização e comportamentos.

```
📦 soniq
│
├── 📂 assets
│   ├── icons
│   └── images
│
├── 📂 js
│   ├── api
│   ├── behaviors
│   ├── components
│   ├── config
│   ├── data
│   ├── render
│   ├── utils
│   └── main.js
│
├── 📂 pages
│
├── 📂 styles
│   ├── base
│   ├── components
│   ├── layouts
│   ├── pages
|   ├── utilities
│   └── index.css
│
├── index.html
└── README.md
```

---

# 🛠️ Tecnologias Utilizadas

| Tecnologia | Utilização |
|------------|------------|
| HTML5 | Estrutura semântica |
| CSS3 | Estilização e responsividade |
| JavaScript ES6+ | Lógica da aplicação |
| Web Components | Componentização |
| ES Modules | Organização do projeto |
| Fetch API | Consumo de APIs |
| iTunes Search API | Pesquisa de músicas |

---

# 📱 Responsividade

O projeto foi desenvolvido seguindo a abordagem **Mobile First**, garantindo uma boa experiência em diferentes dispositivos.

Foram aplicadas técnicas como:

- `clamp()`
- Flexbox
- CSS Grid
- Media Queries
- Imagens responsivas
- Componentes adaptáveis

---

# 🚀 Como executar

## 1. Clone o repositório

```bash
git clone https://github.com/mdouracyfreire/soniq-musical.git
```

## 2. Entre na pasta

```bash
cd soniq-musical
```

## 3. Abra com o Live Server

Como o projeto utiliza **JavaScript Modules**, recomenda-se executá-lo utilizando a extensão **Live Server** do VS Code.

---

# 📚 Aprendizados

Durante o desenvolvimento deste projeto foram praticados conceitos importantes de desenvolvimento Front-end, como:

- Organização de projetos em JavaScript puro
- Componentização utilizando Web Components
- Separação de responsabilidades
- Consumo de APIs REST
- Manipulação do DOM
- Arquitetura modular
- Responsividade
- UX/UI aplicada ao desenvolvimento web

---

# 🏁 Licença

Este projeto foi desenvolvido para fins educacionais como atividade proposta no **Bootcamp Dev Full Stack +PraTi**.
Sinta-se à vontade para estudar, adaptar e utilizar o código como referência para aprendizado.

---

## 👩‍💻 Autora

<div align="center">

Desenvolvido com 💛 por **Douracy Freire**

<br>

<a href="https://github.com/mdouracyfreire">
<img src="https://img.shields.io/badge/GitHub-Douracy%20Freire-181717?logo=github"/>
</a>

<a href="https://www.linkedin.com/in/douracy/">
<img src="https://img.shields.io/badge/LinkedIn-Douracy%20Freire-0A66C2?logo=linkedin"/>
</a>

</div>

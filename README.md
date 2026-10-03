# 🎮 GameZone — Loja de Videogames

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📋 Sobre o projeto

A **GameZone** é uma página única (_single page_) que apresenta três consoles em destaque, compara suas especificações em uma tabela e oferece um formulário para contato com a loja.

O projeto foi desenvolvido com foco em:

- **HTML semântico** (`header`, `nav`, `main`, `section`, `article`, `figure`, `footer`);
- **Acessibilidade básica** (textos alternativos nas imagens, `label` nos campos, `caption` e `scope` na tabela);
- **Manipulação do DOM** com JavaScript para alternar entre os temas claro e escuro;
- **Layout responsivo** com Flexbox.

---

## ✨ Funcionalidades

- 🏠 **Página inicial** com mensagem de boas-vindas
- 🧭 **Menu de navegação fixo** no topo (`position: sticky`), sempre visível durante a rolagem
- 🎯 **Rolagem suave** entre as seções, com `scroll-margin-top` para o menu não cobrir os títulos
- 🛒 **Produtos em destaque** em cards com imagem, descrição, preço e botão "Tenho interesse"
- 📊 **Tabela comparativa** de consoles, com rolagem horizontal em telas pequenas
- 📩 **Formulário de contato** com validação nativa do navegador (`required` e `type="email"`)
- 🌙 **Alternância entre tema claro e escuro** por botão na barra de navegação

---

## 🗂️ Seções da página

| Seção    | ID          | Conteúdo                                      |
| -------- | ----------- | --------------------------------------------- |
| Início   | `#inicio`   | Apresentação da loja                          |
| Produtos | `#produtos` | Cards dos três consoles em destaque           |
| Consoles | `#consoles` | Tabela comparativa de especificações e preços |
| Contato  | `#contato`  | Formulário (nome, e-mail e mensagem)          |

---

## 📁 Estrutura do projeto

```text
GameZone/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    ├── favicon.png
    ├── playstation5.png
    ├── xboxseriesx.png
    ├── nintendoswitch.png
    └── interatividade/
        ├── moon.png
        └── sun.png
```

---

## 🚀 Como executar

1. Clone ou baixe este repositório.
2. Mantenha a estrutura de pastas original.
3. Abra o arquivo `index.html` em qualquer navegador moderno.

Não é necessário instalar nada nem rodar servidor.

---

## ⚠️ Limitações atuais

- O formulário de contato **ainda não envia os dados** a lugar nenhum (não há back-end).
- O tema escolhido **não é salvo**: ao recarregar a página, ela volta ao tema claro.

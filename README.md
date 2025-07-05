# Legado da Ponte de Pedra

![Hero Section Screenshot](https://i.postimg.cc/xTgXxCwP/3da24e5b95f6ac4f18877d086882e80c.jpg)

## 📜 Sobre o Projeto

Este é o site oficial do curta-metragem **"Legado da Ponte de Pedra"**. O projeto é uma iniciativa para promover e defender a preservação urgente da Ponte de Pedra, um complexo patrimonial geológico, arqueológico e cultural de valor inestimável, localizado na divisa dos municípios de Rio Verde e Paraúna, em Goiás, Brasil.

O site serve como uma plataforma central para conscientizar o público sobre a importância histórica e ambiental do local, destacar as ameaças que ele enfrenta e mobilizar a comunidade para a ação.

## ✨ Funcionalidades Principais

*   **Página Única Imersiva:** Design de landing page com navegação fluida e rolagem suave entre as seções.
*   **Design Responsivo:** Totalmente adaptado para uma experiência de visualização ideal em desktops, tablets e smartphones.
*   **Seções Detalhadas:**
    *   **A Causa:** Apresenta a relevância multifacetada da Ponte de Pedra.
    *   **Jornada:** Narra a história da ação de preservação e a criação do curta-metragem.
    *   **Equipe e Envolvidos:** Destaca as pessoas e instituições cruciais para o projeto.
    *   **Galeria e Documentos:** Exibe imagens do local e links para documentos importantes, incluindo um abaixo-assinado.
    *   **Localização Interativa:** Incorpora um mapa do Google Maps para fácil localização.
    *   **Participe:** Orienta os visitantes sobre como apoiar a causa.
    *   **Apoiadores:** Reconhece os parceiros institucionais.
    *   **Em Memória:** Uma homenagem especial ao Sr. Luiz 'Catuaba', guardião da memória local.
*   **Identidade Visual Única:** Utiliza uma paleta de cores inspirada na natureza e uma combinação de fontes (Playfair Display e Lato) que conferem elegância e seriedade à causa.
*   **Microinterações:** Efeitos sutis de animação e hover para uma experiência de usuário mais agradável e dinâmica.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com uma stack moderna, focada em performance e experiência do desenvolvedor:

*   **Framework:** [Next.js](https://nextjs.org/) (com App Router)
*   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
*   **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
*   **Componentes UI:** [ShadCN UI](https://ui.shadcn.com/)
*   **Animação:** `tailwindcss-animate`
*   **Fontes:** [Google Fonts](https://fonts.google.com/) (Playfair Display & Lato)
*   **Deployment:** [Firebase App Hosting](https://firebase.google.com/docs/app-hosting)

## 🚀 Como Executar Localmente

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente de desenvolvimento.

### Pré-requisitos

*   [Node.js](https://nodejs.org/) (versão 18 ou superior)
*   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/laranjaeragnarok2/ponte-de-pedra.git
    cd ponte-de-pedra
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configuração do Firebase (Opcional):**
    O projeto utiliza Firebase para autenticação anônima. Se você não precisar desta funcionalidade, pode ignorar este passo. Caso contrário, crie um arquivo `.env.local` na raiz do projeto e adicione suas credenciais do Firebase:
    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=sua_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=sua_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=seu_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=seu_app_id
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra [http://localhost:9002](http://localhost:9002) no seu navegador para ver o site.

## 📂 Estrutura do Projeto

```
src
├── app/                  # Rotas e páginas principais (layout.tsx, page.tsx)
├── components/           # Componentes React reutilizáveis
│   ├── layout/           # Componentes de layout (Header, Footer)
│   ├── sections/         # Componentes de seção da página principal
│   ├── ui/               # Componentes do ShadCN UI
│   └── util/             # Componentes utilitários
├── hooks/                # Hooks React customizados
├── lib/                  # Funções utilitárias e configuração do Firebase
└── ...
```

## ❤️ Créditos

Feito com amor por **[Horyu Multimídia](https://www.instagram.com/horyu.multimedia)**.

Desenvolvido com o auxílio do **Firebase Studio**.

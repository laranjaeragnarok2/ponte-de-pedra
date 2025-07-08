
# Legado da Ponte de Pedra: Um Chamado à Preservação

![Ponte de Pedra](https://i.postimg.cc/xTgXxCwP/3da24e5f6ac4f18877d086882e80c.jpg)

Este é o repositório oficial do projeto **"Legado da Ponte de Pedra"**. Mais do que um site, é uma plataforma de conscientização e mobilização para a preservação de um dos mais importantes patrimônios geológicos, arqueológicos e culturais de Goiás, localizado na divisa entre Rio Verde e Paraúna.

**[Acesse o site e junte-se à causa!](#)** _(Link para o site em produção)_

---

## A Causa: Por que a Ponte de Pedra é Importante?

A Ponte de Pedra é um complexo patrimonial multifacetado que inclui:

-   **Raridade Geológica:** Com formações como a Ponte de Pedra I (um arco natural) e a Ponte de Pedra II (uma caverna com espeleotemas ativos), o local é um exemplo raro de processos cársticos no sudoeste goiano.
-   **Herança Arqueológica:** Cadastrado no IPHAN desde 1975 (GO00381), o sítio possui vestígios de ocupação humana milenar, conectando-nos diretamente com a história dos povos originários do Brasil.
-   **Biodiversidade:** A área abriga uma rica fauna e flora, essenciais para o equilíbrio ecológico da região.

Infelizmente, este legado está sob constante ameaça de vandalismo, descarte de lixo e, principalmente, projetos de infraestrutura como a PCH Ponte de Pedra 2, que podem causar danos irreversíveis.

## O Curta-Metragem

O curta-metragem "Legado da Ponte de Pedra" é nossa principal ferramenta de ativismo. Através de uma narrativa cinematográfica, buscamos:

-   **Documentar** a beleza e a fragilidade do local.
-   **Contar a história** das pessoas que lutam por sua preservação.
-   **Mobilizar** a sociedade e as autoridades para a necessidade urgente de tombamento estadual e federal.

## Como Você Pode Ajudar

Sua participação é fundamental!

1.  **Assine o Abaixo-Assinado:** Sua voz fortalece nossa luta.
    -   **[Clique aqui para assinar](https://www.change.org/p/salve-a-ponte-de-pedra-pch-prev%C3%AA-impacto-negativo-em-patrim%C3%B4nio-ambiental-e-arquiol%C3%B3gico)**
2.  **Compartilhe:** Divulgue o site e o curta-metragem em suas redes sociais.
3.  **Conscientize:** Converse com amigos e familiares sobre a importância da preservação do nosso patrimônio.

---

## Sobre a Plataforma Web

Este site foi desenvolvido para ser o ponto central da campanha, unindo informação, arte e mobilização.

### Tecnologias Utilizadas

-   **Next.js:** Framework React para produção, com renderização no servidor (SSR).
-   **React & TypeScript:** Para uma interface de usuário moderna e um código robusto.
-   **Tailwind CSS & ShadCN/UI:** Para estilização ágil e componentes de alta qualidade.
-   **Firebase:** Utilizado para autenticação anônima de usuários, permitindo futuras interações personalizadas.

### Como Rodar o Projeto Localmente

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/laranjaeragnarok2/ponte-de-pedra.git
    cd ponte-de-pedra
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo `.env.local` na raiz e adicione suas credenciais do Firebase. Sem elas, funcionalidades como o ID de usuário anônimo não funcionarão.
    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=sua_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=seu_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=seu_app_id
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O site estará disponível em `http://localhost:3000`.

## Agradecimentos

Este projeto só é possível graças ao esforço conjunto de uma equipe dedicada e ao apoio de parceiros institucionais.

-   **Liderança da Ação:** Jordana Vieira Goulart (Arqueóloga), Klener Alves Rocha Júnior, Guilherme Marques Martins (Geólogo), Fernando Santiago do Prado (Eng. Ambiental).
-   **Apoio Institucional:** Prefeituras de Rio Verde e Paraúna, CONDEC, CONSEG, Museu Histórico de Jataí, e muitos outros parceiros.
-   **Em Memória:** Sr. Luiz 'Catuaba', guardião da memória local cujo legado inspira nossa luta.

## Contato

-   **Desenvolvimento e Multimídia:** Horyu Multimídia - [Instagram](https://www.instagram.com/horyu.multimedia)

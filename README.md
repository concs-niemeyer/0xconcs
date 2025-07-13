Web3 Gated Content - Aplicação com Conteúdo Exclusivo baseado em NFT ou Saldo de ETH
======================================================================================

Esta é uma aplicação Web3 que libera conteúdo exclusivo apenas para usuários que possuam um NFT específico ou tenham saldo mínimo em Ethereum (ETH). O objetivo é demonstrar como integrar verificação on-chain com autenticação via carteira, oferecendo uma experiência premium baseada em ativos digitais.

Funcionalidades
---------------
- Conexão com carteira Web3 (MetaMask, WalletConnect, etc.)
- Verificação automática de:
  - Saldo de ETH mínimo (configurável)
  - Posse de NFT de um contrato específico
- Exibição condicional de conteúdo exclusivo
- Interface moderna e responsiva com Tailwind CSS
- Código modular e reutilizável com React + Wagmi

Pré-requisitos
--------------
- Node.js 18 ou superior
- Uma carteira Web3 (ex: MetaMask)
- NFT implantado na rede Ethereum (ex: Sepolia ou Mainnet)

Instalação
----------
1. Clone o repositório:
   git clone https://github.com/concs-niemeyer/0xconcs.git

2. Acesse o diretório do projeto:
   cd web3-gated-content

3. Instale as dependências:
   npm install

4. Crie um arquivo `.env.local` com as variáveis abaixo:

  VITE_WC_PROJECT_ID=*********************
  VITE_ETHERSCAN_API_KEY=*****************


Uso
---
Execute o projeto em ambiente de desenvolvimento com:
   npm run dev

Acesse `http://localhost:5173`, conecte sua carteira e veja se o conteúdo é liberado:

- Se você possuir o NFT do contrato informado, ou
- Se tiver saldo de ETH igual ou maior que o definido (0.001).

então o conteúdo será exibido.

Tecnologias
-----------
- Next.js
- React
- Wagmi + Viem
- Tailwind CSS
- RPC Provider (Alchemy, Infura, etc.)

Licença
-------
MIT © Seu Nome (https://github.com/concs-niemeyer)

Inspiração
----------
Esse projeto foi criado como parte de um portfólio para demonstrar autenticação descentralizada e gating de conteúdo via Web3. Pode ser usado em projetos educacionais, NFTs utilitários ou clubes exclusivos baseados em blockchain.

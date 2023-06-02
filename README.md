# NFT Collection Factory UI

Required:

- [Node v16](https://nodejs.org/download/release/latest-v16.x/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [Git](https://git-scm.com/downloads)

Install the deps and start a dev server:

```bash
$ yarn
$ yarn dev
```

## Architecture/Layout

The app is written in [React](https://reactjs.org/) and [NextJS](https://nextjs.org/).

The files/folder structure are a **WIP** and may contain some unused files. The project is rapidly evolving so please update this section if you see it is inaccurate!

```
./
├── app/          // App logic page
├── components/   // Reusable individual components
├── hooks/        // Custom hooks with common logic
├── pages/        // Page structure
├── deployments/  // ABIs and contract adresses
├── typechain/    // TypeScript interfaces for smart contracts
├── artifacts/    // Solc artifacts, ABIs
└── public/       // Static assets
```

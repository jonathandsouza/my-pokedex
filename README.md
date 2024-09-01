# My Pokédex
###### An interactive Pokédex with a fun game.

Live Version: [https://my-pokedex-sandy.vercel.app/](https://my-pokedex-sandy.vercel.app/)

## How to Run the Project Locally

```bash
# 1. Clone the repository
git clone https://github.com/jonathandsouza/my-pokedex 

# 2. Install dependencies
npm ci 

# 3. Build the project for production
npm run build 

# 4. Start the production server
npm run start 
```

**Note:** The above commands might require elevated privileges. Use `sudo` on macOS/Linux or run as Administrator on Windows if necessary.

## How to Run Unit Tests

To ensure your code is functioning correctly, run the unit tests using the following command:

```bash
npm run test
```

This command will execute all the test cases in the project. The tests are designed to validate key functionalities of the application, ensuring reliability and stability.

## Technologies Used

- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://react.dev/)
- [NextJS](https://nextjs.org/)
- [RadixUI](https://www.radix-ui.com/)
- [ShadcnUI](https://ui.shadcn.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [GraphQL](https://graphql.org/)
- [Apollo Client](https://www.apollographql.com/docs/react)

## Pre-Interview Code Example Submission

Please submit a piece of frontend code. This can be part of an existing project or a small application developed specifically for this interview.

The submission should:

- Preferably use **React**.
- Demonstrate knowledge of **state management** (e.g., React Context, Redux).
- Include interaction with an API (preferably using **GraphQL**).
- Be well-documented and include unit tests.

## Project Features

- **[Home Page](https://my-pokedex-sandy.vercel.app/):**
  - Displays a list of all Pokémon starting from #1.
  - Features an infinite scroll that progressively loads more Pokémon as the user scrolls.

- **[Pokémon Details](https://my-pokedex-sandy.vercel.app/pokemon/charizard):**
  - Access the details page by clicking on any Pokémon image on the home page.
  - This page provides detailed information about each Pokémon, as expected in a Pokédex.

- **[Game Page](https://my-pokedex-sandy.vercel.app/game):**
  - Access the game page via this [link](https://my-pokedex-sandy.vercel.app/game) or by clicking on the "Play" link in the main navigation bar.
  - Start the game by clicking the "Start" button on the page.
  - The goal is to correctly select as many Pokémon types as possible.
  - You can make up to four incorrect guesses before the game ends.

# CardInfra Assessment Project

This project is a React application built with TypeScript and Vite. It serves as an assessment project and demonstrates the use of modern front-end technologies, including React, Vite, TailwindCSS, and Chart.js.

## Demo Access

To access the dashboard in the deployed demo:

1. You will be navigated to the login page
2. Enter any text in the username field
3. Enter any text in the password field
4. Click the "Login" button to view the dashboard

Note: This is a demo application with simulated authentication. No real authentication is performed, and any credentials will work to access the dashboard.

## Features

- **React + TypeScript**: A robust combination for building scalable and type-safe applications.
- **Vite**: A fast build tool for modern web development.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **Chart.js**: Interactive and customizable charts for data visualization.
- **React Router**: For managing application routing.
- **ESLint**: Configured for TypeScript and React to ensure code quality.

## Project Structure

The project follows a flat structure with all components and features organized under the `src` directory. Below is an overview of the structure:

```
src/
├── assets/          # Static assets like SVGs
├── common/          # Shared components (e.g., Sidebar, Header)
├── components/      # Feature-specific components
│   ├── home/        # Components for the home page
│   └── auth/        # Components for authentication
├── interface/       # TypeScript interfaces
├── layout/          # Layout components (e.g., dashboard layout)
├── pages/           # Page-level components
├── routes/          # Application routes and paths
└── styles/          # Global styles
```

### Note on Code Structure

While the project demonstrates a good understanding of React and TypeScript, the current structure is relatively flat and lacks abstraction. For a production-grade application, consider the following improvements:

1. **Modularization**: Group related components, hooks, and utilities into feature-based modules. For example:
   ```
   src/
   ├── features/
   │   ├── dashboard/
   │   │   ├── components/
   │   │   ├── hooks/
   │   │   └── services/
   │   └── auth/
   │       ├── components/
   │       ├── hooks/
   │       └── services/
   ```
2. **Separation of Concerns**: Extract reusable logic into custom hooks or utility functions to reduce duplication.
3. **Scalability**: Introduce a state management library (e.g., Redux or Zustand) if the application grows in complexity.

These changes would make the codebase more maintainable and scalable, especially for larger projects.

## Note on Testing

No tests were written for this assessment project due to time constraints. However, I am proficient in testing React applications using Jest, React Testing Library, and Cypress, and would implement comprehensive test coverage in a production environment. This would include:

- Unit tests for individual components
- Integration tests for component interactions
- End-to-end tests for critical user flows
- Snapshot tests for UI consistency

For a production application, I would implement a testing strategy that includes all of these test types, focusing on critical business logic and user flows.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run lint`: Run ESLint to check for code quality issues.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript.
- **Vite**: Fast build tool for modern web applications.
- **TailwindCSS**: Utility-first CSS framework.
- **Chart.js**: For creating interactive charts.
- **React Router**: For routing and navigation.
- **ESLint**: For linting and maintaining code quality.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

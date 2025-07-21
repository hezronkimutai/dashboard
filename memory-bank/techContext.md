# Technical Context - Uganda Economic Dashboard

## Technology Stack

### Frontend Framework
- **React 16.6.0**: Component-based UI framework
- **TypeScript 3.1.5**: Type-safe JavaScript development
- **Material-UI 3.3.2**: Google Material Design components
- **Recompose 0.30.0**: Higher-order component utilities

### Development Tools
- **Create React App 2.1.0**: Build tooling and development server
- **TSLint 5.11.0**: TypeScript linting with Airbnb config
- **Jest**: Testing framework with 100% coverage requirements
- **Enzyme**: React component testing utilities

### Deployment & CI/CD
- **GitHub Pages**: Static site hosting at https://256-io.github.io/dashboard/
- **Travis CI**: Continuous integration pipeline
- **Yarn**: Package management and dependency resolution

## Architecture Overview

### Component Structure
```
src/
├── App/                    # Main application container
│   ├── index.tsx          # App component with state management
│   ├── context/           # React Context for data sharing
│   ├── data-form/         # User input components
│   ├── titles/            # Header/title components
│   └── visualizations/    # Economic data visualizations
│       ├── gdp/
│       ├── gdp-growth/
│       ├── per-capita/
│       ├── per-capita-growth/
│       ├── middle-income/
│       └── time-to-middle-income/
```

### State Management Pattern
- **Recompose withState**: Simple state management for data
- **React Context**: Global data sharing across components
- **Default Context**: Predefined economic data for Uganda

### Theme Configuration
- **Material-UI Dark Theme**: Professional appearance
- **Yellow Accent Color**: Brand identity (`yellow['A700']`)
- **Typography**: Next variants enabled for modern styling

## Development Standards

### Code Quality
- **100% Test Coverage**: Required for all functions, lines, branches, statements
- **TypeScript Strict**: Full type safety enforcement
- **TSLint Airbnb**: Consistent code style
- **Component Testing**: Each component has dedicated test file

### File Organization
- **Index Pattern**: Each directory exports through `index.tsx`
- **Co-located Tests**: Test files alongside source files
- **Type Definitions**: Comprehensive TypeScript interfaces

### Testing Strategy
```javascript
// Coverage thresholds (100% required)
"coverageThreshold": {
  "global": {
    "branches": 100,
    "functions": 100,
    "lines": 100,
    "statements": 100
  }
}
```

## Data Architecture

### Economic Data Model
```typescript
interface ContextType {
  gdp: {
    value: number;        // Current GDP in dollars
    growthRate: number;   // Annual growth rate
  };
  population: {
    value: number;        // Current population
    growthRate: number;   // Annual growth rate
  };
  target: {
    label: string;        // Income classification goal
    perCapitaValue: number; // Target per capita income
  };
}
```

### Default Economic Data
- **GDP**: $34 billion (6.3% growth)
- **Population**: 42.86 million (3.3% growth)
- **Target**: Lower Middle Income ($1,025 per capita)

## Build & Deployment

### Scripts Available
- `npm start`: Development server
- `npm build`: Production build
- `npm test`: Run test suite
- `npm run test:coverage`: Coverage report
- `npm run lint`: Code style checking

### Browser Support
- Modern browsers (>0.2% usage)
- No Internet Explorer support
- No Opera Mini support

## Development Environment
- **Node.js**: Required for build tools
- **Yarn**: Preferred package manager
- **TypeScript**: Full IDE support needed
- **Git**: Version control with GitHub integration

## Performance Considerations
- **Grid Layout**: CSS Grid for responsive visualization layout
- **Component Splitting**: Modular visualization components
- **Static Build**: Optimized for GitHub Pages deployment
- **Material-UI**: Tree-shaking for smaller bundle size

This technical foundation provides a solid, maintainable platform for Uganda's economic dashboard with modern development practices and comprehensive testing.
# System Patterns - Uganda Economic Dashboard

## Architecture Patterns

### Component Architecture
The dashboard follows a **hierarchical component pattern** with clear separation of concerns:

```
App (State Container)
├── Titles (Header/Branding)
├── Visualizations (Data Display)
│   ├── GDP
│   ├── PerCapita
│   ├── GDPGrowth
│   ├── PerCapitaGrowth
│   ├── MiddleIncome
│   └── TimeToMiddleIncome
└── DataForm (User Input)
```

### State Management Pattern
**Recompose Higher-Order Component Pattern**:
- `withState('data', 'setData', defaultContext)` wraps the main App
- Provides stateful data management without Redux complexity
- Clean separation between stateful container and presentation components

### Data Flow Pattern
**Unidirectional Data Flow**:
1. **Default Context** → Initial economic data
2. **App State** → Current working data
3. **React Context Provider** → Global data distribution
4. **Visualization Components** → Data consumption
5. **DataForm** → User input and state updates

## Design Patterns

### Provider Pattern
```typescript
<Provider value={{ ...data }}>
  <Visualizations />
</Provider>
```
- Centralizes data distribution to visualization components
- Eliminates prop drilling through component hierarchy
- Enables easy data sharing across visualization modules

### Theme Provider Pattern
```typescript
<MuiThemeProvider theme={theme}>
  {/* All components inherit theme */}
</MuiThemeProvider>
```
- Consistent visual styling across all components
- Dark theme with yellow accent color
- Typography and color scheme centrally managed

### Index Export Pattern
Each directory uses `index.tsx` as the main export:
- Clean import statements: `import GDP from './gdp'`
- Encapsulates internal module structure
- Enables easy refactoring without breaking imports

## Code Organization Patterns

### Co-located Testing
```
component/
├── index.tsx    # Component implementation
└── test.tsx     # Component tests
```
- Tests are immediately discoverable
- Reduces context switching during development
- Clear test-to-component relationship

### Modular Visualization Pattern
Each economic indicator is a self-contained module:
- Independent development and testing
- Easy to add new economic indicators
- Clear separation of concerns per metric type

### Type-Safe Context Pattern
```typescript
interface ContextType {
  gdp: { value: number; growthRate: number; };
  population: { value: number; growthRate: number; };
  target: { label: string; perCapitaValue: number; };
}
```
- Full TypeScript interface definitions
- Compile-time validation of data structures
- Clear contracts between components

## UI Patterns

### Grid Layout Pattern
```typescript
const styles = {
  display: 'grid',
  gridTemplateColumns: 'repeat( auto-fit, minmax(250px, auto) )',
  gridGap: '8px',
};
```
- Responsive layout without media queries
- Automatic component arrangement
- Consistent spacing and alignment

### Fragment Composition
```typescript
<Fragment>
  <GDP/>
  <PerCapita/>
  <GDPGrowth/>
  {/* ... more visualizations */}
</Fragment>
```
- Clean component composition
- No unnecessary wrapper elements
- Optimal DOM structure

### Material-UI Integration Pattern
- Consistent use of Material-UI components
- Custom theme configuration for brand identity
- Dark mode optimized for professional use

## Development Patterns

### Test-Driven Development
- 100% code coverage requirement enforced
- Every component has dedicated test suite
- Coverage includes branches, functions, lines, and statements

### TypeScript-First Development
- Complete type safety across the application
- Interface-driven development
- Compile-time error detection

### Linting and Code Quality
- TSLint with Airbnb configuration
- Consistent code style enforcement
- Automated quality checks in CI/CD

## Deployment Patterns

### Static Site Generation
- Build process creates optimized static files
- Deployed to GitHub Pages for free hosting
- No server-side dependencies required

### Continuous Integration
- Travis CI for automated testing and deployment
- Automated quality checks on every commit
- Fail-fast approach to maintaining code quality

## Scalability Patterns

### Modular Visualization Architecture
- New economic indicators can be added as independent components
- Each visualization handles its own data processing
- Loose coupling between visualization components

### Context-Based Data Management
- Easy to extend with additional economic data
- Centralized data structure with type safety
- Simple state updates propagate automatically

These patterns create a maintainable, scalable foundation for Uganda's economic dashboard while ensuring code quality and developer productivity.
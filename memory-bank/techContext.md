# Technical Context - Uganda Economic Dashboard

## Technology Stack

### Frontend Technologies
- **HTML5**: Semantic markup with modern web standards
- **CSS3**: Material Design-inspired styling with CSS Grid and Flexbox
- **Vanilla JavaScript ES6+**: Modern JavaScript without frameworks
- **Chart.js 4.x**: Interactive data visualization library

### Development Approach
- **No Build Process**: Direct development with standard web technologies
- **CDN Dependencies**: Chart.js loaded from jsdelivr CDN
- **Static Hosting**: Optimized for Vercel, GitHub Pages, or any static host
- **Progressive Enhancement**: Works without JavaScript for basic functionality

## Architecture Overview

### File Structure
```
dashboard/
├── index.html              # Main dashboard interface
├── assets/
│   ├── styles.css         # Complete styling system
│   └── dashboard.js       # Interactive functionality
├── memory-bank/           # Development documentation
├── vercel.json           # Deployment configuration
└── README.md             # Project documentation
```

### Component Architecture
- **Modular CSS**: Component-based styling with BEM-like methodology
- **Event-Driven JavaScript**: Clean separation of data, logic, and presentation
- **Chart.js Integration**: Dynamic chart creation and updates
- **Responsive Design**: Mobile-first CSS Grid and Flexbox layouts

## Data Architecture

### Economic Data Model
```javascript
economicData = {
  gdp: {
    value: 34e9,        // GDP in dollars
    growthRate: 0.063   // Annual growth rate (6.3%)
  },
  population: {
    value: 42.86e6,     // Population count
    growthRate: 0.033   // Annual growth rate (3.3%)
  },
  target: {
    label: 'Lower Middle Income',
    perCapitaValue: 1025  // Target per capita income
  }
}
```

### Calculation Engine
- **Real-time Metrics**: GDP per capita, growth projections, years to target
- **Compound Growth**: Accurate economic forecasting formulas
- **Dynamic Updates**: All calculations update instantly with form changes

## Chart.js Implementation

### Chart Types Used
- **Line Charts**: GDP and per capita trend projections
- **Doughnut Charts**: Growth rate and progress visualizations
- **Bar Charts**: Years-to-target display

### Chart Configuration
```javascript
Chart.defaults.color = '#ffffff';           // Dark theme text
Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';  // Grid lines
```

### Interactive Features
- **Real-time Updates**: Charts redraw on data changes
- **Responsive Design**: Charts adapt to container size
- **Hover Effects**: Interactive tooltips and animations

## Styling System

### CSS Architecture
- **CSS Grid**: Main layout system for responsive design
- **Flexbox**: Component-level alignment and distribution
- **CSS Custom Properties**: Color theming and spacing system
- **Material Design**: Google's design language adapted for dark theme

### Color Palette
- **Primary Background**: #303030 (dark gray)
- **Card Background**: #424242 (medium gray)
- **Accent Color**: #ffc107 (amber/yellow)
- **Text Primary**: #ffffff (white)
- **Text Secondary**: rgba(255, 255, 255, 0.7)

### Responsive Breakpoints
- **Mobile**: < 480px (single column, compact charts)
- **Tablet**: 480px - 768px (two columns)
- **Desktop**: > 768px (three columns, full features)

## JavaScript Architecture

### Module Pattern
```javascript
// State management
let economicData = { /* data structure */ };
let charts = {};  // Chart.js instances

// Event handling
function setupEventListeners() { /* form events */ }
function handleInputChange(event) { /* data updates */ }

// Chart management
function initializeCharts() { /* create all charts */ }
function updateAllCharts() { /* refresh visualizations */ }

// Calculations
function calculateMetrics() { /* economic formulas */ }
function updateAllDisplays() { /* UI updates */ }
```

### Performance Optimizations
- **Event Delegation**: Efficient form input handling
- **Chart Reuse**: Update existing charts instead of recreation
- **Debounced Updates**: Smooth interactions without performance issues

## Deployment Architecture

### Static Site Optimization
- **Zero Build Process**: Direct file serving
- **CDN Assets**: External Chart.js reduces bundle size
- **Gzip Compression**: Automatic on Vercel platform
- **Cache Headers**: Optimized caching strategy

### Vercel Configuration
```json
{
  "cleanUrls": true,
  "trailingSlash": false
}
```

### Browser Support
- **Modern Browsers**: Chrome 60+, Firefox 60+, Safari 12+, Edge 79+
- **Mobile Browsers**: iOS Safari 12+, Chrome Mobile 60+
- **Progressive Enhancement**: Basic functionality without JavaScript

## Development Workflow

### Local Development
1. Open `index.html` in browser (no server required)
2. Edit files directly (instant feedback)
3. Test in multiple browsers and devices
4. Deploy to Vercel with `vercel --prod`

### Code Quality
- **Semantic HTML**: Proper document structure and accessibility
- **Modern CSS**: Grid, Flexbox, custom properties
- **ES6+ JavaScript**: Arrow functions, const/let, modules pattern
- **Performance**: Optimized for mobile and slow connections

## Security & Accessibility

### Security Features
- **No Server-Side Code**: Static files eliminate server vulnerabilities
- **CDN Dependencies**: Trusted Chart.js from jsdelivr
- **No User Data Storage**: All data is client-side and temporary

### Accessibility Features
- **Semantic HTML**: Screen reader friendly structure
- **Color Contrast**: WCAG 2.1 AA compliant color ratios
- **Keyboard Navigation**: Full functionality without mouse
- **Responsive Text**: Scalable fonts and layouts

This modern web architecture provides excellent performance, maintainability, and user experience while eliminating the complexity of build processes and framework dependencies.
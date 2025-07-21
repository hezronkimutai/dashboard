# System Patterns - Uganda Economic Dashboard

## Architecture Patterns

### Static Site Architecture
The dashboard follows a **pure static site pattern** with clean separation of concerns:

```
index.html (Structure)
├── assets/styles.css (Presentation)
└── assets/dashboard.js (Behavior)
```

### Event-Driven Pattern
**JavaScript Event Management**:
- Form input events trigger data updates
- Data changes automatically refresh all visualizations
- Chart.js handles chart-specific interactions
- Clean event delegation for performance

### Data Flow Pattern
**Unidirectional Data Flow**:
1. **User Input** → Form fields capture economic parameters
2. **State Update** → JavaScript updates economicData object
3. **Calculation Engine** → Derived metrics computed in real-time
4. **Display Updates** → All charts and metrics refresh automatically
5. **Visual Feedback** → Immediate user interface updates

## Design Patterns

### Module Pattern
```javascript
// Encapsulated state management
let economicData = { /* application state */ };
let charts = { /* Chart.js instances */ };

// Public interface
function initializeCharts() { /* setup */ }
function updateAllCharts() { /* refresh */ }
function calculateMetrics() { /* computations */ }
```

### Observer Pattern (Chart Updates)
```javascript
function handleInputChange(event) {
  updateEconomicData(event);     // Update state
  updateAllDisplays();           // Update UI
  updateAllCharts();             // Refresh visualizations
}
```

### Factory Pattern (Chart Creation)
```javascript
function createGDPChart() {
  return new Chart(ctx, {
    type: 'line',
    data: generateGDPProjection(),
    options: getChartOptions('GDP')
  });
}
```

## Code Organization Patterns

### File Structure Pattern
```
dashboard/
├── index.html              # Single page application entry
├── assets/
│   ├── styles.css         # Complete styling system
│   └── dashboard.js       # All functionality
├── memory-bank/           # Development documentation
└── vercel.json           # Deployment configuration
```

### CSS Architecture Pattern
```css
/* Component-based organization */
.header { /* Header component */ }
.forms-section { /* Form container */ }
.form-card { /* Individual form */ }
.visualizations-grid { /* Chart container */ }
.chart-card { /* Individual chart */ }
.footer { /* Footer component */ }
```

### JavaScript Module Pattern
```javascript
// State management
let economicData = { /* centralized state */ };

// Event handling
function setupEventListeners() { /* initialization */ }
function handleInputChange() { /* state updates */ }

// Chart management
function initializeCharts() { /* setup all charts */ }
function updateAllCharts() { /* refresh all visualizations */ }

// Calculations
function calculateMetrics() { /* economic formulas */ }
function updateAllDisplays() { /* UI synchronization */ }
```

## UI Patterns

### Material Design Pattern
- **Card-based Layout**: Forms and charts in elevated cards
- **Dark Theme**: Professional appearance with yellow accents
- **Typography Scale**: Consistent text sizing and hierarchy
- **Grid System**: CSS Grid for responsive layout

### Responsive Design Pattern
```css
/* Mobile-first approach */
.visualizations-grid {
  display: grid;
  grid-template-columns: 1fr;                    /* Mobile: single column */
}

@media (min-width: 768px) {
  .visualizations-grid {
    grid-template-columns: repeat(2, 1fr);       /* Tablet: two columns */
  }
}

@media (min-width: 1200px) {
  .visualizations-grid {
    grid-template-columns: repeat(3, 1fr);       /* Desktop: three columns */
  }
}
```

### Chart.js Integration Pattern
```javascript
// Consistent chart configuration
function getChartOptions(title) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { ticks: { color: '#ffffff' } },
      x: { ticks: { color: '#ffffff' } }
    }
  };
}
```

## Data Patterns

### Economic Data Model
```javascript
const economicData = {
  gdp: {
    value: Number,        // GDP in dollars
    growthRate: Number    // Annual growth rate (decimal)
  },
  population: {
    value: Number,        // Population count
    growthRate: Number    // Annual growth rate (decimal)
  },
  target: {
    label: String,        // Development goal description
    perCapitaValue: Number // Target per capita income
  }
};
```

### Calculation Patterns
```javascript
// Compound growth formula
function generateGDPProjection() {
  let currentGDP = economicData.gdp.value;
  const projection = [];
  
  for (let year = 0; year < 10; year++) {
    projection.push(currentGDP / 1e9);  // Convert to billions
    currentGDP *= (1 + economicData.gdp.growthRate);
  }
  
  return projection;
}

// Years to target calculation
function calculateYearsToTarget() {
  const currentPerCapita = economicData.gdp.value / economicData.population.value;
  const targetPerCapita = economicData.target.perCapitaValue;
  const netGrowthRate = economicData.gdp.growthRate - economicData.population.growthRate;
  
  return Math.log(targetPerCapita / currentPerCapita) / Math.log(1 + netGrowthRate);
}
```

## Performance Patterns

### Efficient Chart Updates
```javascript
// Reuse existing charts instead of recreation
function updateGDPChart() {
  if (charts.gdp) {
    charts.gdp.data.datasets[0].data = generateGDPProjection();
    charts.gdp.update();  // Smooth animation
  }
}
```

### Event Optimization
```javascript
// Single event listener with delegation
function setupEventListeners() {
  document.addEventListener('input', function(event) {
    if (event.target.matches('input[type="number"], input[type="text"]')) {
      handleInputChange(event);
    }
  });
}
```

### CSS Performance
```css
/* Hardware acceleration for animations */
.chart-card {
  transform: translateZ(0);
  will-change: transform;
}

/* Efficient transitions */
.chart-card:hover {
  transform: translateY(-2px);
  transition: transform 0.3s ease;
}
```

## Deployment Patterns

### Static Site Pattern
- **No Build Process**: Files served directly
- **CDN Dependencies**: Chart.js from jsdelivr
- **Vercel Optimization**: Automatic compression and caching
- **Progressive Enhancement**: Works without JavaScript

### Configuration Pattern
```json
{
  "cleanUrls": true,          // Remove .html extensions
  "trailingSlash": false      // Consistent URL format
}
```

## Error Handling Patterns

### Graceful Degradation
```javascript
// Safe calculation with fallbacks
function calculateMetrics() {
  const gdpPerCapita = economicData.gdp.value / economicData.population.value;
  const yearsToTarget = isFinite(calculated) ? calculated.toFixed(1) : '∞';
  
  return {
    gdpPerCapita: gdpPerCapita || 0,
    yearsToTarget: yearsToTarget || 'N/A'
  };
}
```

### Input Validation
```javascript
function handleInputChange(event) {
  const value = parseFloat(event.target.value);
  if (isNaN(value) || value < 0) return; // Ignore invalid input
  
  // Process valid input
  updateEconomicData(event.target.id, value);
}
```

## Accessibility Patterns

### Semantic HTML Structure
```html
<main class="container">
  <header class="header">
    <h1 class="title">Uganda Economic Dashboard</h1>
  </header>
  
  <section class="forms-section">
    <div class="form-card">
      <h3 class="form-title">GDP Settings</h3>
      <label for="gdp-value">GDP (Billions USD)</label>
      <input type="number" id="gdp-value" aria-describedby="gdp-help">
    </div>
  </section>
</main>
```

### Focus Management
```css
input:focus {
  outline: none;
  border-color: #ffc107;
  box-shadow: 0 0 0 2px rgba(255, 193, 7, 0.2);
}
```

These patterns create a maintainable, performant, and accessible economic dashboard that eliminates framework complexity while providing rich interactivity and professional presentation.
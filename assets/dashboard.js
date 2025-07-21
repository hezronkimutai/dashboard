// Countries Database with Economic Data
const countriesData = {
    'uganda': {
        name: 'Uganda',
        gdp: { value: 34e9, growthRate: 0.063 },
        population: { value: 42.86e6, growthRate: 0.033 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'kenya': {
        name: 'Kenya',
        gdp: { value: 115e9, growthRate: 0.055 },
        population: { value: 54.5e6, growthRate: 0.024 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'tanzania': {
        name: 'Tanzania',
        gdp: { value: 71e9, growthRate: 0.047 },
        population: { value: 61.7e6, growthRate: 0.029 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'rwanda': {
        name: 'Rwanda',
        gdp: { value: 11.1e9, growthRate: 0.085 },
        population: { value: 13.5e6, growthRate: 0.025 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'ethiopia': {
        name: 'Ethiopia',
        gdp: { value: 127e9, growthRate: 0.063 },
        population: { value: 120e6, growthRate: 0.025 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'ghana': {
        name: 'Ghana',
        gdp: { value: 76e9, growthRate: 0.038 },
        population: { value: 32.8e6, growthRate: 0.021 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'nigeria': {
        name: 'Nigeria',
        gdp: { value: 441e9, growthRate: 0.025 },
        population: { value: 218e6, growthRate: 0.026 },
        target: { label: 'Upper Middle Income', perCapitaValue: 4045 }
    },
    'south-africa': {
        name: 'South Africa',
        gdp: { value: 419e9, growthRate: 0.012 },
        population: { value: 60e6, growthRate: 0.013 },
        target: { label: 'Upper Middle Income', perCapitaValue: 4045 }
    },
    'egypt': {
        name: 'Egypt',
        gdp: { value: 469e9, growthRate: 0.035 },
        population: { value: 105e6, growthRate: 0.018 },
        target: { label: 'Upper Middle Income', perCapitaValue: 4045 }
    },
    'morocco': {
        name: 'Morocco',
        gdp: { value: 133e9, growthRate: 0.032 },
        population: { value: 37.5e6, growthRate: 0.011 },
        target: { label: 'Upper Middle Income', perCapitaValue: 4045 }
    },
    'senegal': {
        name: 'Senegal',
        gdp: { value: 27e9, growthRate: 0.055 },
        population: { value: 17.2e6, growthRate: 0.028 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'ivory-coast': {
        name: 'Ivory Coast',
        gdp: { value: 70e9, growthRate: 0.065 },
        population: { value: 27.5e6, growthRate: 0.025 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'cameroon': {
        name: 'Cameroon',
        gdp: { value: 45e9, growthRate: 0.032 },
        population: { value: 27.2e6, growthRate: 0.026 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'zambia': {
        name: 'Zambia',
        gdp: { value: 26e9, growthRate: 0.042 },
        population: { value: 19.6e6, growthRate: 0.029 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'botswana': {
        name: 'Botswana',
        gdp: { value: 18e9, growthRate: 0.035 },
        population: { value: 2.4e6, growthRate: 0.019 },
        target: { label: 'Upper Middle Income', perCapitaValue: 4045 }
    },
    'mauritius': {
        name: 'Mauritius',
        gdp: { value: 14e9, growthRate: 0.028 },
        population: { value: 1.3e6, growthRate: 0.003 },
        target: { label: 'High Income', perCapitaValue: 12695 }
    },
    'tunisia': {
        name: 'Tunisia',
        gdp: { value: 46e9, growthRate: 0.022 },
        population: { value: 12e6, growthRate: 0.01 },
        target: { label: 'Upper Middle Income', perCapitaValue: 4045 }
    },
    'algeria': {
        name: 'Algeria',
        gdp: { value: 191e9, growthRate: 0.018 },
        population: { value: 45e6, growthRate: 0.018 },
        target: { label: 'Upper Middle Income', perCapitaValue: 4045 }
    },
    'angola': {
        name: 'Angola',
        gdp: { value: 123e9, growthRate: 0.02 },
        population: { value: 34e6, growthRate: 0.032 },
        target: { label: 'Upper Middle Income', perCapitaValue: 4045 }
    },
    'mozambique': {
        name: 'Mozambique',
        gdp: { value: 16e9, growthRate: 0.045 },
        population: { value: 32.2e6, growthRate: 0.029 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'madagascar': {
        name: 'Madagascar',
        gdp: { value: 15e9, growthRate: 0.038 },
        population: { value: 29e6, growthRate: 0.026 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'mali': {
        name: 'Mali',
        gdp: { value: 19e9, growthRate: 0.035 },
        population: { value: 21.5e6, growthRate: 0.03 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'burkina-faso': {
        name: 'Burkina Faso',
        gdp: { value: 17e9, growthRate: 0.042 },
        population: { value: 22.1e6, growthRate: 0.029 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'niger': {
        name: 'Niger',
        gdp: { value: 13e9, growthRate: 0.035 },
        population: { value: 25.3e6, growthRate: 0.038 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'chad': {
        name: 'Chad',
        gdp: { value: 11e9, growthRate: 0.025 },
        population: { value: 17.2e6, growthRate: 0.03 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'benin': {
        name: 'Benin',
        gdp: { value: 17e9, growthRate: 0.058 },
        population: { value: 12.5e6, growthRate: 0.026 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'togo': {
        name: 'Togo',
        gdp: { value: 8e9, growthRate: 0.052 },
        population: { value: 8.4e6, growthRate: 0.024 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'guinea': {
        name: 'Guinea',
        gdp: { value: 16e9, growthRate: 0.045 },
        population: { value: 13.5e6, growthRate: 0.026 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'sierra-leone': {
        name: 'Sierra Leone',
        gdp: { value: 4e9, growthRate: 0.042 },
        population: { value: 8.2e6, growthRate: 0.021 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'liberia': {
        name: 'Liberia',
        gdp: { value: 3.2e9, growthRate: 0.048 },
        population: { value: 5.2e6, growthRate: 0.025 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'gambia': {
        name: 'Gambia',
        gdp: { value: 2e9, growthRate: 0.052 },
        population: { value: 2.5e6, growthRate: 0.029 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'cape-verde': {
        name: 'Cape Verde',
        gdp: { value: 2e9, growthRate: 0.035 },
        population: { value: 0.56e6, growthRate: 0.011 },
        target: { label: 'Upper Middle Income', perCapitaValue: 4045 }
    },
    'djibouti': {
        name: 'Djibouti',
        gdp: { value: 3.5e9, growthRate: 0.065 },
        population: { value: 1e6, growthRate: 0.015 },
        target: { label: 'Upper Middle Income', perCapitaValue: 4045 }
    },
    'eritrea': {
        name: 'Eritrea',
        gdp: { value: 2.1e9, growthRate: 0.025 },
        population: { value: 3.6e6, growthRate: 0.018 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'somalia': {
        name: 'Somalia',
        gdp: { value: 5.2e9, growthRate: 0.035 },
        population: { value: 16.4e6, growthRate: 0.029 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'sudan': {
        name: 'Sudan',
        gdp: { value: 34e9, growthRate: 0.015 },
        population: { value: 45.7e6, growthRate: 0.024 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'south-sudan': {
        name: 'South Sudan',
        gdp: { value: 3.1e9, growthRate: 0.02 },
        population: { value: 11.4e6, growthRate: 0.019 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'central-african-republic': {
        name: 'Central African Republic',
        gdp: { value: 2.3e9, growthRate: 0.025 },
        population: { value: 5e6, growthRate: 0.021 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'democratic-republic-congo': {
        name: 'Democratic Republic of Congo',
        gdp: { value: 55e9, growthRate: 0.045 },
        population: { value: 95.9e6, growthRate: 0.032 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'republic-congo': {
        name: 'Republic of Congo',
        gdp: { value: 12e9, growthRate: 0.028 },
        population: { value: 5.7e6, growthRate: 0.025 },
        target: { label: 'Upper Middle Income', perCapitaValue: 4045 }
    },
    'gabon': {
        name: 'Gabon',
        gdp: { value: 19e9, growthRate: 0.025 },
        population: { value: 2.3e6, growthRate: 0.022 },
        target: { label: 'Upper Middle Income', perCapitaValue: 4045 }
    },
    'equatorial-guinea': {
        name: 'Equatorial Guinea',
        gdp: { value: 12e9, growthRate: 0.018 },
        population: { value: 1.5e6, growthRate: 0.032 },
        target: { label: 'High Income', perCapitaValue: 12695 }
    },
    'sao-tome-principe': {
        name: 'São Tomé and Príncipe',
        gdp: { value: 0.47e9, growthRate: 0.035 },
        population: { value: 0.22e6, growthRate: 0.019 },
        target: { label: 'Upper Middle Income', perCapitaValue: 4045 }
    },
    'comoros': {
        name: 'Comoros',
        gdp: { value: 1.2e9, growthRate: 0.025 },
        population: { value: 0.88e6, growthRate: 0.022 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'seychelles': {
        name: 'Seychelles',
        gdp: { value: 1.7e9, growthRate: 0.035 },
        population: { value: 0.099e6, growthRate: 0.008 },
        target: { label: 'High Income', perCapitaValue: 12695 }
    },
    'malawi': {
        name: 'Malawi',
        gdp: { value: 12e9, growthRate: 0.042 },
        population: { value: 19.9e6, growthRate: 0.026 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'zimbabwe': {
        name: 'Zimbabwe',
        gdp: { value: 26e9, growthRate: 0.035 },
        population: { value: 15.2e6, growthRate: 0.018 },
        target: { label: 'Upper Middle Income', perCapitaValue: 4045 }
    },
    'namibia': {
        name: 'Namibia',
        gdp: { value: 12e9, growthRate: 0.025 },
        population: { value: 2.5e6, growthRate: 0.018 },
        target: { label: 'Upper Middle Income', perCapitaValue: 4045 }
    },
    'lesotho': {
        name: 'Lesotho',
        gdp: { value: 2.5e9, growthRate: 0.025 },
        population: { value: 2.2e6, growthRate: 0.012 },
        target: { label: 'Upper Middle Income', perCapitaValue: 4045 }
    },
    'eswatini': {
        name: 'Eswatini',
        gdp: { value: 4.7e9, growthRate: 0.022 },
        population: { value: 1.2e6, growthRate: 0.01 },
        target: { label: 'Upper Middle Income', perCapitaValue: 4045 }
    },
    'burundi': {
        name: 'Burundi',
        gdp: { value: 3.1e9, growthRate: 0.038 },
        population: { value: 12.6e6, growthRate: 0.031 },
        target: { label: 'Lower Middle Income', perCapitaValue: 1025 }
    },
    'libya': {
        name: 'Libya',
        gdp: { value: 48e9, growthRate: 0.025 },
        population: { value: 6.9e6, growthRate: 0.013 },
        target: { label: 'Upper Middle Income', perCapitaValue: 4045 }
    }
};

// Current selected country and economic data
let currentCountry = 'uganda';
let economicData = {};

// Chart instances
let charts = {};

// Chart.js default configuration
Chart.defaults.color = '#ffffff';
Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    loadCountryData(currentCountry);
    initializeCharts();
    setupEventListeners();
    updateAllDisplays();
});

// Load country data
function loadCountryData(countryCode) {
    if (countriesData[countryCode]) {
        economicData = JSON.parse(JSON.stringify(countriesData[countryCode]));
        currentCountry = countryCode;
        updateCountryTitle();
        updateFormInputs();
    }
}

// Update dashboard title
function updateCountryTitle() {
    const titleElement = document.getElementById('dashboard-title');
    const countrySelect = document.getElementById('country-select');
    if (titleElement && economicData.name) {
        titleElement.textContent = `${economicData.name} Economic Dashboard`;
    }
    if (countrySelect) {
        countrySelect.value = currentCountry;
    }
}

// Update form inputs with current country data
function updateFormInputs() {
    document.getElementById('gdp-value').value = (economicData.gdp.value / 1e9).toFixed(1);
    document.getElementById('gdp-growth').value = (economicData.gdp.growthRate * 100).toFixed(1);
    document.getElementById('population-value').value = (economicData.population.value / 1e6).toFixed(2);
    document.getElementById('population-growth').value = (economicData.population.growthRate * 100).toFixed(1);
    document.getElementById('target-label').value = economicData.target.label;
    document.getElementById('target-value').value = economicData.target.perCapitaValue;
}

// Handle country selection change
function handleCountryChange(event) {
    const selectedCountry = event.target.value;
    loadCountryData(selectedCountry);
    updateAllDisplays();
    updateAllCharts();
}

// Setup form event listeners
function setupEventListeners() {
    const inputs = [
        'gdp-value', 'gdp-growth',
        'population-value', 'population-growth',
        'target-label', 'target-value'
    ];
    
    inputs.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', handleInputChange);
        }
    });

    // Add country selector event listener
    const countrySelect = document.getElementById('country-select');
    if (countrySelect) {
        countrySelect.addEventListener('change', handleCountryChange);
    }
}

// Handle input changes
function handleInputChange(event) {
    const id = event.target.id;
    const value = event.target.value;
    
    switch(id) {
        case 'gdp-value':
            economicData.gdp.value = parseFloat(value) * 1e9;
            break;
        case 'gdp-growth':
            economicData.gdp.growthRate = parseFloat(value) / 100;
            break;
        case 'population-value':
            economicData.population.value = parseFloat(value) * 1e6;
            break;
        case 'population-growth':
            economicData.population.growthRate = parseFloat(value) / 100;
            break;
        case 'target-label':
            economicData.target.label = value;
            break;
        case 'target-value':
            economicData.target.perCapitaValue = parseFloat(value);
            break;
    }
    
    updateAllDisplays();
    updateAllCharts();
}

// Calculate derived metrics
function calculateMetrics() {
    const gdpPerCapita = economicData.gdp.value / economicData.population.value;
    const perCapitaGrowthRate = economicData.gdp.growthRate - economicData.population.growthRate;
    const progressToTarget = (gdpPerCapita / economicData.target.perCapitaValue) * 100;
    
    // Calculate years to reach target (compound growth formula)
    const yearsToTarget = Math.log(economicData.target.perCapitaValue / gdpPerCapita) / 
                         Math.log(1 + perCapitaGrowthRate);
    
    return {
        gdpPerCapita,
        perCapitaGrowthRate,
        progressToTarget,
        yearsToTarget: Math.max(0, yearsToTarget)
    };
}

// Update all display values
function updateAllDisplays() {
    const metrics = calculateMetrics();
    
    // GDP Display
    document.getElementById('gdp-display').textContent = 
        `$${(economicData.gdp.value / 1e9).toFixed(1)}B`;
    document.getElementById('gdp-growth-display').textContent = 
        `${(economicData.gdp.growthRate * 100).toFixed(1)}% Growth`;
    
    // Per Capita Display
    document.getElementById('per-capita-display').textContent = 
        `$${Math.round(metrics.gdpPerCapita)}`;
    document.getElementById('per-capita-growth-display').textContent = 
        `${(metrics.perCapitaGrowthRate * 100).toFixed(1)}% Growth`;
    
    // Growth Rate Display
    document.getElementById('gdp-growth-rate-display').textContent = 
        `${(economicData.gdp.growthRate * 100).toFixed(1)}%`;
    
    // Per Capita Growth Rate Display
    document.getElementById('per-capita-growth-rate-display').textContent = 
        `${(metrics.perCapitaGrowthRate * 100).toFixed(1)}%`;
    
    // Progress Display
    document.getElementById('progress-display').textContent = 
        `${Math.min(100, metrics.progressToTarget).toFixed(1)}%`;
    
    // Years Display
    document.getElementById('years-display').textContent = 
        isFinite(metrics.yearsToTarget) ? metrics.yearsToTarget.toFixed(1) : '∞';
}

// Initialize all charts
function initializeCharts() {
    createGDPChart();
    createPerCapitaChart();
    createGDPGrowthChart();
    createPerCapitaGrowthChart();
    createMiddleIncomeChart();
    createTimeToMiddleChart();
}

// Create GDP Chart
function createGDPChart() {
    const ctx = document.getElementById('gdp-chart').getContext('2d');
    const years = generateYearRange();
    const gdpProjection = generateGDPProjection();
    
    charts.gdp = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                label: 'GDP (Billions USD)',
                data: gdpProjection,
                borderColor: '#ffc107',
                backgroundColor: 'rgba(255, 193, 7, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: getChartOptions('GDP Growth Projection')
    });
}

// Create Per Capita Chart
function createPerCapitaChart() {
    const ctx = document.getElementById('per-capita-chart').getContext('2d');
    const years = generateYearRange();
    const perCapitaProjection = generatePerCapitaProjection();
    
    charts.perCapita = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                label: 'GDP Per Capita (USD)',
                data: perCapitaProjection,
                borderColor: '#4caf50',
                backgroundColor: 'rgba(76, 175, 80, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: getChartOptions('Per Capita Growth Projection')
    });
}

// Create GDP Growth Rate Chart
function createGDPGrowthChart() {
    const ctx = document.getElementById('gdp-growth-chart').getContext('2d');
    
    charts.gdpGrowth = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Growth Rate', 'Remaining'],
            datasets: [{
                data: [economicData.gdp.growthRate * 100, 100 - (economicData.gdp.growthRate * 100)],
                backgroundColor: ['#ffc107', 'rgba(255, 255, 255, 0.1)'],
                borderWidth: 0
            }]
        },
        options: getDoughnutOptions()
    });
}

// Create Per Capita Growth Chart
function createPerCapitaGrowthChart() {
    const ctx = document.getElementById('per-capita-growth-chart').getContext('2d');
    const metrics = calculateMetrics();
    
    charts.perCapitaGrowth = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Per Capita Growth', 'Remaining'],
            datasets: [{
                data: [metrics.perCapitaGrowthRate * 100, 100 - (metrics.perCapitaGrowthRate * 100)],
                backgroundColor: ['#4caf50', 'rgba(255, 255, 255, 0.1)'],
                borderWidth: 0
            }]
        },
        options: getDoughnutOptions()
    });
}

// Create Middle Income Progress Chart
function createMiddleIncomeChart() {
    const ctx = document.getElementById('middle-income-chart').getContext('2d');
    const metrics = calculateMetrics();
    const progress = Math.min(100, metrics.progressToTarget);
    
    charts.middleIncome = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Progress', 'Remaining'],
            datasets: [{
                data: [progress, 100 - progress],
                backgroundColor: ['#ff9800', 'rgba(255, 255, 255, 0.1)'],
                borderWidth: 0
            }]
        },
        options: getDoughnutOptions()
    });
}

// Create Time to Middle Income Chart
function createTimeToMiddleChart() {
    const ctx = document.getElementById('time-to-middle-chart').getContext('2d');
    const metrics = calculateMetrics();
    const yearsToTarget = Math.min(20, metrics.yearsToTarget);
    
    charts.timeToMiddle = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Years to Target'],
            datasets: [{
                label: 'Years',
                data: [yearsToTarget],
                backgroundColor: '#e91e63',
                borderColor: '#e91e63',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 20,
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
    });
}

// Update all charts
function updateAllCharts() {
    updateGDPChart();
    updatePerCapitaChart();
    updateGDPGrowthChart();
    updatePerCapitaGrowthChart();
    updateMiddleIncomeChart();
    updateTimeToMiddleChart();
}

// Update GDP Chart
function updateGDPChart() {
    if (charts.gdp) {
        charts.gdp.data.datasets[0].data = generateGDPProjection();
        charts.gdp.update();
    }
}

// Update Per Capita Chart
function updatePerCapitaChart() {
    if (charts.perCapita) {
        charts.perCapita.data.datasets[0].data = generatePerCapitaProjection();
        charts.perCapita.update();
    }
}

// Update GDP Growth Chart
function updateGDPGrowthChart() {
    if (charts.gdpGrowth) {
        const growthRate = economicData.gdp.growthRate * 100;
        charts.gdpGrowth.data.datasets[0].data = [growthRate, 100 - growthRate];
        charts.gdpGrowth.update();
    }
}

// Update Per Capita Growth Chart
function updatePerCapitaGrowthChart() {
    if (charts.perCapitaGrowth) {
        const metrics = calculateMetrics();
        const growthRate = metrics.perCapitaGrowthRate * 100;
        charts.perCapitaGrowth.data.datasets[0].data = [growthRate, 100 - growthRate];
        charts.perCapitaGrowth.update();
    }
}

// Update Middle Income Chart
function updateMiddleIncomeChart() {
    if (charts.middleIncome) {
        const metrics = calculateMetrics();
        const progress = Math.min(100, metrics.progressToTarget);
        charts.middleIncome.data.datasets[0].data = [progress, 100 - progress];
        charts.middleIncome.update();
    }
}

// Update Time to Middle Chart
function updateTimeToMiddleChart() {
    if (charts.timeToMiddle) {
        const metrics = calculateMetrics();
        const yearsToTarget = Math.min(20, metrics.yearsToTarget);
        charts.timeToMiddle.data.datasets[0].data = [yearsToTarget];
        charts.timeToMiddle.update();
    }
}

// Helper Functions
function generateYearRange() {
    const currentYear = new Date().getFullYear();
    return Array.from({length: 10}, (_, i) => currentYear + i);
}

function generateGDPProjection() {
    const projection = [];
    let currentGDP = economicData.gdp.value / 1e9;
    
    for (let i = 0; i < 10; i++) {
        projection.push(currentGDP);
        currentGDP *= (1 + economicData.gdp.growthRate);
    }
    
    return projection;
}

function generatePerCapitaProjection() {
    const projection = [];
    let currentGDP = economicData.gdp.value;
    let currentPop = economicData.population.value;
    
    for (let i = 0; i < 10; i++) {
        projection.push(currentGDP / currentPop);
        currentGDP *= (1 + economicData.gdp.growthRate);
        currentPop *= (1 + economicData.population.growthRate);
    }
    
    return projection;
}

function getChartOptions(title) {
    return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#ffffff'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            x: {
                ticks: {
                    color: '#ffffff'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            }
        }
    };
}

function getDoughnutOptions() {
    return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        cutout: '70%'
    };
}
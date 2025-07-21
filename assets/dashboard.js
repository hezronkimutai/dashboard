// Economic Data State
let economicData = {
    gdp: {
        value: 34e9, // $34 billion
        growthRate: 0.063 // 6.3%
    },
    population: {
        value: 42.86e6, // 42.86 million
        growthRate: 0.033 // 3.3%
    },
    target: {
        label: 'Lower Middle Income',
        perCapitaValue: 1025 // $1,025
    }
};

// Chart instances
let charts = {};

// Chart.js default configuration
Chart.defaults.color = '#ffffff';
Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    setupEventListeners();
    updateAllDisplays();
});

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
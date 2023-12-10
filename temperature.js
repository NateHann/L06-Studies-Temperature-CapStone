// Get initial temperature metric from user - Change to uppercase so that lowercase doesn't cause error
let fromMetric = prompt((`In which metric is the temperature you are converting?
C - Celsius
K - Kelvin
F - Fahrenheit.`).toUpperCase());

//Get temperature to convert
let inputTemp = prompt('Enter the temperature value:');
//Cast number to float
let floatInputTemp = parseFloat(inputTemp);

// Get target temperature metric from user - Change to uppercase so that lowercase doesn't cause error
let toMetric = prompt(`In which metric is the temperature you are converting?
C - Celsius
K - Kelvin
F - Fahrenheit.`).toUpperCase();

// Convert temperature- provide variable to calculate to
let result;

    // Convert Celsius to Fahrenheit
if (fromMetric === 'C' && toMetric === 'F') {
    result = (floatInputTemp * 9/5) + 32;
    // Convert Fahrenheit to Celsius
} else if (fromMetric === 'F' && toMetric === 'C') {
     result = (floatInputTemp - 32) * 5/9;
     // Convert Kelvin to Fahrenheit
} else if (fromMetric === 'K' && toMetric === 'F') {
    result = (floatInputTemp * 9/5) - 459.67;
    // Convert Fahrenheit to Kelvin
} else if (fromMetric === 'F' && toMetric === 'K') {
    result = (floatInputTemp + 459.67) * 5/9;
    // Convert Celsius to Kelvin
} else if (fromMetric === 'C' && toMetric === 'K') {
    result = floatInputTemp + 273.15;
    // Convert Kelvin to Celsius
} else if (fromMetric === 'K' && toMetric === 'C') {
    result = floatInputTemp - 273.15;
} else {
    
//Inform user of incorrect input (example entry of a character other than the choices given)
console.log('Invalid character entered. Please check your input.');
alert('Invalid character entered. Please check your input.');
}
result = result.toFixed(2);

// Defining metric symbol to add to result 
//*NOTE TO MENTOR - Did not know how to output result as requested in task description other than doing the below,had to research how to do function.

const fromMetricSymbol = getMetricSymbol(fromMetric);
const toMetricSymbol = getMetricSymbol(toMetric);

function getMetricSymbol(metric) {
    if (metric === 'C') {
        return '°C';
    } else if (metric === 'K') {
        return 'K';
    } else if (metric === 'F') {
        return '°F';
    } else {
        return '';
    }
}
// Log result and show result to user
console.log(`${inputTemp}${fromMetricSymbol} is ${result}${toMetricSymbol}`);
alert(`Converted temperature: ${inputTemp}${fromMetricSymbol} is ${result}${toMetricSymbol}`);

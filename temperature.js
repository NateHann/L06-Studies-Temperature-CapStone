document.addEventListener('DOMContentLoaded', () => {
    // Attach event listener to the button
    document.querySelector('button').addEventListener('click', convertTemperature);
});

function convertTemperature() {
    // Get input value and selected conversion types
    let inputTemp = parseFloat(document.getElementById('tempInput').value);
    let fromToMetric = document.getElementById('tempType').value;

    let result;

    // Determine conversion based on selection
    switch(fromToMetric) {
        case 'celsiusToFahrenheit':
            result = (inputTemp * 9/5) + 32;
            break;
        case 'fahrenheitToCelsius':
            result = (inputTemp - 32) * 5/9;
            break;
        case 'celsiusToKelvin':
            result = inputTemp + 273.15;
            break;
        case 'kelvinToCelsius':
            result = inputTemp - 273.15;
            break;
        case 'fahrenheitToKelvin':
            result = (inputTemp + 459.67) * 5/9;
            break;
        case 'kelvinToFahrenheit':
            result = (inputTemp * 9/5) - 459.67;
            break;
        default:
            document.getElementById('result').textContent = 'Please select a valid conversion.';
            return;
    }

    // Format and display result
    result = result.toFixed(2); // Round to two decimal places
    document.getElementById('result').textContent = `Converted temperature: ${result} ${getMetricSymbol(fromToMetric)}`;
}

function getMetricSymbol(conversionType) {
    switch(conversionType) {
        case 'celsiusToFahrenheit':
        case 'kelvinToFahrenheit':
            return '°F';
        case 'fahrenheitToCelsius':
        case 'kelvinToCelsius':
            return '°C';
        case 'celsiusToKelvin':
        case 'fahrenheitToKelvin':
            return 'K';
        default:
            return '';
    }
}

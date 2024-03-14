const measurementType = document.getElementById('measurementType');
const inputValue = document.getElementById('inputValue');
const outputValue = document.getElementById('outputValue');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');

measurementType.addEventListener('change', () => {
    updateUnits();
    convert();
});

inputValue.addEventListener('input', convert);

function updateUnits() {
    const type = measurementType.value;
    switch (type) {
        case 'volume':
            fromUnit.textContent = 'Liters';
            toUnit.textContent = 'Gallons';
            break;
        case 'distance':
            fromUnit.textContent = 'Meters';
            toUnit.textContent = 'Feet';
            break;
        case 'weight':
            fromUnit.textContent = 'Kilograms';
            toUnit.textContent = 'Pounds';
            break;
        case 'height':
            fromUnit.textContent = 'Centimeters';
            toUnit.textContent = 'Inches';
            break;
        case 'speed':
            fromUnit.textContent = 'Kilometers per hour';
            toUnit.textContent = 'Miles per hour';
            break;
    }
}

function convert() {
    const type = measurementType.value;
    const value = parseFloat(inputValue.value);

    switch (type) {
        case 'volume':
            outputValue.value = (value * 0.264172).toFixed(2);
            break;
        case 'distance':
            outputValue.value = (value * 3.28084).toFixed(2);
            break;
        case 'weight':
            outputValue.value = (value * 2.20462).toFixed(2);
            break;
        case 'height':
            outputValue.value = (value * 0.393701).toFixed(2);
            break;
        case 'speed':
            outputValue.value = (value * 0.621371).toFixed(2);
            break;
    }
}
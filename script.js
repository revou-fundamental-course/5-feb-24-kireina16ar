function init() {
    document.getElementById('temperature-form').addEventListener('submit', function(event) {
        event.preventDefault();
        reverseFocusOnUnit();
    });
}

function reverseFocusOnUnit() {
    var unitInput = document.getElementById('unit');
    unitInput.focus();
}

function convert() {
    var temperatureValue = parseFloat(document.getElementById('temperature').value);
    var unit = document.getElementById('unit').value;
    var resultContainer = document.getElementById('result-container');
    var resultElement = document.getElementById('result');

    if (isNaN(temperatureValue)) {
        alert('Masukkan suhu yang valid.');
        return;
    }

    var result;
    var calculationSteps;

    if (unit === 'celsius') {
        result = (temperatureValue * 9/5) + 32;
        calculationSteps = temperatureValue + '°C sama dengan ' + result.toFixed(2) + '°F';
    } else {
        result = (temperatureValue - 32) * 5/9;
        calculationSteps = temperatureValue + '°F sama dengan ' + result.toFixed(2) + '°C';
    }

    resultElement.textContent = calculationSteps;

    var formulaElement = document.createElement('p');
    if (unit === 'celsius') {
        var formula = 'S(°F) = (' + temperatureValue + '°C × 9/5) + 32';
        formulaElement.textContent = formula + ' = ' + result.toFixed(2) + '°F';
    } else {
        var formula = 'S(°C) = (' + temperatureValue + '°F - 32) × 5/9';
        formulaElement.textContent = formula + ' = ' + result.toFixed(2) + '°C';
    }
    resultContainer.appendChild(formulaElement);

    resultContainer.style.display = 'block';
}
  
function reset() {
    document.getElementById('temperature').value = '';
    document.getElementById('unit').value = 'celsius';
    clearResultContainer();
    document.getElementById('result-container').style.display = 'none';
}
  
  function reverse() {
    var temperatureValue = parseFloat(document.getElementById('temperature').value);
    var unit = document.getElementById('unit').value;
  
    if (isNaN(temperatureValue)) {
      alert('Masukkan suhu yang valid.');
      return;
    }
  
    if (unit === 'celsius') {
      document.getElementById('unit').value = 'fahrenheit';
    } else {
      document.getElementById('unit').value = 'celsius';
    }
  }
  
  function clearAll() {
    document.getElementById('temperature').value = '';
    document.getElementById('unit').value = 'celsius';
    document.getElementById('result-container').style.display = 'none';

    // Mengarahkan kembali ke index.html
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', init);
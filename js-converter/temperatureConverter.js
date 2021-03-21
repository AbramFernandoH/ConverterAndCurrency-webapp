const btnConvertTemp = document.querySelector('#btn-convert-temperature');
const baseInput = document.querySelector('#temperatureBaseInput');
const baseUnit = document.querySelector('#temperatureBase');
const resultInput = document.querySelector('#temperatureResultInput');
const resultUnit = document.querySelector('#temperatureResult');

class ConvertTemperature {
  constructor(baseUnit, resultUnit){
    this.baseUnit = baseUnit;
    this.resultUnit = resultUnit;
  }

  convertFromCel(){
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'C') {
      case (toUnit === 'C'):
        resultInput.value = baseInput.value;
        break;
    
      case (toUnit === 'F'):
        resultInput.value = (1.8 * baseInput.value) + 32;
        break;
    
      case (toUnit === 'K'):
        resultInput.value = parseFloat(baseInput.value) + 273.15;
        break;
    
      case (toUnit === 'R'):
        resultInput.value = baseInput.value * 0.8;
        break;
    
      default:
        break;
    }
  }

  convertFromFah(){
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'F') {
      case (toUnit === 'C'):
        resultInput.value = 5/9 * (parseFloat(baseInput.value) - 32);
        break;
    
      case (toUnit === 'F'):
        resultInput.value = baseInput.value;
        break;
    
      case (toUnit === 'K'):
        resultInput.value = 5/9 * (parseFloat(baseInput.value) + 459.67);
        break;
    
      case (toUnit === 'R'):
        resultInput.value = 4/9 * (parseFloat(baseInput.value) - 32);
        break;
    
      default:
        break;
    }
  }

  convertFromKel(){
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'K') {
      case (toUnit === 'C'):
        resultInput.value = parseFloat(baseInput.value) - 273.15;
        break;
    
      case (toUnit === 'F'):
        resultInput.value = parseFloat(baseInput.value) * (9/5) - 459.67;
        break;
    
      case (toUnit === 'K'):
        resultInput.value = baseInput.value;
        break;
    
      case (toUnit === 'R'):
        resultInput.value = 0.8 * (parseFloat(baseInput.value) - 273.15);
        break;
    
      default:
        break;
    }
  }

  convertFromRea(){
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'R') {
      case (toUnit === 'C'):
        resultInput.value = baseInput.value * 1.25;
        break;
    
      case (toUnit === 'F'):
        resultInput.value = parseFloat(baseInput.value) * (9/4) + 32;
        break;
    
      case (toUnit === 'K'):
        resultInput.value = baseInput.value * 1.25 + 273.15;
        break;
    
      case (toUnit === 'R'):
        resultInput.value = baseInput.value;
        break;
    
      default:
        break;
    }
  }

}

btnConvertTemp.addEventListener('click', function(evt) {
  evt.preventDefault();
  
  if(baseInput.value === ''){
    alert('Fill value to convert!');
    baseInput.style.border = '1px solid red';
    return
  }

  const convert = new ConvertTemperature(baseUnit.value, resultUnit.value);

  switch (baseUnit.value) {
    case 'C':
      convert.convertFromCel();
      break;
  
    case 'F':
      convert.convertFromFah();
      break;
  
    case 'K':
      convert.convertFromKel();
      break;
  
    case 'R':
      convert.convertFromRea();
      break;
  
    default:
      break;
  }

  baseInput.style.border = '';
})

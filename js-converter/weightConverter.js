const btnConvertWeight = document.querySelector('#btn-convert-weight');
const baseInput = document.querySelector('#weightBaseInput');
const baseUnit = document.querySelector('#weightBase');
const resultInput = document.querySelector('#weightResultInput');
const resultUnit = document.querySelector('#weightResult');

class ConvertWeight {
  constructor(baseUnit, resultUnit){
    this.baseUnit = baseUnit;
    this.resultUnit = resultUnit;
  }

  convertFromT(){
    const fromUnit = baseUnit.value;
    const toUnit = resultUnit.value;

    switch (fromUnit === 'T') {
      case (toUnit === 'T'):
        resultInput.value = baseInput.value;
        break;
    
      case (toUnit === 'KG'):
        resultInput.value = baseInput.value * 1000;
        break;
    
      case (toUnit === 'G'):
        resultInput.value = baseInput.value * 1000000;
        break;
    
      case (toUnit === 'MG'):
        resultInput.value = baseInput.value * 1000000000;
        break;
    
      case (toUnit === 'CT'):
        resultInput.value = baseInput.value * 5000000;
        break;
    
      case (toUnit === 'OZ'):
        resultInput.value = baseInput.value * 35273.96195;
        break;
    
      case (toUnit === 'LBS'):
        resultInput.value = baseInput.value * 2204.6226218;
        break;
    
      default:
        break;
    }
  }

  convertFromKg(){
    const fromUnit = baseUnit.value;
    const toUnit = resultUnit.value;

    switch (fromUnit === 'KG') {
      case (toUnit === 'T'):
        resultInput.value = baseInput.value * 0.001;
        break;
    
      case (toUnit === 'KG'):
        resultInput.value = baseInput.value;
        break;
    
      case (toUnit === 'G'):
        resultInput.value = baseInput.value * 1000;
        break;
    
      case (toUnit === 'MG'):
        resultInput.value = baseInput.value * 1000000;
        break;
    
      case (toUnit === 'CT'):
        resultInput.value = baseInput.value * 5000;
        break;
    
      case (toUnit === 'OZ'):
        resultInput.value = baseInput.value * 35.27396195;
        break;
    
      case (toUnit === 'LBS'):
        resultInput.value = baseInput.value * 2.2046226218;
        break;
    
      default:
        break;
    }
  }

  convertFromG(){
    const fromUnit = baseUnit.value;
    const toUnit = resultUnit.value;

    switch (fromUnit === 'G') {
      case (toUnit === 'T'):
        resultInput.value = baseInput.value * 0.000001;
        break;
    
      case (toUnit === 'KG'):
        resultInput.value = baseInput.value * 0.001;
        break;
    
      case (toUnit === 'G'):
        resultInput.value = baseInput.value;
        break;
    
      case (toUnit === 'MG'):
        resultInput.value = baseInput.value * 1000;
        break;
    
      case (toUnit === 'CT'):
        resultInput.value = baseInput.value * 5;
        break;
    
      case (toUnit === 'OZ'):
        resultInput.value = baseInput.value * 0.0352739619;
        break;
    
      case (toUnit === 'LBS'):
        resultInput.value = baseInput.value * 0.0022046226;
        break;
    
      default:
        break;
    }
  }

  convertFromMg(){
    const fromUnit = baseUnit.value;
    const toUnit = resultUnit.value;

    switch (fromUnit === 'MG') {
      case (toUnit === 'T'):
        resultInput.value = baseInput.value * 1.E-9;
        break;
    
      case (toUnit === 'KG'):
        resultInput.value = baseInput.value * 0.000001;
        break;
    
      case (toUnit === 'G'):
        resultInput.value = baseInput.value * 0.001;
        break;
    
      case (toUnit === 'MG'):
        resultInput.value = baseInput.value;
        break;
    
      case (toUnit === 'CT'):
        resultInput.value = baseInput.value * 0.005;
        break;
    
      case (toUnit === 'OZ'):
        resultInput.value = baseInput.value * 0.000035274;
        break;
    
      case (toUnit === 'LBS'):
        resultInput.value = baseInput.value * 0.0000022046;
        break;
    
      default:
        break;
    }
  }

  convertFromCt(){
    const fromUnit = baseUnit.value;
    const toUnit = resultUnit.value;

    switch (fromUnit === 'CT') {
      case (toUnit === 'T'):
        resultInput.value = baseInput.value * 2.E-7;
        break;
    
      case (toUnit === 'KG'):
        resultInput.value = baseInput.value * 0.0002;
        break;
    
      case (toUnit === 'G'):
        resultInput.value = baseInput.value * 0.2;
        break;
    
      case (toUnit === 'MG'):
        resultInput.value = baseInput.value * 200;
        break;
    
      case (toUnit === 'CT'):
        resultInput.value = baseInput.value;
        break;
    
      case (toUnit === 'OZ'):
        resultInput.value = baseInput.value * 0.0070547924;
        break;
    
      case (toUnit === 'LBS'):
        resultInput.value = baseInput.value * 0.0004409245;
        break;
    
      default:
        break;
    }
  }

  convertFromOz(){
    const fromUnit = baseUnit.value;
    const toUnit = resultUnit.value;

    switch (fromUnit === 'OZ') {
      case (toUnit === 'T'):
        resultInput.value = baseInput.value * 0.0000283495;
        break;
    
      case (toUnit === 'KG'):
        resultInput.value = baseInput.value * 0.0283495231;
        break;
    
      case (toUnit === 'G'):
        resultInput.value = baseInput.value * 28.349523125;
        break;
    
      case (toUnit === 'MG'):
        resultInput.value = baseInput.value * 28349.523125;
        break;
    
      case (toUnit === 'CT'):
        resultInput.value = baseInput.value * 141.74761563;
        break;
    
      case (toUnit === 'OZ'):
        resultInput.value = baseInput.value;
        break;
    
      case (toUnit === 'LBS'):
        resultInput.value = baseInput.value * 0.0625;
        break;
    
      default:
        break;
    }
  }

  convertFromLbs(){
    const fromUnit = baseUnit.value;
    const toUnit = resultUnit.value;

    switch (fromUnit === 'LBS') {
      case (toUnit === 'T'):
        resultInput.value = baseInput.value * 0.0004535924;
        break;
    
      case (toUnit === 'KG'):
        resultInput.value = baseInput.value * 0.45359237;
        break;
    
      case (toUnit === 'G'):
        resultInput.value = baseInput.value * 453.59237;
        break;
    
      case (toUnit === 'MG'):
        resultInput.value = baseInput.value * 453592.37;
        break;
    
      case (toUnit === 'CT'):
        resultInput.value = baseInput.value * 2267.96185;
        break;
    
      case (toUnit === 'OZ'):
        resultInput.value = baseInput.value * 16;
        break;
    
      case (toUnit === 'LBS'):
        resultInput.value = baseInput.value;
        break;
    
      default:
        break;
    }
  }
}

btnConvertWeight.addEventListener('click', function(evt) {
  evt.preventDefault();
  
  if(baseInput.value === ''){
    alert('Fill value to convert!');
    baseInput.style.border = '1px solid red';
    return
  }

  const convert = new ConvertWeight(baseUnit.value, resultUnit.value);

  switch (baseUnit.value) {
    case 'T':
      convert.convertFromT();
      break;
  
    case 'KG':
      convert.convertFromKg();
      break;
  
    case 'G':
      convert.convertFromG();
      break;
  
    case 'MG':
      convert.convertFromMg();
      break;
  
    case 'CT':
      convert.convertFromCt();
      break;
  
    case 'OZ':
      convert.convertFromOz();
      break;
  
    case 'LBS':
      convert.convertFromLbs();
      break;
  
    default:
      break;
  }

  baseInput.style.border = '';
})

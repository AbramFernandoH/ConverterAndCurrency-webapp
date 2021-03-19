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

  }

  convertFromG(){

  }

  convertFromMg(){

  }

  convertFromCt(){

  }

  convertFromOz(){

  }

  convertFromLbs(){

  }
}

btnConvertWeight.addEventListener('click', function(evt) {
  evt.preventDefault();
  
  if(baseInput.value === ''){
    alert('Fill value to convert!');
    baseInput.style.border = '1px solid red';
    return
  }

  switch (baseUnit.value) {
    case 'T':
      
      break;
  
    case 'KG':
      
      break;
  
    case 'G':
      
      break;
  
    case 'MG':
      
      break;
  
    case 'CT':
      
      break;
  
    case 'OZ':
      
      break;
  
    case 'LBS':
      
      break;
  
    default:
      break;
  }

  baseInput.style.border = '';
})

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
        
        break;
    
      case (toUnit === 'KG'):
        
        break;
    
      case (toUnit === 'G'):
        
        break;
    
      case (toUnit === 'MG'):
        
        break;
    
      case (toUnit === 'CT'):
        
        break;
    
      case (toUnit === 'OZ'):
        
        break;
    
      case (toUnit === 'LBS'):
        
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

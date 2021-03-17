const btnConvertVolume = document.querySelector('#btn-convert-volume');
const baseInput = document.querySelector('#volumeBaseInput');
const baseUnit = document.querySelector('#volumeBase');
const resultInput = document.querySelector('#volumeResultInput');
const resultUnit = document.querySelector('#volumeResult');

class convertVolume {
  constructor(baseUnit, resultUnit){
    this.baseUnit = baseUnit;
    this.resultUnit = resultUnit;
  }

  convertFromM3(){
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'M3') {
      case (toUnit === 'M3'):
        resultInput.value = baseInput.value;
        break;
    
      case (toUnit === 'CM3'):
        resultInput.value = baseInput.value * 1000000;
        break;
    
      case (toUnit === 'FT3'):
        resultInput.value = baseInput.value * 35.314666721;
        break;
    
      case (toUnit === 'L'):
        resultInput.value = baseInput.value * 1000;
        break;
    
      case (toUnit === 'ML'):
        resultInput.value = baseInput.value * 1000000;
        break;
    
      case (toUnit === 'OZ'):
        resultInput.value = baseInput.value * 33814.022702;
        break;
    
      default:
        break;
    }
  }

  convertFromCm3(){
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'CM3') {
      case (toUnit === 'M3'):
        resultInput.value = baseInput.value * 0.000001;
        break;
    
      case (toUnit === 'CM3'):
        resultInput.value = baseInput.value;
        break;
    
      case (toUnit === 'FT3'):
        resultInput.value = baseInput.value * 0.0000353147;
        break;
    
      case (toUnit === 'L'):
        resultInput.value = baseInput.value * 0.001;
        break;
    
      case (toUnit === 'ML'):
        resultInput.value = baseInput.value * 1000;
        break;
    
      case (toUnit === 'OZ'):
        resultInput.value = baseInput.value * 0.0338140227;
        break;
    
      default:
        break;
    }
  }

  convertFromFt3(){
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'FT3') {
      case (toUnit === 'M3'):
        resultInput.value = baseInput.value * 0.0283168466;
        break;
    
      case (toUnit === 'CM3'):
        resultInput.value = baseInput.value * 28316.846592;
        break;
    
      case (toUnit === 'FT3'):
        resultInput.value = baseInput.value;
        break;
    
      case (toUnit === 'L'):
        resultInput.value = baseInput.value * 28.316846592;
        break;
    
      case (toUnit === 'ML'):
        resultInput.value = baseInput.value * 28316846.592;
        break;
    
      case (toUnit === 'OZ'):
        resultInput.value = baseInput.value * 957.50649351;
        break;
    
      default:
        break;
    }
  }

  convertFromL(){
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'L') {
      case (toUnit === 'M3'):
        resultInput.value = baseInput.value * 0.001;
        break;
    
      case (toUnit === 'CM3'):
        resultInput.value = baseInput.value * 1000;
        break;
    
      case (toUnit === 'FT3'):
        resultInput.value = baseInput.value * 0.0353146667;
        break;
    
      case (toUnit === 'L'):
        resultInput.value = baseInput.value * 0.0295735296;
        break;
    
      case (toUnit === 'ML'):
        resultInput.value = baseInput.value * 1000;
        break;
    
      case (toUnit === 'OZ'):
        resultInput.value = baseInput.value * 33.814022702;
        break;
    
      default:
        break;
    }
  }

  convertFromMl(){
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'ML') {
      case (toUnit === 'M3'):
        resultInput.value = baseInput.value * 0.000001;
        break;
    
      case (toUnit === 'CM3'):
        resultInput.value = baseInput.value;
        break;
    
      case (toUnit === 'FT3'):
        resultInput.value = baseInput.value * 0.0353146667;
        break;
    
      case (toUnit === 'L'):
        resultInput.value = baseInput.value * 0.001;
        break;
    
      case (toUnit === 'ML'):
        resultInput.value = baseInput.value;
        break;
    
      case (toUnit === 'OZ'):
        resultInput.value = baseInput.value * 0.0338140227;
        break;
    
      default:
        break;
    }
  }

  convertFromOz(){
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'OZ') {
      case (toUnit === 'M3'):
        resultInput.value = baseInput.value * 0.0000295735;
        break;
    
      case (toUnit === 'CM3'):
        resultInput.value = baseInput.value * 29.573529562;
        break;
    
      case (toUnit === 'FT3'):
        resultInput.value = baseInput.value * 0.0010443793;
        break;
    
      case (toUnit === 'L'):
        resultInput.value = baseInput.value * 0.0295735296;
        break;
    
      case (toUnit === 'ML'):
        resultInput.value = baseInput.value * 29.573529562;
        break;
    
      case (toUnit === 'OZ'):
        resultInput.value = baseInput.value;
        break;
    
      default:
        break;
    }
  }

}

btnConvertVolume.addEventListener('click', function(evt) {
  evt.preventDefault();

  if(baseInput.value === ''){
    alert('Fill value to convert!');
    baseInput.style.border = '1px solid red';
    return
  }

  const volume = new convertVolume(baseUnit.value, resultUnit.value);

  switch (baseUnit.value) {
    case 'M3':
      volume.convertFromM3();
      break;

    case 'CM3':
      volume.convertFromCm3();
      break;

    case 'FT3':
      volume.convertFromFt3();
      break;

    case 'L':
      volume.convertFromL();
      break;

    case 'ML':
      volume.convertFromMl();
      break;

    case 'OZ':
      volume.convertFromOz();
      break;
  
    default:
      break;
  }

  baseInput.style.border = '';
})
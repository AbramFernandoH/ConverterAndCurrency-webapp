const btnConvertSpeed = document.querySelector('#btn-convert-speed');
const baseInput = document.querySelector('#speedBaseInput');
const baseUnit = document.querySelector('#speedBase');
const resultInput = document.querySelector('#speedResultInput');
const resultUnit = document.querySelector('#speedResult');

class ConvertSpeed {
  constructor(baseUnit, resultUnit){
    this.baseUnit = baseUnit;
    this.resultUnit = resultUnit;
  }

  convertFromVL(){
    const fromUnit = baseUnit.value;
    const toUnit = resultUnit.value;

    switch (fromUnit === 'VL') {
      case (toUnit === 'VL'):
        resultInput.value = baseInput.value;
        break;
    
      case (toUnit === 'KMH'):
        resultInput.value = baseInput.value * 1079252848.8;
        break;
    
      case (toUnit === 'MH'):
        resultInput.value = baseInput.value * 670616629.38;
        break;
    
      case (toUnit === 'MS'):
        resultInput.value = baseInput.value * 299792458;
        break;
    
      case (toUnit === 'KT'):
        resultInput.value = baseInput.value * 582749918.36;
        break;
    
      default:
        break;
    }
  }

  convertFromKmH(){
    const fromUnit = baseUnit.value;
    const toUnit = resultUnit.value;

    switch (fromUnit === 'KMH') {
      case (toUnit === 'VL'):
        resultInput.value = baseInput.value * 9.265669311E-10;
        break;
    
      case (toUnit === 'KMH'):
        resultInput.value = baseInput.value;
        break;
    
      case (toUnit === 'MH'):
        resultInput.value = baseInput.value * 0.6213711922;
        break;
    
      case (toUnit === 'MS'):
        resultInput.value = baseInput.value * 0.2777777778;
        break;
    
      case (toUnit === 'KT'):
        resultInput.value = baseInput.value * 0.5399568035;
        break;
    
      default:
        break;
    }
  }

  convertFromMh(){
    const fromUnit = baseUnit.value;
    const toUnit = resultUnit.value;

    switch (fromUnit === 'MH') {
      case (toUnit === 'VL'):
        resultInput.value = baseInput.value * 1.491164931E-9;
        break;
    
      case (toUnit === 'KMH'):
        resultInput.value = baseInput.value * 1.609344;
        break;
    
      case (toUnit === 'MH'):
        resultInput.value = baseInput.value;
        break;
    
      case (toUnit === 'MS'):
        resultInput.value = baseInput.value * 0.44704;
        break;
    
      case (toUnit === 'KT'):
        resultInput.value = baseInput.value * 0.8689762419;
        break;
    
      default:
        break;
    }
  }

  convertFromMs(){
    const fromUnit = baseUnit.value;
    const toUnit = resultUnit.value;

    switch (fromUnit === 'MS') {
      case (toUnit === 'VL'):
        resultInput.value = baseInput.value * 3.335640951E-9;
        break;
    
      case (toUnit === 'KMH'):
        resultInput.value = baseInput.value * 3.6;
        break;
    
      case (toUnit === 'MH'):
        resultInput.value = baseInput.value * 2.2369362921;
        break;
    
      case (toUnit === 'MS'):
        resultInput.value = baseInput.value;
        break;
    
      case (toUnit === 'KT'):
        resultInput.value = baseInput.value * 1.9438444924;
        break;
    
      default:
        break;
    }
  }

  convertFromKt(){
    const fromUnit = baseUnit.value;
    const toUnit = resultUnit.value;

    switch (fromUnit === 'KT') {
      case (toUnit === 'VL'):
        resultInput.value = baseInput.value * 1.716001956E-9;
        break;
    
      case (toUnit === 'KMH'):
        resultInput.value = baseInput.value * 1.852;
        break;
    
      case (toUnit === 'MH'):
        resultInput.value = baseInput.value * 1.150779448;
        break;
    
      case (toUnit === 'MS'):
        resultInput.value = baseInput.value * 0.5144444444;
        break;
    
      case (toUnit === 'KT'):
        resultInput.value = baseInput.value;
        break;
    
      default:
        break;
    }
  }

}

btnConvertSpeed.addEventListener('click', function(evt) {
  evt.preventDefault();

  if(baseInput.value === ''){
    alert('Fill value to convert!');
    baseInput.style.border = '1px solid red';
    return
  }

  const speed = new ConvertSpeed(baseUnit.value, resultUnit.value);

  switch (baseUnit.value) {
    case 'VL':
      speed.convertFromVL();
      break;
  
    case 'KMH':
      speed.convertFromKmH();
      break;
  
    case 'MH':
      speed.convertFromMh();
      break;
  
    case 'MS':
      speed.convertFromMs();
      break;
  
    case 'KT':
      speed.convertFromKt();
      break;
  
    default:
      break;
  }

  baseInput.style.border = '';
})

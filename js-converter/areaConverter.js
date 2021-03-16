const btnConvertArea = document.querySelector('.btn-convert-area');
const baseInput = document.querySelector('#areaBaseInput');
const baseUnit = document.querySelector('#areaBase');
const resultInput = document.querySelector('#areaResultInput');
const resultUnit = document.querySelector('#areaResult');

class ConvertArea {
  constructor(baseUnit, resultUnit){
    this.baseUnit = baseUnit;
    this.resultUnit = resultUnit;
  }

  fromKm2() {
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'KM2') {
      case (toUnit === 'KM2'):
        resultInput.value = baseInput.value;
        break;
      case (toUnit === 'M2'):
        resultInput.value = baseInput.value * 1000000;
        break;
      case (toUnit === 'DM2'):
        resultInput.value = baseInput.value * 100000000;
        break;
      case (toUnit === 'CM2'):
        resultInput.value = baseInput.value * 10000000000;
        break;
      case (toUnit === 'MM2'):
        resultInput.value = baseInput.value * 1000000000000;
        break;
      case (toUnit === 'HA'):
        resultInput.value = baseInput.value * 100;
        break;
      case (toUnit === 'AC'):
        resultInput.value = baseInput.value * 247.10538147;
        break;
      case (toUnit === 'MI2'):
        resultInput.value = baseInput.value * 0.3861021585;
        break;
      case (toUnit === 'FT2'):
        resultInput.value = baseInput.value * 10763910.417;
        break;
      case (toUnit === 'IN2'):
        resultInput.value = baseInput.value * 1550003100;
        break;
      case (toUnit === 'YD2'):
        resultInput.value = baseInput.value * 1195990.0463;
        break;
      default:
        break;
    }
  }
  
  fromM2() {
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'M2') {
      case (toUnit === 'KM2'):
        resultInput.value = baseInput.value * 0.000001;
        break;
      case (toUnit === 'M2'):
        resultInput.value = baseInput.value;
        break;
      case (toUnit === 'DM2'):
        resultInput.value = baseInput.value * 100;
        break;
      case (toUnit === 'CM2'):
        resultInput.value = baseInput.value * 10000;
        break;
      case (toUnit === 'MM2'):
        resultInput.value = baseInput.value * 1000000;
        break;
      case (toUnit === 'HA'):
        resultInput.value = baseInput.value * 0.0001;
        break;
      case (toUnit === 'AC'):
        resultInput.value = baseInput.value * 0.0002471054;
        break;
      case (toUnit === 'MI2'):
        resultInput.value = baseInput.value * 3.861021585E-7;
        break;
      case (toUnit === 'FT2'):
        resultInput.value = baseInput.value * 10.763910417;
        break;
      case (toUnit === 'IN2'):
        resultInput.value = baseInput.value * 1550.0031;
        break;
      case (toUnit === 'YD2'):
        resultInput.value = baseInput.value * 1.1959900463;
        break;
      default:
        break;
    }
  }

  fromDm2() {
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'DM2') {
      case (toUnit === 'KM2'):
        resultInput.value = baseInput.value * 1.E-8;
        break;
      case (toUnit === 'M2'):
        resultInput.value = baseInput.value * 0.01;
        break;
      case (toUnit === 'DM2'):
        resultInput.value = baseInput.value;
        break;
      case (toUnit === 'CM2'):
        resultInput.value = baseInput.value * 100;
        break;
      case (toUnit === 'MM2'):
        resultInput.value = baseInput.value * 10000;
        break;
      case (toUnit === 'HA'):
        resultInput.value = baseInput.value * 0.000001;
        break;
      case (toUnit === 'AC'):
        resultInput.value = baseInput.value * 0.0000024711;
        break;
      case (toUnit === 'MI2'):
        resultInput.value = baseInput.value * 3.861021585E-9;
        break;
      case (toUnit === 'FT2'):
        resultInput.value = baseInput.value * 0.1076391042;
        break;
      case (toUnit === 'IN2'):
        resultInput.value = baseInput.value * 15.500031;
        break;
      case (toUnit === 'YD2'):
        resultInput.value = baseInput.value * 0.0119599005;
        break;
      default:
        break;
    }
  }

  fromCm2() {
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'CM2') {
      case (toUnit === 'KM2'):
        resultInput.value = baseInput.value * 1.E-10;
        break;
      case (toUnit === 'M2'):
        resultInput.value = baseInput.value * 0.0001;
        break;
      case (toUnit === 'DM2'):
        resultInput.value = baseInput.value * 0.01;
        break;
      case (toUnit === 'CM2'):
        resultInput.value = baseInput.value;
        break;
      case (toUnit === 'MM2'):
        resultInput.value = baseInput.value * 100;
        break;
      case (toUnit === 'HA'):
        resultInput.value = baseInput.value * 1.E-8;
        break;
      case (toUnit === 'AC'):
        resultInput.value = baseInput.value * 2.471053814E-8;
        break;
      case (toUnit === 'MI2'):
        resultInput.value = baseInput.value * 3.861021585E-11;
        break;
      case (toUnit === 'FT2'):
        resultInput.value = baseInput.value * 0.001076391;
        break;
      case (toUnit === 'IN2'):
        resultInput.value = baseInput.value * 0.15500031;
        break;
      case (toUnit === 'YD2'):
        resultInput.value = baseInput.value * 0.000119599;
        break;
      default:
        break;
    }
  }
  
  fromMm2() {
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'KM2') {
      case (toUnit === 'KM2'):
        resultInput.value = baseInput.value * 1.E-12;
        break;
      case (toUnit === 'M2'):
        resultInput.value = baseInput.value * 0.000001;
        break;
      case (toUnit === 'DM2'):
        resultInput.value = baseInput.value * 0.0001;
        break;
      case (toUnit === 'CM2'):
        resultInput.value = baseInput.value * 0.01;
        break;
      case (toUnit === 'MM2'):
        resultInput.value = baseInput.value;
        break;
      case (toUnit === 'HA'):
        resultInput.value = baseInput.value * 1.E-10;
        break;
      case (toUnit === 'AC'):
        resultInput.value = baseInput.value * 2.471053814E-10;
        break;
      case (toUnit === 'MI2'):
        resultInput.value = baseInput.value * 3.861021585E-13;
        break;
      case (toUnit === 'FT2'):
        resultInput.value = baseInput.value * 0.0000107639;
        break;
      case (toUnit === 'IN2'):
        resultInput.value = baseInput.value * 0.0015500031;
        break;
      case (toUnit === 'YD2'):
        resultInput.value = baseInput.value * 0.000001196;
        break;
      default:
        break;
    }
  }

  fromHa() {
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'KM2') {
      case (toUnit === 'KM2'):
        resultInput.value = baseInput.value;
        break;
      case (toUnit === 'M2'):
        resultInput.value = baseInput.value * 1000000;
        break;
      case (toUnit === 'DM2'):
        resultInput.value = baseInput.value * 100000000;
        break;
      case (toUnit === 'CM2'):
        resultInput.value = baseInput.value * 10000000000;
        break;
      case (toUnit === 'MM2'):
        resultInput.value = baseInput.value * 1000000000000;
        break;
      case (toUnit === 'HA'):
        resultInput.value = baseInput.value * 100;
        break;
      case (toUnit === 'AC'):
        resultInput.value = baseInput.value * 247.10538147;
        break;
      case (toUnit === 'MI2'):
        resultInput.value = baseInput.value * 0.3861021585;
        break;
      case (toUnit === 'FT2'):
        resultInput.value = baseInput.value * 10763910.417;
        break;
      case (toUnit === 'IN2'):
        resultInput.value = baseInput.value * 1550003100;
        break;
      case (toUnit === 'YD2'):
        resultInput.value = baseInput.value * 1195990.0463;
        break;
      default:
        break;
    }
  }

  fromAc() {
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'KM2') {
      case (toUnit === 'KM2'):
        resultInput.value = baseInput.value;
        break;
      case (toUnit === 'M2'):
        resultInput.value = baseInput.value * 1000000;
        break;
      case (toUnit === 'DM2'):
        resultInput.value = baseInput.value * 100000000;
        break;
      case (toUnit === 'CM2'):
        resultInput.value = baseInput.value * 10000000000;
        break;
      case (toUnit === 'MM2'):
        resultInput.value = baseInput.value * 1000000000000;
        break;
      case (toUnit === 'HA'):
        resultInput.value = baseInput.value * 100;
        break;
      case (toUnit === 'AC'):
        resultInput.value = baseInput.value * 247.10538147;
        break;
      case (toUnit === 'MI2'):
        resultInput.value = baseInput.value * 0.3861021585;
        break;
      case (toUnit === 'FT2'):
        resultInput.value = baseInput.value * 10763910.417;
        break;
      case (toUnit === 'IN2'):
        resultInput.value = baseInput.value * 1550003100;
        break;
      case (toUnit === 'YD2'):
        resultInput.value = baseInput.value * 1195990.0463;
        break;
      default:
        break;
    }
  }

  fromMi2() {
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'KM2') {
      case (toUnit === 'KM2'):
        resultInput.value = baseInput.value;
        break;
      case (toUnit === 'M2'):
        resultInput.value = baseInput.value * 1000000;
        break;
      case (toUnit === 'DM2'):
        resultInput.value = baseInput.value * 100000000;
        break;
      case (toUnit === 'CM2'):
        resultInput.value = baseInput.value * 10000000000;
        break;
      case (toUnit === 'MM2'):
        resultInput.value = baseInput.value * 1000000000000;
        break;
      case (toUnit === 'HA'):
        resultInput.value = baseInput.value * 100;
        break;
      case (toUnit === 'AC'):
        resultInput.value = baseInput.value * 247.10538147;
        break;
      case (toUnit === 'MI2'):
        resultInput.value = baseInput.value * 0.3861021585;
        break;
      case (toUnit === 'FT2'):
        resultInput.value = baseInput.value * 10763910.417;
        break;
      case (toUnit === 'IN2'):
        resultInput.value = baseInput.value * 1550003100;
        break;
      case (toUnit === 'YD2'):
        resultInput.value = baseInput.value * 1195990.0463;
        break;
      default:
        break;
    }
  }

  fromFt2() {
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'KM2') {
      case (toUnit === 'KM2'):
        resultInput.value = baseInput.value;
        break;
      case (toUnit === 'M2'):
        resultInput.value = baseInput.value * 1000000;
        break;
      case (toUnit === 'DM2'):
        resultInput.value = baseInput.value * 100000000;
        break;
      case (toUnit === 'CM2'):
        resultInput.value = baseInput.value * 10000000000;
        break;
      case (toUnit === 'MM2'):
        resultInput.value = baseInput.value * 1000000000000;
        break;
      case (toUnit === 'HA'):
        resultInput.value = baseInput.value * 100;
        break;
      case (toUnit === 'AC'):
        resultInput.value = baseInput.value * 247.10538147;
        break;
      case (toUnit === 'MI2'):
        resultInput.value = baseInput.value * 0.3861021585;
        break;
      case (toUnit === 'FT2'):
        resultInput.value = baseInput.value * 10763910.417;
        break;
      case (toUnit === 'IN2'):
        resultInput.value = baseInput.value * 1550003100;
        break;
      case (toUnit === 'YD2'):
        resultInput.value = baseInput.value * 1195990.0463;
        break;
      default:
        break;
    }
  }

  fromIn2() {
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'KM2') {
      case (toUnit === 'KM2'):
        resultInput.value = baseInput.value;
        break;
      case (toUnit === 'M2'):
        resultInput.value = baseInput.value * 1000000;
        break;
      case (toUnit === 'DM2'):
        resultInput.value = baseInput.value * 100000000;
        break;
      case (toUnit === 'CM2'):
        resultInput.value = baseInput.value * 10000000000;
        break;
      case (toUnit === 'MM2'):
        resultInput.value = baseInput.value * 1000000000000;
        break;
      case (toUnit === 'HA'):
        resultInput.value = baseInput.value * 100;
        break;
      case (toUnit === 'AC'):
        resultInput.value = baseInput.value * 247.10538147;
        break;
      case (toUnit === 'MI2'):
        resultInput.value = baseInput.value * 0.3861021585;
        break;
      case (toUnit === 'FT2'):
        resultInput.value = baseInput.value * 10763910.417;
        break;
      case (toUnit === 'IN2'):
        resultInput.value = baseInput.value * 1550003100;
        break;
      case (toUnit === 'YD2'):
        resultInput.value = baseInput.value * 1195990.0463;
        break;
      default:
        break;
    }
  }

  fromYd2() {
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'KM2') {
      case (toUnit === 'KM2'):
        resultInput.value = baseInput.value;
        break;
      case (toUnit === 'M2'):
        resultInput.value = baseInput.value * 1000000;
        break;
      case (toUnit === 'DM2'):
        resultInput.value = baseInput.value * 100000000;
        break;
      case (toUnit === 'CM2'):
        resultInput.value = baseInput.value * 10000000000;
        break;
      case (toUnit === 'MM2'):
        resultInput.value = baseInput.value * 1000000000000;
        break;
      case (toUnit === 'HA'):
        resultInput.value = baseInput.value * 100;
        break;
      case (toUnit === 'AC'):
        resultInput.value = baseInput.value * 247.10538147;
        break;
      case (toUnit === 'MI2'):
        resultInput.value = baseInput.value * 0.3861021585;
        break;
      case (toUnit === 'FT2'):
        resultInput.value = baseInput.value * 10763910.417;
        break;
      case (toUnit === 'IN2'):
        resultInput.value = baseInput.value * 1550003100;
        break;
      case (toUnit === 'YD2'):
        resultInput.value = baseInput.value * 1195990.0463;
        break;
      default:
        break;
    }
  }
}



btnConvertArea.addEventListener('click', function(evt) {
  evt.preventDefault();
  
  if(baseInput.value === ''){
    alert('Please fill value to convert!');
    baseInput.style.border = '1px solid red';
    return
  }

  const convert = new ConvertArea(baseUnit.value, resultUnit.value);

  switch (baseUnit.value) {
    case 'KM2':
      convert.fromKm2();
      break;
    
    case 'M2':
      convert.fromM2();
      break;
    
    case 'DM2':
      convert.fromDm2();
      break;
    
    case 'CM2':
      convert.fromCm2();
      break;
    
    case 'MM2':
      convert.fromMm2();
      break;
    
    case 'HA':
      convert.fromHa();
      break;
    
    case 'AC':
      convert.fromAc();
      break;
    
    case 'MI2':
      convert.fromMi2();
      break;
    
    case 'FT2':
      convert.fromFt2();
      break;
    
    case 'IN2':
      convert.fromIn2();
      break;
    
    case 'YD2':
      convert.fromYd2();
      break;
    
    default:
      break;
  }

  baseInput.style.border = '';
})

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

    switch (fromUnit === 'HA') {
      case (toUnit === 'KM2'):
        resultInput.value = baseInput.value * 0.01;
        break;
      case (toUnit === 'M2'):
        resultInput.value = baseInput.value * 10000;
        break;
      case (toUnit === 'DM2'):
        resultInput.value = baseInput.value * 1000000;
        break;
      case (toUnit === 'CM2'):
        resultInput.value = baseInput.value * 100000000;
        break;
      case (toUnit === 'MM2'):
        resultInput.value = baseInput.value * 10000000000;
        break;
      case (toUnit === 'HA'):
        resultInput.value = baseInput.value;
        break;
      case (toUnit === 'AC'):
        resultInput.value = baseInput.value * 2.4710538147;
        break;
      case (toUnit === 'MI2'):
        resultInput.value = baseInput.value * 0.0038610216;
        break;
      case (toUnit === 'FT2'):
        resultInput.value = baseInput.value * 107639.10417;
        break;
      case (toUnit === 'IN2'):
        resultInput.value = baseInput.value * 15500031;
        break;
      case (toUnit === 'YD2'):
        resultInput.value = baseInput.value * 11959.900463;
        break;
      default:
        break;
    }
  }

  fromAc() {
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'AC') {
      case (toUnit === 'KM2'):
        resultInput.value = baseInput.value * 0.0040468564;
        break;
      case (toUnit === 'M2'):
        resultInput.value = baseInput.value * 4046.8564224;
        break;
      case (toUnit === 'DM2'):
        resultInput.value = baseInput.value * 404685.64224;
        break;
      case (toUnit === 'CM2'):
        resultInput.value = baseInput.value * 40468564.224;
        break;
      case (toUnit === 'MM2'):
        resultInput.value = baseInput.value * 4046856422.4;
        break;
      case (toUnit === 'HA'):
        resultInput.value = baseInput.value * 0.4046856422;
        break;
      case (toUnit === 'AC'):
        resultInput.value = baseInput.value;
        break;
      case (toUnit === 'MI2'):
        resultInput.value = baseInput.value * 0.0015625;
        break;
      case (toUnit === 'FT2'):
        resultInput.value = baseInput.value * 43560;
        break;
      case (toUnit === 'IN2'):
        resultInput.value = baseInput.value * 6272640;
        break;
      case (toUnit === 'YD2'):
        resultInput.value = baseInput.value * 4840;
        break;
      default:
        break;
    }
  }

  fromMi2() {
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'MI2') {
      case (toUnit === 'KM2'):
        resultInput.value = baseInput.value * 2.5899881103;
        break;
      case (toUnit === 'M2'):
        resultInput.value = baseInput.value * 2589988.1103;
        break;
      case (toUnit === 'DM2'):
        resultInput.value = baseInput.value * 258998811.03;
        break;
      case (toUnit === 'CM2'):
        resultInput.value = baseInput.value * 25899881103;
        break;
      case (toUnit === 'MM2'):
        resultInput.value = baseInput.value * 2589988110336;
        break;
      case (toUnit === 'HA'):
        resultInput.value = baseInput.value * 258.99881103;
        break;
      case (toUnit === 'AC'):
        resultInput.value = baseInput.value * 640;
        break;
      case (toUnit === 'MI2'):
        resultInput.value = baseInput.value;
        break;
      case (toUnit === 'FT2'):
        resultInput.value = baseInput.value * 27878400;
        break;
      case (toUnit === 'IN2'):
        resultInput.value = baseInput.value * 4014489600;
        break;
      case (toUnit === 'YD2'):
        resultInput.value = baseInput.value * 3097600;
        break;
      default:
        break;
    }
  }

  fromFt2() {
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'FT2') {
      case (toUnit === 'KM2'):
        resultInput.value = baseInput.value * 9.290303999E-8;
        break;
      case (toUnit === 'M2'):
        resultInput.value = baseInput.value * 0.09290304;
        break;
      case (toUnit === 'DM2'):
        resultInput.value = baseInput.value * 9.290304;
        break;
      case (toUnit === 'CM2'):
        resultInput.value = baseInput.value * 929.0304;
        break;
      case (toUnit === 'MM2'):
        resultInput.value = baseInput.value * 92903.04;
        break;
      case (toUnit === 'HA'):
        resultInput.value = baseInput.value * 0.0000092903;
        break;
      case (toUnit === 'AC'):
        resultInput.value = baseInput.value * 0.0000229568;
        break;
      case (toUnit === 'MI2'):
        resultInput.value = baseInput.value * 3.587006427E-8;
        break;
      case (toUnit === 'FT2'):
        resultInput.value = baseInput.value;
        break;
      case (toUnit === 'IN2'):
        resultInput.value = baseInput.value * 144;
        break;
      case (toUnit === 'YD2'):
        resultInput.value = baseInput.value * 0.1111111111;
        break;
      default:
        break;
    }
  }

  fromIn2() {
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'IN2') {
      case (toUnit === 'KM2'):
        resultInput.value = baseInput.value * 6.4516E-10;
        break;
      case (toUnit === 'M2'):
        resultInput.value = baseInput.value * 0.00064516;
        break;
      case (toUnit === 'DM2'):
        resultInput.value = baseInput.value * 0.064516;
        break;
      case (toUnit === 'CM2'):
        resultInput.value = baseInput.value * 6.4516;
        break;
      case (toUnit === 'MM2'):
        resultInput.value = baseInput.value * 645.16;
        break;
      case (toUnit === 'HA'):
        resultInput.value = baseInput.value * 6.4516E-8;
        break;
      case (toUnit === 'AC'):
        resultInput.value = baseInput.value * 1.594225079E-7;
        break;
      case (toUnit === 'MI2'):
        resultInput.value = baseInput.value * 2.490976686E-10;
        break;
      case (toUnit === 'FT2'):
        resultInput.value = baseInput.value * 0.0069444444;
        break;
      case (toUnit === 'IN2'):
        resultInput.value = baseInput.value;
        break;
      case (toUnit === 'YD2'):
        resultInput.value = baseInput.value * 0.0007716049;
        break;
      default:
        break;
    }
  }

  fromYd2() {
    const fromUnit = this.baseUnit;
    const toUnit = this.resultUnit;

    switch (fromUnit === 'YD2') {
      case (toUnit === 'KM2'):
        resultInput.value = baseInput.value * 8.361273599E-7;
        break;
      case (toUnit === 'M2'):
        resultInput.value = baseInput.value * 0.83612736;
        break;
      case (toUnit === 'DM2'):
        resultInput.value = baseInput.value * 83.612736;
        break;
      case (toUnit === 'CM2'):
        resultInput.value = baseInput.value * 8361.2736;
        break;
      case (toUnit === 'MM2'):
        resultInput.value = baseInput.value * 836127.36;
        break;
      case (toUnit === 'HA'):
        resultInput.value = baseInput.value * 0.0000836127;
        break;
      case (toUnit === 'AC'):
        resultInput.value = baseInput.value * 0.0002066116;
        break;
      case (toUnit === 'MI2'):
        resultInput.value = baseInput.value * 3.228305785E-7;
        break;
      case (toUnit === 'FT2'):
        resultInput.value = baseInput.value * 9;
        break;
      case (toUnit === 'IN2'):
        resultInput.value = baseInput.value * 1296;
        break;
      case (toUnit === 'YD2'):
        resultInput.value = baseInput.value;
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

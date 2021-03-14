// height converter
const convertHeightBtn = document.querySelector('.convert-height');
let convertHeightFrom = document.querySelector('#heightBase');
let amountHeight = document.querySelector('#baseHeightMeasurement');
let resultHeight = document.querySelector('#heightResult');
let heightResult = document.querySelector('#resultHeightMeasurement');

convertHeightBtn.addEventListener('click', function(evt){
  evt.preventDefault();

  if(amountHeight.value === ''){
    alert('Please fill amount to convert height');
    return
  }

  let fromUnit = convertHeightFrom.value;
  let toUnit = resultHeight.value;

  switch (fromUnit) {
    case 'KM':
      convertFromKM(fromUnit, toUnit);
      break;
    case 'HM':
      convertFromHM(fromUnit, toUnit);
      break;
    case 'DAM':
      convertFromDAM(fromUnit, toUnit);
      break;
    case 'DAM':
      convertFromDAM(fromUnit, toUnit);
      break;
    case 'M':
      convertFromM(fromUnit, toUnit);
      break;
    case 'DM':
      convertFromDM(fromUnit, toUnit);
      break;
    case 'CM':
      convertFromCM(fromUnit, toUnit);
      break;
    case 'MM':
      convertFromMM(fromUnit, toUnit);
      break;
    case 'YD':
      convertFromYD(fromUnit, toUnit);
      break;
    case 'NMi':
      convertFromNMi(fromUnit, toUnit);
      break;
    case 'FT':
      convertFromFT(fromUnit, toUnit);
      break;
    case 'MI':
      convertFromMI(fromUnit, toUnit);
      break;
    case 'IN':
      convertFromIN(fromUnit, toUnit);
      break;
    default:
      break;
  }
  
})

function convertFromKM(from, to){
  switch (from === 'KM') {
    case (to === 'KM'):
      heightResult.value = amountHeight.value;
      break;
    case (to === 'HM'):
      heightResult.value = amountHeight.value / 10;
      break;
    case (to === 'DAM'):
      heightResult.value = amountHeight.value / 100;
      break;
    case (to === 'M'):
      heightResult.value = amountHeight.value / 1000;
      break;
    case (to === 'DM'):
      heightResult.value = amountHeight.value / 10000;
      break;
    case (to === 'CM'):
      heightResult.value = amountHeight.value / 100000;
      break;
    case (to === 'MM'):
      heightResult.value = amountHeight.value / 1000000;
      break;
    case (to === 'YD'):
      heightResult.value = amountHeight.value * 1093.6133;
      break;
    case (to === 'NMi'):
      heightResult.value = amountHeight.value * 0.5396;
      break;
    case (to === 'FT'):
      heightResult.value = amountHeight.value * 3280.8399;
      break;
    case (to === 'MI'):
      heightResult.value = amountHeight.value * 0.6214;
      break;
    case (to === 'IN'):
      heightResult.value = amountHeight.value * 39370.0787;
      break;
    default:
      break;
  }
}

function convertFromHM(from, to){
  switch (from === 'HM') {
    case (to === 'KM'):
      heightResult.value = (amountHeight.value) * 10;
      break;
    case (to === 'HM'):
      heightResult.value = amountHeight.value;
      break;
    case (to === 'DAM'):
      heightResult.value = amountHeight.value / 10;
      break;
    case (to === 'M'):
      heightResult.value = amountHeight.value / 100;
      break;
    case (to === 'DM'):
      heightResult.value = amountHeight.value / 1000;
      break;
    case (to === 'CM'):
      heightResult.value = amountHeight.value / 10000;
      break;
    case (to === 'MM'):
      heightResult.value = amountHeight.value / 100000;
      break;
    case (to === 'YD'):
      heightResult.value = amountHeight.value * 10936.133;
      break;
    case (to === 'NMi'):
      heightResult.value = amountHeight.value * 5.396;
      break;
    case (to === 'FT'):
      heightResult.value = amountHeight.value * 32808.399;
      break;
    case (to === 'MI'):
      heightResult.value = amountHeight.value * 6.214;
      break;
    case (to === 'IN'):
      heightResult.value = amountHeight.value * 393700.787;
      break;
    default:
      break;
  }
}

// amountHeight.addEventListener('input', function(evt){
//   switch (convertHeightFrom.value === 'KM') {
//     case (resultHeight.value === 'KM'):
//       heightResult.value = evt.target.value;
//       break;
//     case (resultHeight.value === 'HM'):
//       heightResult.value = (evt.target.value) / 10;
//       break;
//     case (resultHeight.value === 'DAM'):
//       heightResult.value = (evt.target.value) / 100;
//       break;
//     case (resultHeight.value === 'M'):
//       heightResult.value = (evt.target.value) / 1000;
//       break;
//     case (resultHeight.value === 'DM'):
//       heightResult.value = (evt.target.value) / 10000;
//       break;
//     case (resultHeight.value === 'CM'):
//       heightResult.value = (evt.target.value) / 100000;
//       break;
//     case (resultHeight.value === 'MM'):
//       heightResult.value = (evt.target.value) / 1000000;
//       break;
//     default:
//       break;
//   }
// })

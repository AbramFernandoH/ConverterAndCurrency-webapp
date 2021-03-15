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
      heightResult.value = amountHeight.value * 109.3613;
      break;
    case (to === 'NMi'):
      heightResult.value = amountHeight.value * 0.054;
      break;
    case (to === 'FT'):
      heightResult.value = amountHeight.value * 328.084;
      break;
    case (to === 'MI'):
      heightResult.value = amountHeight.value * 0.0621;
      break;
    case (to === 'IN'):
      heightResult.value = amountHeight.value * 3937.0079;
      break;
    default:
      break;
  }
}

function convertFromDAM(from, to){
  switch (from === 'DAM') {
    case (to === 'KM'):
      heightResult.value = (amountHeight.value) * 100;
      break;
    case (to === 'HM'):
      heightResult.value = amountHeight.value * 10;
      break;
    case (to === 'DAM'):
      heightResult.value = amountHeight.value;
      break;
    case (to === 'M'):
      heightResult.value = amountHeight.value / 10;
      break;
    case (to === 'DM'):
      heightResult.value = amountHeight.value / 100;
      break;
    case (to === 'CM'):
      heightResult.value = amountHeight.value / 1000;
      break;
    case (to === 'MM'):
      heightResult.value = amountHeight.value / 10000;
      break;
    case (to === 'YD'):
      heightResult.value = amountHeight.value * 10.9361;
      break;
    case (to === 'NMi'):
      heightResult.value = amountHeight.value * 0.0054;
      break;
    case (to === 'FT'):
      heightResult.value = amountHeight.value * 32.8084;
      break;
    case (to === 'MI'):
      heightResult.value = amountHeight.value * 0.0062;
      break;
    case (to === 'IN'):
      heightResult.value = amountHeight.value * 393.7008;
      break;
    default:
      break;
  }
}

function convertFromM(from, to){
  switch (from === 'M') {
    case (to === 'KM'):
      heightResult.value = (amountHeight.value) * 1000;
      break;
    case (to === 'HM'):
      heightResult.value = amountHeight.value * 100;
      break;
    case (to === 'DAM'):
      heightResult.value = amountHeight.value * 10;
      break;
    case (to === 'M'):
      heightResult.value = amountHeight.value;
      break;
    case (to === 'DM'):
      heightResult.value = amountHeight.value / 10;
      break;
    case (to === 'CM'):
      heightResult.value = amountHeight.value / 100;
      break;
    case (to === 'MM'):
      heightResult.value = amountHeight.value / 1000;
      break;
    case (to === 'YD'):
      heightResult.value = amountHeight.value * 1.0936;
      break;
    case (to === 'NMi'):
      heightResult.value = amountHeight.value * 0.0005396118;
      break;
    case (to === 'FT'):
      heightResult.value = amountHeight.value * 3.2808;
      break;
    case (to === 'MI'):
      heightResult.value = amountHeight.value * 0.0006213712;
      break;
    case (to === 'IN'):
      heightResult.value = amountHeight.value * 39.3701;
      break;
    default:
      break;
  }
}

function convertFromDM(from, to){
  switch (from === 'DM') {
    case (to === 'KM'):
      heightResult.value = (amountHeight.value) * 10000;
      break;
    case (to === 'HM'):
      heightResult.value = amountHeight.value * 1000;
      break;
    case (to === 'DAM'):
      heightResult.value = amountHeight.value * 100;
      break;
    case (to === 'M'):
      heightResult.value = amountHeight.value * 10;
      break;
    case (to === 'DM'):
      heightResult.value = amountHeight.value;
      break;
    case (to === 'CM'):
      heightResult.value = amountHeight.value / 10;
      break;
    case (to === 'MM'):
      heightResult.value = amountHeight.value / 100;
      break;
    case (to === 'YD'):
      heightResult.value = amountHeight.value * 0.1094;
      break;
    case (to === 'NMi'):
      heightResult.value = amountHeight.value * 0.0000539612;
      break;
    case (to === 'FT'):
      heightResult.value = amountHeight.value * 0.3281;
      break;
    case (to === 'MI'):
      heightResult.value = amountHeight.value * 0.0000621371;
      break;
    case (to === 'IN'):
      heightResult.value = amountHeight.value * 3.937;
      break;
    default:
      break;
  }
}

function convertFromCM(from, to){
  switch (from === 'CM') {
    case (to === 'KM'):
      heightResult.value = (amountHeight.value) * 100000;
      break;
    case (to === 'HM'):
      heightResult.value = amountHeight.value * 10000;
      break;
    case (to === 'DAM'):
      heightResult.value = amountHeight.value * 1000;
      break;
    case (to === 'M'):
      heightResult.value = amountHeight.value * 100;
      break;
    case (to === 'DM'):
      heightResult.value = amountHeight.value * 10;
      break;
    case (to === 'CM'):
      heightResult.value = amountHeight.value;
      break;
    case (to === 'MM'):
      heightResult.value = amountHeight.value / 10;
      break;
    case (to === 'YD'):
      heightResult.value = amountHeight.value * 0.0109;
      break;
    case (to === 'NMi'):
      heightResult.value = amountHeight.value * 0.0000053961;
      break;
    case (to === 'FT'):
      heightResult.value = amountHeight.value * 0.0328;
      break;
    case (to === 'MI'):
      heightResult.value = amountHeight.value * 0.0000062137;
      break;
    case (to === 'IN'):
      heightResult.value = amountHeight.value * 0.3937;
      break;
    default:
      break;
  }
}

function convertFromMM(from, to){
  switch (from === 'MM') {
    case (to === 'KM'):
      heightResult.value = (amountHeight.value) * 1000000;
      break;
    case (to === 'HM'):
      heightResult.value = amountHeight.value * 100000;
      break;
    case (to === 'DAM'):
      heightResult.value = amountHeight.value * 10000;
      break;
    case (to === 'M'):
      heightResult.value = amountHeight.value * 1000;
      break;
    case (to === 'DM'):
      heightResult.value = amountHeight.value * 100;
      break;
    case (to === 'CM'):
      heightResult.value = amountHeight.value * 10;
      break;
    case (to === 'MM'):
      heightResult.value = amountHeight.value;
      break;
    case (to === 'YD'):
      heightResult.value = amountHeight.value * 0.0011;
      break;
    case (to === 'NMi'):
      heightResult.value = amountHeight.value * 0.0000005396;
      break;
    case (to === 'FT'):
      heightResult.value = amountHeight.value * 0.0033;
      break;
    case (to === 'MI'):
      heightResult.value = amountHeight.value * 0.0000006214;
      break;
    case (to === 'IN'):
      heightResult.value = amountHeight.value * 0.0394;
      break;
    default:
      break;
  }
}

function convertFromYD(from, to){
  switch (from === 'YD') {
    case (to === 'KM'):
      heightResult.value = (amountHeight.value) * 0.0009144;
      break;
    case (to === 'HM'):
      heightResult.value = amountHeight.value * 0.009144;
      break;
    case (to === 'DAM'):
      heightResult.value = amountHeight.value * 0.09144;
      break;
    case (to === 'M'):
      heightResult.value = amountHeight.value * 0.9144;
      break;
    case (to === 'DM'):
      heightResult.value = amountHeight.value * 9.144;
      break;
    case (to === 'CM'):
      heightResult.value = amountHeight.value * 91.44;
      break;
    case (to === 'MM'):
      heightResult.value = amountHeight.value * 914.4;
      break;
    case (to === 'YD'):
      heightResult.value = amountHeight.value;
      break;
    case (to === 'NMi'):
      heightResult.value = amountHeight.value * 0.0004934211;
      break;
    case (to === 'FT'):
      heightResult.value = amountHeight.value * 3;
      break;
    case (to === 'MI'):
      heightResult.value = amountHeight.value * 0.0005681818;
      break;
    case (to === 'IN'):
      heightResult.value = amountHeight.value * 36;
      break;
    default:
      break;
  }
}

function convertFromNMi(from, to){
  switch (from === 'NMi') {
    case (to === 'KM'):
      heightResult.value = (amountHeight.value) * 1.853184;
      break;
    case (to === 'HM'):
      heightResult.value = amountHeight.value * 18.53184;
      break;
    case (to === 'DAM'):
      heightResult.value = amountHeight.value * 185.3184;
      break;
    case (to === 'M'):
      heightResult.value = amountHeight.value * 1853.184;
      break;
    case (to === 'DM'):
      heightResult.value = amountHeight.value * 18531.84;
      break;
    case (to === 'CM'):
      heightResult.value = amountHeight.value * 185318.4;
      break;
    case (to === 'MM'):
      heightResult.value = amountHeight.value * 1853184;
      break;
    case (to === 'YD'):
      heightResult.value = amountHeight.value * 2026.6666667;
      break;
    case (to === 'NMi'):
      heightResult.value = amountHeight.value;
      break;
    case (to === 'FT'):
      heightResult.value = amountHeight.value * 6080;
      break;
    case (to === 'MI'):
      heightResult.value = amountHeight.value * 1.1515151515;
      break;
    case (to === 'IN'):
      heightResult.value = amountHeight.value * 72960;
      break;
    default:
      break;
  }
}

function convertFromFT(from, to){
  switch (from === 'FT') {
    case (to === 'KM'):
      heightResult.value = (amountHeight.value) * 0.0003048;
      break;
    case (to === 'HM'):
      heightResult.value = amountHeight.value * 0.003048;
      break;
    case (to === 'DAM'):
      heightResult.value = amountHeight.value * 0.03048;
      break;
    case (to === 'M'):
      heightResult.value = amountHeight.value * 0.3048;
      break;
    case (to === 'DM'):
      heightResult.value = amountHeight.value * 3.048;
      break;
    case (to === 'CM'):
      heightResult.value = amountHeight.value * 30.48;
      break;
    case (to === 'MM'):
      heightResult.value = amountHeight.value * 304.8;
      break;
    case (to === 'YD'):
      heightResult.value = amountHeight.value * 2026.6666667;
      break;
    case (to === 'NMi'):
      heightResult.value = amountHeight.value * 0.0001644737;
      break;
    case (to === 'FT'):
      heightResult.value = amountHeight.value;
      break;
    case (to === 'MI'):
      heightResult.value = amountHeight.value * 0.0001893939;
      break;
    case (to === 'IN'):
      heightResult.value = amountHeight.value * 12;
      break;
    default:
      break;
  }
}

function convertFromMI(from, to){
  switch (from === 'MI') {
    case (to === 'KM'):
      heightResult.value = (amountHeight.value) * 1.609344;
      break;
    case (to === 'HM'):
      heightResult.value = amountHeight.value * 16.09344;
      break;
    case (to === 'DAM'):
      heightResult.value = amountHeight.value * 160.9344;
      break;
    case (to === 'M'):
      heightResult.value = amountHeight.value * 1609.344;
      break;
    case (to === 'DM'):
      heightResult.value = amountHeight.value * 16093.44;
      break;
    case (to === 'CM'):
      heightResult.value = amountHeight.value * 160934.4;
      break;
    case (to === 'MM'):
      heightResult.value = amountHeight.value * 1609344;
      break;
    case (to === 'YD'):
      heightResult.value = amountHeight.value * 1760;
      break;
    case (to === 'NMi'):
      heightResult.value = amountHeight.value * 0.8684210526;
      break;
    case (to === 'FT'):
      heightResult.value = amountHeight.value * 5280;
      break;
    case (to === 'MI'):
      heightResult.value = amountHeight.value;
      break;
    case (to === 'IN'):
      heightResult.value = amountHeight.value * 63360;
      break;
    default:
      break;
  }
}

function convertFromIN(from, to){
  switch (from === 'IN') {
    case (to === 'KM'):
      heightResult.value = (amountHeight.value) * 0.0000254;
      break;
    case (to === 'HM'):
      heightResult.value = amountHeight.value * 0.000254;
      break;
    case (to === 'DAM'):
      heightResult.value = amountHeight.value * 0.00254;
      break;
    case (to === 'M'):
      heightResult.value = amountHeight.value * 0.0254;
      break;
    case (to === 'DM'):
      heightResult.value = amountHeight.value * 0.254;
      break;
    case (to === 'CM'):
      heightResult.value = amountHeight.value * 25.4;
      break;
    case (to === 'MM'):
      heightResult.value = amountHeight.value * 254;
      break;
    case (to === 'YD'):
      heightResult.value = amountHeight.value * 0.0277777778;
      break;
    case (to === 'NMi'):
      heightResult.value = amountHeight.value * 0.0000137061;
      break;
    case (to === 'FT'):
      heightResult.value = amountHeight.value * 0.0833333333;
      break;
    case (to === 'MI'):
      heightResult.value = amountHeight.value * 0.0000157828;
      break;
    case (to === 'IN'):
      heightResult.value = amountHeight.value;
      break;
    default:
      break;
  }
}

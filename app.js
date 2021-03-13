const exchangeForm = document.getElementById('exchange-form');
const exRatesBtn = document.getElementById('exchange-rates');

exRatesBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  let result = document.querySelector('.show-rates .result');
  let dateToday = document.querySelector('.show-rates .dateToday');
  result.innerHTML = '';
  dateToday.innerHTML = '';

  let baseAmount = document.querySelector('#baseAmount');
  let baseCurrency = document.querySelector('#base');
  let convertCurrency = document.querySelector('#convert');

  if(baseAmount.value === ''){
    alert('Fill the amount of base currency');
    return
  } 

  axios.get(`${exchangeForm.getAttribute('action')}base=${baseCurrency.value}`)
  .then(exRates => {
    let { base, rates, date } = exRates.data;
    fx.base = base;
    fx.rates = rates;
    fx.date = date;
  })
  .then(() => {
    let { base, date } = fx;
    let amount = parseFloat(baseAmount.value);
    let rate = fx(amount).from(base).to(convertCurrency.value);
    result.innerHTML = `${amount} ${base} = ${rate.toFixed(2)} ${convertCurrency.value}`;
    dateToday.innerHTML = `According to rates at ${date}`;
  })
  .catch(err => {
    console.log('error!!!');
    console.log(err);
  })
})


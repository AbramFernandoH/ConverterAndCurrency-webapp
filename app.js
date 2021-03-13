const exchangeForm = document.getElementById('exchange-form');
const exRatesBtn = document.getElementById('exchange-rates');

exRatesBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  let result = document.querySelector('.show-rates .result');
  result.innerHTML = '';

  let baseAmount = document.querySelector('#baseAmount');
  let baseCurrency = document.querySelector('#base');
  let convertCurrency = document.querySelector('#convert');

  axios.get(`${exchangeForm.getAttribute('action')}base=${baseCurrency.value}`)
  .then(exRates => {
    let { base, rates } = exRates.data;
    fx.base = base;
    fx.rates = rates;
    console.log(exRates.data);
  })
  .then(() => {
    let { base } = fx;
    let amount = parseFloat(baseAmount.value);
    let rate = fx(amount).from(base).to(convertCurrency.value);
    console.log(`${amount} ${base} = ${rate.toFixed(2)} ${convertCurrency.value}`);
    result.innerHTML = `${amount} ${base} = ${rate.toFixed(2)} ${convertCurrency.value}`;
  })
  .catch(err => {
    console.log('error!!!');
    console.log(err);
  })
})

// https://api.exchangeratesapi.io/latest?base=USD

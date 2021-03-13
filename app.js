const exRatesBtn = document.getElementById('exchange-rates');

exRatesBtn.addEventListener('click', function(e){
  e.preventDefault;
})


axios.get('https://api.exchangeratesapi.io/latest?base=USD')
  .then(exRates => {
    let { base, rates } = exRates.data;
    fx.base = base;
    fx.rates = rates;
    console.log(fx.base, fx.rates);
  })
  .then(() => {
    let { base } = fx;
    let rate = fx(2).from(base).to('JPY');
    console.log(`2 ${base} = ${rate.toFixed(2)} JPY`);
  })
  .catch(err => {
    console.log('error!!!');
    console.log(err);
  })
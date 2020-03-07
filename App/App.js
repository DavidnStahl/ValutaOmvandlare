import Service from '/Services/Service.js';

let listbox1 = document.getElementById("currency-1")
let listbox2 = document.getElementById("currency-2")

Service.LoadStartingData();

listbox1.addEventListener('change', (e) =>{
    Service.ChangeCurrencyInputLeftList(e.target.value)
    Service.LoadCurrencyPairs()
})

listbox2.addEventListener('change', (e) =>{
    Service.ChangeCurrencyInputRightList(e.target.value)
    console.log(e.target.value)
})



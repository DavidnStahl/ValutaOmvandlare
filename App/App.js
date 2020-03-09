import Service from '/Services/Service.js';

Service.LoadStartingData();

let listbox1 = document.getElementById("currency-1")
let listbox2 = document.getElementById("currency-2")
let input1 = document.getElementById("input-1")
let input2 = document.getElementById("input-2")

input1.addEventListener('input', (e) =>{
    Service.CalculateCurrencyFromLeftInputField(e.target.value)
})

input2.addEventListener('input', (e) =>{
    Service.CalculateCurrencyFromRightInputField(e.target.value)
})

listbox1.addEventListener('change', (e) =>{
    Service.ChangeCurrencyInputLeftList(e.target.value)
    Service.LoadCurrencyPairs()
    input1.value = null
    input2.value = null
})

listbox2.addEventListener('change', (e) =>{
    Service.ChangeCurrencyInputRightList(e.target.value)
    input1.value = null
    input2.value = null
})



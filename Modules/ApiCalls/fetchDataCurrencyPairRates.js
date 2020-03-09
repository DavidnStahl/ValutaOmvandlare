export default async function LoadCurrencyPairRates() {
    let selectedValuePair = document.getElementById("currency-1")
    let url = `https://api.exchangeratesapi.io/latest?base=${selectedValuePair.options[selectedValuePair.selectedIndex].value}`
    let result = await fetch(url).then(Response => Response.json())    
    return result
  }


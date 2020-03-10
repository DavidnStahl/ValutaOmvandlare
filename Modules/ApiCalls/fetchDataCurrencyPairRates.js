export default async function LoadCurrencyPairRates() {
    let selectedValuePair = document.getElementById("currency-1")
    let url
    /*if(selectedValuePair.options[selectedValuePair.selectedIndex].value != 26){
      url = `https://api.exchangeratesapi.io/latest?base=SEK`
    }*/
    //else{
      url = `https://api.exchangeratesapi.io/latest?base=${selectedValuePair.options[selectedValuePair.selectedIndex].value}`
    //}
    let result = await fetch(url).then(Response => Response.json())    
    return result
  }


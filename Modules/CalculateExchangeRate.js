export default class CalculateExchangeRate {
    static CalculateFromLeftToRight(currencyPairsRate,value){
        
        let selectedValuePair = document.getElementById("currency-2")
        let currencyToConverto = selectedValuePair.options[selectedValuePair.selectedIndex].value
        console.log(`${currencyPairsRate.USD}`)
        console.log(currencyToConverto)
        let result = 10*currencyPairsRate[selectedValuePair.options[selectedValuePair.selectedIndex].value]
        console.log(result)
    }
    
  }
export default class LocalStoragePairsRepository {
    static  createCurrencyPair(currencyPairs){
        let strRates = JSON.stringify(currencyPairs.rates)
        let strBase = JSON.stringify(currencyPairs.base)
        window.localStorage.setItem(`${strBase}`,`${strRates}`)
    }
    static  getCurrencyPair(){
        let selectedValuePair = document.getElementById("currency-1")
        let rates = JSON.parse(window.localStorage.getItem(JSON.stringify(`${selectedValuePair.options[selectedValuePair.selectedIndex].value}`)))
        return rates
    }

    static DeleteCurrencyPair(){
        window.localStorage.clear()
    }
  }
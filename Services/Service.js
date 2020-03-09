import CurrencyRepository from '/Modules/CurrencyRepository.js'
import HtmlBuilder from '/Modules/HtmlBuilder.js'
import CookieRepository from '/Modules/CookiesRepository.js'
import CurrencyPairsRepository from '/Modules/LocalStorageCurrencyPairsRepository.js'
import CalculateExchangeRate from '/Modules/CalculateExchangeRate.js'


export default class Service {
    static async LoadStartingData() {
      let cookie = CookieRepository.getListOfCurrancy()     
      if(cookie.length < 32){        
        this.LoadDataIfNoCookie()
        CurrencyPairsRepository.DeleteCurrencyPair()
        this.LoadCurrencyPairs()
      }
      else{
        this.LoadDataIfCookieExists()
        this.LoadCurrencyPairs()
      }
         
    }
    static async LoadCurrencyPairs(){
       
       if(CurrencyPairsRepository.getCurrencyPair() === null)
       {
        let currencyPairs = await CurrencyRepository.getListOfCurrencyPairRates()
        CurrencyPairsRepository.createCurrencyPair(currencyPairs)
        HtmlBuilder.changeCalculationText(currencyPairs)
       }
       let currencyPair = CurrencyPairsRepository.getCurrencyPair()
        HtmlBuilder.changeCalculationText(currencyPair)
       return CurrencyPairsRepository.getCurrencyPair()
           
    }
    static ChangeCurrencyInputLeftList(currencyNumber1){
      HtmlBuilder.ChangeCurrencyInputLeftList(currencyNumber1)
    }
    static ChangeCurrencyInputRightList(currencyNumber1){
      HtmlBuilder.ChangeCurrencyInputRightList(currencyNumber1)
      this.LoadCurrencyPairs()
    }

      static LoadDataIfCookieExists(){
        let cookie = CookieRepository.getListOfCurrancy()
        HtmlBuilder.CreateDropBoxes(cookie)
      }
      static async LoadDataIfNoCookie()
      {
        CookieRepository.createListOfCurrancy(await CurrencyRepository.getListOfCurrency())
        let cookie = CookieRepository.getListOfCurrancy()
        HtmlBuilder.CreateDropBoxes(cookie)
      }
      
      static CalculateCurrencyFromLeftInputField(value){
        let currencyPair = CurrencyPairsRepository.getCurrencyPair()
        CalculateExchangeRate.CalculateFromLeftToRight(currencyPair,value)
        HtmlBuilder.AddCalculation(currencyPair,value)

      }
      static CalculateCurrencyFromRightInputField(value){
        let currencyPair = CurrencyPairsRepository.getCurrencyPair()
        CalculateExchangeRate.CalculateFromRightToLeft(currencyPair,value)
        HtmlBuilder.AddCalculation(currencyPair,value)
        
      }
      static ValutaIsOrdered(){
        HtmlBuilder.ValutaIsOrdered()
      }
}

 


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
      }
      else{
        this.LoadDataIfCookieExists()
      }   
    }
    static async LoadCurrencyPairs(){
       
       if(CurrencyPairsRepository.getCurrencyPair() === null)
       {
        let currencyPairs = await CurrencyRepository.getListOfCurrencyPairRates()
        CurrencyPairsRepository.createCurrencyPair(currencyPairs)
       }

       return CurrencyPairsRepository.getCurrencyPair()
           
    }
    static ChangeCurrencyInputLeftList(currencyNumber1){
      HtmlBuilder.ChangeCurrencyInputLeftList(currencyNumber1)
    }
    static ChangeCurrencyInputRightList(currencyNumber1){
      HtmlBuilder.ChangeCurrencyInputRightList(currencyNumber1)
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
      
      static async CalculateCurrencyFromLeftInputField(value){
        let x = CurrencyPairsRepository.getCurrencyPair()
        CalculateExchangeRate.CalculateFromLeftToRight(x,value)
      }
      static CalculateCurrencyFromRightInputField(value){
         
      }
}

 


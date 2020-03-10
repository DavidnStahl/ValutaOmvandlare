import CurrencyRepository from '/Modules/Repositories/CurrencyRepository.js'
import HtmlBuilder from '/Modules/HtmlBuilder.js'
import CookieRepository from '/Modules/Repositories/CookiesRepository.js'
import CurrencyPairsRepository from '/Modules/Repositories/LocalStorageCurrencyPairsRepository.js'
import CalculateExchangeRate from '/Modules/CalculateExchangeRate.js'


export default class Service {
    static async LoadStartingData() {
      let cookie = CookieRepository.getListOfCurrancy()     
      if(cookie.length < 32){                
        await this.LoadDataWhenStartWithNoCookie()
        this.LoadCurrencyPairs()
      }
      else{
        this.LoadDataIfCookieExists()
        this.LoadCurrencyPairs()
      }         
    }
    static async LoadCurrencyPairs(){
       
       if(CurrencyPairsRepository.getCurrencyPair() == null)
       {
        let currencyPairs = await CurrencyRepository.getListOfCurrencyPairRates()
        CurrencyPairsRepository.createCurrencyPair(currencyPairs)
        HtmlBuilder.changeCalculationText(currencyPairs)
       }
       let currencyPair = await CurrencyPairsRepository.getCurrencyPair()
        HtmlBuilder.changeCalculationText(currencyPair)
           
    }
    static async LoadDataWhenStartWithNoCookie(){
      CurrencyPairsRepository.DeleteCurrencyPair()       
        CookieRepository.createListOfCurrancy(await CurrencyRepository.getListOfCurrency())
        let cookie = CookieRepository.getListOfCurrancy()
        HtmlBuilder.CreateDropBoxes(cookie)
        let currencyPairs = await CurrencyRepository.getListOfCurrencyPairRates()
        CurrencyPairsRepository.createCurrencyPair(currencyPairs)
        HtmlBuilder.changeCalculationText(currencyPairs)
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
      
      static async CalculateCurrencyFromLeftInputField(value){
        let currencyPair = await CurrencyPairsRepository.getCurrencyPair()
        CalculateExchangeRate.CalculateFromLeftToRight(currencyPair,value)
        HtmlBuilder.AddCalculation(currencyPair,value)

      }
      static async CalculateCurrencyFromRightInputField(value){
        let currencyPair = await CurrencyPairsRepository.getCurrencyPair()
        CalculateExchangeRate.CalculateFromRightToLeft(currencyPair,value)
        HtmlBuilder.AddCalculation(currencyPair,value)
        
      }
      static ValutaIsOrdered(){
        HtmlBuilder.ValutaIsOrdered()
      }
}

import CurrencyRepository from '/Modules/CurrencyRepository.js'
import HtmlBuilder from '/Modules/HtmlBuilder.js'
import CookieRepository from '/Modules/CookiesRepository.js'

export default class Service {

    static async LoadStartingData() {
      let cookie = CookieRepository.getListOfCurrancy()     
      if(cookie.length < 32){        
        CookieRepository.createListOfCurrancy(await CurrencyRepository.getListOfCurrency())
        let cookie = CookieRepository.getListOfCurrancy()
        HtmlBuilder.CreateDropBoxes(cookie)
      }
      else{
        let cookie = CookieRepository.getListOfCurrancy()
        HtmlBuilder.CreateDropBoxes(cookie)
      }   
      }

      
}

 


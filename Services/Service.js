import CurrencyRepository from '/Modules/CurrencyRepository.js'
import HtmlBuilder from '/Modules/HtmlBuilder.js'

export default class Service {

    static async LoadStartingData() {
      HtmlBuilder.CreateDropBoxes(await CurrencyRepository.getListOfCurrency())     
      }

      
}

 


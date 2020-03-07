import fetchDataCurrencyNames from '/Modules/fetchDataCurrencyNames.js'
import fetchDataCurrencyPairRates from '/Modules/fetchDataCurrencyPairRates.js'

export default class CurrencyReository {
  static async getListOfCurrency(){   
    return await fetchDataCurrencyNames()
  }

  static async getListOfCurrencyPairRates(){   
    return await fetchDataCurrencyPairRates()
  }
}







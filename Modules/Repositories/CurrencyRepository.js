import fetchDataCurrencyNames from '/Modules/ApiCalls/fetchDataCurrencyNames.js'
import fetchDataCurrencyPairRates from '/Modules/ApiCalls/fetchDataCurrencyPairRates.js'

export default class CurrencyReository {
  static async getListOfCurrency(){   
    return await fetchDataCurrencyNames()
  }

  static async getListOfCurrencyPairRates(){   
    return await fetchDataCurrencyPairRates()
  }
}







import fetchDataCurrencyNames from '/Modules/fetchDataCurrencyNames.js'

export default class CurrencyReository {
  static async getListOfCurrency(){
    return await fetchDataCurrencyNames()
  }
}







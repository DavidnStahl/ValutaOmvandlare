export default async function fetchDataCurrencyNames() {
    let result;
    let arr = [];
    let url = "https://api.exchangeratesapi.io/latest"
    result = await fetch(url).then(Response => Response.json())
     for(var currency in result.rates)
     {
       arr.push(currency)
     }
    return arr
  }
export default class CookieRepository {
  static  createListOfCurrancy(list){
      var today = new Date()
      today.setHours(today.getHours(),today.getMinutes() + 60);
      document.cookie = `${list}; expires=${today}`
      localStorage.setItem("currencyNameListExpireTime",`${today}`)
  }
  static  getListOfCurrancy(){
    let arr = document.cookie.split(",")
    var expireTime = localStorage.getItem("currencyNameListExpireTime")
    if(Date.parse(expireTime) < new Date()){
      return "null"
    }
    else{
      return arr
    }    
  }
}
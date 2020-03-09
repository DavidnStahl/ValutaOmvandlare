export default class CookieRepository {
    static  createListOfCurrancy(list){
        var today = new Date()
        today.getTimezoneOffset()
        today.setHours(today.getHours() + 1);
        document.cookie = `${list}; expires=${today}`
    }
    static  getListOfCurrancy(){
      let arr = document.cookie.split(",")
      return arr
    }
  }
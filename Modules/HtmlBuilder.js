export default class HtmlBuilder {

    static CreateDropBoxes(list) {
        list.sort()
      let select1 = document.getElementById("currency-1")
      let select2 = document.getElementById("currency-2")
      list.forEach((currency) => {
        let option1 = document.createElement("option")
        let option2 = document.createElement("option")
        option1.text = currency
        option2.text = currency
        option1.value = currency
        option2.value = currency
        select1.add(option1)
        select2.add(option2)
      })

      }

      
}
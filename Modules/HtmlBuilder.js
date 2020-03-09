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
       select1.selectedIndex = 26
       select2.selectedIndex = 30
      }

     static SetStartingInput(currencyNumber1,currencyNumber2){
        let span1 = document.getElementById("span1")
        span1.textContent = currencyNumber1
        let span2 = document.getElementById("span2")
        span2.textContent = currencyNumber2
        
        let pic1 = document.getElementById("picright").src=`pictures/${currencyNumber1}Flag.png`
        let pic2 = document.getElementById("picleft").src=`pictures/${currencyNumber2}Flag.png`
      }

      static ChangeCurrencyInputLeftList(currencyNumber1){
        let span1 = document.getElementById("span1")
        span1.textContent = currencyNumber1
        document.getElementById("picleft").src=`pictures/${currencyNumber1}Flag.png`
      }
      static ChangeCurrencyInputRightList(currencyNumber1){
        let span2 = document.getElementById("span2")
        span2.textContent = currencyNumber1
        document.getElementById("picright").src=`pictures/${currencyNumber1}Flag.png`
      }


      
}
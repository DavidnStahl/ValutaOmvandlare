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

      static changeCalculationText(currencyPairsRate){
        let selectedValuePair = document.getElementById("currency-2")
        let result = 1/currencyPairsRate[selectedValuePair.options[selectedValuePair.selectedIndex].value]
        let startingtextConvert = document.getElementById("object1")
        let span2 = document.getElementById("span2")
        let span1 = document.getElementById("span1")
        startingtextConvert.innerHTML = `VäxlingsKurs:      1 ${span2.textContent} = ${result.toFixed(4)} ${span1.textContent}`
        
      }

     static AddCalculation(currencyPairsRate,value){
      let startingtextConvert2 = document.getElementById("object2")
      if(currencyPairsRate === null && currencyPairsRate === null)
       {
        startingtextConvert2.innerHTML = ""
       }
       else{
        let startingtextConvert = document.getElementById("object4")
        startingtextConvert.innerHTML = "";
        let selectedValuePair = document.getElementById("currency-2")
        let span2 = document.getElementById("span2")
        let span1 = document.getElementById("span1")
        let inputleft = document.getElementById("input-1")
        let inputright = document.getElementById("input-2")
        if(value == inputright.value){value = inputleft.value}
        let result = value*currencyPairsRate[selectedValuePair.options[selectedValuePair.selectedIndex].value]
        startingtextConvert2.innerHTML = `Total:    ${value} ${span1.textContent} * ${currencyPairsRate[selectedValuePair.options[selectedValuePair.selectedIndex].value].toFixed(4)} = ${result.toFixed(2)} ${span2.textContent}`
       }
      
     }
     
     static ValutaIsOrdered(){
      let startingtextConvert = document.getElementById("object4")
      let inputLeft = document.getElementById("input-1")
      if(inputLeft.value > 0)
      {
        startingtextConvert.innerHTML = "Valuta beställd";
        let inputLeft = document.getElementById("input-1")
        let inputRight = document.getElementById("input-2")
        inputRight.value = null
        inputLeft.value = null
        this.AddCalculation(null,null)
      }
      else{
        startingtextConvert.innerHTML = "";
      }

      
     }
      



      
}
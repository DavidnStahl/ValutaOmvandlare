export default class CalculateExchangeRate {
    static CalculateFromLeftToRight(currencyPairsRate,value){       
        let selectedValuePair = document.getElementById("currency-2")
        let inputLeft = document.getElementById("input-1")
        let inputRight = document.getElementById("input-2")
        let result = value*currencyPairsRate[selectedValuePair.options[selectedValuePair.selectedIndex].value]
        inputRight.value = result.toFixed(3)
        if(inputRight.value.length >  14) {inputRight.value = 0}
        if(inputLeft.value.length >  14) {inputLeft.value = 0}
        if(inputRight.value == 0)
        {
            inputLeft.value = null 
            inputRight.value = null 
        }
    }

    static CalculateFromRightToLeft(currencyPairsRate,value){
        let selectedValuePair = document.getElementById("currency-2")
        let inputLeft = document.getElementById("input-1")
        let inputRight = document.getElementById("input-2")
        let result = value / currencyPairsRate[selectedValuePair.options[selectedValuePair.selectedIndex].value]
        inputLeft.value = result.toFixed(3)
        if(inputLeft.value.length >  14) {inputLeft.value = 0}
        if(inputRight.value.length >  14) {inputRight.value = 0}
        if(inputLeft.value == 0)
        {
            inputRight.value = null
            inputLeft.value = null 
        }
    }
    
  }
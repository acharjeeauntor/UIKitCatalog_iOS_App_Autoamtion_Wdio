class PickerViewScreen {
    redComponentSelector = '~Red color component value'
    greenComponentSelector ='~Green color component value'
    blueComponentSelector = '~Blue color component value'

    async enterRedComponentValue(code){
       await $(this.redComponentSelector).addValue(code)
    }

    async enterGreenComponentValue(code){
        await $(this.greenComponentSelector).addValue(code)
     }

     async enterBlueComponentValue(code){
        await $(this.blueComponentSelector).addValue(code)
     }


}

module.exports = new PickerViewScreen();
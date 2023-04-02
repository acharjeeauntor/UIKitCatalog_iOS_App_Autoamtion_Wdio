const pickerViewScreen = require("../screenobjects/pickerviewscreen")
const homeScreen = require("../screenobjects/homescreen")
const pickerViewData = require("../testdata/pickerviewdata.json")


describe('Verify Picker View', () => {
    it('TC _012: Verify user can change card color by Picker View and select blue color', async () => {
        await homeScreen.clickPickerViewBtn()
       await pickerViewScreen.enterRedComponentValue(pickerViewData.redColorCode)
       await pickerViewScreen.enterGreenComponentValue(pickerViewData.greenColorCode)
       await pickerViewScreen.enterBlueComponentValue(pickerViewData.blueColorCode)
      
    });

})

class SteppersScreen {
    defaultStepperIncSelector=`(//XCUIElementTypeButton[@name="Increment"])[1]`
    defaultStepperDecSelector=`(//XCUIElementTypeButton[@name="Decrement"])[1]`
    tintedStepperIncSelector=`(//XCUIElementTypeButton[@name="Increment"])[2]`
    tintedStepperDecSelector=`(//XCUIElementTypeButton[@name="Decrement"])[2]`
    customStepperIncSelector=`(//XCUIElementTypeButton[@name="Increment"])[3]`
    customStepperDecSelector=`(//XCUIElementTypeButton[@name="Decrement"])[3]`

    async clickDefaultStepperIncBtn(){
      await $(this.defaultStepperIncSelector).click()
    }
    async clickDefaultStepperDecBtn(){
        await $(this.defaultStepperDecSelector).click()
      }
      async clickTintedStepperIncBtn(){
        await $(this.tintedStepperIncSelector).click()
      }
      async clickTintedStepperDecBtn(){
        await $(this.tintedStepperDecSelector).click()
      }
      async clickCustomStepperIncBtn(){
        await $(this.customStepperIncSelector).click()
      }
      async clickCustomStepperDecBtn(){
        await $(this.customStepperDecSelector).click()
      }



}

module.exports = new SteppersScreen();
class StackViewsScreen {
    showHiddenPlusBtnSelector=`(//XCUIElementTypeButton[@name="stepper increment"])[1]`
    showHiddenMinusBtnSelector=`(//XCUIElementTypeButton[@name="stepper decrement"])[1]`
    furtherDetailTextSelector=`~Further Detail`
    addRemovePlusBtnSelector=`(//XCUIElementTypeButton[@name="stepper increment"])[2]`
    addRemoveMinusBtnSelector=`//XCUIElementTypeButton[@name="stepper decrement"]`
    colorBoxSelector=`//XCUIElementTypeApplication[@name="UIKitCatalog"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[3]/XCUIElementTypeOther[1]`

async clickShowHiddenPlusBtn(){
await $(this.showHiddenPlusBtnSelector).click()
}

async clickShowHiddenMinusBtn(){
    await $(this.showHiddenMinusBtnSelector).click() 
}

async clickAddRemovePlusBtn(){
    await $(this.addRemovePlusBtnSelector).click()
}

async clickAddRemoveMinusBtn(){
    await $(this.addRemoveMinusBtnSelector).click()
}

async isFurtherDetailSectionExist(){
   return await (await $(this.furtherDetailTextSelector)).isExisting()
}

async isColorBoxExist(){
    return await (await $(this.colorBoxSelector)).isExisting()
 }

}

module.exports = new StackViewsScreen();
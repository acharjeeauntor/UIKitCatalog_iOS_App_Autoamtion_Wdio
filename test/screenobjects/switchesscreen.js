class SwitchesScreen {
    defaultSwitchSelector=`//XCUIElementTypeApplication[@name="UIKitCatalog"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[1]/XCUIElementTypeSwitch`
    tintedSwitchSelector=`//XCUIElementTypeApplication[@name="UIKitCatalog"]/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[2]/XCUIElementTypeSwitch`

    async clickDefaultSwitch(){
        await $(this.defaultSwitchSelector).click()
    }

    async clickTintedSwitch(){
        await $(this.tintedSwitchSelector).click()
    }


}

module.exports = new SwitchesScreen();
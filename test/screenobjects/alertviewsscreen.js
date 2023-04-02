class AlertViewsScreen {
    simpleBtnSelector = `~Simple`
    okBtnSelector=`~OK`
    okayCancelBtnSelector = `~Okay / Cancel`
    otherTextSelector = `~Other`
    confirmBtnSelector = `~Confirm`
    destructiveChoiceBtnSelector = `~Destructive Choice`
    textEntrySelector = `~Text Entry`
    secureTextEntrySelector = `~Secure Text Entry`
    confirmCancelSelector = `~Confirm / Cancel`
    destructiveSelector = `~Destructive`
    simpleAlertPopupSelector = '-ios class chain:**/XCUIElementTypeAlert[`label == "A Short Title Is Best"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]'
    choiceOneBtnSelector = `~Choice One`
    textEntryPopupInputSelector = '-ios class chain:**/XCUIElementTypeAlert[`label == "A Short Title Is Best"`]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeCollectionView/XCUIElementTypeCell/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]'

    async clickSimpleAlertBtn() {
        await $(this.simpleBtnSelector).click()
    }
    async clickOkayCancelAlertBtn() {
        await $(this.okayCancelBtnSelector).click()
    }
    async clickOthersAlertBtn() {
        await $(this.otherTextSelector).click()
    }
    async clickTextEntryAlertBtn() {
        await $(this.textEntrySelector).click()
    }
    async clickSecureTextEntryAlertBtn() {
        await $(this.secureTextEntrySelector).click()
    }
    async clickConfirmCancelAlertBtn() {
        await $(this.confirmCancelSelector).click()
    }
    async clickDestructiveAlertBtn() {
        await $(this.destructiveSelector).click()
    }



    async getPopupMsg() {
        return await driver.getAlertText()
    }
    async clickOkBtn() {
        await driver.acceptAlert()
    }
    async clickCancelBtn() {
        await driver.dismissAlert()
    }
    async isPopupExisting() {
        return await (await $(this.simpleAlertPopupSelector)).isExisting()
    }
    async clickChoiceOneBtn() {
        await (await $(this.choiceOneBtnSelector)).click()
    }
    async enterNameInToAlertPopup(name) {
        await (await $(this.textEntryPopupInputSelector)).setValue(name)
    }
    async isOkBtnEnabled(){
        return await $(this.okBtnSelector).isEnabled()
    }
    async clickConfirmBtn() {
        await $(this.confirmBtnSelector).click()
    }
    async clickDestructiveChoiceBtn() {
        await $(this.destructiveChoiceBtnSelector).click()
    }

}

module.exports = new AlertViewsScreen();
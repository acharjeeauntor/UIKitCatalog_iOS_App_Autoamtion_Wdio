const alertViewsScreen = require("../screenobjects/alertviewsscreen")
const alertViewData = require("../testdata/alertviewdata.json")
const homeScreen = require("../screenobjects/homescreen")

describe('Verify Alert Views', () => {
    it('TC _003: Verify user can view Simple alert', async () => {
        await homeScreen.clickAlertViewsBtn()
        await alertViewsScreen.clickSimpleAlertBtn()
        expect(await alertViewsScreen.getPopupMsg()).toBe(alertViewData.simplePopupMsg)
        await alertViewsScreen.clickOkBtn()
        expect(await alertViewsScreen.isPopupExisting()).toBeFalsy()
    
    });
    
    it('TC _004: Verify user can view Okay/Cancel alert', async () => {
        await alertViewsScreen.clickOkayCancelAlertBtn()
        expect(await alertViewsScreen.getPopupMsg()).toBe(alertViewData.simplePopupMsg)
        await alertViewsScreen.clickCancelBtn()
        expect(await alertViewsScreen.isPopupExisting()).toBeFalsy()
    
    });
    
    it('TC _005: Verify user can view Other alert', async () => {
        await alertViewsScreen.clickOthersAlertBtn()
        expect(await alertViewsScreen.getPopupMsg()).toBe(alertViewData.simplePopupMsg)
        await alertViewsScreen.clickChoiceOneBtn()
        expect(await alertViewsScreen.isPopupExisting()).toBeFalsy()
    
    });
    
    it('TC _006: Verify user can view Text Entry alert', async () => {
        await alertViewsScreen.clickTextEntryAlertBtn()
        expect(await alertViewsScreen.getPopupMsg()).toBe(alertViewData.simplePopupMsg)
        await alertViewsScreen.enterNameInToAlertPopup(alertViewData.textEntryInput)
        await alertViewsScreen.clickOkBtn()
        expect(await alertViewsScreen.isPopupExisting()).toBeFalsy()
    
    });
    
    it('TC _007: Verify Ok button will be visible for valid alert message', async () => {
        await alertViewsScreen.clickSecureTextEntryAlertBtn()
        expect(await alertViewsScreen.getPopupMsg()).toBe(alertViewData.simplePopupMsg)
        await alertViewsScreen.enterNameInToAlertPopup(alertViewData.validSecureText)
        expect(await alertViewsScreen.isOkBtnEnabled()).toBeTruthy()
        await alertViewsScreen.clickOkBtn()
        expect(await alertViewsScreen.isPopupExisting()).toBeFalsy()
    
    });
    
    it('TC _008: Verify Ok button will not be enabled for an invalid alert message', async () => {
        await alertViewsScreen.clickSecureTextEntryAlertBtn()
        expect(await alertViewsScreen.getPopupMsg()).toBe(alertViewData.simplePopupMsg)
        await alertViewsScreen.enterNameInToAlertPopup(alertViewData.invalidSecureText)
        expect(await alertViewsScreen.isOkBtnEnabled()).toBeFalsy()
        await alertViewsScreen.clickCancelBtn()
        expect(await alertViewsScreen.isPopupExisting()).toBeFalsy()
    
    });
    
    it('TC _009: Verify user can view Confirm/Cancel alert for action sheet style', async () => {
        await alertViewsScreen.clickConfirmCancelAlertBtn()
        await alertViewsScreen.clickConfirmBtn()
    
    });
    
    it('TC _010: Verify user can view Destructive alert for action sheet style', async () => {
        await alertViewsScreen.clickDestructiveAlertBtn()
        await alertViewsScreen.clickDestructiveChoiceBtn()
    
    });
});
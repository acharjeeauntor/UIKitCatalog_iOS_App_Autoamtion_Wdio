const activityIndicatorsScreen = require("../screenobjects/activityIndicatorscreen")
const homeScreen = require("../screenobjects/homescreen")


describe('Verify Activity Indicators', () => {
    it('TC _001: Verify User can view Default Activity Indicators', async () => {
        await homeScreen.clickActivityIndicatortBtn()
        await expect(activityIndicatorsScreen.isDefaultInProgressVisible()).toBeTruthy()
});

it('TC _002: Verify User can view Tinted Activity Indicators', async () => {
    await homeScreen.clickActivityIndicatortBtn()
    await expect(activityIndicatorsScreen.isTintedInProgressVisible()).toBeTruthy()
    await driver.back()
});
})

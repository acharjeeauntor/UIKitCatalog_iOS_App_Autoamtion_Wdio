const switchesScreen = require("../screenobjects/switchesscreen")
const homeScreen = require("../screenobjects/homescreen")


describe('Verify Switches', () => {
    it('TC _026: Verify user can Enable-Disable default switch', async () => {
        await homeScreen.clickSwitchsBtn()
       await switchesScreen.clickDefaultSwitch()
       await switchesScreen.clickDefaultSwitch()
      
    });

    it('TC _027: Verify user can Enable-Disable tinted switch', async () => {
       await switchesScreen.clickTintedSwitch()
       await switchesScreen.clickTintedSwitch()
      
    });

})

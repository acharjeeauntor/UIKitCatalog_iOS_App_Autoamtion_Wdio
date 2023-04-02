const toolbarsScreen = require("../screenobjects/toolbarsscreen")
const tintedToolbarScreen = require("../screenobjects/tintedtoolbarscreen")
const homeScreen = require("../screenobjects/homescreen")


describe('Verify Toolbars', () => {
    it('TC _029: Verify user can view the toolbar on Tinted Toolbar', async () => {
        await homeScreen.clickToolbarBtn()
        await toolbarsScreen.clickTintedToolbar()
        await tintedToolbarScreen.clickShareBtn()
        expect(await tintedToolbarScreen.isSharePopupExist()).toBeTruthy()
      
    });
})

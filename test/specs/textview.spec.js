const textViewScreen = require("../screenobjects/textviewscreen")
const homeScreen = require("../screenobjects/homescreen")


describe('Verify Text View', () => {
    it('TC _028: Verify user can view the UITextView', async () => {
        await homeScreen.clickTextViewBtn()
        expect(await textViewScreen.isTextViewTitleExisting()).toBeTruthy()
      
    });
})

const stackViewsScreen = require("../screenobjects/stackviewsscreen")
const homeScreen = require("../screenobjects/homescreen")


describe('Verify Stack Views', () => {
    it('TC _019: Verify Further Detail input box is showing after clicking on plus icon ', async () => {
        await homeScreen.clickStackViewsBtn()
        await stackViewsScreen.clickShowHiddenPlusBtn()
        expect(await stackViewsScreen.isFurtherDetailSectionExist()).toBeTruthy()
    });
    it('TC _020: Verify Further Detail input box is hiding after clicking on Minus icon  ', async () => {
        await stackViewsScreen.clickShowHiddenMinusBtn()
        expect(await stackViewsScreen.isFurtherDetailSectionExist()).toBeFalsy()
    });
    it('TC _021: Verify color box is showing after clicking on plus icon', async () => {
        await stackViewsScreen.clickAddRemovePlusBtn()
        expect(await stackViewsScreen.isColorBoxExist()).toBeTruthy()
    });
    it('TC _022: Verify color box is hiding after clicking on Minus icon ', async () => {
        await stackViewsScreen.clickAddRemoveMinusBtn()
        expect(await stackViewsScreen.isColorBoxExist()).toBeFalsy()
    });

})

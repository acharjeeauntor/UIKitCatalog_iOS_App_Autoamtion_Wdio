const searchScreen = require("../screenobjects/searchscreen")
const homeScreen = require("../screenobjects/homescreen")
const defaultSearchBarScreen = require("../screenobjects/defaultsearchbarscreen")
const customSearchBarScreen = require("../screenobjects/customsearchbarscreen")


describe('Verify Search', () => {
    it('TC _013: Verify after clicking on cross button search input will clear for Default type search', async () => {
        await homeScreen.clickSearchBtn()
        await searchScreen.clickDefaultSearchBtn()
        await defaultSearchBarScreen.enterDefaultSearchInput("Auntor")
        await defaultSearchBarScreen.clickCrossBtn()
        expect(await defaultSearchBarScreen.getSearchInputLocator()).not.toHaveAttr("value")
    });

    it('TC _014: Verify after clicking on cross button search input will clear for Custom type search', async () => {
        await homeScreen.clickSearchBtn()
        await searchScreen.clickCustomSearchBtn()
        await customSearchBarScreen.enterCustomSearchInput("Auntor")
        await customSearchBarScreen.clickCrossBtn()
        expect(await customSearchBarScreen.getSearchInputLocator()).not.toHaveAttr("value")
    });

})

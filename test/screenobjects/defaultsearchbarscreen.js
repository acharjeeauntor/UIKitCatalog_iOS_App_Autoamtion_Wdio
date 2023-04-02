class DefaultSearchBarScreen {
    searchInputSelector=`-ios predicate string:type == "XCUIElementTypeSearchField"`
    crossBtnSelector='-ios class chain:**/XCUIElementTypeButton[`label == "Clear text"`]'

    async enterDefaultSearchInput(input){
       await $(this.searchInputSelector).setValue(input)
    }

    async clickCrossBtn(){
        await $(this.crossBtnSelector).click()
     }
     async getSearchInputLocator(){
        return await $(this.searchInputSelector)
     }



}

module.exports = new DefaultSearchBarScreen();
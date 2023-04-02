class CustomSearchBarScreen {
    searchInputSelector=`-ios predicate string:type == "XCUIElementTypeSearchField"`
    crossBtnSelector='-ios class chain:**/XCUIElementTypeButton[`label == "Clear text"`]'

    async enterCustomSearchInput(input){
       await $(this.searchInputSelector).setValue(input)
    }

    async clickCrossBtn(){
        await $(this.crossBtnSelector).click()
     }
     async getSearchInputLocator(){
        return await $(this.searchInputSelector)
     }



}

module.exports = new CustomSearchBarScreen();
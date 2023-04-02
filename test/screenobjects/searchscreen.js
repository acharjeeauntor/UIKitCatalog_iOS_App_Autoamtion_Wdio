class SearchScreen {
    defaultBtnSelector=`~Default`
    customBtnSelector=`~Custom`

    async clickDefaultSearchBtn(){
       await $(this.defaultBtnSelector).click()
    }

    async clickCustomSearchBtn(){
        await $(this.customBtnSelector).click()
     }


}

module.exports = new SearchScreen();
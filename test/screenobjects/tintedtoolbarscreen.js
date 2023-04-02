class TintedToolbarScreen {
    shareBtnSelector=`~Share`
    shareToolsPopupSelector=`~ActivityListView`

    async clickShareBtn(){
       await $(this.shareBtnSelector).click()
    }

    async isSharePopupExist(){
        let popUpLocator = await $(this.shareToolsPopupSelector)
        await popUpLocator.waitForExist({timeout:10000})
        return popUpLocator.isExisting()
     }


}

module.exports = new TintedToolbarScreen();
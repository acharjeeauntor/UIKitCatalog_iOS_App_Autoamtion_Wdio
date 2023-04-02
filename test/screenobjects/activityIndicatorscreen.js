class ActivityIndicatorScreen {
    defaultInProgressActivitySelector='-ios class chain:**/XCUIElementTypeActivityIndicator[`label == "In progress"`][1]'
    tintedInProgressActivitySelector='-ios class chain:**/XCUIElementTypeActivityIndicator[`label == "In progress"`][3]'

    async isDefaultInProgressVisible(){
        return await $(this.defaultInProgressActivitySelector).isExisting()
    }

    async isTintedInProgressVisible(){
        return await $(this.tintedInProgressActivitySelector).isExisting()
    }


}

module.exports = new ActivityIndicatorScreen();
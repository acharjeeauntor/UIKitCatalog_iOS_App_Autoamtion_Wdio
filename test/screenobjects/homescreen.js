class HomeScreen {
    activityIndicatorSelector=`~Activity Indicators`
    searchSelector=`~Search`
    alertViewsSelector = `~Alert Views`
    textViewSelector=`~Text View`
    stackViewsSelector = `~Stack Views`
    steppersSelector=`~Steppers`
    switchsSelector=`~Switches`
    toolbarSelector=`~Toolbars`
    pickerViewSelector=`~Picker View`

    
    async clickActivityIndicatortBtn(){
        await $(this.activityIndicatorSelector).click() 
    }
    async clickSearchBtn(){
        await $(this.searchSelector).click() 
    }
    async clickAlertViewsBtn(){
        await $(this.alertViewsSelector).click() 
    }
    async clickTextViewBtn(){
        await $(this.textViewSelector).click() 
    }
    async clickStackViewsBtn(){
        await $(this.stackViewsSelector).click() 
    }
    async clickSteppersBtn(){
        await $(this.steppersSelector).click() 
    }
    async clickSwitchsBtn(){
        await $(this.switchsSelector).click() 
    }
    async clickToolbarBtn(){
        await $(this.toolbarSelector).click() 
    }
    async clickPickerViewBtn(){
        await $(this.pickerViewSelector).click() 
    }

}

module.exports = new HomeScreen();
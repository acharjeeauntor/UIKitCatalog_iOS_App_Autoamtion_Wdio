class ToolbarsScreen {
    tintedToolbarSelector=`~Tinted`

    async clickTintedToolbar(){
       await $(this.tintedToolbarSelector).click()
    }


}

module.exports = new ToolbarsScreen();
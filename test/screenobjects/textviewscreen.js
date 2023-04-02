class TextViewScreen {
    textViewTitleSelector=`//XCUIElementTypeStaticText[@name="Text View"]`

    async isTextViewTitleExisting(){
       return await $(this.textViewTitleSelector).isExisting()
    }


}

module.exports = new TextViewScreen();
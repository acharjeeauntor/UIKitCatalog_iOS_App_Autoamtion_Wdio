const steppersScreen = require("../screenobjects/steppersscreen")
const homeScreen = require("../screenobjects/homescreen")


describe('Verify Steppers', () => {
    it('TC _023: Verify user can increase-dicrease default stepper', async () => {
        await homeScreen.clickSteppersBtn()
        for(var i=0;i<2;i++){
            await steppersScreen.clickDefaultStepperIncBtn()
        }
        await steppersScreen.clickDefaultStepperDecBtn()
    });
    it('TC _024: Verify user can increase-dicrease Tinted stepper', async () => {
        for(var i=0;i<3;i++){
            await steppersScreen.clickTintedStepperIncBtn()
        }
        await steppersScreen.clickTintedStepperDecBtn()
    });
    it('TC _025: Verify user can increase-dicrease Custom stepper', async () => {
        for(var i=0;i<5;i++){
            await steppersScreen.clickCustomStepperIncBtn()
        }
        await steppersScreen.clickCustomStepperDecBtn()
    });

})

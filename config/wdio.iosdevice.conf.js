const path = require('path')
const config = require('./wdio.shared.conf')

config.port = 4723;
config.specs= [
    './test/specs/activityindicators.spec.js',
    './test/specs/alertviews.spec.js',
    './test/specs/pickerview.spec.js',
    './test/specs/search.spec.js',
    './test/specs/stackviews.spec.js',
    './test/specs/steppers.spec.js',   
    './test/specs/switches.spec.js',
    './test/specs/textview.spec.js',
    './test/specs/toolbars.spec.js', 
],
config.suites={
    smokeTest:[
    './test/specs/activityindicators.spec.js',
    './test/specs/alertviews.spec.js',
    './test/specs/pickerview.spec.js',
    './test/specs/search.spec.js',
    ]
},
    config.capabilities= [{
        "platformName": "ios",
        "appium:platformVersion": "16.1",
        "appium:deviceName": "iPhone 14 Pro",
        "appium:app": path.join(process.cwd(), "./app/UIKitCatalog.ipa"),
        "appium:automationName": "XCUITest"
    }
    ],


config.services = ['appium'];

exports.config = config;
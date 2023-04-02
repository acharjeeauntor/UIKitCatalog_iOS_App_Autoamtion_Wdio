const config = require("./wdio.shared.conf")

config.user = process.env.BROWSERSTACK_USER
config.key = process.env.BROWSERSTACK_KEY

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
}
    config.capabilities = [
        {
            platformName: "ios",
            "appium:platformVersion": "15.5",
            "appium:deviceName": "iPhone 11 Pro",
            "appium:automationName": "XCUITest",
            "appium:app": "bs://cecaaff3ad724c80afde7a98bf224871cacc479b",
        }
    ]

config.services = ['browserstack'];

exports.config = config;
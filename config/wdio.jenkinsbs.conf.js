const config = require("./wdio.shared.conf")
require('dotenv').config({
    path:`.env.test`,
   override:true
})

config.user = process.env.BS_USER
config.key = process.env.BS_KEY

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
config.suite={
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
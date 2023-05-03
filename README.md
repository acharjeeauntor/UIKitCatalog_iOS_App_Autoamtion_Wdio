# UIKitCatalog_iOS_App_Test_Automation_Wdio
This repo contains my personal ios app automation project, Script written by Wdio

----------------------------------------------------------

## Automation Testing

## Technology: <br>
* Automation Framework: webdriverio <br>
* Build tool: npm <br>
* Bundled Tools: Mocha, Chai
* Language: Javascript <br>
* Design Pattern: POM <br>
* Report: Allure,spec <br>
* CI/CD: BrowserStack, Github Action<br>
*   dependencies: {
    "@wdio/cli": "^7.20.9",
    "@wdio/browserstack-service": "^8.6.9",
    "allure-commandline": "^2.18.1",
    "appium": "^2.0.0-beta.42"
  }, <br>
  devDependencies: {
    "@babel/core": "^7.18.10",
    "@babel/preset-env": "^7.18.10",
    "@babel/register": "^7.18.9",
    "@wdio/appium-service": "^7.20.8",
    "@wdio/local-runner": "^7.20.9",
    "@wdio/mocha-framework": "^7.20.7",
    "@wdio/spec-reporter": "^7.20.8",
    "@wdio/allure-reporter": "^7.20.3",
    "appium-uiautomator2-driver": "^2.4.6",
    "wdio-wait-for": "^2.2.6"
  } <br>
* IDE: Visual Studio Code <br>

## Project Architecture: <br>
![wdio_iOS_project_Arch](https://user-images.githubusercontent.com/38497405/232031158-0a5de7d3-e687-4483-aec9-eccdf352d816.png)

## Prerequisite:
The following software are required:

1. nodejs : Download and Install Node JS from<br>
    https://nodejs.org/en/download/<br>
2. Install Java 8 or above, Allure Reports require Java 8 or higher.<br>
3. allure commandline : Install allure command line for generating Allure Reports using<br>
    npm install -g allure-commandline<br>


## Installation:
1. Clone the repo using below URL<br>
  [https://github.com/acharjeeauntor/UIKitCatalog_iOS_App_Test_Automation_Wdio]<br>
2. Navigate to folder and install npm packages using:<br>
  npm install<br>


## Usage:
1. To run test in local machine: npm run deviceTest<br>
2. To run test in github action use this script: npm run githubActionBSTest<br>

## Allure Report view for functional test:
![Screenshot 2022-08-16 at 8 31 56 PM](https://user-images.githubusercontent.com/38497405/184920246-8f7a18c8-17c0-4f3b-b4d1-77ea4111b46e.png)
![Screenshot 2022-08-16 at 8 32 48 PM](https://user-images.githubusercontent.com/38497405/184920198-cc975dd4-8772-460d-a49e-e29f7b3fb760.png)
![Screenshot 2022-08-16 at 8 32 33 PM](https://user-images.githubusercontent.com/38497405/184920319-2412779b-5c44-43d7-a226-bed0c8ef6363.png)
![Screenshot 2022-08-16 at 8 32 19 PM](https://user-images.githubusercontent.com/38497405/184920342-273aa2cb-dbcb-4b41-bff1-b167fdbffab8.png)

## To See the Demo Video click [here](https://youtu.be/qttdkIztkaU)<br>

----------------------------------------------------------

## Github Action with BrowserStack Related Info:<br>
1. I have added github actions in this project to test my script in CI way.As this is a mobile application testing so i have intregrate Browserstack to for virtual mobile device.<br>
2. To See the Demo Video click [here](https://youtu.be/G74Z90UJZXM)<br>

----------------------------------------------------------

## Jenkins with BrowserStack Related Info:<br>
1. I have intregrate this project with jenkins through the github repository and run test on Browserstack for virtual device.<br>
2. To See the Demo Video click [here](https://youtu.be/gyI-2djvOQ8)<br>

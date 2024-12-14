<h1 id="top" align="center">Core  Mocha <br/> API Automation Test</h1> 

<br>

<div align="center">
    <img width=250 src="assets/banner.png">
</div>

## 🔍 Table of Contents

- [About Project](#intro)
- [Technologies](#technologies)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [System Startup](#system-startup)
- [Test Report](#test-report)
- [Manual Testing](#manual-testing)
- [Contributors](#contributors)
 
<br/>

<h2 id="intro">📌 About Project</h2>

Core Mocha API Automation Test is a project aims to ensure quality of the APIs. It supports running tests in both parallel and standard modes to optimize execution times while ensuring thorough validation of API endpoints. The project generates auto-reports to give users detailed insights into test results.


<br/>

<h2 id="technologies">☄️ Technologies</h2>

&nbsp; [![NodeJs](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)

&nbsp; [![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)

&nbsp; [![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

&nbsp; [![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)

&nbsp; [![.Env](https://img.shields.io/badge/.ENV-ECD53F.svg?style=for-the-badge&logo=dotenv&logoColor=black)](https://www.ibm.com/docs/bg/aix/7.2?topic=files-env-file)


### Test

&nbsp; [![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white)](https://mochajs.org/)

&nbsp; [![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://www.postman.com/)

<br/>

<h2 id="features">🔥 Features</h2>

+ **Parallel and Standard Modes:** Run tests in parallel for faster execution or in standard mode.
+ **Auto-generated Reports:** Automatically generates detailed reports summarizing test results and highlighting any issues.
+ **Postman Scripts:** Includes Postman scripts for testing all API endpoints, enabling manual testing and validation of functionality.
+ **Database Cleanup:** Ability to clean database data, ensuring the environment is reset and ready for the next test run.
+ **Comprehensive API Testing:** Tests all API endpoints for correctness.
+ **Environment Variables**: Support for environment variables to manage configurations.

<br/>

<h2 id="prerequisites">🔒 Prerequisites</h2>

Ensure Node.js is installed for automation test.
Ensure Postman is installed for manual test.

<br/>

<h2 id="system-startup">🚀 System Startup</h2> 

Modify `.env` file for further configurations.

Install dependencies
```
npm i
```

Run parallel tests and clean database
```
npm run test:parallel:clean
```
    
Run parallel tests
```
npm run test:parallel
```
    
Run sequential tests
```
npm run test
```
    
Run spec tests in parallel
```
npm run spec:parallel
```

Run spec tests in sequential
```
npm run spec
```

<br/>

<h2 id="test-report">🐛 Test Report</h2>

Mochawesome is integrated into the project to generate comprehensive test reports. The reports provide detailed insights into test execution, including the results of individual tests, their durations, and any issues encountered.

After running the tests, you can view the generated report at `/mochawesome-report/mochawesome.html`. This report is automatically generated upon test completion.
    
<br/>

<h2 id="manual-testing">🔬 Manual Testing</h2>

To run the Postman tests, first import the Postman collection file from the path `./src/postman-request` into Postman by selecting the `Import` option. After importing, locate the collection in Postman, execute the individual requests for each. Review the responses to ensure that the endpoints are functioning as expected.

<br/>

<h2 id="contributors">👥 Contributors</h2> 

<a href="https://github.com/ahmettoguz" target="_blank"><img width=60 height=60 src="https://avatars.githubusercontent.com/u/101711642?v=4"></a> 

### [🔝](#top)

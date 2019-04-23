
# Magic-console-logger

This is simple and basic package. In this we can customise color of console text like success, error and info etc. By this its very easy to distinguish console text. 


### Installing

Install latest package by command.

```
npm install magic-console-logger
```

## Running the tests

Here is the example to use this package
```javascript
const logger = require('magic-console-logger');
logger('success', 'Hello test success');
logger('error', 'Hello test error');
logger('info', 'Hello test info');
```
It will console

<font color="green">Success</font> Hello test success
<font color="red">Error</font> Hello test error
<font color="skyblue">Info</font> Hello test info


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Ashish Sharma** - *Initial work* - [Ashish Sharma](https://github.com/ashish-ajm)


## Acknowledgments

* Inspiration : I got this idea when i was working on a project where console logging were difficult to recognise saperatly. So I decided to create small and basic package to console log with customise color. It make easy to read success or error msg in console.

# logger

a simple basic logger for nodejs that allows you to log to a file and a webhook.



## examples

some examples to get you started.

### basic

a simple logger

```js
const {BasicLogger} = require('');

const logFilePath = './logs.log';
const allowDebugLogs = true;

const log = new BasicLogger('./logs.log', allowDebugLogs);


log.success("app is running");
log.info("app is still running");
log.debug("line 8");
log.warn("app will be stopping");
log.error("app has stopped");
```


### advanced

a more advanced logging system with more options please see the docs for more details on confg options

```js
const {AdvancedLogger} = require('');

const loggerConfig = {
    filePath:"./logs.log",
    webhook: {
        discord: "https://discord.com/api/webhook/blblbalabla",
    },
    debug:true
}
const log = AdvancedLogger(loggerConfig);

log.success("app is running");
log.info("app is still running");
log.debug("line 14");
log.warn("app will be stopping");
log.error("app has stopped");
```

### using console

its very simple instead of doing `const log = AdvancedLogger(loggerConfig);` you would do `console = AdvancedLogger(loggerConfig);`

```js
const {AdvancedLogger} = require('');

const loggerConfig = {
    filePath:"./logs.log",
    webhook: {
        discord: "https://discord.com/api/webhooks/blblbalabla",
    },
    debug:true
}
console = AdvancedLogger(loggerConfig);

console.log("starting app");
console.success("app is running");
console.info("app is still running");
console.debug("line 14");
console.warn("app will be stopping");
console.error("app has stopped");
```
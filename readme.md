# logger

a simple logger for nodejs that allows you to log to a file and a to many platforms using webhooks.

## examples
some examples to get you started.
  <br>

### basic
a simple logger
```js

const {BasicLogger} = require('@404invalid-user/logger');

const  logPath = './logs.log';
const  allowDebugLogs = true;
const  log = new  BasicLogger(logPath, allowDebugLogs);

log.success("app is running");
log.info("app is still running");
log.debug("line 8");
log.warn("app will be stopping");
log.error("app has stopped");
```
<br>
<br>
### advanced

a more advanced logging system with more options please see the docs for more details on confg options.
```js
const {AdvancedLogger} = require('@404invalid-user/logger');
const  loggerConfig = {
  filePath:"./logs.log",
  webhook: {
    discord:  "https://discord.com/api/webhook/blblbalabla",
  },
  debug:true
}

const  log = AdvancedLogger(loggerConfig);

log.success("app is running");
log.info("app is still running");
log.debug("line 14");
log.warn("app will be stopping");
log.error("app has stopped");

```
<br>
<br>

### using console
its very simple instead of doing `const log = AdvancedLogger(loggerConfig);` you would do `console = AdvancedLogger(loggerConfig);`
```js

const {AdvancedLogger} = require('@404invalid-user/logger');
const  loggerConfig = {
  filePath:"./logs.log",
  webhook: {
    discord:  "https://discord.com/api/webhook/blblbalabla",
  },
  debug:true
}
console = new AdvancedLogger(loggerConfig);

console.log("starting app");
console.success("app is running");
console.info("app is still running");
console.debug("line 14");
console.warn("app will be stopping");
console.error("app has stopped");

```


## docs

### config options

the config will be a object passed into the AdvancedLogger class.

each function will have its own object with the name of that function each function config object is the same so i will just use success for this example.

first you can disable each logging function by passing false instead of the object.
```js
//example
const {AdvancedLogger} = require('@404invalid-user/logger');
const  loggerConfig = {success:false}
const  log = AdvancedLogger(loggerConfig);

//will not do anything
log.success("app is running");
//will work as normal
log.info("app is still running");
```

each function object will have this schema.
```json
{
   "logPath": "relative/path/from/app.dir",
   "color": " your log name text colour see colours",
   "textColor": "the colour of the text your logging see colours",
   "webhook": {
       "discord":"a discord webhook url",
       "googleChat":"a google chat webhook url"
   }
}
```
for a full example of all the functions in action please see /examples


 

#### class
```js
.BasicLogger(logPath: string, allowDebugLogs: boolean)
```
>>a basic logger to get the job done.
>
> returns an instance of the basic logger

<br>

#### class
```js
.AdvancedLogger(configOptions: object)
```
>>the configurable logger
>
> returns an instance of the advanced logger.

<br>

#### function
```js
.success(text: string)
```
>>send a success message to the console and log file if specified.
>
> returns null

<br>

#### function
```js
.info(text: string)
```
>>send a info message to the console and log file if specified.
>
> returns null

<br>

#### function
```js
.debug(text: string)
```
>>send a debug message to the console and log file if specified for debugging default is off so none of these will get logged in production.
>
> returns null

<br>

#### function
```js
.warn(text: string)
```
>>send a warning to the console and log file if specified.
>
> returns null

<br>

#### function
```js
.error(text: string)
```
>>send a error message to the console and log file if specified.
>
> returns null

<br>

#### function
```js
.crash(text: string)
```
>>send a crash message to the console and log file if specified.
>
> returns null

<br>

#### function
```js
.log(text: string)
```
>>a simple plain old log console and log file if specified for if you chose to redefine console as this to the.
>
> returns null

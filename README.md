<h1>Node Projects</h1>

- [Notes App](#notes-app)
  - [Notes](#notes)
  - [Steps](#steps)
  - [Modules used](#modules-used)
  - [References](#references)
- [Weather Application](#weather-application)
  - [Notes](#notes-1)
  - [Steps](#steps-1)
  - [Modules used](#modules-used-1)
  - [References](#references-1)
- [Web Server](#web-server)
  - [Notes](#notes-2)
  - [Steps](#steps-2)
  - [Modules used](#modules-used-2)
  - [References](#references-2)
- [Task Manager Application](#task-manager-application)
  - [Notes](#notes-3)
  - [Steps](#steps-3)
  - [Modules used](#modules-used-3)
  - [References](#references-3)
# Notes App
## Notes
* Use Asynchronous or callback functions.
* Use forward slash ``/`` for file navigation.
* Use nodemon instead of node in the command line if nodemon is installed.
* ``ctrl + C`` stops the nodemon process.
* Browser has windows and documents. System has process and global
* ``process.argv`` &rarr; argv stands for argument vector and it has the list of arguments provided.
* Yargs parse goes thru the process of pasrsing the arguments with all of the configuration details that are provided to yargs
* ``JSON.stringify`` &rarr; Converts javascript object to Json string.
* ``JSON.parse`` &rarr; Converts Json string to javascript object.
* Arrow function cannot be used if ``this`` keyword is used. But it should be used in the below scenario
    ``` javascript
    this.guestList.forEach((guest) => {
      console.log(`Guest ${guest} is attending ${this.name}`);
    });
* Difference between filter and find is that find will stop when it gets a hit while traversing thru the list.
* To allow debugging using ``debugger``, we should run the node command as ``node inspect``. If it throws timeout error in windows machine, use ``node --inspect-brk``. Go to Chrome and open chrome://inspect. In chrome inspect, ``esc`` button will toggle console view
## Steps
1.  Run the below command in the project root directory
    ``` bash
    npm init
2. Install validator package from npm
    ``` bash
    npm install validator
    (or)
    npm i validator
3. Install Chalk package from npm
    ``` bash
    npm i chalk 
4. Install nodemon package from npm globally
   ``` bash
   npm install nodemon -g
5. Install Yargs package from npm 
    ``` bash
    npm install yargs 
6. Use the below command to add a note
    ``` bash
    node app.js add --title "New note" --body "Testing"
7. Use the below command to remove a note
    ``` bash
    node app.js remove --title "Test"
8. Use the below command to list the note
    ``` bash
    node app.js list
9. Use the below command to read the note
    ``` bash
    node app.js read --title "Test"
10. Use the below command to debug
    ``` bash
    node inspect app.js read --title "Test"
11. If the above command provides timeout error, execute the below command
    ``` bash
    node --inspect-brk app.js read --title "Test"
12. Open chrome://inspect to start debugging

## Modules used
| Sl No. | Module Name | Module Type | Purpose                                                                                       |
| ------ | ----------- | ----------- | --------------------------------------------------------------------------------------------- |
| 1      | fs          | core module | File system operations                                                                        |
| 2      | validator   | npm         | Validates / Sanitizes the input                                                               |
| 3      | chalk       | npm         | Customizes the text displayed in the console                                                  |
| 4      | nodemon     | npm         | Automatically restarting the node application when file changes in the directory are detected |
| 5      | Yargs       | npm         | Parsing command line arguments                                                                |

## References
* https://www.npmjs.com/
* https://www.npmjs.com/package/validator
 
 # Weather Application
 ## Notes
 * ``setTimeout`` has 2 arguments. First is a function and second is number of milliseconds.
 * [``postman-request``](https://www.npmjs.com/package/postman-request) is an alternative for [``request``](https://www.npmjs.com/package/request) module 
 * The output of request is error and response. Only one of the object will be defined at a time. If error is present, response will be undefined.
 * Callback function is a function that is passed as an argument of a function with the intension of calling it later. 
 * Property short hand feature is no need to specifically mention if the property and the variable name are the same. Example as below
    ``` javascript
    const user = {
        name, // Short hand feature
        age: userAge,
        location: "Philly",
    };
* Destructuring means extracting values from an object and assigning to individual variables.
    ``` javascript
    const product = {
        label: "Lays",
        price: 10,
        stock: 100,
        salePrice: undefined,
    };

    const { label: productLabel, price, salePrice = 15, rating } = product;
    console.log(productLabel, price, salePrice, rating);
    ```
    ``` cmd
    Lays 10 15 undefined
 ## Steps
1. Signup in weatherstack.com &rarr; 6637c8d7a2df469dea2117ded3eaec77
2. Run the below command in the project root directory
    ``` bash
    npm init
3. Install request module using the below command
    ``` bash
    npm install request
4. Signup in mapbox.com &rarr; pk.eyJ1IjoieWFnb3JvYmllIiwiYSI6ImNrcnpsZ293MTBhOTUycXRqZzdmaGZjYWoifQ.XAItOxeA42gBksW8YY9WqA
## Modules used
| Sl No. | Module Name | Module Type | Purpose                       |
| ------ | ----------- | ----------- | ----------------------------- |
| 1      | request     | npm package | To make http calls            |
| 2      | http        | core        | To use HTTP server and client |
| 3      | https       | core        | HTTP over TLS                 |

## References
* https://darksky.net/
* https://weatherstack.com/
* https://www.mapbox.com/
* https://nodejs.org/dist/latest-v14.x/docs/api/
* https://nodejs.org/dist/latest-v14.x/docs/api/http.html
* https://nodejs.org/dist/latest-v14.x/docs/api/https.html

# Web Server 
## Notes
* Adding -y flag to ``npm init`` will perform the initialization using the default values
* ``__dirname`` &rarr; Absolute folder path
* ``__filename`` &rarr; File name along with the folder path
* For better organizing, first provide the core modules followed by npm modules.
* For rendering dynamic content use templating / mustache templates. ``{{ }}``
* For rendering partials, use an extra ``>``. {{``>``partialname}}
* Server does not restart when new templates are created so express and hbs cannot see the changes. This can be resolved by changing the nodemon scripts.
    ``` bash
    nodemon src/app.js -e js,hbs
* ``public`` &rarr; has the public servable contents like html, styles, scripts
* ``view`` &rarr; dynamic rendering views
* Fetch is not part of javascript. It is part of the browser.
* Generate ssh keys for Git and Heroku communications. id_rsa is private and should not be shared. only id_rsa.pub which is public should be shared. 
* Don't use global module installation in Node because these global modules should be installed in all the machines

## Steps
1. Run the below command in the project root directory
    ``` bash
    npm init -y
2. Install express module using the below command
    ``` bash
    npm install express
3. Install hbs module using the below command
    ``` bash
    npm install hbs
4. Install request module using the below command
    ``` bash
    npm install request
5. Sign up in Heroku
6. Install Heroku cli
7. Open powershell and enter the below command 
    ``` bash
    heroku login
8. Open Git Bash and run the below commands to generate ssh and register it in local machine.
    ``` bash
    ls -a -l ~/.ssh
    ssh-keygen -t rsa -b 4096 -C "emailaddress"
    eval "$(ssh-agent -s)"
    ssh-add
    cat ~/.ssh/id_rsa.pub
9. Register the ssh key in github &rarr; https://github.com/settings/keys
10. Run the below command in Git bash 
    ``` Bash
     ssh -T git@github.com
11. Enter yes if this prompt comes up &rarr; "The authenticity of host 'github.com (140.82.113.3)' can't be established."
12. Enter the below command in powershell 
    ``` bash
    heroku keys:add
    heroku create r1-weather-application
13. After changing the start script in packages.json, run the below command to start the application.
    ``` Bash
    npm run start
14. Enter git remote and check the remote. If heroku is not present, enter the below command in powershell 
    ``` Bash
    heroku git:remote --app r1-weather-application
15. Enter the below command in powershell to push the code to heroku. 
    ``` Bash
    git push heroku main
16. The above command may get error due to the source code in the sub directory. so instead use the below commands
    ``` bash
    git subtree split --prefix src/web-server -b deploy
    git push heroku deploy:main
17. Uninstall nodemon globally
    ``` Bash
    npm uninstall -g nodemon
18. install nodemon as a local dev dependency
    ``` Bash
    npm install nodemon --save-dev
    ```
## Modules used
| Sl No. | Module Name | Module Type | Purpose                                                                        |
| ------ | ----------- | ----------- | ------------------------------------------------------------------------------ |
| 1      | express     | npm         | provides a robust set of features for web and mobile applications              |
| 2      | path        | core        | utilities for working with file and directory paths                            |
| 3      | hbs         | npm         | handlebars plugin for express. Helps in dynamic content rendering / templating |
| 4      | request     | npm package | To make http calls                                                             |

## References
* https://expressjs.com/
* https://dashboard.heroku.com/apps
* https://devcenter.heroku.com/articles/heroku-cli
* https://r1-weather-application.herokuapp.com/
* https://git.heroku.com/r1-weather-application.git
* https://jtway.co/deploying-subdirectory-projects-to-heroku-f31ed65f3f2
* https://stackoverflow.com/questions/67990094/the-library-is-not-added-to-the-git-via-the-git-subtree

# Task Manager Application
## Notes
* NoSQL means Not Only SQL (Structured Query Language)
* Instead of localhost use 127.0.0.1. For some reasons, after sometime it is failing.
* More connections are opened in MongoDb because those are opened in pools.
* ``_id`` (generated objectId) in mongoDb collection has the timestamp in it. 
* ``_id`` is stores as objectId which is binary instead of string because binary takes less space than string. Binary takes 12 bits whereas string takes 24 bits. 
* Promises is an enhancement to callback. In callback pattern, we will have only one callback funciton and we have to understand from the returned values for error and data. In promises, there are 2 callback functions, resolve and reject and use then and catch. 
* In callback pattern, we can set both error and data. But in promise, only resolve or reject will work. Even if we set both only the first one will work.
* In callback patern, the callback function can be called multiple times. But in promise, only once either resolve or reject will be called. 
    ``` 
                                fulfilled (resolve is called)
                              /    
    Promise --> Pending   -->
                              \
                                rejected (reject is called)
* Mongoose is a ODM (Object Document Mapper)
* The below line automatically parses the incoming json to an object. 
    ``` javascript
    app.use(express.json());
* ``async`` function always return promise
* ``await`` can be used only in async function
* ``every()`` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value
* The below code can be used to setup routers in different file
    ``` javascript
    const router = new express.Router();
    app.use(router);
* Difference between hashing and encryption is that in encryption we can get the original data. But hashing is a one way algorithm so it cannot be reversed.
* Middleware (also called pre and post hooks) are functions which are passed control during execution of asynchronous functions.
* Arrow function cannot be used in the middleware because ``this`` is used. So we should use normal function
* middleware will not work in findbyidUpdate opertion. So circumvent that first find, update the user and then save it. 
* JWT has two 3 parts seperated by ".".
    * Base64 encoded header information.
    * Base64 encoded body information.
    * Base64 encoded signature information.
* Express middleware
    * Without middleware:   ``New Request`` &rarr; ``Run Route Handling``
    * With middleware:     ``New Request`` &rarr; ``Do Something`` &rarr; ``Run Route Handling``
    * Modify the behaviour of the server to fit our needs.
    * Should be registered before we use other ``app.use`` methods.

## Steps
1. Sign up in Mongo DB
2. Setup a cloud database
3. Install Robo 3t
4. Initialize npm in the root folder
    ``` bash
    npm init -y
5. Install mongodb
    ``` Bash
    npm install mongodb
6. Install nodemon and setup the dev script
    ``` bash
    npm install nodemon --save-dev
7. Install mongoose
    ``` Bash
    npm install mongoose
8. Install validator
    ``` Bash
    npm install validator
9. Install express
    ``` Bash
    npm install express
10. Install bcryptjs
    ``` Bash
    npm install bcryptjs
11. Install jsonwebtoken
    ``` Bash
    npm install jsonwebtoken
12. 


## Modules used
| Sl No. | Module Name  | Module Type | Purpose                                                           |
| ------ | ------------ | ----------- | ----------------------------------------------------------------- |
| 1      | mongodb      | npm         | Connect to Mongo database                                         |
| 2      | mongoose     | npm         | Mongo ODM                                                         |
| 3      | validator    | npm         | to validate and sanitize the strings                              |
| 4      | express      | npm         | provides a robust set of features for web and mobile applications |
| 5      | bcryptjs     | npm         | Helps to hash passwords                                           |
| 6      | jsonwebtoken | npm         | JWT support                                                       |
## References
* https://www.mongodb.com/
* https://robomongo.org/
* https://mongodb.github.io/node-mongodb-native/4.0/
* https://stackoverflow.com/questions/68412072/nodejs-mongodb-insertone-get-the-inserted-document-from-result-ops
* https://cloud.mongodb.com/v2/610f6249c0b72408655d3861#clusters
* https://docs.mongodb.com/manual/reference/operator/update/
* https://mongoosejs.com/
* https://httpstatuses.com/
* https://www.base64decode.org/
* https://dev.to/akshatsinghania/mongoose-unique-not-working-16bf
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
* 

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
* 



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
14. 


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


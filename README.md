<h1>Node Projects</h1>

- [Notes App](#notes-app)
  - [Notes](#notes)
  - [Steps](#steps)
  - [Modules used](#modules-used)
  - [References](#references)
# Notes App
## Notes
* Use Asynchronous or callback functions.
* Use forward slash "/" for file navigation.
* Use nodemon instead of node in the command line if nodemon is installed.
* ctrl + C stops the nodemon process.
* Browser has windows and documents. System has process and global
* process.argv &rarr; argv stands for argument vector and it has the list of arguments provided.
* Yargs parse goes thru the process of pasrsing the arguments with all of the configuration details that are provided to yargs
* JSON.stringify &rarr; Converts javascript object to Json string.
* JSON.parse &rarr; Converts Json string to javascript object.
* 
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
7. 

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
* 
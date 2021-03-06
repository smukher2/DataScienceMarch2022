Author: Shradha Mukherjee
Date: 2022-03-10
Topic: NodeJS and Express framework

##########################Background###########################

This is a small app created on a local server created with NodeJS and
Express framework. To use 'get' requests (i.e. typing url on browser)
this app sends a response in form of JSON object (key:value pairs instead of simple string).
The port and url can be modified by user from commandline.

####################Prerequisites (Dockerfile also provided)###################

1) Manual Step: Download git repository and place it in the Desktop
(unzip if downloaded as zipped folder)

2) Manual Step: Setup, install and Update Node on Linux/Ubuntu Terminal
#Install first time nodejs and npm
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install nodejs
node -v
sudo apt-get install npm
npm -v

3) Manual Step: Setup, update to latest version nodejs and npm on Linux/Ubuntu Terminal
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
sudo npm install npm -g

##########################Usage and Results###########################

4) Manual Step: Type on terminal the following commands
cd ~
cd ./Desktop/DataScienceMarch2022/Ex2JSNodeExpress
node index.js
#Alternatively, to get server to auto-restart when changes are made to files
nodemon index.js

#Open any web browser such as Firefox https://www.mozilla.org/en-US/firefox/new/,
Safari https://www.apple.com/safari/, Brave https://brave.com/,
Opera https://www.opera.com/, Edge https://www.microsoft.com/edge,
Chrome/Chromium https://www.chromium.org/Home/ or other, and type default url as follows:
Requests                                      Response
  localhost:3333                              "Welcome to homepage"
  localhost:3333/foo                          {“response”: “Hello”}
  localhost:3333/bar                          {“response”: “World”}

5) Manual Step: For custom url and port, type it in Terminal and then start server
cd ~
cd ./Desktop/DataScienceMarch2022/Ex2JSNodeExpress
export PORT=3000
export BASE_URL="/alien_abduction"
node index.js
#Alternatively, to get server to auto-restart when changes are made to files
nodemon index.js

#Open any web browser such as Firefox https://www.mozilla.org/en-US/firefox/new/,
Safari https://www.apple.com/safari/, Brave https://brave.com/,
Opera https://www.opera.com/, Edge https://www.microsoft.com/edge,
Chrome/Chromium https://www.chromium.org/Home/ or other, and type default url as follows:
Requests                                      Response
  localhost:3000/alien_abduction              "Welcome to homepage"
  localhost:3000/alien_abduction/foo          {“response”: “Hello”}
  localhost:3000/alien_abduction/bar          {“response”: “World”}

##########################Methods: How this project was prepared###########################
6) Manual Step: To modify and write code used Text-Editor such as Atom, Brackets,
Bluefish, VS code or other.
Here Atom was used, install package 'emmet' for web development shortcuts.
Use Ctrl+Shit+P for Windows and Cmd+Shift+P for command pellet for many atom functions.
Selecting a code chunk and pressing Ctrl + / for Windows and Cmd + / for Mac
comments out the code. Same shortcuts apply for Linux/Ubuntu based on
if Windows or Mac computer is being used.

7) Manual Step: 'init npm' was used to turn current folder into npm js project, install
express framework for app specific node.js functions and nodemon to reload server automatically
after changes are made to files without having to restart server manually.
Type in Linux/Ubuntu Terminal
cd ~
mkdir ./Desktop/DataScienceMarch2022/Ex2JSNodeExpress
cd ./Desktop/DataScienceMarch2022/Ex2JSNodeExpress
npm init -y
npm install -g nodemon
npm install express
touch index.js
touch routes.js

8) Manual Step: The index.js file was opened with text editor, here Atom to write codes
for starting server at localhost port 3000 by default. The routes.js file was opened
with text editor, here Atom to write codes for responses to send to different requests,
here /foo and /bar as stated under 'Usage and Results' section above.

########################## Acknowledgment ###########################
1) Frontend vs Backend vs Fullstack Web Development What you should learn by Maximilian Schwarzmüller | Academind
https://youtu.be/pkdgVYehiTE
2) NodeJS and Express lesson from Learn JavaScript Full-Stack from Scratch,
especially section 3. Server Basics by Brad Schiff
https://www.udemy.com/course/learn-javascript-full-stack-from-scratch/
3) NodeJS and Express lesson from The Web Developer Bootcamp 2022,
especially section 33. Creating Servers With Express by Colt Steele
https://www.udemy.com/course/the-web-developer-bootcamp/
4) NodeJS and Express lesson from The Advanced Web Developer Bootcamp,
especially section 13. Creating JSON API's With Node and Mongo by
Colt Steele, Elie Schoppik, Tim Garcia, Matt Lane
https://www.udemy.com/course/the-advanced-web-developer-bootcamp/
5) NodeJS and Express lesson NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno),
especially section 5. Working with Express.js by Maximilian Schwarzmüller | Academind
https://www.udemy.com/course/nodejs-the-complete-guide/
6) Node.js Basics by Maximilian Schwarzmüller | Academind
https://youtube.com/playlist?list=PL55RiY5tL51oGJorjEgl6NVeDbx_fO5jR
7) Build A Restful Api With Node.js Express & MongoDB | Rest Api Tutorial by Dev Ed
https://youtu.be/vjf774RKrLc
8) Build a REST API With Node JS, Express & MongoDB ~ Beginner Tutorial by Tyler Potts
https://youtu.be/cnc_H4ItEPg
9) How to build a REST API with Node js & Express by Mosh Hamedani | Programming with Mosh
https://youtu.be/pKd0Rpw7O48
10) Docker, you need to learn Docker RIGHT NOW Docker Containers 101 by NetworkChuck
https://youtu.be/eGz9DS-aIeY
11) Docker - Complete Tutorial [Docker For Everyone In 2 Hours] by Maximilian Schwarzmüller | Academind
https://youtu.be/d-PPOS-VsC8
12)Docker Tutorial for Beginners by Mosh Hamedani | Programming with Mosh
https://youtu.be/pTFZFxd4hOI
13) Intro to Docker - A Tool Every Developer Should Know by IAmTimCorey
https://youtu.be/WcQ3-M4-jik
14) Docker Mastery: with Kubernetes + Swarm from a Docker Captain by Bret Fisher
https://www.udemy.com/course/docker-mastery/
15) Getting Started with Kubernetes by Nigel Poulton
https://www.pluralsight.com/courses/getting-started-kubernetes
##########################Thank You####################################

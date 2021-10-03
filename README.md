# This is a simple auction app meant for Scopic as a test task

This project is split into two parts: Front-end (client) and back-end (server)
The docs below shall help you get started to run the application on your local machine, or deploy it.
Test login credentials below  

## project stack

This project uses the following stack:

1. Python
2. JavasScript/TypeScript
3. Django and Django rest framework
4. React
5. REST
6. Material-UI

## Get started

If you would like to run the build without installing the client side (Node modules), 
Please skip the Client part below

### Client

If you would like to run the client server, please make sure you have the latest Node.js version >= 16,
alongside a package manager such as `yarn` or `npm` (this project uses yarn), and follow the steps below:

1. in the root directory of `client` where the package.json file is located, use your favourite package 
manager to install the client dependencies. E.g: `yarn` or `npm install`

2. spin the development server up.
in your terminal, according to your package manager, run the local server by typing either `yarn start` 
or `npm run start`. This should start a local development server at 127.0.0.1, port 3000

### Backend

#### Python

This project is using React (based on JavaScript) for front-end, and Django (Based on Python) for the back-end; therefore your machine needs to have Python 3 installed, preferably >= Python 3.6. 

1. If you are on Windows, most likely Python is not installed by default, so please go ahead and install it from here [https://www.python.org/downloads/windows/](https://www.python.org/downloads/windows/). If you have Python installed, please go to the command prompt and type in: `python -V` this will let you know if Python is installed and will also display which version.

2. If you are on Linux/ Mac, open a terminal and type in the same command as above (`python -V`), and see if you are on a version >= Python 3.6.

#### PIP (package management system for Python)

if you have installed Python from the source above, pip should also be included with the installation. To check if it is installed, type in the command: `python -m pip --version`. The output should be something similar to: `pip 21.0.1 from /home/user/.local/lib/python3.9/site-packages/pip (python 3.9)` or `/usr/bin/python: No module named pip` it is it not installed. If the latter one, please go ahead and install it, for reference, refer to the offical docs here: [https://pip.pypa.io/en/stable/installing/](https://pip.pypa.io/en/stable/installing/)

### virtual environment and project requirements

Now that you have Python and PIP both installed, let us install the actual project requirements. It is advised to create a virtual environment and then install your project requirements there. This way you never install anything on the global scale of your system and avoid breaking it, and you can have different versions of software.

#### Create virtual environment

Follow these couple steps found here: [https://packaging.python.org/tutorials/installing-packages/#creating-and-using-virtual-environments](https://packaging.python.org/tutorials/installing-packages/#creating-and-using-virtual-environments)

If you have followed the instructions above you should have now created a virtual environment and activated it, if so, great!

#### project requirements

now let us install the project requirements. In your terminal, in the root dir where the file requirements.txt exists, type in the following: 

`pip install -r requirements.txt`

This should install the project requirements.
Now, let us run our application.

now type in:

`python manage.py runserver`

If all is set and good, you should see something like the following:

```
System check identified no issues (0 silenced).
October 02, 2021 - 22:34:10
Django version 3.2.7, using settings 'auction_server.settings'
Starting development server at http://127.0.0.1:8000/
```

#### Serve the build

For ease of running this project for the purpose of what it is - test task - you can avoid installing and 
running the client server and go ahead and check the build which is served by your Django at http://127.0.0.1:8000. For the sole purpose of this task, the build is committed to GIT in a single commit. Please also notice that media images of products, and the SQLite db file are committed for the same purpose.

### Test credentials
We have two regular users (and one admin):
user1 and user2

- user1: 
    - email: user1@gmail.com
    - password: 1234abcd@

- user2:
    - email: user2@gmail.com
    - password: 1234abcd@

### Branches

There exist two branches before the merge: `master`, and `heroku-v3`.
The only difference bewteen the two branches is that the `heroku-v3` one contains files 
for deploying this code as an instance to Heroku. An instance has already been deployed and 
can be accessed here: https://antiq-auction.herokuapp.com/ 

Note on Heroku instance: Since we are using an SQLite db, the changes we make to the database on the Heroku instance will be lost after some time, this is because Heroku is using an ephemeral filesystem. 
We use a PostgreSQL server for our Heroku instance instead of the sqlite file to preserve the changes.

Please checkout the heroku branch.

### Improvments

We can implement a few improvements, given some additional time. Some of which would be:

1. Database server such as PostgreSQL instead of an SQLite file
2. Real-time updates of the bids system using websockets
3. Global state management for the front-end with Redux
4. Extend the use of TypeScript throughtout the front-end codebase
5. Tests on the client and server side
6. Use a message broker for placing bids
7. Use args and parameters to fetch products
8. Load currenct user on every page reload so a user dose not have to re-login.


**Please if you have any questions, do not hesitate to reach to me at elm.majidi@gmail.com :)**

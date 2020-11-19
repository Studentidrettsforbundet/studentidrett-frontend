
# studentidrett-backend
This the front end code for a web application created for NSI (The Norwegian Association of University Sports).

The project is a web application consisting of two main features:
- Browse student sports
- Get sport recommendations through a questionnaire

The project is deployed to Microsoft Azure:
- Production build may be viewed [here](https://kundestyrt-nsi-frontend.azurewebsites.net/)
- Development build may be viewed [here](https://kundestyrt-nsi-frontend-staging.azurewebsites.net/)



The back end code can be found [here](https://github.com/Studentidrettsforbundet/studentidrett-backend)
## Setup guide

### 1. Get the code
Clone the project or download the source code.


### 2. Without docker
#### 2.1 Install npm
Download the newest version of npm from [here](https://nodejs.org/en/download/)

#### 2.2 Install dependencies
Navigate to the root folder and run the command:
 ```
npm install
```
#### 2.3 Run the project locally
```
npm start
```

#### 2.4 Run test
Navigate to the root folder and run the command:
```
npm test
```
This will run all tests, as well as generate a coverage report

#### 2.5 Build project
```
npm run-script build
```

#### Branches:
- main: update only for deployment (merge from dev)
- dev: development branch, update continuously
- feat/feature-name: a branch that creates/improves a new feature into dev
- task/task-name: a branch that creates/improves a new task into feat. Is used when multiple developers work on a feature 
- design/area-name: a branch that creates/improves GUI/UX into dev
- fix/bug-name: a branch that fix a bug or security issue for dev

#### Pull requests:
- At least one collaborator have to review and approve a pull request before it is merged into dev-branch
- Always use "Squash and merge" as merge-options
- Delete source branch when merged
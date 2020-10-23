# studentidrett-frontend

## Development guide

#### 1. Install dependencies

```
npm install
```

Always run npm install whenver you pull code from github. If something doesnt work, try npm install ;)

#### 2. Run locally

```
npm start
```

Runs the code

#### 3. Build project

```
npm run-script build
```

Generates build version for deployment

<br>

## Git-conventions

Branches:

-   main: update only for deployment (merge from dev)
-   dev: development branch, update continuously
-   feat/feature-name: a branch that creates/improves a new feature into dev
-   task/task-name: a branch that creates/improves a new task into feat. Is used when multiple developers work on a feature
-   design/area-name: a branch that creates/improves GUI/UX into dev
-   fix/bug-name: a branch that fix a bug or security issue for dev

Pull requests:

-   At least one collaborator have to review and approve a pull request before it is merged into dev-branch
-   Always use "Squash and merge" as merge-options

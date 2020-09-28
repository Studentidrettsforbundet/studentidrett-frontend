# Redux

This folder contains a folder for each page on our application that needs redux.
The folders contains reducers, actions, action crators, types, interfaces, etc. related to pages.

## Example of folder structure

We have a page called "search". That page needs a reducer, some actions, action creators, and some interfaces. Below is an example of the folder structure

----store
--------pages
-----------search
-----------------searchReducer.ts
-----------------searchActions.ts
-----------------searchReducer.ts
-----------------searchInterfaces.ts

## Explanations

### Reducer

A reducer is a file that changes the redux state. It takes an action as a paramter, and does some "safe" changes to the store.

### Actions

Actions are the paramaters we pass to the reducer. They are defined very strictly.

### Action-creators

Action creators are functions that create specific actions. These are kind of redundant, but it is to ensure correctness. **USE THEM!**

### Interfaces

Redux + typescript = interfaces x 1000
Place the related interfaces here, and import then when/where needed.

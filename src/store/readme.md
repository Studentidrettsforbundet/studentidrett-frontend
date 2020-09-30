# Redux

This folder contains all redux files.

Add this extension to your browser: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

## Description:

store.ts is the file that creates the redux store, as well as the combined reducer. All reducers needs to be added to the combined reducer, and to the combinedState

This folder contains a folder for each page of our application that needs redux.
The folders contains reducers, actions, action crators, types, interfaces, etc. related to pages.

## Example of folder structure

We have a page called "search". That page needs a reducer, some actions, action creators, and some interfaces. Below is an example of the folder structure

----/store
--------store.ts
--------/pages
-----------/search
-----------------searchReducer.ts
-----------------searchActions.ts
-----------------searchReducer.ts

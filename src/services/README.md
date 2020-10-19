## Explanation for the files in this folder

### urlBuilders.ts

This files contains methods that creates query URLS, to reduce the number of errors.

`urlBuilderFetchData(cardType: cardType)`
This method creates a URL that is used for fetch call for data. cardType is all the diferent types of data that we use for our cards,SPORT, GROUP, TEAM, REGION, CLUB, CITY, defined in _interfaces.ts_

### stringValidation.ts

This file contains methods for ensuring that our api requests are on the right format.

### interfaceValidators.ts

This file contains methods that validate that if a object is of a specified interface. It contain checks for SPORT, GROUP, TEAM, REGION, CLUB, CITY. Its used to ensure that the data we get is of correct type

### api.ts

This file contains API service methods, which does api calls.

#### `fetchData(url: string)`

This method performes the API call, and handles the respons

#### `checkForErrorCodes(result: any)`

This is a tiny helper method

#### `fetchDataThunk = (dataType: cardType, url: string = '')`

This method is what you will use for performing API calls. It does the following:

1. Dispatch that an api call is in progress (prevents infinite requsts)
2. It does the fetch, by using `fetchData(url: string)`
3. Check if the results are correct, and make a dispatch to indicate this.
   Note that we count the amount of times a fetch call has failed in a row, this can be used to prevent infinite requests.
4. Dispatch the result. (The switch statement)

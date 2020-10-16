# Test folder

All tsx files placed in this folder will run when you execute tests unless otherwise specified.
Name them something.test.ts, to mark them as test files

### To run test and generate test reports

```
npm test
```


jest-dom adds custom jest matchers for asserting on DOM nodes.
allows you to do things like:

```typescript
expect(element).toHaveTextContent(/react/i);
```

learn more: https://github.com/testing-library/jest-dom

```typescript
import '@testing-library/jest-dom/extend-expect';
```

### Snapshot testing

Snapshot test checks if something in a given component was changed.

use expext(x).toMatchSanpshot() to test a snapshot.

Create a tree using the renderer.create() method.
If your component uses links make sure to wrap your component in a MemoryRouter
If you component uses Redux wrap your component in a Provider

example:

describe('SportCard', () => {
    test("renders correctly", () => {
        const tree = renderer
            .create(<Provider store={store}>        /wrap with provider to use with redux
                <MemoryRouter initialEntries={["/MidtNorge"]}>  /Wrap with Memoryrouter to support links
                    <SportCard id={0} name={"Fotball"} />       /component to be tested
                </MemoryRouter>
            </Provider>);
        expect(tree).toMatchSnapshot();
    });
});


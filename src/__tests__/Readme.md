# Test folder

All tsx files placed in this folder will run when you execute tests unless otherwise specified.

### To run test

```
npm test
```

### Generate test report

```
npm test -- --coverage
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
const React = require('react');
const mapRecursive = require('./../dist/index.js');

const Route = ({ children, path }) => (
  <a href={path}>{children}</a>
);

const routes = (
  <Route path="/">
    <Route path="/index" title="Index" />
    <Route path="/about" title="About" />
    <Route path="/contacts" title="Contacts" >
      <Route path="/phone" title="Phone contacts" />
    </Route>
  </Route>
);

const expectedPaths = ['/', '/index', '/about', '/contacts', '/phone'];

describe('module syntax', () => {
  it('should have default export function', () => {
    expect(mapRecursive).toBeDefined();
  });
});

describe('module functionality', () => {
  it('should call callback function correct amount of times', () => {
    const mockFn = jest.fn().mockImplementation(
      route => (React.isValidElement(route) ? route.props.path : null)
    );

    const paths = mapRecursive(routes, mockFn);

    expect(mockFn.mock.calls).toHaveLength(expectedPaths.length);
    expect(paths).toEqual(expect.arrayContaining(expectedPaths));
  });
});

# React-map-children
Iterates through given React component tree to gather some data

## Install
Via npm:
```bash
npm install --save react-map-children
```

## Usage

```javascript
import React from 'react';
import mapRecursive from 'react-map-children';

const Route = ({ children, path }) => (
  <a href={path}>{children}</a>
);

const routes = (
  <Route path="/">
    <Route path="/index">Index</Route>
    <Route path="/about">About</Route>
    <Route path="/contacts">Contacts</Route>
  </Route>
);

const paths = mapRecursive(
  routes,
  route => (React.isValidElement(route) ? route.props.path : null),
).filter(Boolean);

console.log(paths); // ['/', 'index', 'about', 'contacts']
```

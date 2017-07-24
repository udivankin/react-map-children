import React from 'react';

export default function mapRecursive(children, callback) {
  return React.Children.map(
      children,
      child => (
        child.props.children
          ? [callback(child), mapRecursive(child.props.children, callback)]
          : callback(child)
      ),
    );
}

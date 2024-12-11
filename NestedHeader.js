import React from 'react';

// Nested header element using React.createElement
const NestedHeaderCreateElement = () =>
  React.createElement(
    'div',
    { className: 'title' },
    React.createElement('h1', null, 'Header 1'),
    React.createElement('h2', null, 'Header 2'),
    React.createElement('h3', null, 'Header 3')
  );

// Nested header element using JSX
const NestedHeaderJSX = () => (
  <div className="title">
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
  </div>
);

// Combined functional component
const NestedHeader = () => (
  <div>
    <h2>React.createElement Method:</h2>
    <NestedHeaderCreateElement />
    <h2>JSX Method:</h2>
    <NestedHeaderJSX />
  </div>
);

export default NestedHeader;

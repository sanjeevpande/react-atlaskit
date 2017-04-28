import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var root = document.getElementById('root');
var projectId = root.dataset.projectid;

console.log('111'); 
console.log(root);
console.log('111');

ReactDOM.render(
  <App projectId={projectId}/>,
  document.getElementById('root')
);

import React, { Component, useEffect, useState } from 'react';
import React from 'react';
import ReactDom from 'react-dom';



class App extends Component {
  render() {
    return (
      <div>
        <h1> Chapter Journal</h1>
      </div>
    );
  }
}

const root= ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>);


export default App;

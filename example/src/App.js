import React, { PureComponent } from 'react';

import Titlebar from './components/Titlebar';

const { remote } = window.require('electron');
const { BrowserWindow } = remote;

class App extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Titlebar />
        <div>
          Simple test
        </div>
      </React.Fragment>
    );
  }
}

export default App;

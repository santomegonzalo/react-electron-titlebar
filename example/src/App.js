import React, { PureComponent } from 'react';

import { Titlebar } from './components/Titlebar';

const { remote } = window.require('electron');
const { BrowserWindow } = remote;

class App extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Titlebar
          onClose={() => { BrowserWindow.getFocusedWindow().close(); }}
          onMinimize={() => { BrowserWindow.getFocusedWindow().minimize(); }}
          onMaximize={() => {
            const window = BrowserWindow.getFocusedWindow();

            if (window.isMaximized()) {
              window.unmaximize();
            } else {
              window.maximize();
            }
          }}
          onFullscreen={() => {
            const window = BrowserWindow.getFocusedWindow();

            window.setFullScreen(!window.isFullScreen());
          }}
        />
        <div>
          Simple test
        </div>
      </React.Fragment>
    );
  }
}

export default App;

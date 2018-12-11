import React, { PureComponent } from 'react';

import Titlebar from './components/Titlebar';

import styles from './App.module.css';

class App extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Titlebar />
        <div className={styles.App}>
          <span>Simple react-electron-titlebar example</span>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

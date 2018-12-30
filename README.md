# react-electron-titlebar

React title bar for Electron apps

# Example

**Mac**

<img src="./assets/react-electron-titlebar-mac.PNG" height="400">

**Windows**

<img src="./assets/react-electron-titlebar-win.PNG" height="400">

# Usage

Install with npm

```bash
npm install react-electron-titlebar
```

Install with yarn

```bash
yarn add react-electron-titlebar
```

# API

Importing the module

```javascript
import Titlebar from 'react-electron-titlebar';

...

<div>
  <Titlebar title="App Title" backgroundColor="#000000">
</div>
```

## Properties

| Property                | Type                  | Default               | Description                                                                                                         |
|-------------------------|-----------------------|-----------------------|---------------------------------------------------------------------------------------------------------------------|
| title | string | null | Title to show for the window
| backgroundColor | string | #000000 | Titlebar background

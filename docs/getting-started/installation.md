---
sidebar_position: 2
title: Installation
sidebar_label: Installation
---

# Installation

## Requirements

- [React](https://reactjs.org) version >= 16 or above

## Installation

#### With yarn

```sh
yarn add react-ghosta
```

#### With NPM

```sh
npm install react-ghosta
```

## Usage

Add the Ghosta and ghosta.css to your app first. It will take care of rendering all alerts emitted. Now you can trigger `ghosta.fire()` from anywhere!

```jsx live
// uncomment these lines after paste them to your code editor
// import { GhostaContainer, ghosta } from "react-ghosta"
// import "react-ghosta/dist/ghosta.css"

function App() {
  const handleShowAlert = () => {
    // Ghosta emitter
    ghosta.fire({
      title: "Tada! 🎉",
      description: "Easy to use and customize",
    });
  };

  return (
    <div>
      <Button onClick={handleShowAlert} showGradientBorder={true}>
        Click to Show Alert
      </Button>

      {/* Ghosta Container */}
      <GhostaContainer />
    </div>
  );
}
```

ghosta has `fire`, `close` methods.
The `fire` method accepts a rich object to display an ideal popup alert for various use cases. We will check them with examples on next pages.

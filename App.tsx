import React from 'react';
import Routes from './App/Navigation';

import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  "RCTBridge required dispatch_sync to load RNGestureHandlerModule. This may lead to deadlocks",
  "Each child in a list should have a unique ``key`` prop. See https://reactjs.org/link/warning-keys for more information. "
]);

const App = () => {
  return <Routes />;
};

export default App;

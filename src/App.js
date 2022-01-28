import React from 'react';
import {View, ScrollView} from 'react-native';
import Flexbox from './pages/Flexbox';
import ReactNativeSvg from './pages/ReactNativeSvg';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <Position /> */}
        {/* <Flexbox /> */}
        <ReactNativeSvg />
      </ScrollView>
    </View>
  );
};

export default App;

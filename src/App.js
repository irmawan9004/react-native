import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import Position from './pages/Position';

const App = () => {
  return (
    <View>
      <ScrollView>
        <Position />
      </ScrollView>
    </View>
  );
};

const Home = () => {
  return <Text>Ganteng</Text>;
};

export default App;

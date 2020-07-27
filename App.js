import React from 'react';
import { View } from 'react-native';
import Timer from './component/Timer';
import Styles from './styles';

export default function App() {
  return (
    <View style={Styles.appContainer}>
      <Timer time={{workTime:1,breakTime:2}}/>
    </View>
  );
}

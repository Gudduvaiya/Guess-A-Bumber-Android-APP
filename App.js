import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Head from './Components/Head';
import NumberInput from './Components/NumberInput';
export default function App() {
  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
    <View style={styles.root} >
      <Head header="GuessAN"/>
      <NumberInput/>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  root: {
    margin:0,
    // marginTop:30
  },
});

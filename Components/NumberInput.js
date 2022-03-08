import react,{useState} from "react";
import { Text, View, StyleSheet, TextInput, Button,TouchableWithoutFeedback, Keyboard } from "react-native";

const style = StyleSheet.create({
  main: {
    // flex: 1,
    alignItems: "center",
    padding: 10,
  },
  title:{
      fontSize:22,
      color:"red",
      fontWeight:"bold",
      marginBottom:10
  },
  BtnContainer: {
      flexDirection:"row",
      justifyContent:"space-between",
      width:"100%"
  },
  InputContainer: {
      width:350,
      maxWidth:"83%",
      alignItems:"center",
      shadowColor:"blue",
      // shadowOffset:{width:1,height:1},
      // shadowOpacity:0.26,
      // shadowRadius:0,
      elevation:1,
      borderRadius:15,
      padding:21,
      borderWidth: 2 ,
      borderColor:"black"
  },
  Btns:{
    width:100
  },
  Input:{
    height:20,
    width: 25,
    borderBottomColor:"red",
    borderBottomWidth:2,
    textAlign:"center",
    marginVertical:10
  }
});
export default function NumberInput() {
  // const [enterednumber, setenterednumber] = useState('')
  // const handleOnChange=(text)=>{
  //   setenterednumber(text.replace(/[^0-9]/g, ''))
  // }
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
    }}>
    <View style={style.main}>
      <Text style={style.title}>Let's Begain the Game!</Text>
      <View style={style.InputContainer}>
      <Text>Enter A Number</Text>
        <TextInput style={style.Input} blurOnSubmit keyboardType="numeric" maxLength={2} />
        <View style={style.BtnContainer}>
        <View style={style.Btns}>
          <Button
            title="Reset"
            color="#06b9c9"
            onPress={() => {
              console.log("I hate you");
            }}
          />
          </View>
          <View style={style.Btns}>
          <Button
            title="Confirm"
            color="#06b9c1"
            onPress={() => {
              console.log("I Love you");
            }}
          />
          </View>
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

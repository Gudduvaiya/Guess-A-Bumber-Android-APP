import react from "react"
import {Text,View,StyleSheet,TouchableWithoutFeedback,Keyboard} from "react-native"

const style=StyleSheet.create({
    headerView:{
        display:"flex",
        alignItems:"center",
        backgroundColor:"#d0f4f7",
        paddingTop:30,
        paddingBottom:5,
        // justifyContent:"center",
    },
    header:{
        fontSize:30,
        fontWeight:"bold",
        color:"#06b9c9",
    }
})
const Head =(prop)=>{
    return(
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>

    <View style={style.headerView}>
        <Text style={style.header}>{prop.header}</Text>
    </View>
        </TouchableWithoutFeedback>
    )
}

export default Head
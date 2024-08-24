import { StyleSheet,Text, View } from "react-native";

export default function Box(){
    return(
        <View>
            style={style.containerBox}
        </View>
    )
}
const style = StyleSheet.create({
    containerBox:{
        
        width:100,
        heigth:100,
        backgroundColor:'coral',
        alingitems:'center',
        justifyContent:'center',
        }
});
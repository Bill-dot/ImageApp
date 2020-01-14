import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LargeScreen from './LargeScreen'

const FruitComponents = ({ title, imageURL, navigation }) => {

    const [state, setState] = useState({ height: 200, width: 200, borderRadius: 10 })

    // let touch = false;

    // const imagePressed = () => {
    //     // touch = true
    //     if(state.height==200){
    //         return setState({ height: 400, width: 400, borderRadius: 10 })
    //     }else{
    //         return navigation.navigate("LargeImage",{id:imageURL})
    //     }
    // }

    // const backPress = () => {
    //     touch = false
    //     return setState({ height: 200, width: 200 })
    // }


    // if (!touch) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('LargeImage', { id: imageURL })}
            // onPressOut={()=>{setState({height:200, width:200})}}
            >
                <Image source={imageURL} style={state} />
            </TouchableOpacity>
        </View>
    )
    // } else {
    //     return (
    //     <View>
    //         <LargeScreen imageURL={imageURL} backAccess={backPress} />
    //     </View>)
    // }

}

const styles = StyleSheet.create({

    text: {
        fontSize: 25,
        marginTop: 15,
        fontWeight: 'bold',
        marginBottom: 10

    },
    container:{
        flex:1
    }

})

export default FruitComponents;
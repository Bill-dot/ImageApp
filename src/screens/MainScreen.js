import React, { version } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'

const MainScreen = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.userName}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>EMAIL :</Text>
                <View style={styles.textInput}>
                    <TextInput
                        placeholder='UserName/emailAddress'
                        textContentType='emailAddress'
                    />
                </View>
            </View>
            <View style={styles.password}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>PASSWORD :</Text>
                <View style={styles.textInput}>
                    <TextInput
                        placeholder='Password'
                        textContentType='password'
                        secureTextEntry={true}
                        paddingHorizontal= {27}
                        
                    />
                </View>
            </View>
            <View style={styles.button}>
                <Button
                    title="Submit"
                    onPress={() =>  navigation.navigate("Fruit")}
                />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#66d9ff',
        
        

    },
    userName: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: "center",
        marginTop: 15,
        marginLeft: 20,
        

    },
    password: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: "center",
        marginLeft: 20
    },
    button: {
        // justifyContent:'center',
        alignSelf: 'flex-start',
        marginLeft: 20
        // alignContent:'center'
    },

    textInput:{
        borderWidth:1,
        marginHorizontal: 15,
        backgroundColor: '#e6f9ff',
        paddingHorizontal:30
    }
})

export default MainScreen;
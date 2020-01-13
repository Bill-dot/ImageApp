import React from 'react'
import { Text, Veiw, StyleSheet, View, FlatList } from 'react-native'
import FruitComponents from '../components/FruitComponents'
import { ScrollView } from 'react-native-gesture-handler'


const FruitScreen = () => {

    const fruits = [{ title: 'Apple', imageURL: require('../../assets/Apple.jpg') },
    { title: 'Mango', imageURL: require('../../assets/Mango.jpg') },
    { title: 'Grapes', imageURL: require('../../assets/Grapes.jpg') },
    { title: 'Orange', imageURL: require('../../assets/Orange.jpg') },
    { title: 'Papaya', imageURL: require('../../assets/Papaya.jpg') },
    { title: 'Watermelon', imageURL: require('../../assets/Watermelon.jpg') }
    ]

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {/* <ScrollView>
                <FruitComponents title="Apple" imageURL={require('../../assets/Apple.jpg')} />
                <FruitComponents title='Mango' imageURL={require('../../assets/Mango.jpg')} />
                <FruitComponents title='Grapes' imageURL={require('../../assets/Grapes.jpg')} />
                <FruitComponents title='Orange' imageURL={require('../../assets/Orange.jpg')} />
                <FruitComponents title='Papaya' imageURL={require('../../assets/Papaya.jpg')} />
                <FruitComponents title='Watermelon' imageURL={require('../../assets/Watermelon.jpg')} />
            </ScrollView> */}

                <FlatList
                    data={fruits}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={({ item }) => item}
                    renderItem={({ item }) => {
                        console.log(item.title)
                        return <FruitComponents title={item.title} imageURL={item.imageURL} />
                    }}
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15

    },
    mainContainer:{
        flex:1,
        backgroundColor:'#eeffcc'
    }


})

export default FruitScreen;


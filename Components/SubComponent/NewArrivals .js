import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const NewArrivals = () => {
    const newArrivals = [
        {
            id: '1',
            title: 'New',
            image: require('./img/North_Indian_4.jpg'),
            price: "180Rs",
            category: 'New Arrival'
        },
        {
            id: '2',
            title: 'New',
            image: require('./img/North_Indian_4.jpg'),
            price: "220Rs",
            category: 'New Arrival'
        },
        {
            id: '3',
            title: 'New',
            image: require('./img/North_Indian_4.jpg'),
            price: "180Rs",
            category: 'New Arrival'
        },
    ];

    const NewArrivalItem = ({ item }) => (
        <View style={styles.newArrivalItem}>
            <Image source={item.image} style={styles.newArrivalImage} />
            <Text style={styles.newArrivalTitle}>{item.title}</Text>
            <Text style={styles.newArrivalPrice}>{item.price}</Text>
        </View>
    );

    return (
        <View style={styles.newArrivalsContainer}>
            <Text style={styles.newArrivalsHeading}>New Arrivals</Text>
            <FlatList
                data={newArrivals}
                renderItem={({ item }) => <NewArrivalItem item={item} />}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    newArrivalsContainer: {
        paddingHorizontal: 10,
        marginTop: 0,
        marginBottom: 40,
    },
    newArrivalsHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    newArrivalItem: {
        marginRight: 15,
        alignItems: 'center',
    },
    newArrivalImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginBottom: 5,
    },
    newArrivalTitle: {
        fontSize: 14,
        textAlign: 'center',
    },
    newArrivalPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default NewArrivals;

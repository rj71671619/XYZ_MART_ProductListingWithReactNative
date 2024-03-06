import React, { useState } from 'react';
import { View, Text, Modal, FlatList, Image, ScrollView, Pressable, TouchableOpacity, StyleSheet } from 'react-native';

const PopularFoodList = () => {
    const popularFood = [
        {
            id: '5',
            title: 'Burger',
            image: require("./img/Biryani_2.jpg"),
            price: "100Rs",
            category: 'Non-vegetarian'
        },
        {
            id: '6',
            title: 'Chinese',
            image: require("./img/Chinese.jpg"),
            price: "100Rs",
            category: 'Non-vegetarian'
        },
        {
            id: '7',
            title: 'Biryani',
            image: require("./img/Biryani_2.jpg"),
            price: "100Rs",
            category: 'Vegetarian'
        },
        {
            id: '8',
            title: 'Rolls',
            image: require("./img/Rolls.jpg"),
            price: "100Rs",
            category: 'Vegetarian'
        },
    ];

    const PopularFoodItem = ({ item }) => (
        <View style={styles.popularFoodItem}>
            <Image source={item.image} style={styles.popularFoodImage} />
            <Text style={styles.popularFoodTitle}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.popularFoodContainer}>
            <Text style={styles.popularFoodHeading}>Popular Food</Text>
            <FlatList
                data={popularFood}
                renderItem={({ item }) => <PopularFoodItem item={item} />}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    popularFoodContainer: {
        paddingHorizontal: 10,
        marginTop: 90,
        marginBottom: 10,
    },
    popularFoodHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    popularFoodItem: {
        marginRight: 15,
        alignItems: 'center',
    },
    popularFoodImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginBottom: 5,
    },
    popularFoodTitle: {
        fontSize: 14,
        textAlign: 'center',
    },
});
export default PopularFoodList;
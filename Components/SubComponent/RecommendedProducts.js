import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const RecommendedProducts = () => {
    const recommendedProducts = [
        {
            id: '1',
            title: 'Recommended ',
            image: require('./img/Chole_Bature.jpg'),
            price: "200Rs",
            category: 'Recommended'
        },
        {
            id: '2',
            title: 'Recommended ',
            image: require('./img/Poori.jpg'),
            price: "250Rs",
            category: 'Recommended'
        },
        {
            id: '2',
            title: 'Recommended',
            image: require('./img/Pav_Bhaji.jpg'),
            price: "250Rs",
            category: 'Recommended'
        },
    ];

    const RecommendedProductItem = ({ item }) => (
        <View style={styles.recommendedProductItem}>
            <Image source={item.image} style={styles.recommendedProductImage} />
            <Text style={styles.recommendedProductTitle}>{item.title}</Text>
            <Text style={styles.recommendedProductPrice}>{item.price}</Text>
        </View>
    );

    return (
        <View style={styles.recommendedProductsContainer}>
            <Text style={styles.recommendedProductsHeading}>Recommended Products</Text>
            <FlatList
                data={recommendedProducts}
                renderItem={({ item }) => <RecommendedProductItem item={item} />}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    recommendedProductsContainer: {
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 10,
    },
    recommendedProductsHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    recommendedProductItem: {
        marginRight: 15,
        alignItems: 'center',
    },
    recommendedProductImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginBottom: 5,
    },
    recommendedProductTitle: {
        fontSize: 14,
        textAlign: 'center',
    },
    recommendedProductPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default RecommendedProducts;

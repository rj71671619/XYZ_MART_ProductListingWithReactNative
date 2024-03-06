import React, { useState } from 'react';
import { View, Text, Modal, FlatList, Image, ScrollView, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import PopularFoodList from './SubComponent/PopularFoodList'
import Coupon from './SubComponent/Coupon';

import RecommendedProducts from './SubComponent/RecommendedProducts';
import NewArrivals from './SubComponent/NewArrivals ';
const ProductListing = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const products = [
        {
            id: '1',
            title: 'Biryani',
            image: require("../assets/img/Biryani_2.jpg"),
            price: "150Rs",
            calories: 300,
            description: 'Delicious biryani with aromatic spices.',
            category: 'Vegetarian',
            nutritionFacts: {
                servingSize: '100 gram',
                calories: '300',
                totalFat: '12.80g',
                saturatedFat: '4.25g',
                transFat: '0g',
                cholesterol: '30.00mg',
                sodium: '313.00mg',
                totalCarbohydrate: '18.60g',
                dietaryFiber: '1.80g',
                totalSugars: '4.22g',
                protein: '10.70g',
                vitamins: ['A', 'D', 'C', 'E'],
                iron: '3%'
            }
        },
        {
            id: '10',
            title: 'Chinese',
            image: require("../assets/img/Chinese.jpg"),
            price: "200Rs",
            calories: 300,
            description: 'Delicious Chinese food.',
            category: 'Non-vegetarian',
            nutritionFacts: {
                servingSize: '100 gram',
                calories: '300',
                totalFat: '12.80g',
                saturatedFat: '4.25g',
                transFat: '0g',
                cholesterol: '30.00mg',
                sodium: '313.00mg',
                totalCarbohydrate: '18.60g',
                dietaryFiber: '1.80g',
                totalSugars: '4.22g',
                protein: '10.70g',
                vitamins: ['A', 'D', 'C', 'E'],
                iron: '3%'
            }
        },
        {
            id: '3',
            title: 'Chole Bhature',
            image: require("../assets/img/Chole_Bature.jpg"),
            price: "100Rs",
            calories: 300,
            description: 'Delicious Chole Bhature.',
            category: 'Vegan',
            nutritionFacts: {
                servingSize: '100 gram',
                calories: '300',
                totalFat: '12.80g',
                saturatedFat: '4.25g',
                transFat: '0g',
                cholesterol: '30.00mg',
                sodium: '313.00mg',
                totalCarbohydrate: '18.60g',
                dietaryFiber: '1.80g',
                totalSugars: '4.22g',
                protein: '10.70g',
                vitamins: ['A', 'D', 'C', 'E'],
                iron: '3%'
            }
        },
        {
            id: '4',
            title: 'Rolls',
            image: require("../assets/img/Rolls.jpg"),
            price: "120Rs", // Increased price for variation
            calories: 300,
            description: 'Delicious Rolls.',
            category: 'Vegetarian',
            nutritionFacts: {
                servingSize: '100 gram',
                calories: '300',
                totalFat: '12.80g',
                saturatedFat: '4.25g',
                transFat: '0g',
                cholesterol: '30.00mg',
                sodium: '313.00mg',
                totalCarbohydrate: '18.60g',
                dietaryFiber: '1.80g',
                totalSugars: '4.22g',
                protein: '10.70g',
                vitamins: ['A', 'D', 'C', 'E'],
                iron: '3%'
            }
        },
    ];

    const filteredProducts = selectedCategory ? products.filter(product => product.category === selectedCategory) : products;
    // Sort products based on price
    const sortedProducts = filteredProducts.slice().sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);
        return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    });
    // Function to handle sorting order
    const handleSortOrder = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };
    const ProductItem = ({ item }) => {
        const handleAddToCart = () => {
            console.log("Item added to cart:", item);
        };
        const handleProductDetails = (product) => {
            setSelectedProduct(product);
        };

        return (
            <TouchableOpacity style={styles.productItem} onPress={() => handleProductDetails(item)}>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
                    <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    };

    const renderCategoryButton = (category) => (
        <Pressable
            style={[styles.categoryButton, selectedCategory === category ? styles.selectedCategoryButton : null]}
            onPress={() => setSelectedCategory(category === 'all' ? null : category)}>
            <Text style={styles.categoryButtonText}>{category === 'all' ? 'All' : category}</Text>
        </Pressable>
    );
    const closeModal = () => {
        setSelectedProduct(null);
    };
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.filterContainer}>
                    {renderCategoryButton('all')}
                    {renderCategoryButton('Vegetarian')}
                    {renderCategoryButton('Non-vegetarian')}
                    {renderCategoryButton('Vegan')}
                </View>
                <PopularFoodList />
                <Coupon />
                <TouchableOpacity style={styles.sortButton} onPress={handleSortOrder}>
                    <Text style={styles.sortButtonText}>
                        Sort by Price {sortOrder === 'asc' ? 'Low to High' : 'High to Low'}
                    </Text>
                </TouchableOpacity>
                <FlatList
                    data={sortedProducts}
                    renderItem={({ item }) => <ProductItem item={item} />}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
                <RecommendedProducts />
                <NewArrivals />
                <Modal visible={selectedProduct !== null} animationType="slide">
                    <View style={styles.modalContainer}>
                        <Image source={selectedProduct?.image} style={styles.modalImage} />
                        <Text style={styles.modalTitle}>{selectedProduct?.title}</Text>
                        <Text style={styles.modalPrice}>Price: {selectedProduct?.price}</Text>
                        <Text style={styles.modalDescription}>{selectedProduct?.description}</Text>
                        <Text style={styles.modalSubtitle}>Nutrition Facts</Text>
                        <View style={styles.nutritionFactsContainer}>
                            <Text style={styles.nutritionFactsHeading}>Serving Size: {selectedProduct?.nutritionFacts.servingSize}</Text>
                            <Text style={styles.nutritionFactsText}>Calories: {selectedProduct?.nutritionFacts.calories}</Text>
                            <View style={styles.horizontalLine} />
                            <Text style={styles.nutritionFactsHeading}>Total Fat: {selectedProduct?.nutritionFacts.totalFat}</Text>
                            <Text style={styles.nutritionFactsSubText}>Saturated Fat: {selectedProduct?.nutritionFacts.saturatedFat}</Text>
                            <Text style={styles.nutritionFactsSubText}>Trans Fat: {selectedProduct?.nutritionFacts.transFat}</Text>
                            <View style={styles.horizontalLine} />
                            <Text style={styles.nutritionFactsHeading}>Cholesterol: {selectedProduct?.nutritionFacts.cholesterol}</Text>
                            <Text style={styles.nutritionFactsText}>Sodium: {selectedProduct?.nutritionFacts.sodium}</Text>
                            <View style={styles.horizontalLine} />
                            <Text style={styles.nutritionFactsHeading}>Total Carbohydrate: {selectedProduct?.nutritionFacts.totalCarbohydrate}</Text>
                            <Text style={styles.nutritionFactsSubText}>Dietary Fiber: {selectedProduct?.nutritionFacts.dietaryFiber}</Text>
                            <Text style={styles.nutritionFactsSubText}>Total Sugars: {selectedProduct?.nutritionFacts.totalSugars}</Text>
                            <View style={styles.horizontalLine} />
                            <Text style={styles.nutritionFactsHeading}>Protein: {selectedProduct?.nutritionFacts.protein}</Text>
                            <Text style={styles.nutritionFactsSubText}>Vitamins: {selectedProduct?.nutritionFacts.vitamins.join(', ')}</Text>
                            <Text style={styles.nutritionFactsSubText}>Iron: {selectedProduct?.nutritionFacts.iron}</Text>
                        </View>
                        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
};



const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'sans-serif',
    },
    filterContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        marginTop: 20,
        position: 'absolute',
        zIndex: 1
    },
    productItem: {
        flex: 1,
        margin: 10,
        borderColor: '#ccc',
        borderBottomColor: '#333',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },
    productImage: {
        width: 140,
        height: 140,
        resizeMode: 'cover',
        marginBottom: 10,
        borderRadius: 10,
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 14,
        color: 'grey',
        marginBottom: 5,
    },
    addToCartButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
        marginTop: 5,
    },
    addToCartButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    categoryButton: {
        marginTop: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000000',
        marginHorizontal: 12,
    },
    selectedCategoryButton: {
        backgroundColor: '#DED',
    },
    categoryButtonText: {
        color: '#000000',
        fontFamily: 'sans-serif',
        fontSize: 16,
    },
    sortButton: {
        marginTop: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000000',
        alignSelf: 'center',
    },
    sortButtonText: {
        color: '#000000',
        fontFamily: 'sans-serif',
        fontSize: 16,
        fontWeight: 'bold',

    },

    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 5
    },
    modalImage: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalPrice: {
        fontSize: 20,
        marginBottom: 10,
    },
    modalDescription: {
        marginBottom: 10,
    },
    modalSubtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    nutritionFactsContainer: {
        alignSelf: 'stretch',
        alignItems: 'flex-start',
    },
    nutritionFactsHeading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    nutritionFactsText: {
        fontSize: 14,
        marginBottom: 5,
    },
    nutritionFactsSubText: {
        fontSize: 14,
        marginLeft: 20,
        marginBottom: 5,
    },
    horizontalLine: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        width: '100%',
        marginBottom: 5,
    },
    closeButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 20,
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default ProductListing;

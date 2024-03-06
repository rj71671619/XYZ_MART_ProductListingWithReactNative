import { View, Text, StyleSheet } from "react-native"

const CartScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.Text}>
                CartScreen
            </Text>
        </View>
    )
}
export default CartScreen;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -50}, { translateY: -50 }],
        backgroundColor: '#2dd'
    },
    Text: {
        backgroundColor: 'black',
        padding: 10,
        color : 'white',
        fontWeight:'bold',
        fontSize : 20,

    }
})
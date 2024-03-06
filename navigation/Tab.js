import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons
import HomeScreen from '../Components/ProductListing';
import CartScreen from '../Components/CartScreen';
import QRScannerScreen from '../Components/QRScannerScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: '#fff',
                    height: 60,
                },
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = 'home';
                            break;
                        case 'QR Scanner':
                            iconName = 'qrcode';
                            break;
                        case 'Cart':
                            iconName = 'shopping-cart';
                            break;
                        default:
                            iconName = 'home';
                    }
                    return <FontAwesome name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="QR Scanner" component={QRScannerScreen}
                options={{ tabBarIcon: ({ color, size }) => (<FontAwesome name="qrcode" size={50} color={color} style={{}} />) }}
            />
            <Tab.Screen name="Cart" component={CartScreen} />
        </Tab.Navigator>
    );
}

export default TabNavigator;

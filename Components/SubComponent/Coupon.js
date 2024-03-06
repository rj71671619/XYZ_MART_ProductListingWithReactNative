import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Clipboard } from 'react-native'; // Import Clipboard
import { FontAwesome } from '@expo/vector-icons';

const Coupon = () => {
    const [copied, setCopied] = useState(false);
    const couponCode = 'FLAT80';

    const copyToClipboard = () => {
        Clipboard.setString(couponCode); // Use Clipboard module
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Pressable onPress={copyToClipboard} style={styles.container}>
            <View style={styles.couponContainer}>
                <FontAwesome name="ticket" size={24} color="#FF4081" style={styles.couponIcon} />
                <View style={styles.couponTextContainer}>
                    <Text style={styles.couponText}>Flat 80 off | Above 400</Text>
                    <Text style={styles.couponCode}>{couponCode}</Text>
                </View>
            </View>
            {copied && <Text style={styles.copiedText}>Coupon code copied to clipboard!</Text>}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 10,
        alignItems: 'center',
    },
    couponContainer: {
        flexDirection: 'row',
        backgroundColor: '#FCE4EC',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FF4081',
        alignItems: 'center',
    },
    couponIcon: {
        marginRight: 10,
    },
    couponTextContainer: {
        flex: 1,
    },
    couponText: {
        fontSize: 16,
        color: '#FF4081',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    couponCode: {
        fontSize: 20,
        color: '#4CAF50',
        fontWeight: 'bold',
    },
    copiedText: {
        marginTop: 5,
        color: '#4CAF50',
        fontSize: 14,
    },
});

export default Coupon;

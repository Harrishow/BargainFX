import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useCart } from '../context/CartContext';

const CartScreen: React.FC = () => {
  const { cartItems } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho 🛒</Text>
      <Text style={styles.itemCount}>Itens no carrinho: {cartItems}</Text>
      <Text style={styles.name}>BargainFX</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5c1c1',
    padding: 16,
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#dc2626',  
    fontWeight: 'bold',
    marginBottom: 16,
  },

  itemCount: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  
  name: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginTop: 520,
  },
});

export default CartScreen;
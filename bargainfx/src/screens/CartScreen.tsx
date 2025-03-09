import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useCart } from '../context/CartContext'; // Importe o hook useCart

const CartScreen: React.FC = () => {
  const { cartItems } = useCart(); // Use o hook useCart

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>
      <Text style={styles.itemCount}>Itens no carrinho: {cartItems}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemCount: {
    fontSize: 18,
  },
});

export default CartScreen;
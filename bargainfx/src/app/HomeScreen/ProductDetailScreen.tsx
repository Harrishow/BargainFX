import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useCart } from '../../context/CartContext';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Product } from '../../types/Product';
import { CartProvider } from '../../context/CartContext';

// Componente interno que usa useCart
const ProductDetailContent = ({
  buttonTitle = "Adicionar ao carrinho",
  buttonColor = "#dc2626",
  buttonStyle = {},
  buttonTextStyle = {}
}) => {
  const router = useRouter();
  const params = useLocalSearchParams<{
    id: string | string[];
    name: string | string[];
    description: string | string[];
    price: string | string[];
    image: string | string[];
  }>();

  const product: Product = {
    id: typeof params.id === 'string' ? params.id : params.id?.[0] ?? '',
    name: typeof params.name === 'string' ? params.name : params.name?.[0] ?? '',
    description: typeof params.description === 'string' ? params.description : params.description?.[0] ?? '',
    price: typeof params.price === 'string'
      ? parseFloat(params.price)
      : parseFloat(params.price?.[0] ?? '0'),
    image: typeof params.image === 'string' ? params.image : params.image?.[0] ?? '',
  };

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} adicionado ao carrinho!`);
    router.push('../PaymentScreens/CartScreen');
  };

  return (
    <View style={styles.container}>
      
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: buttonColor }, buttonStyle]} 
        onPress={handleAddToCart}
      >
        <Text style={[styles.buttonText, buttonTextStyle]}>{buttonTitle}</Text>
      </TouchableOpacity>
      
      
    </View>
  );
};


export default function ProductDetailScreen(props: any) {
  return (
    <CartProvider>
      <ProductDetailContent {...props} />
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffeee0',
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 220,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'justify',
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'yellowgreen',
    marginTop: 5,
    marginBottom: 16,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    width: 240,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    alignItems: 'center',
    fontWeight: 'bold',
  },
});
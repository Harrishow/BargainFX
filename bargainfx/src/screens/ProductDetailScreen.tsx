import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ProductDetailScreenRouteProp } from '../types/navigation';
import { useCart } from '../context/CartContext';

interface ProductDetailScreenProps {
  route: ProductDetailScreenRouteProp;
  navigation: any;
  buttonTitle?: string;
  buttonColor?: string;
  buttonStyle?: object;
  buttonTextStyle?: object;
}

const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({ 
  route, 
  navigation, 
  buttonTitle = "Adicionar ao carrinho", 
  buttonColor = "#dc2626",
  buttonStyle = {},
  buttonTextStyle = {}
}) => {
  const { product } = route.params;
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product); // Adiciona o produto ao carrinho
    alert(`${product.name} adicionado ao carrinho!`);
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>

      {}
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: buttonColor }, buttonStyle]} 
        onPress={handleAddToCart}
      >
        <Text style={[styles.buttonText, buttonTextStyle]}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffeee0',
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
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
    width: 220,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
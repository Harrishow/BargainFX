import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { ProductDetailScreenRouteProp } from '../types/navigation';
import { useCart } from '../context/CartContext'; // Importe o hook useCart

interface ProductDetailScreenProps {
  route: ProductDetailScreenRouteProp;
  navigation: any;
}

const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({ route, navigation }) => {
  const { product } = route.params;
  const { addToCart } = useCart(); // Use o hook useCart

  const handleAddToCart = () => {
    addToCart(); // Adiciona o produto ao carrinho
    alert(`${product.name} adicionado ao carrinho!`);
    navigation.navigate('Cart'); // Redireciona para a tela do carrinho
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>

      <Button title="Adicionar ao carrinho" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#888',
  },
});

export default ProductDetailScreen;
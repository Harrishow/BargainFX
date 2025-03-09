import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductItem from '../components/ProductItem';
import { Product } from '../types/Product';
import { ProductListScreenNavigationProp } from '../types/navigation';

interface ProductListScreenProps {
  navigation: ProductListScreenNavigationProp;
}

const ProductListScreen: React.FC<ProductListScreenProps> = ({ navigation }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Simulação de uma requisição à API
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'Monster 473ml',
        description: 'Energético Monster 473ml',
        price: 10.99,
        image: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/659673-1000-1000/641693---energetico-monster-energy-473ml-spal.jpg?v=637496175101070000',
      },
      {
        id: '2',
        name: 'Red Bull 250ml',
        description: 'Energético Red bull 250ml',
        price: 8.99,
        image: 'https://www.emporiofreicaneca.com.br/wp-content/uploads/2020/06/red-bull.png',
      },
      // Adicione mais produtos aqui
    ];
    setProducts(mockProducts);
  }, []);

  const handleProductPress = (product: Product) => {
    navigation.navigate('ProductDetail', { product }); // Navega para a tela de detalhes com o produto
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            onPress={() => handleProductPress(item)} // Passa a função onPress para o ProductItem
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default ProductListScreen;
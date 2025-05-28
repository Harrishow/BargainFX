import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductItem from '../../components/ProductItem';
import { Product } from '../../types/Product';
import { useRouter } from 'expo-router';

const ProductListScreen: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'Enerdev 473ml',
        description: 'O Enerdev é um energético saboroso e revigorante, ideal para quem precisa de energia extra no dia a dia.',
        price: 10.99,
        image: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/659673-1000-1000/641693---energetico-monster-energy-473ml-spal.jpg?v=637496175101070000',
      },
      {
        id: '2',
        name: 'Enerdev Premium 500ml',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 9.99,
        image: '#',
      },
      {
        id: '3',
        name: 'TrufaDev 5g',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 9.99,
        image: '#',
      },
      {
        id: '4',
        name: 'CreaDev 100g',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 9.99,
        image: '#',
      },
    ];
    setProducts(mockProducts);
  }, []);

  const handleProductPress = (product: Product) => {
    router.push({
      pathname: '/HomeScreen/ProductDetailScreen',
      params: {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price.toString(),
        image: product.image,
      },
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            onPress={() => handleProductPress(item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffeee0',
    padding: 16,
  },
});

export default ProductListScreen;

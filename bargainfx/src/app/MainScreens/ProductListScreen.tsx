import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TextInput, ImageBackground } from 'react-native';
import ProductItem from '../../components/ProductItem';
import { Product } from '../../types/Product';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


const ProductListScreen: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  const [search, setSearch] = useState('');

  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'Enerdev Premium 500ml',
        description: 'O Enerdev Premium é a versão mais saborosa e revigorante da nossa marca, é ideal para quem precisa de energia extra no dia a dia. Não perca tempo e adquira agora mesmo!',
        price: 11.99,
        image: "https://lh3.googleusercontent.com/pw/AP1GczPmlIA_TRkI16mboKWlsvoKKfkMYe6LwEszCyyHyROvkNP6wD6J4-1uWMELTYStuYNABsk4a5HuKjC0bNn611kf9P1AyJ2TtBPlcZplKGKIuEwUv2DxYDHfcAOUQDD_3v8NuL9kiChj0O_1uXsRjLo=w926-h926-s-no-gm?authuser=0",
      },
      {
        id: '2',
        name: 'Enerdev Original 473ml',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 8.99,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczN2SFhqKTh8ewrfGhOsC8cB3NcIxIN6STf2CzeixCYj-qLG50j38aaA_EfEsSdVyG8h14MJ8_2aPOQ3EvsZTtEeRuRmx_9R-H2JywEy6_NyGTPojTArzlT_DSl15Uq43OMqKgf-id9tYn5JS8QkVCo=w493-h608-s-no-gm?authuser=0',
      },
      {
        id: '3',
        name: 'TrufaDev 10g',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 6.49,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczOSuOEbVPcL8ata0KjoNvlvWH0BuyCUb_NkZY5OVztHB4k1IELi7v54owCH8JjBXuh_FB9j8ZTOMwDjegr7Nnl5y44TVnWsOjWwh2DNIvEUVw30EYcIfJ9WqEHEAZ5bPCZFpYBXFsBPprqtRZXYPJe_=w926-h926-s-no-gm?authuser=0',
      },
      {
        id: '4',
        name: 'CreaDev 130g',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 160.00,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczM2bbJex-dmCLop2iGPuR1W797VBHvqSTSRhAGo2eBK7FYlhOOTG4rO86bza23ZQgr-ksGrjbHSUK7wLPxQC5sM8F4rZrFAcM2YTmj0LZgJjtOIAC-3xw2aepgKv9Nm8m3YVwaG3R2N1sKqVAjdIzb3=w647-h659-s-no-gm?authuser=0',
      },
      {
        id: '5',
        name: 'Monster Energy 473ml',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 9.99,
        image: 'https://drogariaspacheco.vteximg.com.br/arquivos/ids/659673-1000-1000/641693---energetico-monster-energy-473ml-spal.jpg?v=637496175101070000',
      },
      {
        id: '6',
        name: 'Enerdev Morango 473ml',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 9.49,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczO00Q4odD9c9fdb0ddzAktJGeCKq_sNYWvHYXt11GiyhyFNW8ZpCqcf1BNl1PLg1o6J7YC7c74xQLGT8nmaDe8ioZTeNE7BA3_FIWzBxBm0r56AhIdxrM9MlEZp_B1raSzZU4GGkvIE3n0WPJ9K6ns4=w487-h605-s-no-gm?authuser=0',
      },
      {
        id: '7',
        name: 'Enerdev Limão 473ml',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 9.49,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczNfMtYqH0l8WmFU-pRd5CjwIHK93micGVPZ4O_ge-0dpic9M3I8txlBrgkZnsyGhlh7FWXNq9JwcfKeq-oQ1NaTt0OmnMDxDQELXeNYeFS_GpoQHYc839mly1YPNErzdgbm1r55hpmMU_yhmdwo7FqF=w490-h609-s-no-gm?authuser=0',
      },
      {
        id: '8',
        name: 'Sprite 350ml',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 2.99,
        image: 'https://andinacocacola.vtexassets.com/arquivos/ids/158586/Sprite-Original.jpg?v=638690962089970000',
      },
    ];
    setProducts(mockProducts);
  }, []);

  const handleProductPress = (product: Product) => {
    router.push({
      pathname: '/MainScreens/ProductDetailScreen',
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

      <ImageBackground
        source={require('../assets/icon.png')}
        style={styles.background}
        blurRadius={5}
        resizeMode="cover"
      >
        <Ionicons name="search" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          value={search}
          onChangeText={setSearch}
        />
        <View style={styles.container2}>
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
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: 'rgb(250, 242, 218)',
    padding: 16,
    marginTop: 10,
    justifyContent: 'flex-end'
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(250, 242, 218)',
    padding: 1,
    justifyContent: 'flex-end',
  },
  input: {
    height: 45,
    opacity: 0.9,
    marginTop: 50,
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 35,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
  },
  icon: {
    marginRight: 8,
    position: 'absolute',
    top: 60,
    left: '8%',
    zIndex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '20%',
    alignSelf: 'center',
  },
});

export default ProductListScreen;
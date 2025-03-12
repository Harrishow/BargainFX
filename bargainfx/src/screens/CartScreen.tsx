import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useCart } from '../context/CartContext';
import { CartScreenNavigationProp } from '../types/navigation';
import CustomButton from '../components/CustomButton';
import CustomButton2 from '../components/CustomButton2';

interface CartScreenProps {
  navigation: CartScreenNavigationProp;
}

const CartScreen: React.FC<CartScreenProps> = ({ navigation }) => {
  const { cartItems } = useCart();
  
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleGoToPayment = () => {
    navigation.navigate('Payment');
  };
  const handleGoToProductList = () => {
    navigation.navigate('ProductList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras 🛒</Text>
      
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
          </View>
        )}
      />
      
      <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>

      
      <CustomButton2
        title="Adicionar mais itens"
        onPress={handleGoToProductList} 
        buttonStyle={styles.productlistButton}
        textStyle={styles.productlistButtonText} 
      />
      <CustomButton
        title="Ir para pagamento"
        onPress={handleGoToPayment}
        buttonStyle={styles.paymentButton}
        textStyle={styles.paymentButtonText}
      />
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffeee0',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productName: {
    fontSize: 16,
    marginRight: 10,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'right',
  },
  
////////////////////////

  paymentButton: {
    backgroundColor: '#dc2626',
    marginTop: 10,
    width: 220,
    borderRadius: 10,
  },
  paymentButtonText: {
    color: '#000000',
  },

////////////////////////

  productlistButton: {
    backgroundColor: '#ffe2e0',
    marginTop: 20,
    width: 220,
    borderRadius: 10,
    borderColor: '#FF6347',
    borderWidth: 1,
  },
  productlistButtonText: {
    color: '#000000',
  },

});

export default CartScreen;
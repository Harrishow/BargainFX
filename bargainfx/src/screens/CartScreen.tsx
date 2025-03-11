import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useCart } from '../context/CartContext';
import { CartScreenNavigationProp } from '../types/navigation';
import CustomButton from '../components/CustomButton';
import CustomButton2 from '../components/CustomButton2';

interface CartScreenProps {
  navigation: CartScreenNavigationProp;
}

const CartScreen: React.FC<CartScreenProps> = ({ navigation }) => {
  const { cartItems } = useCart();

  const handleGoToPayment = () => {
    navigation.navigate('Payment');
  };
  const handleGoToProductList = () => {
    navigation.navigate('ProductList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>
      <Text style={styles.itemCount}>Itens no carrinho: {cartItems}</Text>

      
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
    padding: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffeee0',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemCount: {
    fontSize: 18,
    marginBottom: 20,
  },
  paymentButton: {
    backgroundColor: '#dc2626',
    marginTop: 20,
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
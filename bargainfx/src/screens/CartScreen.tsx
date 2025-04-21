import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useCart } from '../context/CartContext';
import { CartScreenNavigationProp } from '../types/navigation';
import CustomButton from '../components/CustomButton';
import { Ionicons } from '@expo/vector-icons';
import CustomButton2 from '../components/CustomButton2';

interface CartScreenProps {
  navigation: CartScreenNavigationProp;
}

const CartScreen: React.FC<CartScreenProps> = ({ navigation }) => {
  const { cartItems, removeFromCart, totalPrice } = useCart();

  const handleGoToPayment = () => {
    navigation.navigate('Payment');
  };

  const handleGoToProductList = () => {
    navigation.navigate('ProductList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.product.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.product.name}</Text>
              <Text style={styles.productPrice}>
                ${item.product.price.toFixed(2)} x {item.quantity}
              </Text>
              <Text style={styles.subtotal}>
                Subtotal: ${(item.product.price * item.quantity).toFixed(2)}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => removeFromCart(item.product.id)}
              style={styles.trashButton}
            >
              <Ionicons name="trash" size={24} color="#ff4444" />
            </TouchableOpacity>
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
    padding: 16,
    backgroundColor: '#ffeee0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productInfo: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#666',
  },
  subtotal: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4,
  },
  trashButton: {
    padding: 8,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'right',
  },
  paymentButton: {
    backgroundColor: '#dc2626',
    marginTop: 20,
    borderRadius: 10,
    width: 240,
    marginLeft: 43,
  },
  paymentButtonText: {
    color: '#ffffff',
  },
  ////////////////////////

  productlistButton: {
    backgroundColor: '#ffe2e0',
    marginTop: 20,
    marginLeft: 43,
    width: 240,
    borderRadius: 10,
    borderColor: '#FF6347',
    borderWidth: 1,
  },
  productlistButtonText: {
    color: '#000000',
  },

});


export default CartScreen;
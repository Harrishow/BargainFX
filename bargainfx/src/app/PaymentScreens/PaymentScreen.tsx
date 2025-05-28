import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Vibration } from 'react-native';
import PaymentButton from '../../components/PaymentButton';

const PaymentScreen: React.FC = ({ }) => {
  const handlePaymentMethod = (method: string) => {
    Vibration.vibrate(1000);
    alert(`Método de pagamento selecionado: ${method}`);
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione o Método de Pagamento:</Text>

      <PaymentButton
        title="Cartão 💳"
        onPress={() => handlePaymentMethod('Cartão de Crédito/Débito')}
      />
      <PaymentButton
        title="Pix ❖"
        onPress={() => handlePaymentMethod('Pix')}
      /> 
      <PaymentButton
        title="Dinheiro 💵"
        onPress={() => handlePaymentMethod('Dinheiro')}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
    backgroundColor: '#ffeee0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 15,
    width: '50%',
    justifyContent: 'center',
    alignSelf: 'center',
  },



});

export default PaymentScreen;
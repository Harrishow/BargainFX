import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const PaymentScreen: React.FC = ({ }) => {
  const handlePaymentMethod = (method: string) => {
    alert(`Método de pagamento selecionado: ${method}`);
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione o Método de Pagamento:</Text>

      <View style={styles.buttonContainer}>
        <Button title="Cartão de Crédito" onPress={() => handlePaymentMethod('Cartão de Crédito')}
        color= '#dc2626' />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cartão de Débito" onPress={() => handlePaymentMethod('Cartão de Débito')}
        color= '#dc2626' />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Pix" onPress={() => handlePaymentMethod('Pix')}
        color= '#dc2626' />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Boleto Bancário" onPress={() => handlePaymentMethod('Boleto Bancário')}
        color= '#dc2626' />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Dinheiro" onPress={() => handlePaymentMethod('Dinheiro')}
        color= '#dc2626' />
      </View>
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
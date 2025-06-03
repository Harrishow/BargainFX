import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface PaymentButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(172, 0, 0, 0.9)', // Green with opacity
    paddingVertical: 10,
    marginTop: 10,
    paddingHorizontal: 24,
    width: '50%',
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',

  },
});

export default PaymentButton;
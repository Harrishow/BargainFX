import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../app/TelaLogin/LoginScreen';
import ProductListScreen from '../app/MainScreens/ProductListScreen';
import ProductDetailScreen from '../app/MainScreens/ProductDetailScreen';
import CartScreen from '../app/MainScreens/CartScreen';
import PaymentScreen from '../app/MainScreens/PaymentScreen';
import { RootStackParamList } from '../types/navigation';
import RegisterScreen from '../app/RegisterScreens/RegisterScreen';


const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ProductList" component={ProductListScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
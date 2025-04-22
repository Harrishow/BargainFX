import { Product } from './Product';

export type RootStackParamList = {
  Login: undefined;
  ProductList: undefined;
  Register: undefined;
  ProductDetail: { product: Product };
  Cart: undefined;
  Payment: undefined;
};


import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type ProductListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProductList'>;
export type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cart'>;
export type PaymentScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Payment'>;
export type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;
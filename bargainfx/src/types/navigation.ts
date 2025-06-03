import { Product } from './Product';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


export type RootStackParamList = {
  Login: undefined;
  ProductList: undefined;
  Register: undefined;
  ProductDetailScreen: { product: Product; };
  Cart: undefined;
  Payment: undefined;
};


export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type ProductListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProductList'>;
export type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetailScreen'>;
export type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cart'>;
export type PaymentScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Payment'>;
export type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;
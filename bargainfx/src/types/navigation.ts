import { Product } from './Product';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


export type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type ProductListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Lista_de_Produtos'>;
export type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cart'>;

export type RootStackParamList = {
  Login: undefined;
  Lista_de_Produtos: undefined;
  ProductDetail: { product: Product };
  Cart: undefined;
};
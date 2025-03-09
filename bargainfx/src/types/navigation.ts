import { Product } from './Product';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


// Tipos de rota para cada tela
export type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type ProductListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProductList'>;
export type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cart'>;

export type RootStackParamList = {
  Login: undefined; // A tela de Login não recebe parâmetros
  ProductList: undefined; // A tela de listagem de produtos não recebe parâmetros
  ProductDetail: { product: Product }; // A tela de detalhes do produto recebe um objeto `product`
  Cart: undefined; // A tela do carrinho não recebe parâmetros
};
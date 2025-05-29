import { Tabs } from "expo-router/tabs";
import { MaterialIcons } from '@expo/vector-icons';

export default function TabsLayout () {

  return (

    <Tabs
      screenOptions={{
        headerShown: false,
        animation: 'shift',
        tabBarActiveBackgroundColor: 'rgb(255, 193, 122)',
        tabBarInactiveBackgroundColor: 'rgba(255, 193, 122, 0.53)',
        tabBarActiveTintColor: 'black',
        }}>
      
      <Tabs.Screen name="ProductListScreen" options={{
        tabBarLabel: "Home",
        tabBarIcon:() => <MaterialIcons name="home" size={24} color="black" />
      }} />

      <Tabs.Screen name="ProductDetailScreen" options={{
        tabBarLabel: "Informações",
        tabBarIcon:() => <MaterialIcons name="info" size={24} color="black" />
      }} />

      <Tabs.Screen name="CartScreen" options={{
        tabBarLabel: "Carrinho",
        tabBarIcon:() => <MaterialIcons name="shopping-cart" size={24} color="black" />
      }} />

      <Tabs.Screen name="PaymentScreen" options={{
        tabBarLabel: "Pagamento",
        tabBarIcon:() => <MaterialIcons name="payments" size={24} color="black" />
      }} />
      
    </Tabs>

  );
}


import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Dimensions} from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import CustomButton from '../../components/LoginButton';
import * as Location from 'expo-location';
import { useRouter } from 'expo-router';

const router = useRouter();

const OrderSummary= () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permissão de localização negada.');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  if (errorMsg) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{errorMsg}</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View style={[styles.center, { backgroundColor: "#ffeee0" }]}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando localização...</Text>
      </View>
    );
  }

  const region: Region = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo do pedido</Text>
      <Text style={styles.title2}>Produtos: Enerdev Premium x1</Text>
      <Text style={styles.title2}>Forma de Pagamento: Dinheiro</Text>
      <Text style={styles.price}>Total: R$11,99</Text>
      <Text style={styles.title3}>Seu endereço:</Text>
      <MapView style={styles.map} region={region}>
        <Marker coordinate={region} title="Você está aqui" />
      </MapView>
      <CustomButton
          title="Confirmar pedido"
          onPress={() => {
            alert('Pedido Confirmado!');
            router.push('../MainScreens/ProductListScreen');
          }}
          buttonStyle={styles.buttonFinal}
          textStyle={styles.buttonFinalText}
      />
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#ffeee0',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title2: {
    fontSize: 18,
    marginBottom: 15,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  title3: {
    fontSize: 18,
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  price: {
    fontSize: 18,
    marginBottom: 20,
    marginTop: -9,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 20,
    color: '#333',
  },
  map: {
    width: Dimensions.get('window').width * 0.9,
    height: 300,
    borderRadius: 15,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
  buttonFinal: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '60%',
  },
  buttonFinalText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

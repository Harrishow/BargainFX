import { router } from 'expo-router';
import { View, Button, ImageBackground, StyleSheet, Text } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function Home (props: any) {

    return (
    <ImageBackground
            source={require('./assets/BackgroundHome.jpg')}
            style={styles.background}
            resizeMode="cover"
            blurRadius={5}>

        <View style={{flex:1, justifyContent: 'space-around', alignItems: 'center'}}>
            <Text style={styles.title}>Olá, seja bem vindo ao BargainFX!</Text>
            <Text style={styles.subTitle}>Diversos produtos Enerdev {"</>"} pra você aproveitar ao máximo!</Text>
            <Text style={styles.subTitle2}>Aproveite nossos produtos e garanta um bom desconto na hora da compra!</Text>
      
              
              <CustomButton
                title="Faça Login Agora mesmo!"
                onPress={() => router.push('TelaLogin/LoginScreen')}
                buttonStyle={styles.indexButton}
                textStyle={styles.indexButtonText}
              />

        </View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  indexButton: {
    backgroundColor: '#dc2626',
    padding: 10,
    width: 240,
    borderRadius: 5,
    marginTop: 20,
  },
  indexButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 50,
  },
  subTitle: {
    
    textAlign: 'center',
    fontSize: 18,
    width: 390,
    fontWeight: 'bold',
    color: 'black',
  },
  subTitle2: {
    
    textAlign: 'center',
    fontSize: 18,
    width: 390,
    fontWeight: 'bold',
    color: 'black',
    
  },
});

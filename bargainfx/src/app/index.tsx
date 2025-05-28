import { router } from 'expo-router';
import { View, Button, ImageBackground, StyleSheet } from 'react-native';

export default function Home (props: any) {

    return (
    <ImageBackground
            source={require('./assets/BackgroundHome.jpg')}
            style={styles.background}
            resizeMode="cover"
            blurRadius={5}>

        <View style={{flex:1, justifyContent: 'space-around', alignItems: 'center'}}>
             
                <Button title="Faça Login" onPress={() => router.push('TelaLogin/LoginScreen')} />

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
});

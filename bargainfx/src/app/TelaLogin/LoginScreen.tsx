import React from 'react';
import { View, TextInput, StyleSheet, Text, ImageBackground } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { LoginScreenNavigationProp } from '../../types/navigation';
import LoginButton from '../../components/LoginButton';
import CustomButton2 from '../../components/CustomButton2';
import { Link, useRouter } from 'expo-router';




const LoginSchema = Yup.object().shape({
  login: Yup.string()
    .required('Login é obrigatório')
    .matches(/^Harrison$/, 'Login incorreto'),
  password: Yup.string()
    .required('Senha é obrigatória')
    .matches(/^1234$/, 'Senha incorreta'),
});

interface LoginFormValues {
  login: string;
  password: string;
}

const initialValues: LoginFormValues = {
  login: '',
  password: '',
};

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {

  const router = useRouter();

  const handleLogin = (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
  ) => {
    setTimeout(() => {
      if (values.login === 'Harrison' && values.password === '1234') {
        alert('Credenciais inválidas!');
        router.push('../HomeScreen/ProductListScreen');
        alert('Login bem-sucedido!');
      }
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <ImageBackground
      source={require('../assets/BackgroundLogin.jpg')}
      style={styles.background}
      resizeMode="cover"
      blurRadius={8}
    >
      <View style={styles.overlay}>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isSubmitting,
          }) => (
            <View>
              <Text style={styles.title}>BargainFX</Text>
              <TextInput
                style={styles.input}
                placeholder="Login"
                onChangeText={handleChange('login')}
                onBlur={handleBlur('login')}
                value={values.login}
              />
              {touched.login && errors.login && (
                <Text style={styles.error}>{errors.login}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholder="Senha"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              {touched.password && errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
              <LoginButton
                title={isSubmitting ? 'Entrando...' : 'Entrar'}
                onPress={() => handleSubmit()}
                buttonStyle={styles.loginButton}
                textStyle={styles.loginButtonText}
                disabled={isSubmitting}
              />
              <CustomButton2 
                title="Cadastre-se" 
                onPress={() => navigation.navigate('Register')}
                buttonStyle={styles.registerButton}
                textStyle={styles.registerButtonText} 
              />
              <Link href="RegisterScreens/ResetPassScreen" style={{ marginTop: 10, alignSelf: 'center', color: 'white' }}>
                <Text>Esqueceu a senha? Clique aqui!</Text>
              </Link>
            </View>
          )}
        </Formik>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(90, 90, 90, 0.25)',
    justifyContent: 'center',
    width: '100%',
    padding: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 25,
    textAlign: 'center',
  },
  input: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  error: {
    color: 'black',
    fontSize: 12,
    marginBottom: 8,
    
  },
  loginButton: {
    backgroundColor: '#dc2626',
    marginTop: 10,
    width: 240,
    height: 45,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  loginButtonText: {
    color: '#fff',
  },
  registerButton: {
    backgroundColor: '#ffe2e0',
    marginTop: 10,
    width: 240,
    height: 45,
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: '#FF6347',
    borderWidth: 1,
  },
  registerButtonText: {
    color: '#FF6347',
  }
  
});

export default LoginScreen;
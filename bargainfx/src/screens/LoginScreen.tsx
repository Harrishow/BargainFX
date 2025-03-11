import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { LoginScreenNavigationProp } from '../types/navigation';
import LoginButton from '../components/LoginButton';

const LoginSchema = Yup.object().shape({
  login: Yup.string()
    .required('Login é obrigatório')
    .matches(/^Harrison$/, 'Login incorreto'),
  password: Yup.string()
    .required('Senha é obrigatória')
    .matches(/^12345678$/, 'Senha incorreta'),
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

  const handleLogin = (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
  ) => {
    setTimeout(() => {
      if (values.login === 'Harrison' && values.password === '12345678') {
        alert('Login bem-sucedido!');
        navigation.navigate('ProductList');
      } else {
        alert('Credenciais inválidas!');
      }
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    
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
            </View>
          )}
        </Formik>
      </View>
   
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: '#ffeee0',
    justifyContent: 'flex-start',
    padding: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 25,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'black',
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
    marginTop: 15,
    width: 258,
    height: 45,
    borderWidth: 1,
    borderRadius: 10,
  },
  loginButtonText: {
    color: '#fff',
  },
  
});

export default LoginScreen;
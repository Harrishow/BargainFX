import React from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { LoginScreenNavigationProp } from '../types/navigation'; // Importe o tipo de navegação

// Defina o esquema de validação com Yup
const LoginSchema = Yup.object().shape({
  login: Yup.string()
    .required('Login é obrigatório')
    .matches(/^Harrison$/, 'Login incorreto'), // Valida se o login é "Harrison"
  password: Yup.string()
    .required('Senha é obrigatória')
    .matches(/^12345678$/, 'Senha incorreta'), // Valida se a senha é "12345678"
});

// Defina os valores iniciais do formulário
interface LoginFormValues {
  login: string;
  password: string;
}

const initialValues: LoginFormValues = {
  login: '',
  password: '',
};

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp; // Adicione a prop de navegação
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const handleLogin = (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
  ) => {
    // Simulação de uma requisição de login
    setTimeout(() => {
      if (values.login === 'Harrison' && values.password === '12345678') {
        alert('Login bem-sucedido!');
        navigation.navigate('ProductList'); // Redireciona para a tela ProductList
      } else {
        alert('Credenciais inválidas!');
      }
      actions.setSubmitting(false); // Finaliza o estado de "submitting"
    }, 1000);
  };

  return (
    <View style={styles.container}>
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

            {/* Campo de Login */}
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

            {/* Campo de Senha */}
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

            {/* Botão de Login */}
            <Button
              title={isSubmitting ? 'Entrando...' : 'Entrar'}
              onPress={() => handleSubmit()}
              disabled={isSubmitting}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8,
  },
});

export default LoginScreen;
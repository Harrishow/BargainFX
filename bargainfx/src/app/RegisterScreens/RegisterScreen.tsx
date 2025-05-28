import React from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation';



const RegisterScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Nome completo é obrigatório'),
    cpf: Yup.string()
      .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF inválido')
      .required('CPF é obrigatório'),
    street: Yup.string().required('Rua é obrigatória'),
    number: Yup.string().required('Número é obrigatório'),
    neighborhood: Yup.string().required('Bairro é obrigatório'),
    city: Yup.string().required('Cidade é obrigatória'),
    state: Yup.string()
      .max(2, 'Use a sigla (ex: SP)')
      .required('Estado é obrigatório'),
    password: Yup.string()
      .min(6, 'Senha deve ter no mínimo 6 caracteres')
      .required('Senha é obrigatória'),
  });

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          fullName: '',
          cpf: '',
          street: '',
          number: '',
          neighborhood: '',
          city: '',
          state: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate('Login');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            {/* Nome Completo */}
            <TextInput
              style={styles.input}
              placeholder="Nome Completo"
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              value={values.fullName}
            />
            {touched.fullName && errors.fullName && (
              <Text style={styles.error}>{errors.fullName}</Text>
            )}

            {/* CPF */}
            <TextInput
              style={styles.input}
              placeholder="CPF (000.000.000-00)"
              onChangeText={handleChange('cpf')}
              onBlur={handleBlur('cpf')}
              value={values.cpf}
              keyboardType="numeric"
            />
            {touched.cpf && errors.cpf && (
              <Text style={styles.error}>{errors.cpf}</Text>
            )}

            {/* Endereço */}
            <Text style={styles.sectionTitle}>Endereço</Text>
            
            <TextInput
              style={styles.input}
              placeholder="Rua"
              onChangeText={handleChange('street')}
              onBlur={handleBlur('street')}
              value={values.street}
            />
            {touched.street && errors.street && (
              <Text style={styles.error}>{errors.street}</Text>
            )}

            <View style={styles.row}>
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="Número"
                onChangeText={handleChange('number')}
                onBlur={handleBlur('number')}
                value={values.number}
                keyboardType="numeric"
              />
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="Bairro"
                onChangeText={handleChange('neighborhood')}
                onBlur={handleBlur('neighborhood')}
                value={values.neighborhood}
              />
            </View>

            <View style={styles.row}>
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="Cidade"
                onChangeText={handleChange('city')}
                onBlur={handleBlur('city')}
                value={values.city}
              />
              <TextInput
                style={[styles.input, styles.quarterInput]}
                placeholder="UF"
                onChangeText={handleChange('state')}
                onBlur={handleBlur('state')}
                value={values.state}
                maxLength={2}
              />
            </View>

            {/* Senha */}
            <TextInput
              style={styles.input}
              placeholder="Crie sua senha"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <Button title="Cadastrar" onPress={() => handleSubmit()}
            color="#dc2626"
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
      padding: 20,
      backgroundColor: '#ffeee0',
    },
    quarterInput: {
      flex: 0.5,
      marginLeft: 5,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    error: {
      color: 'red',
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    halfInput: {
      flex: 1,
      marginRight: 5,
    },
  });

  export default RegisterScreen;
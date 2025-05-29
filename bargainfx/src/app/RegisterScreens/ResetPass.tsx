import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation';
import  CustomButton  from '../../components/CustomButton';
import { router } from 'expo-router';



const ResetPass = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  
  const handleGoToLoginScreen = () => {
    router.push('../TelaLogin/LoginScreen');
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('A senha antiga é obrigatória'),
   
    password: Yup.string()
      .min(6, 'Senha deve ter no mínimo 8 caracteres')
      .required('Senha é obrigatória'),
  });

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          fullName: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate('Login');
        }}
      >
        {({ handleChange, handleBlur, values, errors, touched }) => (
          <View>
            <Text style={styles.sectionTitle}>Redefina sua Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Senha antiga"
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              value={values.fullName}
            />
            {touched.fullName && errors.fullName && (
              <Text style={styles.error}>{errors.fullName}</Text>
            )}


            {/* Nova Senha */}

            <TextInput
              style={styles.input}
              placeholder="Nova senha"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
             <CustomButton
                title="Redefinir"
                onPress={handleGoToLoginScreen}
                buttonStyle={styles.finalizarButton}
                textStyle={styles.finalizarButtonText}
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
      backgroundColor: '#fff',
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
    finalizarButton: {
      backgroundColor: '#dc2626',
      padding: 10,
      width: 200,
      alignSelf: 'center',
      borderRadius: 5,
      marginTop: 20,
    },
    finalizarButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  export default ResetPass;
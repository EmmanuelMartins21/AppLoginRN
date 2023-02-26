import { StatusBar } from 'expo-status-bar';
import  React, {useState}from 'react';
import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity } from 'react-native';
import	Logo from './assets/logo.png';
//import TelaPrincipal from './Views/TelaPrincipal';

export default function App({ navigation}) {
  const onPress = () => {
     navigation.navigate('TelaPrincipal');
  };

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Image source={Logo} style={styles.img}></Image>     
        <Text style={styles.titulo}>Login
          <Text style={{color:'#f487d2'}}>Page</Text></Text>  
      </View>       

      <Text style={styles.label}> Email</Text>
      <TextInput style={styles.inputLogin}
        value={Text}
        placeholder="Login"
        placeholderTextColor="#f487d2"
      />

      <Text style={styles.label}> Senha</Text>
      <TextInput style={styles.inputSenha}
        value={Text}
        secureTextEntry={true}
        placeholder="Senha"
        placeholderTextColor="#f487d2"
      /> 

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Entrar</Text>
      </TouchableOpacity>
      <StatusBar style="dark" />

    </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#190b81',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cabecalho:{
    position: 'absolute',
    flexDirection: 'row',
    top: 2, 
    left: 2   
  },
  img :{
    width: 80,
    height: 80,
    marginBottom: 15,
    borderRadius: 80,
  },
  inputLogin:{
    height: 40,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#FFF',
    borderColor: '#FFF'
  },
  inputSenha:{
    height: 40,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#FFF',
    borderColor: '#FFF',
    
  },
  titulo:{
    fontSize: 34,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#FFF',   
    marginLeft: 68,  
    marginTop: 15
  },
  label:{
    fontSize: 28,
    fontStyle: 'normal',
    color: '#FFF',
    marginBottom: 5
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    width: 100,
    marginTop: 35,
    padding: 10,
  },

});

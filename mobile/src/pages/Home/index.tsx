import React, {useEffect, useState} from 'react'
import axios from 'axios'

import { View, ImageBackground, Image, StyleSheet, Text, Picker, Alert } from 'react-native'
import { Feather as Icon} from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

interface IBGEUFResponse{
  sigla: string,
  nome: string
}
interface IBGECityResponse{
  nome: string
}

const Home = () => {
    const [ufs, setUfs] = useState<IBGEUFResponse[]>([])
    const [cities, setCities] = useState<string[]>([])  

    const [selectedUf, setSelectedUf] = useState('0')
    const [selectedCity, setSelectedCity] = useState('0')
  
    const navigation = useNavigation()

    useEffect(() => {
      axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
          const formatedUF: IBGEUFResponse[] = response.data.map<IBGEUFResponse>(uf => uf)
          
          setUfs(formatedUF)
      })
    }, [])
    useEffect(() => {
      if(selectedUf === '0')
          return

      axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response => {
          const cityNames = response.data.map(city => city.nome)

          setCities(cityNames)
      })
      
    }, [selectedUf])

    function handleNavigationToPoints(){
      if((!selectedUf || !selectedCity) || (selectedCity === 'Escolha uma cidade' || selectedUf === 'Escolha um Estado')){
        Alert.alert('Ooops...', 'Escolha uma Estado e uma cidade')

        return
      }
      
      navigation.navigate('Points', {
        uf: selectedUf,
        city: selectedCity
      })
    }
    function handleSelectUF(uf: string){
      setSelectedUf(uf)
      setSelectedCity("Escolha uma cidade")
    }
    function handleSelectCity(city: string){
        setSelectedCity(city)
    }

    return (
        <ImageBackground source={require('../../assets/home-background.png')} imageStyle={{width: 274, height: 368}} style={styles.container} >
            <View style={styles.main}>
                <Image source={require('../../assets/logo.png')} />
                <Text style={styles.title}>Seu marketplace de coleta de resíduos.</Text>
                <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
            </View>

            <View style={styles.footer}>
                <Picker onValueChange={(itemValue) => handleSelectUF(itemValue)} selectedValue={selectedUf} style={styles.input}>
                  <Picker.Item label={'Escolha um Estado'} value={'0'} key={String(0)}/>
                  {ufs.map(uf => (
                    <Picker.Item label={uf.nome} value={uf.sigla} key={String(uf.sigla)}/>
                  ))}
                </Picker>

                <Picker onValueChange={(itemValue) => handleSelectCity(itemValue)} selectedValue={selectedCity} style={styles.input}>
                  <Picker.Item label={'Escolha uma Cidade'} value={'0'} key={String(0)}/>
                  {cities.map(city => (
                    <Picker.Item label={city} value={city} key={String(city)}/>
                  ))}
                </Picker>
    
                <RectButton style={styles.button} onPress={handleNavigationToPoints}>
                    <View style={styles.buttonIcon}>
                        <Icon name="arrow-right" color="#FFF" size={24}/>
                    </View>
                    <Text style={styles.buttonText}>Entrar</Text>
                </RectButton>            
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
    },
  
    main: {
      flex: 1,
      justifyContent: 'center',
    },
  
    title: {
      color: '#322153',
      fontSize: 32,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 64,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    select: {},

    input: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 16,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  
    button: {
      backgroundColor: '#34CB79',
      height: 60,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 32,
      
    },
  
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    }
  })

export default Home
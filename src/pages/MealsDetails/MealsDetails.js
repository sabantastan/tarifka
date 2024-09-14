import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';

import styles from './MealsDetails.style';

const MealsDetails = ({route, navigation}) => {
    const {loading, data, error} = useFetch(Config.API_URL + '/json/v1/1/lookup.php?i=' + route.params.idMeal);

    function handleButtonPress() {
      const url = data.meals[0].strYoutube;
      if (url) {
          Linking.openURL(url);
      } else {
          console.log("link bulunamadı");
      }
    }

    if (loading) {
      return (
        <Text>Yükleniyor...</Text>
      )
    }
    console.log(data.meals);
    if (error) {
      console.log(error);
      return (
        <Text>Hata!</Text>
      )
    }

    return (
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{ uri: data.meals[0].strMealThumb }} />
        <View style={styles.titleContainer}>
          <Text style={styles.topTitle}>{data.meals[0].strMeal}</Text>
          <Text style={styles.bottomTitle}>{data.meals[0].strArea}</Text>
        </View>
        <Text style={styles.description}>
          {data.meals[0].strInstructions}
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Watch on Youtube</Text>
        </TouchableOpacity>      
      </ScrollView>
    );
};

export default MealsDetails;
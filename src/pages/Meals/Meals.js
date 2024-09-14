import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Config from 'react-native-config';

import MealsCard from '../../components/MealsCard';
import useFetch from '../../hooks/useFetch';

import styles from './Meals.style';

const Meals = ({route, navigation}) => {
    const {loading, data, error} = useFetch(Config.API_URL + '/json/v1/1/filter.php?c=' + route.params.category.strCategory.toLowerCase());
    
    const renderMeals = ({ item }) => (
      <MealsCard meals={item} onSelect={() => handleMealsSelect(item)} />
    );

    const handleMealsSelect = (meals) => {
      const idMeal = meals.idMeal
      navigation.navigate('Detail', { idMeal });
    };

    if (loading) {
      return (
        <Text>Yükleniyor...</Text>
      )
    }
    
    if (error) {
      console.log(error);
      return (
        <Text>Hata!</Text>
      )
    }

    return (
      <View style={styles.container}>
        <Text></Text>
        <FlatList data={data.meals} renderItem={renderMeals}/>
      </View>
    );
};

export default Meals;
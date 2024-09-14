import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Config from 'react-native-config';

import CategoryCard from '../../components/CategoryCard';
import useFetch from '../../hooks/useFetch';

import styles from './Categories.style';

const Categories = ({navigation}) => {
    const {loading, data, error} = useFetch(Config.API_URL + '/json/v1/1/categories.php');

    const renderCategory = ({ item }) => (
      <CategoryCard category={item} onSelect={() => handleCategorySelect(item)} />
    );
  
    const handleCategorySelect = (category) => {
      navigation.navigate('Meals', { category });
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
        <FlatList data={data.categories} renderItem={renderCategory}/>
      </View>
    );
};

export default Categories;
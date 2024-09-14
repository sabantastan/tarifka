import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './MealsCard.style';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const MealsCard = ({meals, onSelect}) => {
    
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: meals.strMealThumb }} />
            <View style={styles.titleContainer}>
              <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>{meals.strMeal}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
};

export default MealsCard;
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './CategoryCard.style';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const CategoryCard = ({category, onSelect}) => {
    
    return (
      <TouchableWithoutFeedback onPress={onSelect}>
        <View style= {styles.container}>
          <Image style={styles.image} source={{uri: category.strCategoryThumb}}/>
            <Text style={styles.title}> {category.strCategory} </Text>
        </View>
      </TouchableWithoutFeedback>
    );
};

export default CategoryCard;